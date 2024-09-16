package schemes

type User_to_Login struct {
	Email    string `form:"email" json:"email" binding:"required"`
	Password string `form:"password" json:"password" binding:"required"`
}

type User_to_Register struct {
	Email    string `form:"email" json:"email" binding:"required"`
	Username string `form:"username" json:"username" binding:"required"`
	Password string `form:"password" json:"password" binding:"required"`
}
