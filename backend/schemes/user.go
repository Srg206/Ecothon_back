package schemes

type User_to_Login struct {
	Email    string `form:"email" json:"email" binding:"required"`
	Password string `form:"password" json:"password" binding:"required"`
}

type User_to_Register struct {
	Email    string `form:"email" json:"email" binding:"required"`
	Password string `form:"password" json:"password" binding:"required"`
}
type User_to_Save struct {
	Email              string `form:"email" json:"email" `
	Password           string `form:"password" json:"password"`
	Name               string `form:"name" json:"name" `
	Surname            string `form:"surname" json:"surname" `
	Birthdate          string `form:"birthdate" json:"birthdate" `
	Phone              string `form:"phone" json:"phone" `
	Gender             string `form:"gender" json:"gender" `
	Send_notifications bool   `form:"send_notifications" json:"send_notifications" `
}
