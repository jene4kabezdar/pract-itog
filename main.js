const likePics = document.getElementsByClassName('js-like');
const buttonsLike = document.getElementsByClassName('js-button-like');
const bracketButtons = document.getElementsByClassName('js-basket');
const buttonLikeKeys = Object.keys(buttonsLike);
const bracketButtonsKeys = Object.keys(bracketButtons);

buttonLikeKeys.forEach(key => buttonsLike[key].addEventListener('click', () => {
    likePics[key].setAttribute('fill', '#FF0000')
}));

bracketButtonsKeys.forEach(key => bracketButtons[key].addEventListener('click', () => {
    bracketButtons[key].style.backgroundColor = '#EDEEF0';
    bracketButtons[key].style.color = '#2E343D';
    bracketButtons[key].setAttribute('value', 'В корзине');
}))