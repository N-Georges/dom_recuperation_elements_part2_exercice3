let exo1 = document.querySelector('#content')
console.log(exo1);
// 2
let exo2 = document.querySelectorAll('#content')
console.log(exo2);
// 3
let exo3 = document.querySelector('.important')
console.log(exo3);
// 4
let exo4 = document.querySelectorAll('.important')
console.log(exo4);
// 5
exo4.forEach(element => {
    let text = element.textContent
    console.log(  text.slice(0) + text.slice(-1).toUpperCase());
    
});
// 6
let p = document.querySelector('#content .grandParagraphe')
console.log(p);
