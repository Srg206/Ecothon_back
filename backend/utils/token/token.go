package token

import (
	"backend/config"
	"errors"
	"fmt"
	"time"

	"github.com/golang-jwt/jwt"
)

type TokenPair struct {
	a_token string
	r_token string
}
type TokenStorage struct {
	token_map map[string]TokenPair
}

var TStrg = TokenStorage{}

func (ts *TokenStorage) Init() {
	ts.token_map = make(map[string]TokenPair)
}

func (ts *TokenStorage) Save(a string, r string) {
	email, _, _ := DecodeJWT(a)
	ts.token_map[email] = TokenPair{a, r}
}

func (ts *TokenStorage) Check(a string) (error, string) {
	email, tma, _ := DecodeJWT(a) // TODO: PROCESS ERROR
	var new_a_token string
	var new_r_token string
	new_a_token = a
	new_r_token = ts.token_map[email].r_token

	if time.Now().Unix()-tma > time.Now().Add(time.Duration(config.CurConfig.ACCESS_TOKEN_EXPIRE_TIME)*time.Hour).Unix() {
		_, new_a_token = CreateJWT(email, time.Now().Unix()) //TODO:PROCESS ERROR
	}
	email, tmr, _ := DecodeJWT(new_r_token) // TODO: PROCESS ERROR
	if time.Now().Unix()-tmr > time.Now().Add(time.Duration(config.CurConfig.REFRESH_TOKEN_EXPIRE_TIME)*time.Hour).Unix() {
		return errors.New("expired refresh token"), " " //TODO:PROCESS ERROR
	}
	ts.token_map[email] = TokenPair{new_a_token, new_r_token}
	return nil, new_a_token
}

func CreateJWT(email string, tm int64) (error, string) {
	claims_access := jwt.MapClaims{
		"email":      email,
		"created_at": tm,
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims_access)
	tokenString, err := token.SignedString([]byte(config.CurConfig.SECRET_JWT_KEY))
	if err != nil {
		fmt.Println("Error while signing token :", err)
		return err, " "
	}
	fmt.Println(tokenString)
	return nil, tokenString

}

func DecodeJWT(tokenString string) (string, int64, error) {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return config.CurConfig.SECRET_JWT_KEY, nil
	})

	if err != nil {
		return "", 0, err
	}

	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		email := claims["email"].(string)
		etime := claims["email"].(int64)
		return email, etime, nil
	} else {
		return "", 0, fmt.Errorf("invalid token")
	}
}
