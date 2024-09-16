package workwithdb

import (
	"backend/schemes"

	"backend/gormmodels"
	"backend/initdb"
	"fmt"
)

func Insert_User(u schemes.User_to_Register) error {
	newNote := gormmodels.User{
		Email:    u.Email,
		Username: u.Username,
		Password: u.Password,
	}
	result := initdb.DataBase.Create(&newNote)

	if result.Error != nil {
		fmt.Println("Failed to insert note: ", result.Error)
	}
	return result.Error
}
