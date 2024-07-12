let btn = document.querySelector('.btn');
let colorName = document.querySelector('.colorText');
let outputColor = document.querySelector('.color');

btn.addEventListener('click', colorGenerator);

function colorGenerator(){

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = `rgb(${red},${green},${blue})`;
    
    colorName.style.display = `block`;
    colorName.innerHTML = `${color}`;

    outputColor.style.backgroundColor = `${color}`;

}
