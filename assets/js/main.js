
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
    
    const navIcon = document.querySelector(".fa-bars");
    navIcon.addEventListener("click", ()=>{
        navbar.style.display = 'block';
    })
    
      
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
            if(window.innerWidth < 576){
                navbar.style.display = 'none';
            }
            main.innerHTML = '';
            document.title = 'Shopping Mall - Our Story'
            main.innerHTML = Story;
        })
    })    
    
    
    // ============================
    // add craft section 
    // ============================
    const craft = document.querySelectorAll('a[href="#craft"]');
    craft.forEach(craft=>{
        craft.addEventListener("click", ()=>{
            if(window.innerWidth < 576){
                navbar.style.display = 'none';
            }
            main.innerHTML = '';
            document.title = 'Shopping Mall - Our Craft'
            main.innerHTML = Craft;
        })
    })    
    
    
    // ============================
    // add faq section 
    // ============================
    const faq = document.querySelector('a[href="#faq"]');
    faq.addEventListener("click", ()=>{
        if(window.innerWidth < 576){
            navbar.style.display = 'none';
        }
        main.innerHTML = '';
        document.title = 'Shopping Mall - Our Craft'
        main.innerHTML = Faq;

        const faqBtn1 = document.querySelector("#faq-i-1");
        const faqBtn2 = document.querySelector("#faq-i-2");
        const faqBtn3 = document.querySelector("#faq-i-3");
        faqBtn1.addEventListener("click", ()=>{
            document.querySelector("#faq-ans-1").classList.toggle("hide")
            faqBtn1.classList.toggle("fa-angle-up");
        })
        faqBtn2.addEventListener("click", ()=>{
            document.querySelector("#faq-ans-2").classList.toggle("hide")
            faqBtn2.classList.toggle("fa-angle-up");
        })
        faqBtn3.addEventListener("click", ()=>{
            document.querySelector("#faq-ans-3").classList.toggle("hide")
            faqBtn3.classList.toggle("fa-angle-up");
        })
    })

    

})


const Header = `
<a href="index.html">
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
    <li><a href="#craft">Our Craft</a></li>
    <li><a href="#">Gift Card</a></li>
    <li><a href="#">Contact Us</a></li>
    <li><a href="#">Login</a></li>
</ul>
`
const Footer = `
<a href="index.html">
    <div>
        <h2>ShoppingMall</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus totam incidunt sit debitis dolorum? Voluptas assumenda possimus nam ipsa reprehenderit. Vero officia maiores adipisci laborum excepturi molestias voluptas libero fugit.</p>
    </div>
</a>

<ul>
    <li><a href="#">Shop All</a></li>
    <li><a href="#story">Our Story</a></li>
    <li><a href="#craft">Our Craft</a></li>
    <li><a href="#">Gift Card</a></li>
    <li><a href="#">Contact</a></li>
</ul>
<ul>
    <li><a href="#faq">FAQ</a></li>
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


const Craft =
`
<section id="craft">
    <h2>Our Craft</h2>
    <div class="first-div div">
        <div class="left">
            <h3>DESIGN</h3>
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. click “Edit Text” or double click me to add your own content and make changes to the font.</p>
            <p>Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        </div>
        <div class="right">
            <img src="./assets/images/craft-1.webp" alt="our story image" class="img-adjust">
        </div>
    </div>
    <div class="second-div div">
        <div class="left">
            <h3>SELECTION</h3>
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. click “Edit Text” or double click me to add your own content and make changes to the font.</p>
            <p>Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        </div>
        <div class="right">
            <img src="./assets/images/craft-2.webp" alt="our story image" class="img-adjust">
        </div>
    </div>
    <div class="third-div div">
        <div class="left">
            <h3>CRAFTSMANSHIP</h3>
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. click “Edit Text” or double click me to add your own content and make changes to the font.</p>
            <p>Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        </div>
        <div class="right">
            <img src="./assets/images/craft-3.webp" alt="our story image" class="img-adjust">
        </div>
    </div>
</section>
`

const Faq = 
`
<section id="faq">
    <h2>F A Q</h2>
    <h3>Frequently Asked Questions</h3>
    <div class="ques-ans">
        <div class="ques">
            <p>How do I track my order?</p>
            <p><i id="faq-i-1" class="fa-solid fa-angle-down"></i></p>
        </div>
        <div class="ans hide" id="faq-ans-1">
            <p>Once your order is shipped, you will receive a confirmation email with a tracking number and a link to track your package. You can also log in to your account on our website, go to the "My Orders" section, and click on the tracking link next to your order for the latest updates.</p>
        </div>
    </div>
    <div class="ques-ans">
        <div class="ques">
            <p>What is your return policy?</p>
            <p><i id="faq-i-2" class="fa-solid fa-angle-down"></i></p>
        </div>
        <div class="ans hide" id="faq-ans-2">
            <p>We accept returns within 30 days of the delivery date. Items must be in their original condition, unworn, and with all tags attached. To initiate a return, visit our Returns page, fill out the return form, and follow the instructions provided. Once we receive and inspect the returned items, we will process your refund within 5-7 business days.</p>
        </div>
    </div>
    <div class="ques-ans">
        <div class="ques">
            <p>How can I contact customer support?</p>
            <p><i id="faq-i-3" class="fa-solid fa-angle-down"></i></p>
        </div>
        <div class="ans hide" id="faq-ans-3">
            <p>Our customer support team is available to assist you 24/7. You can reach us via email at <a href="mailto:arunkumar032024@gmail.com">support@gmail.com</a>, through our live chat feature on the website, or by calling our toll-free number at 1-800-123-4567. We strive to respond to all inquiries within 24 hours.</p>
        </div>
    </div>
</section>
`