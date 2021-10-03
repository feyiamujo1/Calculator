const currentTheme = localStorage.getItem('theme')

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') {
        document.getElementById("radio-light").checked = true;
    }
    else if(currentTheme === 'dark') {
        document.getElementById("radio-dark").checked = true;
    }
    else{
        document.getElementById("radio-normal").checked = true;
    }
}

function switchTheme(selectedTheme) {
    if (selectedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
    else if (selectedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else{
        document.documentElement.setAttribute('data-theme', 'normal');
        localStorage.setItem('theme', 'normal');
    }  
}

function checknumber(y){
    var dotted;
    for(var i=0; i<y.length; i++){
        if(y[i] == "."){
            dotted = true;
            break;
        }
        else{
            dotted = false;
        }
    }
    return dotted;
}

var result="";
var inputone, inputtwo;
var finalinput1, finalinput2;
var operation = "";
var checkequalsto;
var theresdot= false;
var output;
var dotted1;
var dotted2;

function btnsevenclicked(){
    if(checkequalsto ==true){
        result="";
        operation="";
        checkequalsto=false; //So that when equal btn is pressed it goes and perform the default action
    }
    if(result.length==1 && result[0]==0){
        result="";
    }
    result = result+ "7";
    document.getElementById("displayresult").innerHTML = result;
}

function btneightclicked(){
    if(checkequalsto ==true){
        result="";
        operation="";
        checkequalsto=false;
    }
    if(result.length==1 && result[0]==0){
        result="";
    }
    result = result+ "8";
    document.getElementById("displayresult").innerHTML = result;
}
function btnnineclicked(){
    if(checkequalsto ==true){
        result="";
        operation="";
        checkequalsto=false;
    }
    if(result.length==1 && result[0]==0){
        result="";
    }
    result = result+ "9";
    document.getElementById("displayresult").innerHTML = result;
}
function btnfourclicked(){
    if(checkequalsto ==true){
        result="";
        operation="";
        checkequalsto=false;
    }
    if(result.length==1 && result[0]==0){
        result="";
    }
    result = result+ "4";
    document.getElementById("displayresult").innerHTML = result;
}
function btnfiveclicked(){
    if(checkequalsto ==true){
        result="";
        operation="";
        checkequalsto=false;
    }
    if(result.length==1 && result[0]==0){
        result="";
    }
    result = result+ "5";
    document.getElementById("displayresult").innerHTML = result;
}
function btnsixclicked(){
    if(checkequalsto ==true){
        result="";
        operation="";
        checkequalsto=false;
    }
    if(result.length==1 && result[0]==0){
        result="";
    }
    result = result+ "6";
    document.getElementById("displayresult").innerHTML = result;
}
function btnoneclicked(){
    if(checkequalsto ==true){
        result="";
        operation="";
        checkequalsto=false;
    }
    if(result.length==1 && result[0]==0){
        result="";
    }
    result = result+ "1";
    document.getElementById("displayresult").innerHTML = result;
    
}
function btntwoclicked(){
    if(checkequalsto ==true){
        result="";
        operation="";
        checkequalsto=false;
    }
    if(result.length==1 && result[0]==0){
        result="";
    }
    result = result+ "2";
    document.getElementById("displayresult").innerHTML = result;
    
}

function btnthreeclicked(){
    if(checkequalsto ==true){
        result="";
        operation="";
        checkequalsto=false;
    }
    if(result.length==1 && result[0]==0){
        result="";
    }
    result = result+ "3";
    document.getElementById("displayresult").innerHTML = result;
}

function btnzeroclicked(){
    if(checkequalsto==true){
        result="";
        operation="";
        checkequalsto=false;
    }
    if(result.length==1 && result[0]==0){
        result=result;
        operation="";
        document.getElementById("displayresult").innerHTML = result;
    }
    else{
        result = result+ "0";
        document.getElementById("displayresult").innerHTML = result;
    }
}

function btndelclicked(){
    if(checkequalsto==true){
        result = ""
        document.getElementById("displayresult").innerHTML = result;
        checkequalsto=false;
        operation=""
    }else{
        if(result.length==0 ){
            result = result
        }else{
            result = result.substring(0, result.length-1);
            document.getElementById("displayresult").innerHTML = result;
        }
    }
    
}
function btnresetclicked(){
    result="";
    operation="";
    checkequalsto =false;
    theresdot=false;
    output=0;
    inputtwo=0;
    inputone=0;
    document.getElementById("displayresult").innerHTML = result;
}

function btndivisionclicked(){
    operation = "division";
    checkequalsto =false;
    inputone = result;
    result="";
    document.getElementById("displayresult").innerHTML = result;
    dotted1 = checknumber(result);
    console.log(dotted1);

}

function btnmultiplyclicked(){
    operation = "multiply";
    checkequalsto =false;
    inputone = result;
    result="";
    document.getElementById("displayresult").innerHTML = result;

}
function btnplusclicked(){
    operation = "plus";
    checkequalsto =false;
    inputone = result;
    result="";
    document.getElementById("displayresult").innerHTML = result;

}

function btnminusclicked(){
    operation = "minus";
    checkequalsto =false;
    inputone = result;
    result="";
    document.getElementById("displayresult").innerHTML = result;

}

function bntdotclicked(){
    if(result[0]==null || result[0]==0 && result.length==1 ){
        result="";
        result = result+"0.";
        document.getElementById("displayresult").innerHTML = result;
    }
    else{
        for(var i=0; i<result.length; i++){
            if(result[i] == "."){
                theresdot=true;
            }
        }
        if(theresdot==true){
            result=result;
        }
        else{
            result = result + ".";
            document.getElementById("displayresult").innerHTML = result;
        }                
    }
}



function btnequalclicked(){
    if(checkequalsto ==true){
        inputone = output;
        inputtwo = inputtwo;
    }
    else{
        inputtwo = result;
    }
    dotted2 = checknumber(inputtwo);
    dotted1 = checknumber(inputone);
    console.log(dotted1);
    console.log(dotted2);
    switch(operation){
        case "division":
            if(theresdot==true || checknumber(inputtwo)==true || checknumber(inputone) == true){
                finalinput1 = parseFloat(inputone);
                finalinput2 = parseFloat(inputtwo);
                /**output =parseFloat(output).**/
                output = (finalinput1/finalinput2).toFixed(5);
                console.log(finalinput1, finalinput2);
                console.log(output);
                result = ""+output;
                document.getElementById("displayresult").innerHTML = result;
                checkequalsto =true;
            }
            else{
                finalinput1 = parseInt(inputone);
                finalinput2 = parseInt(inputtwo);
                output = (finalinput1/finalinput2);
                console.log(finalinput1, finalinput2);
                console.log(output);
                result = ""+output;
                document.getElementById("displayresult").innerHTML = result;
                checkequalsto =true;
            }
            break;

        case "multiply":
            if(theresdot==true || checknumber(inputtwo)==true || checknumber(inputone) == true){
                finalinput1 = parseFloat(inputone);
                finalinput2 = parseFloat(inputtwo);
                /**output =parseFloat(output).**/
                output = (finalinput1*finalinput2).toFixed(5);
                console.log(finalinput1, finalinput2);
                console.log(output);
                result = ""+output;
                document.getElementById("displayresult").innerHTML = result;
                checkequalsto =true;
            }
            else{
                finalinput1 = parseInt(inputone);
                finalinput2 = parseInt(inputtwo);
                output = (finalinput1*finalinput2);
                console.log(finalinput1, finalinput2);
                console.log(output);
                result = ""+output;
                document.getElementById("displayresult").innerHTML = result;
                checkequalsto =true;
            }
            break;
        case "minus":
            if(theresdot==true || checknumber(inputtwo)==true || checknumber(inputone) == true){
                finalinput1 = parseFloat(inputone);
                finalinput2 = parseFloat(inputtwo);
                /**output =parseFloat(output).**/
                output = (finalinput1-finalinput2).toFixed(5);
                console.log(finalinput1, finalinput2);
                console.log(output);
                result = ""+output;
                document.getElementById("displayresult").innerHTML = result;
                checkequalsto =true;
            }
            else{
                finalinput1 = parseInt(inputone);
                finalinput2 = parseInt(inputtwo);
                output = (finalinput1-finalinput2);
                console.log(finalinput1, finalinput2);
                console.log(output);
                result = ""+output;
                document.getElementById("displayresult").innerHTML = result;
                checkequalsto =true;
            }              
            break;
        case "plus":
            if(theresdot==true || checknumber(inputtwo)==true || checknumber(inputone) == true){
                finalinput1 = parseFloat(inputone);
                finalinput2 = parseFloat(inputtwo);
                /**output =parseFloat(output).**/
                output = (finalinput1+finalinput2).toFixed(5);
                console.log(finalinput1, finalinput2);
                console.log(output);
                result = ""+output;
                document.getElementById("displayresult").innerHTML = result;
                checkequalsto =true;
            }
            else{
                finalinput1 = parseInt(inputone);
                finalinput2 = parseInt(inputtwo);
                output = (finalinput1+finalinput2);
                console.log(finalinput1, finalinput2);
                console.log(output);
                result = ""+output;
                document.getElementById("displayresult").innerHTML = result;
                checkequalsto =true;
            }
            break;

        default:
            result=result;
            document.getElementById("displayresult").innerHTML = result;
            break;
    }
}




