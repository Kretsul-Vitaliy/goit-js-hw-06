const range = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');
const handleInput = (event) => {
    spanText.style.fontSize = `${event.currentTarget.value}px`;
}
range.addEventListener('input', handleInput);
