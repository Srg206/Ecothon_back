package personalise

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Save_interests(c *gin.Context) {
	c.JSON(http.StatusOK, "save_interests")
}
