package auth

import (
	"backend/schemes"
	"backend/utils/token"
	"backend/workwithdb"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

func Create_user(c *gin.Context) {

	var user schemes.User_to_Register

	if err := c.ShouldBind(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := workwithdb.Insert_User(user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err})
		return
	}
	var Access_token string
	var Refresh_token string

	erra, Access_token := token.CreateJWT(user.Email, time.Now().Unix())
	errref, Refresh_token := token.CreateJWT(user.Email, time.Now().Unix())

	if errref != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": errref})
	}
	if erra != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": erra})
	}

	token.TStrg.Save(Access_token, Refresh_token)

	c.JSON(http.StatusOK, gin.H{
		"token": Access_token,
	})
}
