package gormmodels

// type User struct {
// 	gorm.Model
// 	ID        uint `gorm:"primarykey"; column:id`
// 	Email     string
// 	Password  string
// 	CreatedAt time.Time `gorm:"autoCreateTime:false"`
// 	UpdatedAt time.Time `gorm:"autoUpdateTime:false"`
// }

type User struct {
	ID       uint   `gorm:"primarykey"; column:id`
	Email    string `gorm:"unique"; email:id`
	Username string `gorm: column:username`
	Password string `gorm: column:password`
}
