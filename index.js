//maths operator function
let add = (num1, num2 )=>{
    return (num1 + num2);
}
let subtract = (num1, num2)=>{
    return (num1 - num2)
}
let multiply = (num1, num2)=>{
    return (num1*num2)
}
let divide = (num1, num2) =>{
    return (num1/num2)
}
let operate = ( operator, num1, num2)=>{
        return operator(num1, num2)
}

// Get values of button
let buttonLength = document.querySelectorAll(".buttonValue").length;
let result = document.getElementById('result')
let displayResult = document.getElementById('displayResult')

const resultValue = () =>{
    if(result.innerHTML === ''){
        return result.innerHTML = "Error! Make Calculation Please."
      }
      for (let i = 0; i < result.innerHTML.length; i++) {
        if (result.innerHTML[i] === "+") {
            result.innerHTML = operate(add, parseFloat(result.innerHTML.split('+')[0]), 
            parseFloat(result.innerHTML.split('+')[1]))
        }else if(result.innerHTML[i] === "-") {
            result.innerHTML = operate(subtract, parseFloat(result.innerHTML.split('-')[0]),
            parseFloat(result.innerHTML.split('-')[1]))
        }else if(result.innerHTML[i] === "x"){
            result.innerHTML = operate(multiply, parseFloat(result.innerHTML.split('x')[0]), 
            parseFloat(result.innerHTML.split('x')[1]))
        }else if(result.innerHTML[i] === "÷"){
            if (result.innerHTML[i+1] === "0") {
               result.innerHTML = "Error cannot divide by zero"
            }
            else {
               result.innerHTML = operate(divide, parseFloat(result.innerHTML.split('÷')[0]), 
               parseFloat(result.innerHTML.split('÷')[1]))
            }
        }
      }
}

//Loop through the buttons and display text on the Screen
for (let i = 0; i < buttonLength; i++) {
    document.querySelectorAll(".buttonValue")[i].addEventListener(
        "click", function(){
            switch (this.innerHTML) {
                case 'C':
                    result.innerHTML = ''
                    break;
                case '←':
                    result.innerHTML = result.innerHTML.slice(0, -1)
                    break;
                case '=':
                    resultValue()
                    break;
                case '.':
                    let res = result.innerHTML+= this.innerHTML
                    let uniqueChar = [...new Set(res)]
                    result.innerHTML = uniqueChar.join('')
                    break
                default:
                    result.innerHTML+= this.innerHTML
            }
        })
    }








