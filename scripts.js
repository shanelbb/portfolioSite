const app = {};

app.projectImages = [
  {
    src: "floataMU.jpg",
    alt: "Floata logo business card mockup",
    group: "logos"},
  {
    src: "autonomeMU.jpg",
    alt: "Autonome logo stationary mockup",
    group: "logos"},
  {
    src: "logosPage.jpg",
    alt: "Grid of black and white logo designs",
    group: "logos"},
  {
    src: "dnaMU.jpg",
    alt: "DNA Athletics logo business card mockup",
    group: "logos"},
  {
    src: "clothMU.jpg",
    alt: "Floata logo business card mockup",
    group: "logos"},
  {
    src: "flintFlameMU.jpg",
    alt: "Flint & Flame logo business card mockup",
    group: "logos"},
  {
    src: "artHouseMU.jpg",
    alt: "Arthouse logo stationary mockup",
    group: "branding"},
  {
    src: "artHouseTheatreMU",
    alt: "Arthouse logo Theatre entrance mockup",
    group: "branding"},
  {
    src: "liftBusCardMU.jpg",
    alt: "Lift Hot Air Balloons logo business card mockup",
    group: "branding"},
  {
    src: "liftPhoneCaseMU.jpg",
    alt: "Lift Hot Air Balloons logo phone case mockup",
    group: "branding"},
  {
    src: "prattNormanMU.jpg",
    alt: "Pratt Norman logo stationary mockup",
    group: "branding"},
  {
    src: "prattBusCardMU.jpg",
    alt: "Pratt Norman logo business card mockup",
    group: "branding"},
  {
    src: "nationMU.jpg",
    alt: "Nation magazaine layout mockup",
    group: "layout"},
  {
    src: "aliceMU.jpg",
    alt: "Nation Magazine editorial design mockup",
    group: "layout"},
  {
    src: "powwowMU.jpg",
    alt: "Nation Magazine editorial design mockup",
    group: "layout"},
  {
    src: "natlReportMU.jpg",
    alt: "National Report layout design mockups",
    group: "layout"},
  {
    src: "dblExpBeach.jpg",
    alt: "Double exposure image of a woman blended with beach scene",
    group: "photoshop"},
  {
    src: "smokeEffectHair.jpg",
    alt: "Photoshopped image of a woman with hair dissolving into smoke",
    group: "photoshop"},
  {
    src: "dblExpBirds.jpg",
    alt: "Double exposure image of a man blended with trees and birds",
    group: "photoshop"},
  {
    src: "smokeEffectDancer.jpg",
    alt: "Photoshopped image of a man dissoliving into smoke",
    group: "photoshop"}
]

// displays logo design gallery in projects gallery div
$images = app.projectImages
$(".projectsList ul li").each(function () {
  $(this).on('click', (e) => {
    $idx=0
    $(".projectsGallery").html('')
    $groupImgArr = []
    $.each($images, i => {
      console.log($images[i].group, this.id);
      if ($images[i].group === this.id) {
        $groupImgArr.push($images[i])
        $idx++
        console.log($idx, $groupImgArr)
        $(".projectsGallery").append(
          $(` <img id='gallery${$idx}' class="galleryImg" data-listnum="${$idx-1}" src="./assets/${$groupImgArr[$idx-1].src}" alt="${$groupImgArr[$idx-1].alt}" tabIndex="0"/>`)
        )
      } else {
        return
      }
    })
  })
})


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
