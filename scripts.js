const app = {};

// displays logo design gallery in projects gallery div
$("#logos").on("click", (e) => {

  e.preventDefault();
  $(".projectsGallery").html(
    ` <img id="gallery1" class="galleryImg" data-listnum="0" src="./assets/floataMU.jpg" alt="Floata logo business card mockup" tabIndex="0"/>
    <img id="gallery2" class="galleryImg" data-listnum="1" src="./assets/autonomeMU.jpg" alt="Autonome logo stationary mockup" tabIndex="0"/>
    <img id="gallery3" class="galleryImg" data-listnum="2" src="./assets/logosPage.jpg" alt="Grid of black and white logo designs" tabIndex="0"/>
    <img id="gallery4" class="galleryImg" data-listnum="3" src="./assets/dnaMU.jpg" alt="DNA Athletics logo business card mockup" />
    <img id="gallery5" class="galleryImg" data-listnum="4" src="./assets/clothMU.jpg" alt="Cloth clothing logo business card mockup" tabIndex="0"/>
    <img id="gallery6" class="galleryImg" data-listnum="5" src="./assets/flintFlameMU.jpg" alt="Flint & Flame logo business card mockup" tabIndex="0"/>`
  );
  
});

// displays branding design gallery in projects gallery div
$("#branding").on("click", (e) => {

  e.preventDefault();
  $(".projectsGallery").html(
    `<img id="gallery1" class="galleryImg" data-listnum="0" src="./assets/artHouseMU.jpg" alt="Arthouse logo stationary mockup" tabIndex="0"/>
    <img id="gallery2" class="galleryImg" data-listnum="1" src="./assets/artHouseTheatreMU" alt="Arthouse logo Theatre entrance mockup" tabIndex="0"/>
    <img id="gallery3" class="galleryImg" data-listnum="2" src="./assets/liftBusCardMU.jpg" alt="Lift Hot Air Balloons logo business card mockup" tabIndex="0"/>
    <img id="gallery4" class="galleryImg" data-listnum="3" src="./assets/liftPhoneCaseMU.jpg" alt="Lift Hot Air Balloons logo phone cases mockup" tabIndex="0"/>
    <img id="gallery5" class="galleryImg" data-listnum="4" src="./assets/prattNormanMU.jpg" alt="Pratt Norman logo stationary mockup" tabIndex="0"/>
    <img id="gallery6" class="galleryImg" data-listnum="5" src="./assets/prattBusCardMU.jpg" alt="Pratt Norman logo business card mockup" tabIndex="0"/>
    `
  );
  
});

// displays layout design gallery in projects gallery div
$("#layout").on("click", (e) => {

  e.preventDefault();
  $(".projectsGallery").html(
    `<img id="gallery1" class="galleryImg layout" data-listnum="0" src="./assets/nationMU.jpg" alt="Nation magazaine layout mockup" tabIndex="0"/>
    <img id="gallery2" class="galleryImg layout" data-listnum="1" src="./assets/aliceMU.jpg" alt="Alice In Wonderland book design mockup" tabIndex="0"/>
    <img id="gallery3" class="galleryImg layout" data-listnum="2" src="./assets/powwowMU.jpg" alt="Nation Magazine editorial design mockup" tabIndex="0"/>
    <img id="gallery4" class="galleryImg layout" data-listnum="3" src="./assets/natlReportMU.jpg" alt="National Report layout design mockups" tabIndex="0"/>`
  );
  
  });

// displays photoshop design gallery in projects gallery div
$("#photoshop").on("click", (e) => {

  e.preventDefault();
  $(".projectsGallery").html(
    `<img id="gallery1" class="galleryImg" data-listnum="0" src="./assets/dblExpBeach.jpg" alt="Double exposure image of a woman blended with beach scene" tabIndex="0"/>
    <img id="gallery2" class="galleryImg" data-listnum="1" src="./assets/smokeEffectHair.jpg" alt="Photoshopped image of a woman with hair dissolving into smoke" tabIndex="0"/>
    <img id="gallery3" class="galleryImg" data-listnum="2" src="./assets/dblExpBirds.jpg" alt="Double exposure image of a man blended with trees and birds" tabIndex="0"/>
    <img id="gallery4" class="galleryImg" data-listnum="3" src="./assets/smokeEffectDancer.jpg" alt="Photoshopped image of a man dissoliving into smoke" tabIndex="0"/>`
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
app.imageData = []
app.modalImage = () => {
  $(".projectsGallery").on("click keyup", ".galleryImg", (e) => {
    if (e.key === "Enter" || e.handleObj.type === "click") {
      app.imageData.push(e.currentTarget)
      $(".modalContent").html(
        `<figure class="modalFig"><img src="${e.currentTarget.src}" alt="${e.currentTarget.alt}"/>
        <span class="close"><img src="./assets/close.png" alt="x in a circle icon"/></figure>`
      );
      app.openModal();
      // app.carousel()
    }
  });
};

// app.carousel = () => {
//   let gallery = $(".galleryImg")
//   let content = $('.modalContent')
//   const data = app.imageData[0]
//   let imgNum = data.dataset.listnum
//   const html = `<figure class="modalFig"><img src=${gallery[imgNum].src} alt=${gallery[imgNum].alt}/>
//         <span class="close"><img src="./assets/close.png" alt="x in a circle icon"/></span><</figure>`
 
//   content.on('click', $('.modalFig'), () => {
//     if (imgNum < gallery.length - 1) {
//       imgNum++
//       $(".modalContent").html(html);
//         app.imageData = []
//         app.imageData.push(gallery[imgNum])
//       app.carousel()
//     } else {
//       imgNum = 0
//             $(".modalContent").html(html)
//       app.imageData = []
//       app.imageData.push(gallery[0])
//       app.carousel()
//     }
//   })
// }


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
