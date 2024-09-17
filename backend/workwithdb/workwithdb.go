package workwithdb

import (
	"backend/schemes"
	"backend/utils/hashpass"
	"backend/utils/token"
	"errors"
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
		Username: u.Username,
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
