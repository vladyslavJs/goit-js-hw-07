const categories = document.querySelectorAll("#categories .item"); 
console.log(`Numbers of categories: ${categories.length}`);

categories.forEach((category) => {
    const categoryofName = category.firstElementChild.textContent;
    console.log(`Category: ${categoryofName}`);

    const categoryofValue = category.lastElementChild;
    console.log(`Elements: ${categoryofValue.children.length}`);
});