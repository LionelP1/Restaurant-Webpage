import './style.css';
import createHomePage from './homepage';
import createMenuPage from './menu';
import createContactPage from './contact';

function initializeSite() {
  const contentDiv = document.getElementById('content');
  const homeBtn = document.getElementById('home');
  const menuBtn = document.getElementById('menu');
  const contactBtn = document.getElementById('contact');

  function loadPage(pageFunction) {
    contentDiv.innerHTML = '';
    contentDiv.appendChild(pageFunction());
  }

  homeBtn.addEventListener('click', () => loadPage(createHomePage));
  menuBtn.addEventListener('click', () => loadPage(createMenuPage));
  contactBtn.addEventListener('click', () => loadPage(createContactPage));
  loadPage(createHomePage);
}



initializeSite();