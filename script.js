

const menuIcon = document.querySelector('.menu-icon'),
      header = document.querySelector('header'),
      body = document.querySelector('body')
                  ;

menuIcon.addEventListener('click', () => {
   menuIcon.classList.toggle('menu-icon--active')
   header.classList.toggle('header--mobile')
   body.classList.toggle('no-scroll')
})




const slideArrows = document.querySelector('.slider-arrows'),
      slidesArrows = document.querySelectorAll('.slider-arrows__item'),
      before = document.querySelector('.slider-arrows__arrow--left'),
      after = document.querySelector('.slider-arrows__arrow--right');

let slideIndex = 0;


before.addEventListener('click' , ( ) => showSlideArrows(-1))
after.addEventListener('click' , ( ) => showSlideArrows(1))

function showSlideArrows(n = 0){
   slideIndex += n;
   if(slideIndex < 0) slideIndex = slidesArrows.length - 1;
   if(slideIndex >= slidesArrows.length) slideIndex = 0;


   slidesArrows.forEach(item => item.style.display = 'none');
   slidesArrows[slideIndex].style.display = 'block';
}
showSlideArrows();


const slideDots = document.querySelector('.slider-dots'),
      slidesDots = slideDots.querySelectorAll('.slider-dots__item'),
      wrapperDots = slideDots.querySelector('.slider-dots__nav');


const dots = [];

// for( i = 0; i < slidesDots.length; i++){
//    const dot = document.createElement('button');
//    dot.dataset.slideTo = i;
//    dot.classList.add('slider-dots__nav-item');
//    if (i == 0) dot.classList.add('slider-dots__nav-item--active');
//    if( i != 0 ) slidesDots[i].style.display = 'none'; 
//    dot.addEventListener('click', showSlideDots );
//    wrapperDots.append(dot);
//    dots.push(dot);
// }

// function showSlideDots(e){
//    const slideTo = e.target.dataset.slideTo;
//    slidesDots.forEach(item => item.style.display = 'none');
//    slidesDots[slideTo].style.display = 'block';
//    dots.forEach(dot => dot.classList.remove('slider-dots__nav-item--active'));
//    e.target.classList.add('slider-dots__nav-item--active');
// }

for(i = 0 ; i < slidesDots.length; i++){
   const dot = document.createElement('button');
   dot.dataset.slideTo = i;
   dot.classList.add('slider-dots__nav-item');
   if(i ==0) dot.classList.add('slider-dots__nav-item--active');
   if(i != 0) slidesDots[i].style.display = 'none';
   dot.addEventListener('click', showSlideDots);
   wrapperDots.append(dot);
   dots.push(dot);
}

function showSlideDots(e){
   const slideTo = e.target.dataset.slideTo;
   slidesDots.forEach(item => item.style.display = 'none');
   slidesDots[slideTo].style.display = 'block';
   dots.forEach(dot => dot.classList.remove('slider-dots__nav-item--active'));
   e.target.classList.add('slider-dots__nav-item--active')
}