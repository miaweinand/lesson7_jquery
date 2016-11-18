/* 
    Program name: Recipe Display Application
    Author: Mia Weinand
   
    Date: 11/15/16
    
    Fileneme: script.js
*/

//displays the next element after the current target 
function display (event){
     
     $(event.currentTarget).next().fadeIn("slow");
     
}//end of display

//attach event listener to h3 elements to invoke display functions when clicked 
$("h3").click(display);

