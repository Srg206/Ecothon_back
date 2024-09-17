package config

import (
	"fmt"
	"os"
	"strconv"

	"github.com/joho/godotenv"
)

type Config struct {
	POSTGRES__HOST            string
	POSTGRES__PORT            int
	POSTGRES__DB              string
	POSTGRES__PASSWORD        string
	POSTGRES__USER            string
	SECRET_JWT_KEY            string
	ACCESS_TOKEN_EXPIRE_TIME  int64
	REFRESH_TOKEN_EXPIRE_TIME int64
}

var CurConfig = Config{}

func LoadConfigs() {

	err := godotenv.Load()
	if err != nil {
		fmt.Println("Could not load .env file !")
	}
	CurConfig.POSTGRES__HOST = os.Getenv("POSTGRES_HOST")
	CurConfig.POSTGRES__PORT, _ = strconv.Atoi(os.Getenv("POSTGRES_PORT"))
	CurConfig.POSTGRES__DB = os.Getenv("POSTGRES_DB")
	CurConfig.POSTGRES__PASSWORD = os.Getenv("POSTGRES_PASSWORD")
	CurConfig.POSTGRES__USER = os.Getenv("POSTGRES_USER")
	CurConfig.SECRET_JWT_KEY = os.Getenv("SECRET_JWT_KEY")
	CurConfig.ACCESS_TOKEN_EXPIRE_TIME, _ = strconv.ParseInt(os.Getenv("ACCESS_TOKEN_EXPIRE_TIME"), 10, 64)
	CurConfig.REFRESH_TOKEN_EXPIRE_TIME, _ = strconv.ParseInt(os.Getenv("REFRESH_TOKEN_EXPIRE_TIME"), 10, 64)

}
