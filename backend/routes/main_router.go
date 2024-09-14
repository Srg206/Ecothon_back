package main_router

import (
	"backend/routes/handlers/auth"
	"backend/routes/handlers/personalise"

	"github.com/gin-gonic/gin"
)

var router = gin.Default()

func InitRoutes() {

	//AUTH
	auth_route := router.Group("/auth")
	auth_route.POST("/create_user", func(c *gin.Context) { auth.Create_user(c) })
	auth_route.POST("/login", func(c *gin.Context) { auth.Login(c) })

	//Personalise
	personalise_route := router.Group("/personalise")

	personalise_route.POST("/save_interests", func(c *gin.Context) { personalise.Save_interests(c) })
	// addUserRoutes(v1)
	// addPingRoutes(v1)

	// addPingRoutes(v2)
}
