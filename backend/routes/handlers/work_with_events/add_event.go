package workwithevents

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Add_event(c *gin.Context) {
	c.JSON(http.StatusOK, "Add event")
}
