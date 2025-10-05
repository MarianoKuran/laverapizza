const header = document.getElementById('header');
const spanItaliana = document.getElementById('span-italiana');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        spanItaliana.classList.remove('animate-pulse');
        header.classList.add('bg-black');
    } else {
        header.classList.remove('bg-black');
        spanItaliana.classList.add('animate-pulse');
    }
});