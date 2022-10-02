const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')

//// Alternative ////////

// for (const ingredient of ingredients) {
//   const listItem = document.createElement('li')
//   listItem.textContent = ingredient
//   listItem.classList.add('item')
//   ingredientsList.append(listItem)
// }


const markup = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join('')
ingredientsList.innerHTML = markup
