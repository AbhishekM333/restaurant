import { HomeContent } from './home';
import { MenuContent } from './menu';
import { contactContent } from './contact';
import './style.css'


HomeContent();

document.getElementById('home').addEventListener('click', (e) => {
    HomeContent();
});

document.getElementById('menu').addEventListener('click', (e) => {
    MenuContent();
});

document.getElementById('contact').addEventListener('click', (e) => {
    contactContent();
});