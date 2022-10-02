const listByClass = document.querySelectorAll('.item');
const innerListTitle = document.querySelectorAll('h2');
const innerList = document.querySelectorAll('.item ul');

console.log(`Number of categories: ${listByClass.length}

Category: ${innerListTitle[0].textContent}
Elements: ${innerList[0].children.length}

Category: ${innerListTitle[1].textContent}
Elements: ${innerList[1].children.length}

Category: ${innerListTitle[2].textContent}
Elements: ${innerList[2].children.length}`);