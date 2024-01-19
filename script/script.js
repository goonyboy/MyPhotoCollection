//Бургер меню с помощью добавления класса open header'у
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector("header").classList.toggle("open")
  })
})

//Сортировка массива по алфавиту (сортировка пузырьком)

// let sortByName = document.querySelector('#sort');
// replaceNode = sortByName.replaceChild(sort.children[1], sort.children[0]);
// sortByName.appendChild(replaceNode);
document.querySelector('#sort-asc').onclick = mySort;
document.querySelector('#sort-desc').onclick = mySortDesc;

function mySort() {
  let sortByName = document.querySelector('#sort');
  for (let i = 0; i < sort.children.length; i++) {
    for (let j = i; j < sort.children.length; j++) {
      if (+sort.children[i].getAttribute('data-sort') > +sort.children[j].getAttribute('data-sort')) {
        replaceNode = sortByName.replaceChild(sort.children[j], sort.children[i]);
        insertAfter(replaceNode, sort.children[i])
      }

    }
  }
}

function mySortDesc() {
  let sortByName = document.querySelector('#sort');
  for (let i = 0; i < sort.children.length; i++) {
    for (let j = i; j < sort.children.length; j++) {
      if (+sort.children[i].getAttribute('data-sort') < +sort.children[j].getAttribute('data-sort')) {
        replaceNode = sortByName.replaceChild(sort.children[j], sort.children[i]);
        insertAfter(replaceNode, sort.children[i])
      }

    }
  }
}

function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling)
}