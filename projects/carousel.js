function initializer(carouselSlides, slideCaption) {
  console.log(carouselSlides.length);
  console.log(carouselSlides);
  console.log(document.querySelector(".carousel"));
  window.currentImage = 0;

  for (var i = 0; i < carouselSlides.length; i++) {
    var imageDad = document.createElement("div");
    imageDad.setAttribute("class", "carSlide");
    var imageSon = document.createElement("img");
    imageSon.setAttribute("class", "carPic");
    var imageCaption = document.createElement("p");
    imageSon.setAttribute("src", carouselSlides[i]);
    imageCaption.setAttribute("id", "caption");
    imageCaption.innerHTML = slideCaption[i]; //make contents of p whatever's in slideCaption array, slideCaption[i]);
    imageDad.appendChild(imageSon);
    imageDad.appendChild(imageCaption);
    document.querySelector(".carousel").appendChild(imageDad);
  }
}

function showImage(imageIndex) {
  $(".carousel .carSlide")
    .toArray()
    .forEach((imgEl) => {
      $(imgEl).hide();
    });

  $($(".carousel .carSlide").toArray()[imageIndex]).show();
  currentImage = imageIndex;
}
showImage(0);

function showNext() {
  if (currentImage >= carouselSlides.length - 1) {
    showImage(0);
  } else {
    showImage(currentImage + 1);
  }
}

function showPrev() {
  if (currentImage == 0) {
    showImage(carouselSlides.length - 1);
  } else {
    showImage(currentImage - 1);
  }
}
