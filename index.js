let itemList = document.getElementById('items-list');

let itemCounter = 0;

window.onload = () => {
  addItemsToList();
}

function addItemsToList() {
  for (let i = 0; i < 25; i++) {
    let li = document.createElement('li');
    li.innerText = `Masai Student ${++itemCounter}`;
    itemList.append(li);
  }
}

itemList.addEventListener('scroll', (e) => {

  if (Math.ceil(e.target.scrollTop) == (e.target.scrollHeight - e.target.clientHeight)) {
    addItemsToList();
  }

});