const burger = document.getElementById('menu')
const navigation = document.getElementById('navigation')
const close = document.getElementById('close')

burger.addEventListener('click', () => {
    navigation.style.display = "flex"
    document.body.style.background = "#0c0b09dc"
    document.body.style.overflow = "hidden"
})

close.addEventListener('click', () => {
    navigation.style.display = "none"
    document.body.style.background = ""
})


// menu

const allTabsBtn = document.getElementById('all-tabs')
const startersBtn = document.getElementById('starters')
const saladesBtn = document.getElementById('salades')
const specialtyBtn = document.getElementById('specialty')


const allPlats = document.querySelectorAll('.plats')


allPlats.forEach(plat => {
  plat.style.display = 'flex'; 
})


allTabsBtn.addEventListener('click', () => {
  allPlats.forEach(plat => {
    plat.style.display = 'flex';
  })
})


startersBtn.addEventListener('click', () => {
  allPlats.forEach(plat => {
    if (plat.classList.contains('starters-plat')) {
      plat.style.display = 'flex';
    } else {
      plat.style.display = 'none';
    }
  })
})


saladesBtn.addEventListener('click', () => {
  allPlats.forEach(plat => {
    if (plat.classList.contains('salades')) {
      plat.style.display = 'flex';
    } else {
      plat.style.display = 'none';
    }
  })
})


specialtyBtn.addEventListener('click', () => {
  allPlats.forEach(plat => {
    if (plat.classList.contains('specialty')) {
      plat.style.display = 'flex';
    } else {
      plat.style.display = 'none';
    }
  })
})


// tabs
document.querySelectorAll('.left-specials a').forEach(tab => {
  tab.addEventListener('click', function(e) {
      
      document.querySelectorAll('.tab').forEach(content => {
          content.style.display = 'none';
      });
      
      
      document.getElementById(this.getAttribute('data-tab')).style.display = 'flex';
      
      
      document.querySelectorAll('.left-specials a').forEach(t => {
          t.classList.remove('active');
      });
      this.classList.add('active');
  });
});


// modal

document.addEventListener('DOMContentLoaded', function() {
  let modal = document.getElementById('myModal1');
  let btn = document.getElementById('btnId');
  let close = modal.querySelector('.close');
  
  btn.addEventListener('click', () => {
      modal.style.display = 'block';
      document.body.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
  });
  
  close.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
  });
  
});

// carousel hero section

let close_carousel = document.querySelector(".carousel-close")
let play_carousel = document.querySelector(".play-carousel")
let slide_container = document.querySelector(".slide-container")
console.log(slide_container);


play_carousel.addEventListener('click' , () =>{
  slide_container.style.display = "block"
  document.body.classList.add('modal-open');
  document.body.style.overflow = 'hidden';
})

close_carousel.addEventListener('click' , () =>{
  slide_container.style.display = "none"
  document.body.classList.remove('modal-open');
  document.body.style.overflow = '';
})

let slideIndex = 1
slideshow(slideIndex)

function plusSlide(n) {
    slideshow(slideIndex += n)
}


function slideshow(n) {
    let slides = document.getElementsByClassName("slides")
    if (n > slides.length) {
        slideIndex = 1
    } 
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slides[slideIndex -1].style.display = "block"
}


let prev = document.querySelector(".prev")
prev.addEventListener("click", (e) => {
    e.preventDefault()
    plusSlide(-1)
})

let next = document.querySelector(".next")
next.addEventListener("click", (e) => {
    e.preventDefault()
    plusSlide(1)
})


// events carousel




// testemonials

const container = document.querySelector('.cards');
  const cardItems = container.querySelectorAll('.card-item');
  const visibleCards = 3;
  const totalCards = cardItems.length;
  const maxIndex = totalCards - visibleCards;
  const dotsContainer = document.querySelector('.dots-container');

  let currentIndex = 0;
  let cardWidth = null;

  // Create dots
  for (let i = 0; i <= maxIndex; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      scrollToCard(i);
      currentIndex = i;
    });
    dotsContainer.appendChild(dot);
  }

  const dots = document.querySelectorAll('.dot');

  function scrollToCard(index) {
    if (!cardWidth) {
      const card = container.querySelector('.card-item');
      cardWidth = card.offsetWidth + 10; 
    }
    container.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth'
    });

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  function autoScrollCards() {
    currentIndex = (currentIndex + 1) > maxIndex ? 0 : currentIndex + 1;
    scrollToCard(currentIndex);
  }

  setInterval(autoScrollCards, 1500);



  // fix the header in top
  window.addEventListener('scroll',  ()=> {
    const infoContact = document.querySelector('.info-contact');
    const head = document.querySelector('.head');
    
    if (window.scrollY > infoContact.offsetHeight) {
        head.classList.add('fixed-head');
    } 
    else {
        head.classList.remove('fixed-head');
    }
});



