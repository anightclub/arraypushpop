let array = [];

function arrayMethod(){
   
    let x = document.getElementById('pushx').value;
    array.push(x);
    arrayLop();
}

function pop(){
   array.pop();
   arrayLop(); 
}

function arrayLop(){
   document.getElementById("insertArea").innerHTML ="";
   document.getElementById("pushx").value ="";

   for(let y = 0; y < array.length; y++){

    let html = `<h1>${y+1}: ${array[y]}</h1>`
    document.getElementById("insertArea").innerHTML += html;
   }
}