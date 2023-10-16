
var showCheckBoxes = true; 
   // Show all the list of items:
      function showOptions() {
         var options =
            document.getElementById("options");

         if (showCheckBoxes) {
            options.style.display = "flex";
            showCheckBoxes = !showCheckBoxes;
         } else {
            options.style.display = "none";
            showCheckBoxes = !showCheckBoxes;
         }
      }

      // Display the selected items :
      
      function getOptions1(){
         var markedCheckbox = document.getElementsByName('items');  
         output.innerHTML = "The selected options are given below." ;
         for (var checkbox of markedCheckbox) {  
           if (checkbox.checked)  
             document.body.append(checkbox.value + ' '+",");  
                      
         }  
         }
      
    /*  NEED TO CHECK THIS LATER: NOT WORKING 
    let output = document.getElementById('output');
         
     
    function getOptions() {
        
         var selectedOptions = document.querySelectorAll('input[type=checkbox]:checked');
         
         output.innerHTML = "The selected options are given below." ;
         
         for (var i = 0; i < selectedOptions.length; i++) {
            output.innerHTML += selectedOptions[i].value + " , ";
            console.log(selectedOptions[i]);
         }
      }  
      */

      