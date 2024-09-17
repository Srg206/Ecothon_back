package auth

import (
	"backend/schemes"
	"backend/workwithdb"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func Login(c *gin.Context) {
	var user schemes.User_to_Login

	if err := c.ShouldBind(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	fmt.Println("decoded body")
	if err, token := workwithdb.Login_by_pass(user); err != nil || token == " " {
		fmt.Println(err.Error())
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	} else {
		c.JSON(http.StatusOK, gin.H{
			"token": token,
		})
	}

}
