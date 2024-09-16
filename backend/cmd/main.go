package main

import (
	"backend/config"
	"backend/initdb"
	"backend/routes"
)

func main() {

	config.LoadConfigs()
	initdb.MustInitDb()
	routes.InitRoutes()
	routes.Router.Run(":8000")
}
