package workwithevents

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Get_event(c *gin.Context) {
	c.JSON(http.StatusOK, c.Param("event_id"))
}
func Get_events(c *gin.Context) {
	c.JSON(http.StatusOK, c.Param("amount"))
}
