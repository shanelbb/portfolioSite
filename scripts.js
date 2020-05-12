const app = {};

// displays logo design gallery in projects gallery div
$("#logos").on("click", (e) => {
  e.preventDefault();
  $(".projectsGallery").html(
    ` <img id="gallery1" class="galleryImg" src="./assets/floataMU.jpg" alt="Floata logo business card mockup" tabIndex="0"/>
        <img id="gallery2" class="galleryImg" src="./assets/autonomeMU.jpg" alt="Autonome logo stationary mockup" tabIndex="0"/>
        <img id="gallery3" class="galleryImg" src="./assets/logosPage.jpg" alt="Grid of black and white logo designs" tabIndex="0"/>
        <img id="gallery4" class="galleryImg" src="./assets/dnaMU.jpg" alt="DNA Athletics logo business card mockup" />
        <img id="gallery5" class="galleryImg" src="./assets/clothMU.jpg" alt="Cloth clothing logo business card mockup" tabIndex="0"/>
        <img id="gallery6" class="galleryImg" src="./assets/flintFlameMU.jpg" alt="Flint & Flame logo business card mockup" tabIndex="0"/>`
  );
});

// displays branding design gallery in projects gallery div
$("#branding").on("click", (e) => {
  e.preventDefault();
  $(".projectsGallery").html(
    `<img id="gallery1" class="galleryImg" src="./assets/artHouseMU.jpg" alt="Arthouse logo stationary mockup" tabIndex="0"/>
            <img id="gallery2" class="galleryImg" src="./assets/artHouseTheatreMU" alt="Arthouse logo Theatre entrance mockup" tabIndex="0"/>
            <img id="gallery3" class="galleryImg" src="./assets/liftBusCardMU.jpg" alt="Lift Hot Air Balloons logo business card mockup" tabIndex="0"/>
            <img id="gallery4" class="galleryImg" src="./assets/liftPhoneCaseMU.jpg" alt="Lift Hot Air Balloons logo phone cases mockup" tabIndex="0"/>
            <img id="gallery5" class="galleryImg" src="./assets/prattNormanMU.jpg" alt="Pratt Norman logo stationary mockup" tabIndex="0"/>
        <img id="gallery6" class="galleryImg" src="./assets/prattBusCardMU.jpg" alt="Pratt Norman logo business card mockup" tabIndex="0"/>
            `
  );
});

// displays layout design gallery in projects gallery div
$("#layout").on("click", (e) => {
  e.preventDefault();
  $(".projectsGallery").html(
    `<img id="gallery1" class="galleryImg layout" src="./assets/nationMU.jpg" alt="Nation magazaine layout mockup" tabIndex="0"/>
          <img id="gallery2" class="galleryImg layout" src="./assets/aliceMU.jpg" alt="Alice In Wonderland book design mockup" tabIndex="0"/>
          <img id="gallery3" class="galleryImg layout" src="./assets/powwowMU.jpg" alt="Nation Magazine editorial design mockup" tabIndex="0"/>
          <img id="gallery4" class="galleryImg layout" src="./assets/natlReportMU.jpg" alt="National Report layout design mockups" tabIndex="0"/>`
  );
});

// displays photoshop design gallery in projects gallery div
$("#photoshop").on("click", (e) => {
  e.preventDefault();
  $(".projectsGallery").html(
    `<img id="gallery1" class="galleryImg" src="./assets/dblExpBeach.jpg" alt="Double exposure image of a woman blended with beach scene" tabIndex="0"/>
          <img id="gallery2" class="galleryImg" src="./assets/smokeEffectHair.jpg" alt="Photoshopped image of a woman with hair dissolving into smoke" tabIndex="0"/>
          <img id="gallery3" class="galleryImg" src="./assets/dblExpBirds.jpg" alt="Double exposure image of a man blended with trees and birds" tabIndex="0"/>
          <img id="gallery4" class="galleryImg" src="./assets/smokeEffectDancer.jpg" alt="Photoshopped image of a man dissoliving into smoke" tabIndex="0"/>`
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

// Allows user to click outside image to close the modal
app.handleClickToClose = (e) => {
  if (e.target === e.currentTarget) {
    app.closeModal();
  }
};

// closes modal content on click of the close button
$(".modalContent").on("click", ".close", app.closeModal);

// Allows user to hit escape to close the modal if not using a mouse
app.handleKeyUp = (e) => {
  if (e.key === "Escape") return app.closeModal();
};

// opens modal when user clicks on an image in the gallery
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

// initializes app
app.init = () => {
  $modal = $(".modal");
  app.modalImage();
  $modal.on("click", app.handleClickToClose);
};

//document ready function
$(function () {
  app.init();
});
