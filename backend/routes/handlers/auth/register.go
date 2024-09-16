package auth

import (
	"backend/config"
	"backend/schemes"
	"backend/workwithdb"
	"fmt"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

func Create_user(c *gin.Context) {

	var user schemes.User_to_Register

	if err := c.ShouldBind(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	claims := jwt.MapClaims{
		"email": user.Email,
		"exp":   time.Now().Add(time.Hour * 24).Unix(), // токен истечет через 24 часа
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString([]byte(config.CurConfig.SECRET_JWT_KEY))
	if err != nil {
		fmt.Println("Ошибка при подписании токена:", err)
		return
	}
	if err := workwithdb.Insert_User(user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"token": tokenString,
	})
}
