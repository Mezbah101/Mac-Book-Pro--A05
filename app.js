
 
function updatePrice(product,buttonNumber) {
    var currentTotalCost = 0;
       
       var previousCost =parseInt( document.getElementById(product+"-extra-cost").innerText);
    
   
       //Memory

       if (buttonNumber == "memoryBtnOne") {
           var currentCost = previousCost * 0;
       document.getElementById("memory-extra-cost").innerText = currentCost; 
       }
       if (buttonNumber == "memoryBtnTwo") {
           var currentCost = previousCost + 180;
       document.getElementById("memory-extra-cost").innerText = currentCost; 
     
       }


       //Storage

       if (buttonNumber == "storageBtnOne") {
           var currentCost = previousCost *0;
       document.getElementById("storage-extra-cost").innerText = currentCost; 
      
       }
        if (buttonNumber == "storageBtnTwo") {
           var currentCost = previousCost +100;
       document.getElementById("storage-extra-cost").innerText = currentCost; 
      
       }
        if (buttonNumber == "storageBtnThree") {
           var currentCost = previousCost + 180;
       document.getElementById("storage-extra-cost").innerText = currentCost; 
      
       }

       //Delivery


       if (buttonNumber == "deliveryBtnOne") {
           var currentCost = previousCost *0;
       document.getElementById("delivery-extra-cost").innerText = currentCost; 
      
       }
        if (buttonNumber == "deliveryBtnTwo") {
           var currentCost = previousCost +20;
       document.getElementById("delivery-extra-cost").innerText = currentCost; 
      
       }

       // Total Calculation 

      

           var totalCost = currentTotalCost + 1299;
           document.getElementById("total-cost").innerText = totalCost;

         // Ultimate Total Calculation 
           
         var finalTotalCost = currentCost + 1299;
         document.getElementById ("ultimate-total").innerText = finalTotalCost;
         
           if (document.getElementById("promo-code").value == "stevekaku") {


               
           }
              
          


    
   
   }







   function updateStoragePrice() {
       
   }


   // Update Total
   

   
   
   
   
   // For Memory Buttons
   
   document.getElementById("memory-button-one").addEventListener("click", function () {
       
    updatePrice("memory","memoryBtnOne")
   })

 document.getElementById("memory-button-two").addEventListener("click", function () {
       
       updatePrice ("memory","memoryBtnTwo")
   
   })
   
   
   
   // For Storage Buttons
   
   document.getElementById("storage-button-one").addEventListener("click", function () {
   
       updatePrice("storage","storageBtnOne");
   
       
   })

   document.getElementById("storage-button-two").addEventListener("click", function () {
   
       updatePrice("storage","storageBtnTwo");
       
   })

   document.getElementById("storage-button-three").addEventListener("click", function () {
   
       updatePrice("storage","storageBtnThree")
        
   })
   
   
   //For Delivery Buttons
   
   document.getElementById("delivery-button-one").addEventListener("click", function () {
   
       updatePrice ("delivery","deliveryBtnOne")
       
   })

     
   document.getElementById("delivery-button-two").addEventListener("click", function () {
   
       updatePrice ("delivery","deliveryBtnTwo")
       
   })

   
   //Promo Code Section 


   document.getElementById("apply-btn").addEventListener("click", function () {
if (document.getElementById("promo-code").value == "stevekaku") {




    var discountAmount =  parseInt(document.getElementById("ultimate-total").innerText)/20;
    var Total = document.getElementById("ultimate-total").innerText - discountAmount;
    var ultimateTotal = Total - currentCost;

    document.getElementById("ultimate-total").innerText = ultimateTotal;
    document.getElementById("promo-code").value = "";
}
   })
   
     
   
       
   
   
    