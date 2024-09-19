package schemes

type Comment struct {
	User_id string `form:"user_id"  json:"user_id"`
	Name    string `form:"name" json:"name"`
	Surname string `form:"surname" json:"surname"`
	Email   string `form:"email" json:"email"`
	Content string `form:"content" json:"content"`
}
