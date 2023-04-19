let result = document.getElementById("inputText")

let calculate=(number)=>{
    result.value = result.value + number ;
}

let Result=()=>{
    try{
        result.value=eval(result.value);
    }
    catch(err){
        alert( "enter the valid input")
    }
}

function clr(){
    result.value="";
}

function del(){
    result.value=result.value.slice(0,-1);
}
function changeMode(){
    let mybody = document.body;
    mybody.classList.toggle('mydark')
}