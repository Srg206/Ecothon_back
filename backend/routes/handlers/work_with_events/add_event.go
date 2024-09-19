package workwithevents

import (
	"backend/schemes"
	"backend/workwithdb"
	"net/http"

	"github.com/gin-gonic/gin"
)

func Add_event(c *gin.Context) {
	var evnt schemes.Event_to_receive

	if err := c.ShouldBind(&evnt); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	evnt_id := workwithdb.Insert_Event(evnt)
	c.JSON(http.StatusOK, gin.H{
		"event_id": evnt_id,
	})
}
