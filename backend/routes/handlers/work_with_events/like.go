package workwithevents

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Like_event(c *gin.Context) {
	//client_token := strings.Split(c.Request.Header["Authorization"][0], " ")[1]

	c.JSON(http.StatusOK, c.Param("event_id"))
}
