
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
            document.addEventListener('click', showItem);   
    const buyBtn = document.querySelector('.buy-btn');
    const close = document.querySelector('.close'); 
    const shadow = document.querySelector('.covering-block');
    const display = document.querySelector('.card');
	let head = document.querySelector('.card-des');
	let img = document.querySelector('.card-img');
	let price = document.querySelector('.card-cost');
	let name = document.querySelector('.card-name');
	let wallet = document.querySelector('.amount');
	let balance = parseInt(wallet.innerText.slice(1),10);
    
function showItem(e){
	let element = e;
	console.log(e)
        if (element.srcElement.className == 'item-img slide-img'){
            shadow.style.display = 'grid';
            img.setAttribute('src',e.srcElement.currentSrc);   
            name.innerText = e.srcElement.nextElementSibling.childNodes[1].innerText;
            head.innerText = e.srcElement.parentElement.parentElement.previousElementSibling.innerHTML;
            cost = e.srcElement.parentElement.childNodes[5].childNodes[3].innerHTML;
           let Cost = parseInt(cost.slice(1),10);
            
                price.innerText = cost;
            function buy() {
		      balance -= Cost;
                alert("Added in cart:"+name.innerText);
		      if (Cost > balance){
			     alert('Not enough money!!');
                  return null;
		      }
                wallet.innerText = `'$'${balance}`;
                alert('Remaining Balance :'+balance)
		      return balance;
            }
        buyBtn.addEventListener('click',buy);
        }
    
    }   
    
        function closeCard(e){
            e.onclick = function(){
            shadow.style.display = 'none'; 
        }
    
    }
       closeCard(shadow || close);
}
// for (i in Womens) {
// 	for (j in Womens[i]){
// 		if(i ==0 )
// 			{
			
// 			console.log(img.src);
// 		}
// 	}
// }

// const display = document.createElement(div);
// const shadow = document.createElement(div);
// const item = $('.item-image');
// const itemName = $('.item-name');
// const price = $('.item-cost');
// let icons = {cart:'.fas fa-cart-plus', bookmark:'.fas fa-bookmark', comment:'.fas fa-msg-bubble',review:'.fas fa-eye'};
// const buyBtn = document.createElement(button);
// const wishBtn = document.createElement(button);

// display.className('display');
// shadow.className('shadow');
// buyBtn.className('buyBtn');
// wishBtn.className('.wishBtn');

// document.body.appendChild(shadow);
// document.display.append(item,itemName,price

