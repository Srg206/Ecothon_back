package routes

import (
	"backend/routes/handlers/auth"
	"backend/routes/handlers/personalise"
	workwithevents "backend/routes/handlers/work_with_events"
	"net/http"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

var Router = gin.Default()

func InitRoutes() {
	//Router.Use(corsMiddleware())
	Router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"https://green.itatmisis.ru/", "http://green.itatmisis.ru/", "http://46.183.163.192/", "https://46.183.163.192/"},
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"},
		AllowHeaders:     []string{"*"},
		ExposeHeaders:    []string{"*"},
		AllowCredentials: true,
		AllowOriginFunc: func(origin string) bool {
			return origin == "*"
		},
		MaxAge: 12 * time.Hour,
	}))

	Router.GET("/PING", func(c *gin.Context) { c.JSON(http.StatusOK, "PONG") })

	//AUTH
	auth_route := Router.Group("/auth")
	auth_route.POST("/create_user", func(c *gin.Context) { auth.Create_user(c) })
	auth_route.POST("/login", func(c *gin.Context) { auth.Login(c) })
	auth_route.POST("/save_user_info", func(c *gin.Context) { auth.SaveUserInfo(c) })
	auth_route.POST("/validate_cookies", func(c *gin.Context) { auth.ValidateCoockies(c) })
	//Personalise
	personalise_route := Router.Group("/personalise")
	personalise_route.POST("/save_interests", func(c *gin.Context) { personalise.Save_interests(c) })

	// Event
	event_route := Router.Group("/event")
	event_route.POST("/add_event", func(c *gin.Context) { workwithevents.Add_event(c) })
	event_route.GET("/get_events/:amount", func(c *gin.Context) { workwithevents.Get_events(c) })
	event_route.GET("/get_event/:event_id", func(c *gin.Context) { workwithevents.Get_event(c) })

	// event_route.GET("/like_event/:event_id", func(c *gin.Context) { workwithevents.Like_event(c) })
	// event_route.POST("/comment_event/:event_id", func(c *gin.Context) { workwithevents.Comment_event(c) })
	// event_route.GET("get_comments/:amount", func(c *gin.Context) { workwithevents.Get_Comments(c) })

}
func corsMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With") // Разрешенные заголовки
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE")                                                                                             // Разрешенные методы

		// if c.Request.Method == "OPTIONS" {
		// 	c.AbortWithStatus(204) // Возвращаем 204 No Content для запросов OPTIONS
		// 	return
		// }

		c.Next() // Переходим к следующему middleware

		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")         // Разрешаем любые источники
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true") // Разрешаем отправку куки

	}
}
