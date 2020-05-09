// create galleries of 4 or 6 images
// connect each gallery to a specific link/button
// make each gallery appear on page when corresponding link is clicked
// make previous gallery leave the page when new gallery populates
// have each image in the gallery open into a larger modal on click
// have modal close on click of a close button and/or outside the image

const app = {};

$("#logos").on("click", (e) => {
  e.preventDefault();
  $(".projectsGallery").html(
    ` <img id="gallery1" class="galleryImg" src="./assets/brandingMU.jpg" alt="" tabIndex="0"/>
        <img id="gallery2" class="galleryImg" src="./assets/pageLayoutMU.jpg" alt="" tabIndex="0"/>
        <img id="gallery3" class="galleryImg" src="./assets/photoManipMU.jpg" alt="" tabIndex="0"/>
        <img id="gallery4" class="galleryImg" src="./assets/logosMU.jpg" alt="" />
        <img id="gallery5" class="galleryImg" src="./assets/noticeBoardMU.jpg" alt="" tabIndex="0"/>
        <img id="gallery6" class="galleryImg" src="./assets/guessThatColourMU.jpg" alt="" tabIndex="0"/>`
  );
});

$("#branding").on("click", (e) => {
  e.preventDefault();
  $(".projectsGallery").html(
    `<img id="gallery1" class="galleryImg" src="./assets/brandingMU.jpg" alt="" tabIndex="0"/>
          <img id="gallery2" class="galleryImg" src="./assets/pageLayoutMU.jpg" alt="" tabIndex="0"/>
          <img id="gallery3" class="galleryImg" src="./assets/photoManipMU.jpg" alt="" tabIndex="0"/>
          <img id="gallery4" class="galleryImg" src="./assets/logosMU.jpg" alt="" tabIndex="0"/>`
  );
});

$("#layout").on("click", (e) => {
  e.preventDefault();
  $(".projectsGallery").html(
    `<img id="gallery1" class="galleryImg" src="./assets/brandingMU.jpg" alt="" tabIndex="0"/>
          <img id="gallery2" class="galleryImg" src="./assets/pageLayoutMU.jpg" alt="" tabIndex="0"/>
          <img id="gallery3" class="galleryImg" src="./assets/photoManipMU.jpg" alt="" tabIndex="0"/>
          <img id="gallery4" class="galleryImg" src="./assets/logosMU.jpg" alt="" tabIndex="0"/>`
  );
});

$("#photoshop").on("click", (e) => {
  e.preventDefault();
  $(".projectsGallery").html(
    `<img id="gallery1" class="galleryImg" src="./assets/brandingMU.jpg" alt="" tabIndex="0"/>
          <img id="gallery2" class="galleryImg" src="./assets/pageLayoutMU.jpg" alt="" tabIndex="0"/>
          <img id="gallery3" class="galleryImg" src="./assets/photoManipMU.jpg" alt="" tabIndex="0"/>
          <img id="gallery4" class="galleryImg" src="./assets/logosMU.jpg" alt="" tabIndex="0"/>`
  );
});

// Adding open class to modal so that it appears on the page
app.openModal = () => {
  $modal.addClass("open");
  $(window).on("keyup", app.handleKeyUp);
};

// Removing open class on modal to remove from page
app.closeModal = () => {
  $modal.removeClass("open");
};

// Allows user to click on image to close the modal
app.handleClickToClose = (e) => {
  if (e.target === e.currentTarget) {
    app.closeModal();
  }
};

$(".modalContent").on("click", ".close", app.closeModal);

// Allows user to hit escape to close the modal if not using a mouse
app.handleKeyUp = (e) => {
  if (e.key === "Escape") return app.closeModal();
};

app.modalImage = () => {
  $(".projectsGallery").on("click keyup", ".galleryImg", (e) => {
    if (e.key === "Enter" || e.handleObj.type === "click") {
      $(".modalContent").html(
        `<figure><img src="${e.currentTarget.src}" alt="${e.currentTarget.alt}"/>
        <span class="close"><img src="./assets/close.png" alt="x in a circle icon"/></span></figure>`
      );
      app.openModal();
    }
  });
};

app.init = () => {
  $modal = $(".modal");
  app.modalImage();
  $modal.on("click", app.handleClickToClose);
};

$(function () {
  app.init();
});
