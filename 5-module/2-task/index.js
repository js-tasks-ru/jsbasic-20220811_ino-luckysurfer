function toggleText() {
    const buttonEl = document.querySelector('.toggle-text-button');
    const textEl = document.querySelector('#text');

    buttonEl.addEventListener('click', () => {
        textEl.hidden = !textEl.hidden;
    });
}