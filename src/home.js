function HomeContent() {
    let parentDiv = document.getElementById('content');
    parentDiv.innerHTML = `
     <div class="home">
         <div>
         <h1>Flame Burger</h1>
         </div>
         <img src="https://png.pngtree.com/thumb_back/fw800/background/20230815/pngtree-two-plates-of-food-and-a-bowl-image_13058331.jpg" alt="">
     </div>

    `;
    
  }
  
  export { HomeContent };