
window.onload = function(){

function hov(nav, e){
	$(nav).hover(function(){
		$(e).show();
	},
	function(){
		$(e).hide();	
	});
};

hov(".men", ".men-link");
hov(".women", ".women-link" );
hov(".accessories", ".access-link");
hov(".wallet-list-wrap", ".wallet-pop");    
if(document.body.offsetWidth <= 520){
    hov(".category" , ".category a");    
    $(".category-wrap").css('display','flex');
    }
    
    let cost,Cost = 0;
    let item =  document.querySelectorAll('.item-img'); 
    document.addEventListener('click', showItem);   
   
    
    const close = document.querySelector('.close'); 
    const shadow = document.querySelector('.covering-block');
    const display = document.querySelector('.card');
	let head = document.querySelector('.card-des');
	let img = document.querySelector('.card-img');
	let price = document.querySelector('.card-cost');
	let name = document.querySelector('.card-name');
	let wallet = document.querySelector('.amount');
	let balance = parseInt(wallet.innerText.slice(1),10);
     const buyBtn = document.querySelector('#buy');
  
function showItem(e){
	let element = e;
   
        if (element.srcElement.className == 'item-img slide-img'){
            shadow.style.display = 'grid';
            img.setAttribute('src',e.srcElement.currentSrc);   
            name.innerText = e.srcElement.nextElementSibling.childNodes[1].innerText;
            head.innerText = e.srcElement.parentElement.parentElement.previousElementSibling.innerHTML;
            cost = e.srcElement.parentElement.childNodes[5].childNodes[3].innerHTML;
          price.innerText = cost;
         Cost = parseInt(cost.slice(1),10);                 
        }
    else if (element.srcElement.className == 'buy-btn'){
        if (balance < Cost){
            alert("Sorry, Not enough money!!")
        }
                else{
                    balance -= Cost;
                    alert("Added in cart:"+name.innerText);
                wallet.innerText = `$${balance}`;
                alert('Remaining Balance :'+balance);
                }
    }
             
    
        }
//      function buy(f){
//        f.onclick = function() {
//		      balance -= Cost;
//                alert("Added in cart:"+name.innerText);
//                wallet.innerText = `$${balance}`;
//                alert('Remaining Balance :'+balance);
//                return balance;
//            }    
        function closeCard(e){
            e.onclick = function(){
            shadow.style.display = 'none'; 
        }
    
        }
        closeCard(close);

}