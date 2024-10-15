// Our Customers JS Starts
const ourcustomers_swiper = new Swiper('.ourcustomers-slider-wrapper', {
    
  // loop: true,
  grabCursor: true,
  spaceBetween:30,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    // dynamicBullets:true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints:{
  576:{
    slidesPerView: 1
  },
  
  768:{
    slidesPerView: 2
  },
  // 992:{
  //   slidesPerView: 3
  // },
  1200:{
      slidesPerView: 3
    },
    1500:{
      slidesPerView: 3
    }
  
  }
  });
//Our Customers JS ends

// Our projects JS Starts
const ourprojcts_swiper = new Swiper('.ourprojects-slider-wrapper', {
    
  loop: true,
  grabCursor: true,
  spaceBetween:30,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    // dynamicBullets:true
  },

 // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints:{
  576:{
    slidesPerView: 1
  },
  
  768:{
    slidesPerView: 2
  },
  // 992:{
  //   slidesPerView: 3
  // },
  1200:{
      slidesPerView: 3
    },
    1500:{
      slidesPerView: 3
    }
  
  }
  });
//Our Projects JS ends

// Brick & Bolt news javascript statrs
const swiper = new Swiper('.slider-wrapper', {
    
    loop: true,
    grabCursor: true,
    spaceBetween:20,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      // dynamicBullets:true
    },
      
    // Responsive breakpoints
    breakpoints:{
    576:{
      slidesPerView: 1
    },
    
    768:{
      slidesPerView: 2
    },
    992:{
      slidesPerView: 3
    },
    1024:{
        slidesPerView: 4
      }
    
    }
    });
    // Brick & Bolt news ends

//Luxury Packages Starts

// const citySelect = document.getElementById('city');
// console.log(citySelect);
// citySelect.addEventListener('focus', function() {
// citySelect.options[0].style.display = 'none'; 
// });

    document.querySelector('.dropdown-button').addEventListener('click', function() {
      const options = document.querySelector('.dropdown-options');
      options.style.display = options.style.display === 'block' ? 'none' : 'block';
    });
    
    
    document.querySelectorAll('.option').forEach(option => {
     
    
      option.addEventListener('click', function() {
        
          const value = this.getAttribute('data-value');
        //  document.querySelector(".option1").style.display="none";
          // opt1.style.display="none";
          document.querySelector('.dropdown-button').textContent = value;
          document.querySelector('.dropdown-options').style.display = 'none';
      });
    });
    
    // Close the dropdown if clicked outside
    window.addEventListener('click', function(event) {
      if (!event.target.matches('.dropdown-button')) {
          const dropdowns = document.querySelectorAll('.dropdown-options');
          dropdowns.forEach(dropdown => {
              dropdown.style.display = 'none';
          });
      }
    });
    //Luxury Packages ends
    