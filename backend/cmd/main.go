package main

import (
	"backend/config"
	"backend/initdb"
	"backend/routes"
	"backend/utils/token"
)

func main() {

	config.LoadConfigs()
	token.TStrg.Init()
	initdb.MustInitDb()
	routes.InitRoutes()
	routes.Router.Run("0.0.0.0:8002")
}

func InitML() {

}
