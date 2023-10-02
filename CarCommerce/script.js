$(document).ready(function() {
    // Select the draggable elements within the maindiv class and make them draggable
    $(".carDesign .drag").draggable({
      containment: ".carDesign"
    });
  });

  $(document).ready(function() {
    const sliderItems = $(".slider-item");
    let currentSlide = 0;
  
    function showSlide(slideIndex) {
      sliderItems.hide();
      sliderItems.eq(slideIndex).fadeIn();
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % sliderItems.length;
      showSlide(currentSlide);
    }
  
    // Initial display
    showSlide(currentSlide);
  
    // Auto-advance slider every 3 seconds
    setInterval(nextSlide, 3500);
  });
  