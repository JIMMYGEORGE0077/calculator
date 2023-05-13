function displayData(n){
    result.value+=n         //input id = 'result' athkond       ex: 10+22   "+ - * / with numbers"
}


function evaluateOperation(){       
result.value=eval(result.value)     //'eval'  permanent method aanu ex: 7+3=10
}


function allClear(){
    result.value=""
}


function backSpace(){                            // .slice(0,-1)
    result.value=result.value.slice(0,-1)       // 0 starting -1 means ex: hello -1 = 'hello', -2 means hel
}