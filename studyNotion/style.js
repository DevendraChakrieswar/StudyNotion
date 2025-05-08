const cards = document.querySelector('.code-block');

cards.addEventListener("mousemove", (e) => {
    const rect = cards.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    cards.style.setProperty('--mouse-x', `${x}px`)
    cards.style.setProperty('--mouse-y', `${y}py`);
})