package auth

import (
	"backend/utils/token"
	"fmt"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

func ValidateCoockies(c *gin.Context) {
	client_token := strings.Split(c.Request.Header["Authorization"][0], " ")[1]
	fmt.Println(client_token)
	if err, new_token := token.TStrg.Check(client_token); err != nil {
		c.JSON(http.StatusForbidden, "Invalid token")
	} else {
		c.JSON(http.StatusOK, gin.H{
			"token": new_token,
		})
	}
}
