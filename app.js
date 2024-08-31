const words = [ 
    "react", 
    "angular", 
    "javascript", 
    "bootstrap", 
    "tailwind", 
]; 
// Respective list of hints 
const hints = [ 
    "JavaScript framework", 
    "JavaScript Framework", 
    "Scripting Language", 
    "Styling Library", 
    "Styling Library", 
]; 

let displayWord  = "";
// function for shuffling
function  shuffle(str){
    strArray  = Array.from(str);
    for(let i  = 0;i<strArray.length-1;++i){
        let j = Math.floor(Math.random() * strArray.length); 
        let temp  = strArray[i];
        strArray[i] = strArray[j];
        strArray[j] = [temp];
    }
    return strArray.join(" ");
}
// function for checking result
function check(){
let input  =  document.getElementById("input");
let output = document.getElementById("output");
if(input.value.toLocaleLowerCase() === 
displayWord.toLocaleLowerCase()){
    output.innerHTML = "Result : correct";
    refreshAudio.play(); 
   
}
else {
    output.innerHTML = "Result: Wrong. The correct word is: " + displayWord;
    wrongAudio.play();
    
}
}
// function for refresh the game 
function refresh(){
    index = Math.floor(Math.random() * 5);
    displayWord =  words[index];
    displayHint = hints[index];
     var  scrambleWord =  
    document.getElementById("scrambleWord"); 
scrambleWord.innerHTML = 
    shuffle(displayWord).toUpperCase(); 
let hint = document.getElementById("hint"); 
hint.innerHTML = "<b>Hint:</b> " + displayHint; 
document.getElementById("output").innerText = "Result:"; 
input.value = "";
} 

// Function call when page load for first time 
refresh();


