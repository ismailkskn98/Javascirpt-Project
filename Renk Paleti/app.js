//! Selectors
const body = document.querySelector('body');
const kod = document.getElementById('kod');
const btn = document.getElementById('btn');

// Değer 1-9 olduğunda sayılar kullanılır. Değer 9’dan büyük olduğunda harfler kullanılır. [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const kodlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

//! Events
btn.addEventListener('click', () => {

    let value = '#';
    for (let i = 1; i <= 6; i++) {

        let index = Math.floor(Math.random() * 15);

        value += kodlar[index];
    }
    kod.textContent = value;
    body.style.backgroundColor = value;
})

