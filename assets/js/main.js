import {Header} from "../components/Header.js"
import {Navbar} from "../components/Navbar.js"

const apiUrl = 'https://dummyjson.com/products/search?q=shirt';



window.addEventListener('DOMContentLoaded', () => {
    // ============================
    // add header section 
    // ============================

    const header = document.querySelector('header');
    header.innerHTML = Header;


    // ============================
    // add navbar section 
    // ============================
    const navbar = document.querySelector('nav');
    navbar.innerHTML = Navbar;

})