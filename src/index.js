import './style.css';
import pizzaImage from './images/pizza.jpg';

const content = document.getElementById('content');
content.innerHTML = `
  <h1>Pizza Palace</h1>
  <img src="${pizzaImage}" alt="pizza" id="pizza-image">
  <h2>Welcome to Our Restaurant</h2>
  <p>At our restaurant, we serve the best pizza with the freshest ingredients. Come and enjoy an unforgettable dining experience with us.</p>
`;