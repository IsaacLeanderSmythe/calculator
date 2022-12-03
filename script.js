//add required event listeners

const container = document.querySelector('.container');
const buttons = container.querySelectorAll('button');

buttons.forEach((button)=>{
    button.addEventListener('click',(e) =>{
        const targetKey = e.target.getAttribute('data-key');
        console.log(targetKey);
    })
});