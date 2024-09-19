package workwithevents

import (
	"backend/utils/token"
	"backend/workwithdb"
	"net/http"
	"strconv"
	"strings"

	"github.com/gin-gonic/gin"
)

func Get_event(c *gin.Context) {

	c.JSON(http.StatusOK, c.Param("event_id"))
}
func Get_events(c *gin.Context) {
	authHeader := c.Request.Header.Get("Authorization")
	amount, _ := strconv.Atoi(c.Param("amount"))
	if authHeader == "" {
		res := workwithdb.GetDefaultFeed(amount)
		c.JSON(http.StatusOK, gin.H{
			"Feed": res,
		})
	}
	client_token := strings.Split(c.Request.Header["Authorization"][0], " ")[1]
	var email string
	email, _, _ = token.DecodeJWT(client_token)
	res := workwithdb.GetPersonFeed(amount, email)
	c.JSON(http.StatusOK, gin.H{
		"Feed": res,
	})
}
