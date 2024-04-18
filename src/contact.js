function contactContent() {
    let parentDiv = document.getElementById('content');
    parentDiv.innerHTML = `
    <div class="contact">
  <div class="box">
    <div class="left">
      <div class="contact">CONTACT US</div>
      <div>Have questions about our products, support services, or

        anything else? Let us know and we'll get back to you.</div>
    </div>
    <div class="right">
        <p style=" font-weight: bold;">ADDRESS</p>
        <p class="address"> <br>

            Registered & Corporate Office:<br>
            
            Barbeque-Nation Hospitality Limited<br>
            
            
            Saket Callipolis, Unit No. 601 & 602,<br>
            
            6th Floor, Doddakannalli Village, Varthur Hobli,<br>
            
            Sarjapur Road, Bengaluru – 560035<br>
            
            Karnataka, India</p><br>
    </div>
  </div>
</div>
`
     
    
  }
  
  export { contactContent };