const sorter = document.querySelector("select");
const list = document.querySelector("ol");

sorter.addEventListener("change", handleSort);
let currentOrder = sorter.value;

if(currentOrder == "oldest") reverseList();

function handleSort(e) {
  if (e.target.value != currentOrder) {
    reverseList();
    currentOrder = e.target.value
  }
}

function reverseList() {
    const reversedList  = Array.from(list.children).reverse()
    list.innerHTML = null;
    for (let listItem of reversedList) {
    list.appendChild(listItem);
  }
}

document.querySelectorAll("a").forEach(link => link.setAttribute("target", "_blank"))