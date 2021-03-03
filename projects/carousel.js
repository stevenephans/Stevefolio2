function initializer(carouselSlides, slideCaption, carouselNum) {
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
    document.querySelector(carouselNum).appendChild(imageDad);
  }

  showImage(0, carouselNum);
}

function showImage(imageIndex, carouselNum) {
  $(carouselNum + " .carSlide")
    .toArray()
    .forEach((imgEl) => {
      $(imgEl).hide();
    });

  $($(carouselNum + " .carSlide").toArray()[imageIndex]).show();
  currentImage = imageIndex;
}

function showNext(carouselNum, carouselSlides) {
  if (currentImage >= carouselSlides.length - 1) {
    showImage(0, carouselNum);
  } else {
    showImage(currentImage + 1, carouselNum);
  }
}

function showPrev(carouselNum, carouselSlides) {
  if (currentImage == 0) {
    showImage(carouselSlides.length - 1, carouselNum);
  } else {
    showImage(currentImage - 1, carouselNum);
  }
}
