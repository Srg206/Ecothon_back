package workwithdb

import (
	"backend/schemes"
	"backend/utils/hashpass"
	"backend/utils/token"
	"errors"
	"strconv"
	"strings"
	"time"

	"backend/gormmodels"
	"backend/initdb"
	"fmt"
)

func Insert_User(u schemes.User_to_Register) error {
	var found_note gormmodels.User
	if err := initdb.DataBase.Where("email = ?", u.Email).First(&found_note).Error; err != nil {
		fmt.Println("Can create User")
	} else {
		return errors.New("User with such email alredy exists!")
	}
	var hash_pass string
	var err = errors.New(" ")
	if hash_pass, err = hashpass.HashPassword(u.Password); err != nil {
		return err
	}

	newNote := gormmodels.User{
		Email:    u.Email,
		Password: hash_pass,
	}
	result := initdb.DataBase.Create(&newNote)

	if result.Error != nil {
		fmt.Println("Failed to insert note: ", result.Error)
	}
	return result.Error
}

func Login_by_pass(u schemes.User_to_Login) (error, string) {
	var found_note gormmodels.User
	fmt.Println(u.Email)
	fmt.Println(u.Password)
	if err := initdb.DataBase.Where("email = ?", u.Email).First(&found_note).Error; err == nil {

		fmt.Println(found_note.Email, found_note.Password)
		if hashpass.VerifyPassword(found_note.Password, u.Password) {
			fmt.Println(u.Email, time.Now().Unix())
			if err, atoken := token.CreateJWT(u.Email, time.Now().Unix()); err != nil {
				return errors.New("Could not create access token"), " "
			} else {
				if err, rtoken := token.CreateJWT(u.Email, time.Now().Unix()); err != nil {
					return errors.New("Could not create refresh token"), " "
				} else {
					token.TStrg.Save(atoken, rtoken)
				}

				return nil, atoken
			}
		}
		return errors.New("Wrong password"), " "
	} else {
		return err, " "
	}
}

func Save_User_Info(got_email string, u schemes.User_to_Save) error {
	var user gormmodels.User

	if err := initdb.DataBase.First(&user, "email = ?", got_email).Error; err != nil {
		return err // Возвращаем ошибку, если пользователь не найден
	}

	// Изменение полей
	user.Name = u.Name
	user.Surname = u.Surname
	user.Birthdate = u.Birthdate
	user.Phone = u.Phone
	user.Gender = u.Gender
	user.SendNotifications = u.Send_notifications

	// Сохранение изменений в БД
	if err := initdb.DataBase.Save(&user).Error; err != nil {
		return err
	}

	return nil
}

func Save_User_Interests(got_email string, intrsts string) error {
	var user gormmodels.User

	if err := initdb.DataBase.First(&user, "email = ?", got_email).Error; err != nil {
		return err // Возвращаем ошибку, если пользователь не найден
	}

	// Изменение полей
	fmt.Println(user.Email)
	user.Interests = intrsts

	// Сохранение изменений в БД
	if err := initdb.DataBase.Save(&user).Error; err != nil {
		return err
	}

	return nil
}

func Insert_Event(evnt schemes.Event_to_receive) error {

	dt, _ := dateToUnixTimestamp(evnt.Date)
	ev_db := gormmodels.Event{
		Title:        evnt.Title,
		Date:         dt,
		Address:      evnt.Address,
		Organization: evnt.Organization,
		Image:        evnt.Image,
		Tags:         evnt.Tags,
		Description:  evnt.Description,
		CoordX:       evnt.CoordX,
		CoordY:       evnt.CoordY,
	}
	result := initdb.DataBase.Create(&ev_db)

	if result.Error != nil {
		fmt.Println("Failed to insert event: ", result.Error)
	}
	return result.Error
}

func GetDefaultFeed(top_n int) []schemes.Event_to_send {
	res := make([]schemes.Event_to_send, top_n)
	var dump []gormmodels.Event

	result := initdb.DataBase.Model(&gormmodels.Event{}).Order("date ASC").Find(&dump)
	if result.Error != nil {
		panic(result.Error)
	}

	for _, evnt := range dump {
		var tmp_ets schemes.Event_to_send
		var tmp_cm []schemes.Comment
		for _, com := range evnt.Comments {
			tmp_cm = append(tmp_cm, Convert_Comments(com))
		}
		tmp_ets.Address = evnt.Address
		tmp_ets.Title = evnt.Title
		tmp_ets.Date = unixTimestampToDateString(evnt.Date)
		tmp_ets.Address = evnt.Address
		tmp_ets.Organization = evnt.Organization
		tmp_ets.FeedBack = tmp_cm
		tmp_ets.Image = evnt.Image
		tmp_ets.Tags = evnt.Tags
		tmp_ets.Description = evnt.Description
		tmp_ets.IsFavorite = false //
		tmp_ets.CoordX = evnt.CoordX
		tmp_ets.CoordY = evnt.CoordY

		res = append(res, tmp_ets)
	}

	return res
}

func GetPersonFeed(top_n int, email string) []schemes.Event_to_send {
	res := make([]schemes.Event_to_send, top_n)
	return res
}
func Convert_Comments(comment gormmodels.Comment) schemes.Comment {
	var scm schemes.Comment
	var user gormmodels.User

	if err := initdb.DataBase.First(&user, "user_id = ?", comment.UserId).Error; err != nil {
		fmt.Println("did not found such user_id")
	}

	scm.Name = user.Name
	scm.Surname = user.Surname
	scm.Email = user.Email
	scm.Content = comment.Content

	return scm

}

func dateToUnixTimestamp(dateString string) (int64, error) {
	// Разделяем строку даты на день, месяц и год
	parts := strings.Split(dateString, ".")
	if len(parts) != 3 {
		return 0, fmt.Errorf("неверный формат даты: %s", dateString)
	}

	// Преобразуем строки в числа
	day, err := strconv.Atoi(parts[0])
	if err != nil {
		return 0, fmt.Errorf("неверный формат дня: %s", parts[0])
	}
	month, err := strconv.Atoi(parts[1])
	if err != nil {
		return 0, fmt.Errorf("неверный формат месяца: %s", parts[1])
	}
	year, err := strconv.Atoi(parts[2])
	if err != nil {
		return 0, fmt.Errorf("неверный формат года: %s", parts[2])
	}

	// Создаем объект времени
	t := time.Date(year, time.Month(month), day, 0, 0, 0, 0, time.UTC)

	// Возвращаем Unix-время в секундах
	return t.Unix(), nil
}
func unixTimestampToDateString(timestamp int64) string {
	// Преобразуем Unix-время в объект time.Time
	t := time.Unix(timestamp, 0)

	// Форматируем время в строку "ДД.ММ.ГГГГ"
	return t.Format("02.01.2006")
}
