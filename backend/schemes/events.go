package schemes

type Event_to_send struct {
	Id           string    `form:"id"  json:"id"`
	Title        string    `form:"title" json:"title"`
	Date         string    `form:"date" json:"date"`
	Address      string    `form:"address" json:"address"`
	Organization string    `form:"organization" json:"organization"`
	FeedBack     []Comment `form: "comment" json:"comment"`
	Image        string    `form:"image" json:"image"`
	Tags         []string  `form:"tags" json:"tags"`
	Description  string    `form:"description" json:"description"`
	IsFavorite   bool      `form:"isfavourite" json:"isfavourite"`
	CoordX       float32   `form:"coordx" json:"coordx"`
	CoordY       float32   `form:"coordy" json:"coordy"`
}

type Event_to_receive struct {
	Title        string   `form:"title" json:"title"`
	Date         string   `form:"date" json:"date"`
	Address      string   `form:"address" json:"address"`
	Organization string   `form:"organization" json:"organization"`
	Image        string   `form:"image" json:"image"`
	Tags         []string `form:"tags" json:"tags"`
	Description  string   `form:"description" json:"description"`
	isFavorite   bool     `form:"isfavourite" json:"isfavourite"`
	CoordX       float32  `form:"coordx" json:"coordx"`
	CoordY       float32  `form:"coordy" json:"coordy"`
}
