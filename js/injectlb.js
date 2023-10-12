let lba = [];
function setLightboxOne(q) {
  lba.push(
    new SimpleLightbox(q, {
      sourceAttr: "data-raw",
      nav: false,
      captionsData: "alt",
      animationSlide: false,
      loop: false,
      overlayOpacity: 0.8,
    })
  );
}
function setLightboxMany(q) {
  lba.push(
    new SimpleLightbox(q, {
      sourceAttr: "data-raw",
      navText: [
        '<img style="width:inherit;" src="../media/chevron_left.svg">',
        '<img style="width:inherit;" src="../media/chevron_right.svg">',
      ],
      captionsData: "alt",
      overlayOpacity: 0.8,
    })
  );
}
