
import { startPageLogic } from './startPage';

/*export function greetLogic () {

let userInput: any  = prompt("Please, type here your age");

if (userInput >= 40) {
    startPageLogic();
} else {
    alert('Goodbye!');
}

}*/

export function createForm() {
    // Создание формы
    const myForm = document.createElement('form');
    myForm.id = 'myForm';
  
    // Создание и добавление поля для ввода имени
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Имя:';
    myForm.appendChild(nameLabel);
  
    const firstNameInput = document.createElement('input');
    firstNameInput.type = 'text';
    firstNameInput.id = 'firstName';
    firstNameInput.name = 'firstName';
    firstNameInput.required = true;
    myForm.appendChild(firstNameInput);
  
    // Создание и добавление поля для ввода фамилии
    const lastNameLabel = document.createElement('label');
    lastNameLabel.textContent = 'Фамилия:';
    myForm.appendChild(lastNameLabel);
  
    const lastNameInput = document.createElement('input');
    lastNameInput.type = 'text';
    lastNameInput.id = 'lastName';
    lastNameInput.name = 'lastName';
    lastNameInput.required = true;
    myForm.appendChild(lastNameInput);
  
    // Создание и добавление кнопки "Отправить"
    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.textContent = 'Отправить';
    submitButton.addEventListener('click', submitForm);
    myForm.appendChild(submitButton);
  
    // Добавление формы к body
    document.body.appendChild(myForm);
  }
  
  function submitForm() {
    // Получение значений из полей формы
    const firstName = (<HTMLInputElement>document.getElementById("firstName")).value;
    const lastName = (<HTMLInputElement>document.getElementById("lastName")).value;
  
    // Проверка наличия данных
    if (firstName && lastName) {
      // Вывод результатов (в примере, просто вывод в консоль)
      console.log("Вы ввели: " + firstName + " " + lastName);
    } else {
      alert("Пожалуйста, заполните все поля!");
    }
  }
  
  
  