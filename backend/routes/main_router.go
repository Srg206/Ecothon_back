package routes

import (
	"backend/routes/handlers/auth"
	"backend/routes/handlers/personalise"
	workwithevents "backend/routes/handlers/work_with_events"
	"net/http"

	"github.com/gin-gonic/gin"
)

var Router = gin.Default()

func InitRoutes() {
	Router.GET("/PING", func(c *gin.Context) { c.JSON(http.StatusOK, "PONG") })

	//AUTH
	auth_route := Router.Group("/auth")
	auth_route.POST("/create_user", func(c *gin.Context) { auth.Create_user(c) })
	auth_route.POST("/login", func(c *gin.Context) { auth.Login(c) })
	auth_route.POST("/validate_cookies", func(c *gin.Context) { auth.ValidateCoockies(c) })
	//Personalise
	personalise_route := Router.Group("/personalise")
	personalise_route.POST("/save_interests", func(c *gin.Context) { personalise.Save_interests(c) })

	// Event
	event_route := Router.Group("/event")
	event_route.POST("/add_event", func(c *gin.Context) { workwithevents.Comment_event(c) })
	event_route.GET("/get_events/ :amount", func(c *gin.Context) { workwithevents.Comment_event(c) })
	event_route.GET("/get_event/ :event_id", func(c *gin.Context) { workwithevents.Comment_event(c) })

	event_route.GET("/like_event/ :event_id", func(c *gin.Context) { workwithevents.Like_event(c) })
	event_route.POST("/comment_event/ :event_id", func(c *gin.Context) { workwithevents.Comment_event(c) })
	event_route.GET("get_comments/ :amount", func(c *gin.Context) { workwithevents.Get_Comments(c) })

}
