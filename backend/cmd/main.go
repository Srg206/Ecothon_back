package main

import (
	"fmt"
	"net/http"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
	// Устанавливаем заголовок Content-Type
	w.Header().Set("Content-Type", "text/plain")
	// Возвращаем ответ "Hello, World"
	fmt.Fprintln(w, "Hello, World")
}

func main() {

	// Создаем новый роутер и связываем его с хендлером
	http.HandleFunc("/", helloHandler)

	// Запускаем HTTP сервер на порту 8080
	fmt.Println("Сервер запущен  ")
	if err := http.ListenAndServe(":8001", nil); err != nil {
		fmt.Println("Ошибка запуска сервера:", err)
	}
}
