
window.addEventListener('DOMContentLoaded', () => {
    


// const apiUrl = 'https://dummyjson.com/products/search?q=shirt';

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


const Header = `
<a href="">
<div class="title-container">
    <img src="./assets/images/logo.png" class="title-img" />
    <h1>ShoppingMall</h1>
</div>
</a>
<div class="social-icons-container">
    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
    <a href="#"><i class="fa-brands fa-instagram"></i></a>
    <a href="#"><i class="fa-brands fa-twitter"></i></a>
    <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
</div>
<div class="cart-icon-container">
    <i class="fa-solid fa-cart-shopping"></i>
    <span id="cartQuantity">0</span>
</div>
<div class="list-icon-container">
    <i class="fa-solid fa-bars"></i>
</div>
`

const Navbar = `
<ul>
    <li><a href="#">Shop All</a></li>
    <li><a href="#story">Our Story</a></li>
    <li><a href="#">Our Craft</a></li>
    <li><a href="#">Gift Card</a></li>
    <li><a href="#">Contact Us</a></li>
    <li><a href="#">Login</a></li>
</ul>
`
const Footer = `
<a href="#">
    <div>
        <h2>ShoppingMall</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus totam incidunt sit debitis dolorum? Voluptas assumenda possimus nam ipsa reprehenderit. Vero officia maiores adipisci laborum excepturi molestias voluptas libero fugit.</p>
    </div>
</a>

<ul>
    <li><a href="#">Shop All</a></li>
    <li><a href="#story">Our Story</a></li>
    <li><a href="#">Our Craft</a></li>
    <li><a href="#">Gift Card</a></li>
    <li><a href="#">Contact</a></li>
</ul>
<ul>
    <li><a href="#">FAQ</a></li>
    <li><a href="#">Shipping & Returns</a></li>
    <li><a href="#">Store Policy</a></li>
    <li><a href="#">Payment Methods</a></li>
    <li><a href="#">Stockists</a></li>
</ul>
<ul>
    <li><a href="#">Facebook</a></li>
    <li><a href="#">Instagram</a></li>
    <li><a href="#">Twitter</a></li>
    <li><a href="#">Pinterest</a></li>
</ul>
<div>
    <h3>Join Us</h3>
    <div class="input-box">
        <label for="email">Email*</label>
        <input type="email" id="email">
    </div>
    <button id="send">Send</button>
</div>
`
const Story = `
<section id="story">
    <h2>Our story</h2>
    <div class="first-div div">
        <div class="left">
            <h3>THE BRAND</h3>
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. click “Edit Text” or double click me to add your own content and make changes to the font.</p>
            <p>Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        </div>
        <div class="right">
            <img src="./assets/images/story-1.webp" alt="our story image" class="img-adjust">
        </div>
    </div>
    <div class="second-div div">
        <div class="left">
            <h3>THE DESIGNERS</h3>
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. click “Edit Text” or double click me to add your own content and make changes to the font.</p>
            <p>Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        </div>
        <div class="right">
            <img src="./assets/images/story-2.webp" alt="our story image" class="img-adjust">
        </div>
    </div>
</section>
`
