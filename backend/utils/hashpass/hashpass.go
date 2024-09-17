package hashpass

import (
	"golang.org/x/crypto/bcrypt"
)

// HashPassword generates a bcrypt hash for the given password.
func HashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes), err
}

// VerifyPassword verifies if the given password matches the stored hash.
func VerifyPassword(hashed_password, pass string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hashed_password), []byte(pass))
	return err == nil
}
