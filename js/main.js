window.onload = function(){
function table(nav){
	$(nav).hover(function(){
		$(".hover-link").show();
	},
	function(){
		$(".hover-link").hide();	
	});
};
table(".men");
table(".women");
table(".accessories");
const imgs = $('img');
document.addEventListener('click', showItem);
const close = document.querySelector('.close');

function showItem(e){
	let element = e;
	const display = document.querySelector('.card');
	const shadow = document.querySelector('.covering-block');
	let head = document.querySelector('.card-des');
	let img = document.querySelector('.card-img');
	let price = document.querySelector('.card-cost');
	let name = document.querySelector('.card-name');
    console.log(e)
if (element.srcElement.className == 'item-img slide-img'){
    shadow.style.display = 'grid';
	head.text = $('.slide-head').text;
    name.text = $('.item-name').text;
img.setAttribute('src',e.srcElement.currentSrc);   
//'img/ian-dooley-TT-ROxWj9nA-unsplash.jpg' ;//e.srcElement.currentSrc;
	
        }
     close.onclick = function(){
        shadow.style.display = 'none';             };
    shadow.focusout= function(){
        this.style.display = 'none'; 
    }

    }
}

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

