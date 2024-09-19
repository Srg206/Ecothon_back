import React, { useState } from 'react'
import cl from './FormRegistration.module.scss'
import BtnGreen from '../../shared/modules/BtnGreen/BtnGreen'
import InputGreen from '../../shared/modules/InputGreen/InputGreen'
import SendServer from '../../api/Service';

function FormRegistration({title, onRegistrationSuccess}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  //* Функции для валидации формы
  const validateForm = () => {
    if (!email) {
      return "Почта не может быть пустой";
    }
    if (!password) {
      return "Пароль не может быть пустым";
    }
    if (password !== confirmPassword) {
      return "Пароли не совпадают";
    }
    // Дополнительные проверки можно добавить, например, на формат почты
    return null;
  };

  const registration = async (email, password) => {
    try{
      const response = await SendServer.registrationNewUser(email, password);
      console.log(response.data);
    } catch (error) {
      console.log("Error registration: ", error);
    }
  };

  const handleRegisterClick = () => {
    const validationError = validateForm();
    if (validationError){
      setError(validationError);
    } else {
      setError('');
      if (typeof onRegistrationSuccess === 'function') { // Проверка на существование функции
        onRegistrationSuccess(email, password);
      } else {
        registration(email, password);
      }
    }
  }

  return (
    <div className={cl.formRegistration}>
        <div className={cl.formRegistration__title}>{title}</div>
        <div className={cl.formRegistration__inputs}>
            <InputGreen 
              placeholder="Почта"
              value={email}
              setValue={setEmail}
            />
            <InputGreen 
              placeholder="Пароль"
              value={password}
              setValue={setPassword}
            />
            <InputGreen 
              placeholder="Подтверждение пароля"
              value={confirmPassword}
              setValue={setConfirmPassword}  
            />
        </div>

        {error && <div className={cl.formRegistration__error}>{error}</div>}

        <div className={cl.formRegistration__btn}>
            <BtnGreen width="265px" onClick={handleRegisterClick}>Зарегистрироваться</BtnGreen>
        </div>
    </div>
  )
}

export default FormRegistration