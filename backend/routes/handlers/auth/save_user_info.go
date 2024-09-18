package auth

import (
	"backend/schemes"
	"backend/utils/token"
	"backend/workwithdb"
	"fmt"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

func SaveUserInfo(c *gin.Context) {
	var user schemes.User_to_Save

	if err := c.ShouldBind(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	fmt.Println("decoded body")
	//fmt.Println(c.Request.Header["Authorization"][0])
	client_token := strings.Split(c.Request.Header["Authorization"][0], " ")[1]
	fmt.Println(client_token)
	var email string
	// if email, _, err := token.DecodeJWT(client_token); err == nil {
	// 	fmt.Println(email)
	// 	c.JSON(http.StatusOK, err)
	// }
	// fmt.Println(email)
	email, _, _ = token.DecodeJWT(client_token)
	workwithdb.Save_User_Info(email, user)
	c.JSON(http.StatusOK, "Data saved successfully !")
}
