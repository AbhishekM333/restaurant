function MenuContent() {
    let parentDiv = document.getElementById('content');
    parentDiv.innerHTML = `<div class="menu">
    <table>
     <tr>
         <th>Menu Items</th>
         <th>Price</th>
     </tr>
     <tr>
         <td>tea</td>
         <td>80 Rs</td>
     </tr>
     <tr>
         <td>Coffee</td>
         <td>120 Rs</td>
     </tr>
     <tr>
         <td>Fresh lime</td>
         <td>50 Rs</td>
     </tr>
     <tr>
         <td>Pasta</td>
         <td>200 Rs</td>
     </tr>
     <tr>
         <td>Noodles</td>
         <td>190 Rs</td>
     </tr>
     <tr>
         <td>Biriyani</td>
         <td>280 Rs</td>
     </tr>
    </table>
 </div>`;
    
   
  }
  
  export { MenuContent };