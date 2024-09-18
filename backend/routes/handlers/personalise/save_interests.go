package personalise

import (
	"backend/schemes"
	"backend/utils/token"
	"backend/workwithdb"
	"fmt"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

func Save_interests(c *gin.Context) {
	var interests schemes.Interests

	if err := c.ShouldBind(&interests); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	client_token := strings.Split(c.Request.Header["Authorization"][0], " ")[1]
	var email string
	email, _, _ = token.DecodeJWT(client_token)
	fmt.Println(email)
	var tmp_arr string
	tmp_arr = ""
	for _, value := range interests.Interests {
		tmp_arr = tmp_arr + string(value) + "<" //костыль чтобы хранить в бд без использования массива
	}

	workwithdb.Save_User_Interests(email, tmp_arr)

	c.JSON(http.StatusOK, "Interests saved successfully !")
}
