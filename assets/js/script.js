
const books = [
    {
        id: 1,
        title: "Stress Relief Coloring Book for Adults and Kids",
        image: "assets/img/StressRelief.png", //
        type: "book",
        shortDesc: "Adorable animal designs for kids to color and enjoy.",
        fullDesc: "Dive into a world of cute and playful animals with intricate patterns perfect for young colorists. This book includes 50 pages of fun, easy-to-color illustrations that spark imagination and creativity.",
        price: "Available Variant:",
        price2: "Physical Book & PDF Ready to Print",
        amazonLink: "https://a.co/d/b1Ao1iX",
        gumroadLink: "https://roseteejay.gumroad.com/l/epjllw",
        payhipLink: "https://payhip.com/b/tPKgA"
    },
    {
        id: 2,
        title: "Spooky Cute Halloween Coloring Book for Kids",
        image: "assets/img/Holloween.png",
        type: ["book", "pdf"],
        shortDesc: "Cute, fun, and spooky!",
        fullDesc: "This Halloween coloring book is filled with adorable ghosts, pumpkins, and friendly monsters — perfect for kids who love a mix of spooky and sweet.",
        price: "Available Variant:",
        price2: "Physical Book & Ready to Print",
        amazonLink: "https://a.co/d/a9KfUge",
        gumroadLink: "https://roseteejay.gumroad.com/l/aulqh",
        payhipLink: "https://payhip.com/b/ftgRk"
    },
    {
        id: 3,
        title: "Christmas Wonderland Coloring Book",
        image: "assets/img/christmas.png",
        type: ["book", "pdf"],
        shortDesc: "Christmas Vibes, Relaxing and Fun!",
        fullDesc: "Escape the holiday rush and find your calm with the Christmas Wonderland Coloring Book. Featuring intricate designs of festive decor, elegant winter landscapes, and detailed holiday patterns, this book is a perfect creative sanctuary.",
        price: "Available Variant:",
        price2: "Physical Book & PDF Ready to Print",
        amazonLink: "https://a.co/d/4C3phKX",
        gumroadLink: "https://roseteejay.gumroad.com/l/lcpfxq",
        payhipLink: "https://payhip.com/b/x4CsQ"
    },

    {
        id: 4,
        title: "Girl Moments: Cozy & Cute Coloring Book",
        image: "assets/img/GirlMoments.png",
        type: ["book", "pdf"],
        shortDesc: "Step into a world of cozy vibes and cute moments with Girl Moments",
        fullDesc: "This delightful collection features charming illustrations of everyday girl life — from lazy coffee mornings and journaling in bed to relaxing self-care nights and dreamy outfit days.",
        price: "Available Variant",
        price2: "PPDF Ready to Print",
        amazonLink: "",
        gumroadLink: "https://roseteejay.gumroad.com/l/fknjo",
        payhipLink: "https://payhip.com/b/3JyNK"
    },
   
    
];


function loadGallery() {
    const gallery = document.getElementById('book-gallery');
    gallery.innerHTML = '';

   
    const shuffledBooks = [...books].sort(() => Math.random() - 0.5);

    shuffledBooks.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>${book.shortDesc}</p>
            <button onclick="openDetails(${book.id})">View Details</button>
        `;
        gallery.appendChild(card);
    });
}


function openDetails(id) {
    const book = books.find(b => b.id === id);
    const details = document.getElementById('book-details');
    details.innerHTML = `
        <img src="${book.image}" alt="${book.title}">
        <h2>${book.title}</h2>
        <p>${book.fullDesc}</p>
        <p><strong>${book.price}</strong></p>
             <p><strong>${book.price2}</strong></p>
        <button class="putanginamo" onclick="openBuy(${book.id})">Buy Now</button>
    `;
    document.getElementById('details-modal').style.display = 'flex';
}


function openBuy(id) {
    const book = books.find(b => b.id === id);
    const options = document.getElementById('buy-options');

    options.innerHTML = `
        <span class="close" onclick="closeModal('buy-modal')">&times;</span>
        <h2>Choose Your Store</h2>

        <div class="buy-section">
            <h3>📘 Physical Coloring Book</h3>
            <a href="${book.amazonLink}" target="_blank" class="buy-btn">Buy on Amazon</a>
        </div>

        <div class="buy-section">
            <h3>💾 Printable PDF</h3>
            <a href="${book.gumroadLink}" target="_blank" class="buy-btn">Buy on Gumroad</a>
            <a href="${book.payhipLink}" target="_blank" class="buy-btn">Buy on Payhip</a>
        </div>
    `;

    document.getElementById('buy-modal').style.display = 'flex';
}





function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}


window.onclick = function(event) {
    const detailsModal = document.getElementById('details-modal');
    const buyModal = document.getElementById('buy-modal');
    if (event.target === detailsModal) closeModal('details-modal');
    if (event.target === buyModal) closeModal('buy-modal');
};


document.addEventListener('DOMContentLoaded', loadGallery);


let heroIndex = 0;
const slides = document.querySelectorAll('.hero-slider .slide');
const dotsContainer = document.getElementById('hero-dots');


slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => goToHeroSlide(i));
    dotsContainer.appendChild(dot);
});
const dots = dotsContainer.querySelectorAll('span');

function showHeroSlide(n) {
    if(n >= slides.length) heroIndex = 0;
    if(n < 0) heroIndex = slides.length - 1;

    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    slides[heroIndex].classList.add('active');
    dots[heroIndex].classList.add('active');
}


function changeHeroSlide(n) {
    heroIndex += n;
    showHeroSlide(heroIndex);
}


function goToHeroSlide(n) {
    heroIndex = n;
    showHeroSlide(heroIndex);
}


setInterval(() => {
    heroIndex++;
    showHeroSlide(heroIndex);
}, 5000);


showHeroSlide(heroIndex);


function handleBottomNav() {
    const navItems = document.querySelectorAll('.bottom-nav .nav-item');
    const pages = document.querySelectorAll('.page');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

 
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            const type = item.dataset.type;

    
            let targetPage;
            if (type === 'all') targetPage = document.getElementById('home-page');
            else if (type === 'book') targetPage = document.getElementById('books-page');
            else if (type === 'pdf') targetPage = document.getElementById('pdf-page');

        
            pages.forEach(page => {
                if (page === targetPage) {
                    page.classList.add('active', 'slide-in-right');
                    page.classList.remove('slide-out-left');
                } else if (page.classList.contains('active')) {
                    page.classList.add('slide-out-left');
                    setTimeout(() => page.classList.remove('active', 'slide-out-left', 'slide-in-right'), 500);
                } else {
                    page.classList.remove('active');
                }
            });

  
            if (type === 'all') {
                loadGallery(books, 'book-gallery');
            } else {
                const filtered = books.filter(book => book.type.includes(type));
                const galleryId = type === 'book' ? 'books-gallery' : 'pdf-gallery';
                loadGallery(filtered, galleryId);
            }
        });
    });
}


