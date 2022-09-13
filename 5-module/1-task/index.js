function hideSelf() {
    document.querySelector('.hide-self-button').addEventListener('click',
        ({ target: button }) => button.hidden = true);
}