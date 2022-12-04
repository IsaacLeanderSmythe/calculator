//add required event listeners
let argumentOne;
let argumentTwo;
let currentOperator;
let operatorFlag = false;

const container = document.querySelector('.container');
const buttons = container.querySelectorAll('button');

buttons.forEach((button)=>{
    button.addEventListener('click',(e) =>{
        const targetType = e.target.getAttribute('data-type');
        const targetKey = e.target.getAttribute('data-key');
        console.log('Type: '+targetType);
        console.log('Key: '+targetKey);
        if(targetKey==='all-clear'){
            clearScreen();
            return;
        }

        if(targetType==='value'){
            if(operatorFlag){
                const rowTwo = container.querySelector('.row-2');
                rowTwo.textContent = '';
            }
            const textContent = e.target.textContent;
            updateCurrentDisplay(textContent,'N');
            operatorFlag = false;
        }

        if(targetType==='operator' && targetKey!='equals'){
            operatorFlag = true;
            argumentOne = getCurrentValue();
            currentOperator = targetKey;
            console.log(argumentOne);
        }
        if(targetKey === 'equals'){
            argumentTwo = getCurrentValue();
            argumentOne = getCalculation();
            operatorFlag = true;
        }
    })
});

function getCalculation(){
    let val;
    if(currentOperator === 'plus'){
        val = argumentOne+argumentTwo;
    }
    else if(currentOperator === 'minus'){
        val = argumentOne-argumentTwo;
    }
    else if(currentOperator === 'asterisk'){
        val = argumentOne*argumentTwo;
    }
    else if(currentOperator === 'asterisk'){
        val = argumentOne*argumentTwo;
    }
    else if(currentOperator === 'forward-slash'){
        val = Math.round((argumentOne/argumentTwo)*100)/100;
    }
    updateCurrentDisplay(val,'Y');
    return val;
}
            

function updateMainDisplay(text){
    const rowOne = container.querySelector('.row-1');
    rowOne.textContent += text;
}

function updateCurrentDisplay(text,clearFlag='N'){
    if(clearFlag==='Y'){
        clearScreen();
    }
    const rowTwo = container.querySelector('.row-2');
    rowTwo.textContent += text;
};

function clearScreen(){
    const rowOne = container.querySelector('.row-1');
    rowOne.textContent = '';
    const rowTwo = container.querySelector('.row-2');
    rowTwo.textContent = '';
};

function getCurrentValue(){
    const rowTwo = container.querySelector('.row-2');
    const currentRawValue = rowTwo.textContent;
    const stringLength = currentRawValue.length;
    let returnVal;

    if(currentRawValue.indexOf('π') === currentRawValue.length-1){
        returnVal = Math.PI * parseInt(currentRawValue.slice(0,length-1));
    }
    else if(currentRawValue.indexOf('e') === currentRawValue.length-1){
        returnVal = Math.E * parseInt(currentRawValue.slice(0,length-1));  
    }
    else{
        returnVal = parseInt(currentRawValue);
    }

    return Math.round(returnVal*100)/100;
};