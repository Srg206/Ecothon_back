import React, { useState } from 'react';
import cl from './FormDataInfo.module.scss';
import InputDataInfoWIthTitle from '../../shared/modules/InputDataInfoWithTitle/InputDataInfoWithTitle';
import BtnGreenReverse from '../../shared/modules/BtnGreenReverse/BtnGreenReverse';
import CheckboxGender from '../../shared/modules/CheckboxGender/CheckboxGender';

function FormDataInfo({onDataInfoSuccess}) {
  const [isPushNotificationChecked, setIsPushNotificationChecked] = useState(false);
  const [selectedGender, setSelectedGender] = useState("Ж");
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phone, setPhone] = useState('');

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
    console.log('Gender changed to:', gender);
  };

  const handleCheckboxChange = (e) => {
    setIsPushNotificationChecked(e.target.checked);
    console.log('Push notifications checked:', e.target.checked);
  };

  const sendData = () => {
    onDataInfoSuccess();
    console.log("ОТПРАВКА!");
  }

  return (
    <div className={cl.formDataInfo}>
      <div className={cl.formDataInfo__title}>Заполните данные о себе, чтобы завершить регистрацию</div>
      <div className={cl.formDataInfo__inputs}>
        <InputDataInfoWIthTitle value={name} setValue={setName} title="Имя" placeholder="Введите ваше имя" />
        <InputDataInfoWIthTitle value={surname} setValue={setSurname} title="Фамилия" placeholder="Введите вашу фамилию" />
        <InputDataInfoWIthTitle value={birthday} setValue={setBirthday} title="Дата рождения" placeholder="01.01.2001 " />
        <InputDataInfoWIthTitle value={phone} setValue={setPhone} title="Телефон" placeholder="Введите номер телефона " />
      </div>
      <div className={cl.formDataInfo__genders}>
        <div className={cl.genders__title}>Пол</div>
        <div className={cl.genders__btns}>
          <CheckboxGender gender="Ж" isActive={selectedGender === "Ж"} onClick={() => handleGenderChange("Ж")} />
          <CheckboxGender gender="М" isActive={selectedGender === "М"} onClick={() => handleGenderChange("М")} />
        </div>
      </div>
      <div className={cl.formDataInfo__pushNotification}>
        <input
          className={cl.pushNotification__checkbox}
          type="checkbox"
          checked={isPushNotificationChecked}
          onChange={handleCheckboxChange}
          id="push_email"
          name="push_email"
        />
        <label htmlFor="push_email">Присылать напоминания о событиях на указанную почту</label>
      </div>
      <div className={cl.formDataInfo__btn}>
        <BtnGreenReverse onClick={() => sendData()}>Сохранить</BtnGreenReverse>
      </div>
    </div>
  );
}

export default FormDataInfo;
