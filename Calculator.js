let outputjs = [];

function clicked(event) {
    let deport = event.target;
    let numbers = document.getElementById("output")
    if (deport.innerHTML in ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '=',]){
        outputjs.push(deport.innerHTML);
        numbers.innerHTML = outputjs.join("")
        console.log(deport.innerHTML)
    }

    else if (deport.innerHTML === 'Delete'){
        outputjs=[];
        numbers.innerHTML = outputjs.join("")
    }

    else if (deport.innerHTML === '='){
        numbers.innerHTML = eval(outputjs.join(""))
    }

    else if (deport.innerHTML === '+' || deport.innerHTML === '-' || deport.innerHTML === '*' || deport.innerHTML === '/'){
        outputjs.push(deport.innerHTML);
        numbers.innerHTML = outputjs.join("")
    }
}