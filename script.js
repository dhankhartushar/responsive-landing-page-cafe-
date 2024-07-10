document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'perspective(1000px) rotateY(20deg)';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'perspective(1000px) rotateY(0deg)';
        });
    });
});
