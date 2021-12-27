   function footer(){

   //Footer Div
   var footerDiv = document.createElement("DIV");

   footerDiv.style.width = "100%";
   footerDiv.style.height = "100px";
   footerDiv.style.backgroundColor = "#64b9ef";

   var footerContent = document.createElement("Div");

   footerContent.innerHTML = "<p>Copyright © 2021 RG | All Rights Reserved</p>"
   footerContent.style.color = "#000000";
   footerContent.style.fontSize = "20px";
   footerContent.style.textAlign = "center";
   footerContent.style.fontFamily = "calibri";
   footerContent.style.paddingTop = "20px";

   footerDiv.appendChild(footerContent);
   document.body.appendChild(footerDiv);

   }