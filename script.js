const products = [
  { id: 1, name: "Laptop", price: 999.99, category: "Electronics", image: "https://via.placeholder.com/250x200?text=Laptop" },
  { id: 2, name: "Smartphone", price: 699.99, category: "Electronics", image: "https://via.placeholder.com/250x200?text=Smartphone" },
  { id: 3, name: "Headphones", price: 199.99, category: "Electronics", image: "https://via.placeholder.com/250x200?text=Headphones" },
  { id: 4, name: "Running Shoes", price: 89.99, category: "Sports", image: "https://via.placeholder.com/250x200?text=Running+Shoes" },
  { id: 5, name: "Yoga Mat", price: 29.99, category: "Sports", image: "https://via.placeholder.com/250x200?text=Yoga+Mat" },
  { id: 6, name: "Coffee Maker", price: 79.99, category: "Home", image: "https://via.placeholder.com/250x200?text=Coffee+Maker" },
  { id: 7, name: "Blender", price: 49.99, category: "Home", image: "https://via.placeholder.com/250x200?text=Blender" },
  { id: 8, name: "Novel", price: 14.99, category: "Books", image: "https://via.placeholder.com/250x200?text=Novel" },
];

const productContent = document.getElementById('product-content'); 
const productContainer = document.getElementById('product-container');
const productButtons = document.querySelector('.menu');

function FetchProducts(displayProduct) {
  productContainer.innerHTML = '';

  for (let i = 0; i < displayProduct.length; i++) {
    const product = displayProduct[i];

    const productItem = document.createElement('div');
    productItem.classList.add('single-item');

    const productImg = document.createElement('div');
    productImg.classList.add('product-img');
    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    productImg.appendChild(img);

    const titleWrap = document.createElement('div');
    titleWrap.classList.add('title-wrap');

    const title = document.createElement('h3');
    title.classList.add('title');
    title.textContent = product.name;

    const productPrice = document.createElement('div');
    productPrice.classList.add('product-price');
    productPrice.textContent = product.price;

    titleWrap.appendChild(title);
    titleWrap.appendChild(productPrice);

    const typess = document.createElement('div');
    typess.classList.add('product-rating');

    const category = document.createElement('div');
    category.classList.add('category');
    category.textContent = product.category;

    typess.appendChild(category);

    productItem.appendChild(productImg);
    productItem.appendChild(titleWrap);
    productItem.appendChild(typess);

    productContainer.appendChild(productItem);
  }
}

productContent.appendChild(productContainer);

function categoryButton(category, onClick) {
  const button = document.createElement('button');
  button.classList.add('product-links');
  button.textContent = category;
  button.addEventListener('click', onClick);
  return button;
}

function addCategoryButtons() {
  const categories = ['All', 'Electronics', 'Sports', 'Home', 'Books'];
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    const button = categoryButton(category, () => {
      FetchProducts(category === 'All' ? products : products.filter(product => product.category === category));
    });
    productButtons.appendChild(button);
  }
}

document.getElementById('filter').addEventListener('keyup', (e) => {
  const text = e.target.value.toLowerCase();
  FetchProducts(products.filter(product => product.category.toLowerCase().includes(text)));
});

addCategoryButtons();
FetchProducts(products);
