function add(num1,num2){
    return num1+num2;
}
let name = "Nawme";

let num2 = 5;
let result = add(5,8);



window.onload = function(){
    let age = 4;

    let showResult = document.getElementById('showResult');

    if(age > 4){
        console.log("I am not baby");
        document.write('I am not baby');
        document.getElementById('showResult').innerHTML="I am not baby";
    }else{
        console.log("i am baby");
        document.write('i am baby');
        document.getElementById('showResult').innerHTML="i am baby";
    }

    let addValue = document.getElementById('btnAdd');
    document.getElementById('btnAdd').onclick = function () {
        let num1 = document.getElementById('num1').value;
        let num2 = document.getElementById('num2').value;
        let result = parseInt(num1)+parseInt(num2);
        document.getElementById('result').innerHTML = result;   
    }
}



// let addValue = document.getElementById('btnAdd');
// if(addValue){
//     addValue.addEventListener("click", function(){ 
//         alert('I have clicked');
//     });
// }



console.log("The result is " + result);