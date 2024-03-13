
import { startPageLogic } from './startPage';

export function greetLogic () {

let userInput: any  = prompt("Please, type here your age")

if (userInput >= 40) {
    startPageLogic();
} else {
    alert('Goodbye!');
}

}