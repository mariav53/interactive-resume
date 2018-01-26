'use strict';
// //función alert
var shower = document.getElementById('fd');
var eva = document.querySelector('.thanks');
function alertHandler (){
	 eva.classList.add('show');
}
shower.addEventListener('click', alertHandler);
