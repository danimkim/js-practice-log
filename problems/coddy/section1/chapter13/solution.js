// 기존에 내가 작성한 답안
// let groceryList = [];

// function addItem(item) {
//   groceryList.push(item);
//   console.log(`${item} added to the grocery list.`);
// }

// function removeItem(item) {
//   if (groceryList.indexOf(item) === -1) {
//     console.log(`${item} is not in the grocery list.`);
//   } else {
//     groceryList = groceryList.filter((grocery) => grocery !== item);
//     if (!groceryList.includes(item)) {
//       console.log(`${item} removed from the grocery list.`);
//     } else {
//       console.log(`Error: Something went wrong!`);
//     }
//   }
// }

// function viewList() {
//   if (!groceryList.length) {
//     console.log(`The grocery list is empty.`);
//     return;
//   }
//   const prompt = ['Grocery List:'];
//   groceryList.forEach((item, idx) => {
//     prompt.push(`${idx + 1}. ${item}`);
//   });
//   console.log(prompt.join('\n'));
// }

// viewList();
// addItem('Milk');
// addItem('Bread');
// addItem('Eggs');
// viewList();
// removeItem('Bread');
// viewList();
// removeItem('Cheese');

// ==========================

let groceryList = [];

function addItem(item) {
  groceryList.push(item);
  console.log(`${item} added to the grocery list.`);
}

function removeItem(item) {
  // Use Object.is for consistent equality (e.g., NaN support).
  const hasItem = groceryList.some((grocery) => Object.is(grocery, item));
  if (!hasItem) {
    console.log(`${item} is not in the grocery list.`);
    return;
  }

  const beforeLength = groceryList.length;
  groceryList = groceryList.filter((grocery) => !Object.is(grocery, item));
  const removedCount = beforeLength - groceryList.length;

  if (removedCount > 0) {
    console.log(`${item} removed from the grocery list.`);
  }
}

function viewList() {
  if (!groceryList.length) {
    console.log(`The grocery list is empty.`);
    return;
  }
  const prompt = ['Grocery List:'];
  groceryList.forEach((item, idx) => {
    prompt.push(`${idx + 1}. ${item}`);
  });
  console.log(prompt.join('\n'));
}

viewList();
addItem('Milk');
addItem('Bread');
addItem('Eggs');
viewList();
removeItem('Bread');
viewList();
removeItem('Cheese');
