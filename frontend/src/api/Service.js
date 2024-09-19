
import axios from "axios"
import baseUrl from '../app/config'

export default class SendServer{

    //* Функция для входа в аккаунт
    static async loginUser(email, password){
        console.log("Запущен");
        return await axios.post(`${baseUrl}/auth/login`, {
            'email': email,
            'password': password
        }).then(response => response.data).catch(error => console.log("Error creating user: ", error));
    }

    //* Функция для теста
    static async ping(){
        return await axios.get("http://194.87.102.215:8002/PING");
    }

    //* Функция для регистрации нового пользователя по почте и паролю
    static async registrationNewUser(email, password){
        return await axios.post(`${baseUrl}/auth/create_user`, {
            'email': email,
            'password': password
        }, { 
        headers: {
            'Content-Type': 'application/json',
        }
        },).then(response => response.data).catch(error => console.log("Error creating user: ", error));
    }

    //* Функция для сохранения информации о пользователе
    static async saveUserInfo(user){
        const token = localStorage.getItem('access_token');
        const data = {
            'email': user.email,
            'password': user.password,
            'name': user.name,
            'surname': user.surname,
            'birthdate': user.birthday,
            'phone': user.phone,
            'gender': user.gender,
            'send_notifications': user.isNotification  
        }

        return await axios.post(`${baseUrl}/auth/save_user_info`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        }).then(response => response.data).catch(error => console.log("Error creating user: ", error));
    }

    //* Функция для сохранения интересов пользователя
    static async saveInterests(interests){
        const token = localStorage.getItem('access_token');
        const data = {
            'interests': interests
        }
        return await axios.post(`${baseUrl}/personalize/save_interests`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data).catch(error => console.log("Error creating user: ", error));
    }

}