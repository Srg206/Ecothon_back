package workwithevents

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Comment_event(c *gin.Context) {
	c.JSON(http.StatusOK, c.Param("event_id"))
}

func Get_Comments(c *gin.Context) {
	c.JSON(http.StatusOK, "get comments")
}
