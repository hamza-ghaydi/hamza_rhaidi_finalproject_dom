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
    document.body.style.background = "none"
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



  