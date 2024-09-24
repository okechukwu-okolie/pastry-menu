fetch('data.json')
.then((data)=>{
    return data.json()
})
.then((menuInfo)=>{
    let placeHolder = document.querySelector('#cardGrid');  
    
    
    let out = '';
    for(let menu of menuInfo){
        out += `

        <div class='cardHolder'>
          <img src="${menu.image.desktop}" >
          
          <button id='cart-btn' onclick='change()' ><img  id='img' src="./assets/images/icon-add-to-cart.svg" alt=""><span id='span'>Add to Cart</span>
          
          <span onclick='subtract()' style="display: none;" class="change-btn" id="one">(-)</span><span onclick='display()' style="display: none;" class="change-btn" id="two">0</span><span onclick='addition()' style="display: none;" class="change-btn" id="three">(+)</span></button>
          
          <h4>${menu.category}</h4>
          <h2>${menu.name}</h2>
          <h3>$${menu.price.toFixed(2)}</h3>
         </div>


        
        `
        let cardStyling = document.getElementById('cardGrid');
        cardStyling.classList.add('card')
    }
    
    placeHolder.innerHTML = out; 
})






function change(){
    
    let button =document.getElementById('cart-btn');
    button.style.backgroundColor = 'orangeRed';

    let span1 = document.getElementById('img');
    span1.style.display = 'none';


    let span2 = document.getElementById('span');
    span2.style.display = 'none';
     let span3 = document.getElementById('one');
    span3.style.display = 'inline';
    
    

    let span4 = document.getElementById('two');
    span4.style.display = 'inline';
   

    let span5 = document.getElementById('three');
    span5.style.display = 'inline';

}
    for(let i = 0; i <= data.length ; i++){
                
        let display = document.getElementById('two');

        let num = 0;
        function addition(){
            
            display.innerHTML = ++num;
            document.getElementById('two').innerHTML = num
        }

        function subtract(){

            if(num == 0){
                document.getElementById('two').innerHTML = 0
                }else{
                display.innerHTML = --num;
                document.getElementById('two').innerHTML = num
            }
        }

    }








fetch('data.json')
.then((data)=>{
    return data.json()
})
.then((data)=>{
    // console.log(data.length)




})