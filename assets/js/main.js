import {Header} from "../components/Header.js"

const apiUrl = 'https://dummyjson.com/products/search?q=shirt';



window.addEventListener('DOMContentLoaded', () => {
    // ============================
    // add header section 
    // ============================

    const header = document.querySelector('header');
    header.innerHTML = Header;

})