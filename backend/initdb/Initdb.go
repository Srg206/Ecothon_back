package initdb

import (
	"backend/config"
	init_db "backend/gormmodels"
	"fmt"
	"log"
	"strconv"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DataBase *gorm.DB

func MustInitDb() {

	var err error
	DataBase, err = gorm.Open(postgres.Open(formdsn(&config.CurConfig)), &gorm.Config{})
	if err != nil {
		log.Fatal("Could not connect to postgres !")
	}

	//DataBase.AutoMigrate(&init_db.User{}, &init_db.Comment{}, &init_db.Event{})
	DataBase.AutoMigrate(&init_db.User{}, &init_db.Event{}, &init_db.UserEvent{}, init_db.Comment{})

}

func formdsn(c *config.Config) string {
	tmp := fmt.Sprintf("host=%s user=%s dbname=%s password=%s port=%s sslmode=%s", c.POSTGRES__HOST, c.POSTGRES__USER, c.POSTGRES__DB, c.POSTGRES__PASSWORD, strconv.Itoa(c.POSTGRES__PORT), "disable")
	fmt.Println(tmp)
	return tmp
}
