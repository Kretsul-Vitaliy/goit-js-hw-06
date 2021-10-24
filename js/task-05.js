const input = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');
const handleInput = () => {
    const inputName = input.value.trim();
    if (inputName !== ' ') { //если поставить без пробела будет ошибка при стирании текста в input
        return (output.textContent = inputName);
    }
    return (output.textContent = Anonymous);
};
input.addEventListener('input', handleInput);