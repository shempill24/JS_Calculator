// Theme Toggle
const toggleball = document.querySelector(".ball")

let count = 0;
let count1 = 1;
let count2 = 3;

toggleball.addEventListener('click', () => {
    if(count === count1){
    document.querySelector(".toggle").style.justifyContent="flex-end" ;
    count++
    count1 += 4
    console.log(count)
    }else if(count === count2){
        document.querySelector(".toggle").style.justifyContent="flex-start" ;
        count++
        count2 +=4
        console.log(count)
    }else{
        document.querySelector(".toggle").style.justifyContent="center" ;
        count ++
        console.log(count)
    }

});

// Calculator Functionality

const btn = document.querySelectorAll(".button")
let display = ''
let heldnumber =''
let equation = ''
let reg = /^[0-9.]*$/
let reg1=(/[\+\-\*\/]/)



btn.forEach((button)=>
    button.addEventListener('click',()=>{
        let value = button.getAttribute('value')
        if(value.match(reg)){
            if(heldnumber === '' && value.match(0)){
                console.log("working")
                return
            }
            heldnumber += value
            document.querySelector(".number_display").innerHTML = heldnumber
        }else if(value.match(reg1)){
            equation += heldnumber
            display = eval(equation)
            document.querySelector(".number_display").innerHTML = display
            equation += value
            heldnumber =''
            console.log(equation)
        }else if(value.match("equals")){
    
            equation += heldnumber
            equation = eval(equation)
            document.querySelector(".number_display").innerHTML = equation
            equation =''
            heldnumber=''
            display =''
        }else if(value.match("clear")){
            equation = ""
            display = ""
            document.querySelector(".number_display").innerHTML = "0"
        }else if(value.match("backspace")){
            heldnumber=''
            document.querySelector(".number_display").innerHTML = 0

        }

        console.log(equation)

    }));