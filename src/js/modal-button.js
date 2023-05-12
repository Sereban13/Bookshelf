

const modalButton = document.querySelector('.js-modal-button');

const STORAGE_KEY = 'books-cart-list';

modalButton.addEventListener('click', onClick);

createShoppingList(); 

function onClick(evt) {

}


function createShoppingList() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData) {
    const { email, message } = savedData; // доделать деструктуризацию с правильными переменными

	//TODO: вызов функции создания списка корзины
  }

	else {
		//TODO: вызов функции создания пустой корзины
	}
}

// Функция создания пустой корзины

const cartEl = document.querySelector('.cart')

function drawEmptyCart() {

	const markup = `
	<div>
		<p>This page is empty, add some books and proceed to order.</p>
		<img src="" alt="">
	</div>
	`

	cartEl.innerHTML = 
}
