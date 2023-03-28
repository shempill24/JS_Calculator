// Theme Toggle
const toggleball = document.querySelector(".ball");
const btn = document.querySelectorAll(".button");
const clears = document.querySelectorAll(".clear")
 
let count = 0;
let count1 = 1;
let count2 = 3;
let num = 1

function changeTheme(num){
    document.querySelector("body").style.backgroundColor = `var(--t${num}background)`;
    document.querySelector(".keypad").style.backgroundColor = `var(--t${num}backgroundkeypad)`;

    document.querySelector(".header").style.color = `var(--t${num}headertextcolor)`;
    document.querySelector(".toggle").style.backgroundColor = `var(--t${num}backgroundkeypad)`;
    document.querySelector(".ball").style.backgroundColor = `var(--t${num}equalshov)`;
    document.querySelector(".number_display").style.backgroundColor = `var(--t${num}display)`;
    document.querySelector(".number_display").style.color = `var(--t${num}displaynumber)`;
    document.querySelector(".keypad").style.backgroundColor = `var(--t${num}backgroundkeypad)`;
    // document.querySelector(".button:hover").style.backgroundColor = `var(--t${num}white)`;
   btn.forEach((button)=>{
        button.style.backgroundColor=`var(--t${num}numberbut)`;
        button.style.color=`var(--t${num}numberbuttontext)`;
    });
    clears.forEach((clear)=>{
        clear.style.backgroundColor=`var(--t${num}clearbut)`;
        clear.style.color=`var(--t${num}white)`
    });
    document.querySelector(".clear").style.backgroundColor = `var(--t${num}clearbut)`;
    document.querySelector(".clear").style.color = `var(--t${num}white)`; 
    document.querySelector(".equals").style.backgroundColor = `var(--t${num}equals)`;
    document.querySelector(".equals").style.color = `var(--t${num}equalstext)`; 
};


toggleball.addEventListener('click', () => {
    if(count === count1){
    document.querySelector(".toggle").style.justifyContent="flex-end" ;
    num = 3;
    changeTheme(num);
    count++
    count1 += 4
    console.log(count)
    }else if(count === count2){
        document.querySelector(".toggle").style.justifyContent="flex-start" ;
        num = 1;
        changeTheme(num);
        count++
        count2 +=4
        console.log(count)
    }else{
        document.querySelector(".toggle").style.justifyContent="center" ;
        num = 2;
        changeTheme(num);
        count ++;
        console.log(count)
    }

});

// Calculator Functionality


let display = ''
let heldnumber =''
let equation = ''
let reg = /^[0-9.]*$/
let reg1=(/[\+\-\*\/]/)
let operator = ''



btn.forEach((button)=>
    button.addEventListener('click',()=>{
        let value = button.getAttribute('id')
        console.log(button.getAttribute('id'))
        if(value.match(reg)){
            if(heldnumber === '' && value.match(0)){
                return
            }
            heldnumber += value
            document.querySelector(".number_display").innerHTML = heldnumber
        }else if(value.match(reg1)){
    
                operator += value
                equation += heldnumber
                equation += value
                console.log(`testif${operator}`)
                heldnumber =' '
                operator=''
         
            
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
            equation= ''
            document.querySelector(".number_display").innerHTML = "0"
        }else if(value.match("backspace")){
            heldnumber=''
            document.querySelector(".number_display").innerHTML = 0

        }

        console.log(equation)

    }));