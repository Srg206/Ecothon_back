package auth

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Create_user(c *gin.Context) {
	c.JSON(http.StatusOK, "create_user")
}
