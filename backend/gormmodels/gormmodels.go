package gormmodels

import "github.com/lib/pq"

//	type User struct {
//		gorm.Model
//		ID        uint `gorm:"primarykey"; column:id`
//		Email     string
//		Password  string
//		CreatedAt time.Time `gorm:"autoCreateTime:false"`
//		UpdatedAt time.Time `gorm:"autoUpdateTime:false"`
//	}

type Comment struct {
	CommentID uint   `gorm:"unique;primarykey;autoIncrement"; column:comment_id`
	Content   string `gorm:column:content`
	EventId   uint   `gorm:"column:event_id"`
	UserId    uint   `gorm:"column:user_id"`
}

type Event struct {
	EventID      uint           `gorm:"unique;primarykey;autoIncrement"; column:event_id"`
	Title        string         `gorm:"column:title"`
	Date         int64          `gorm:"column:date"`
	Address      string         `gorm:"column:address"`
	Organization string         `gorm:"column:organization"`
	Image        string         `gorm:"column:image"`
	Tags         pq.StringArray `gorm:"type:text[]"`
	Description  string         `gorm:"column:description"`
	CoordX       float32        `gorm:"column:coordx"`
	CoordY       float32        `gorm:"column:coordy"`
	UsersLiked   []*User        `gorm:"many2many:user_events"` // Связь many-to-many с таблицей пользователей
	Comments     []Comment      `gorm:"foreignKey:event_id"`
}

type User struct {
	UserID            uint      `gorm:"unique;primarykey;autoIncrement"; column:user_id"`
	Email             string    `gorm:"unique;column:email"`
	Password          string    `gorm:"column:password"`
	Name              string    `gorm:"column:name"`
	Surname           string    `gorm:"column:surname"`
	Birthdate         string    `gorm:"column:birthdate"`
	Residency         string    `gorm:"column:residency"`
	Phone             string    `gorm:column:phone"` // removed flag unique for debugging
	Gender            string    `gorm:"column:gender"`
	SendNotifications bool      `gorm:"column:send_notifications"`
	ProfilePhoto      string    `gorm:"column:profile_photo"`
	Interests         string    `gorm:"type:text"`
	LikedEvents       []*Event  `gorm:"many2many:user_events"` // Связь many-to-many с таблицей событий
	Comments          []Comment `gorm:"foreignKey:user_id"`
}

// Вспомогательная таблица для связи many-to-many
type UserEvent struct {
	UserID  uint `gorm:"primaryKey;column:user_id"`
	EventID uint `gorm:"primaryKey;column:event_id"`
}

// func (UserEvent) TableName() string {
// 	return "user_events"
// }
