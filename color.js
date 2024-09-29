const square = document.querySelectorAll(".container .square");

square.forEach(element => {
    element.addEventListener('mouseover',function(){
        element.style.backgroundColor = getRandomColor();
    })
    element.addEventListener('mouseout' , function(){
        element.style.backgroundColor = 'rgb(29, 29, 29)';
    })
})

function getRandomColor() {  
    const letters = '0123456789ABCDEF';  
    let color = '#';  
    for (let i = 0; i < 6; i++) {  
        color += letters[Math.floor(Math.random() * 16)];  
    }  
    return color;  
}
