import {Header} from "../_components/Header.js"
import {Navbar} from "../_components/Navbar.js"
import {Footer} from "../_components/Footer.js"
import {Story} from "../_components/Story.js"


window.addEventListener('DOMContentLoaded', () => {
    


const apiUrl = 'https://dummyjson.com/products/search?q=shirt';

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
    
    
      
    // ============================
    // add footer section 
    // ============================
    const footer = document.querySelector('footer');
    footer.innerHTML = Footer;

    // ============================
    // add navbar section 
    // ============================
    const main = document.querySelector('main');
    

    // ============================
    // add story section 
    // ============================
    const story = document.querySelectorAll('a[href="#story"]');
    story.forEach(story=>{
        story.addEventListener("click", ()=>{
            main.innerHTML = '';
            document.title = 'Shopping Mall - Our Story'
            main.innerHTML = Story;
        })
    })    


})