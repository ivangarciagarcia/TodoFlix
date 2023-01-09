const slider = document.querySelector('#slider');
  const images = slider.querySelectorAll('img');
  let current = 0;

  function showCurrent() {
    images.forEach((image) => {
      image.style.display = 'none';
    });
    images[current].style.display = 'block';
  }

  function next() {
    current++;
    if (current >= images.length) {
      current = 0;
    }
    showCurrent();
  }

  function previous() {
     current--;   
     if (current < 0) {
       current = images.length - 1;
     }   
     showCurrent();
   }

   const previousButton = document.querySelector('#previous');
   const nextButton = document.querySelector('#next');   
   previousButton.addEventListener('click', previous);
   nextButton.addEventListener('click', next);   
   showCurrent();   
   setInterval(next, 3000);