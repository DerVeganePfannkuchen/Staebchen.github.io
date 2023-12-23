//prev and next blurrrrr
const prevButton = document.querySelector(".carousel-control-prev");
const nextButton = document.querySelector(".carousel-control-next");

prevButton.addEventListener('mouseover',function(){
  prevButton.classList.remove('blur-false');
  prevButton.classList.add('blur-active');
})
prevButton.addEventListener('mouseout',function(){
  prevButton.classList.remove('blur-active');
  prevButton.classList.add('blur-false')
})
nextButton.addEventListener('mouseover',function(){
  nextButton.classList.remove('blur-false');
  nextButton.classList.add('blur-active');
})
nextButton.addEventListener('mouseout',function(){
  nextButton.classList.remove('blur-active');
  nextButton.classList.add('blur-false')
})
