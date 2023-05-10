const videos = document.querySelectorAll(".gallery video");
const images = document.querySelectorAll(".gallery img");

const modal = document.querySelector("#vidModal");
const modalTitle = modal.querySelector(".modal-title");
const modalBody = modal.querySelector(".modal-body");
const downloadButton = modal.querySelector(".btn-download");

const imgModal = document.querySelector("#imgModal");
const imgModalTitle = imgModal.querySelector(".modal-title");
const imgModalBody = imgModal.querySelector(".img-modal-body");
const imgDownloadButton = imgModal.querySelector(".btn-download");

videos.forEach((video) => {
  video.addEventListener("click", () => {
    const modalVideo = modalBody.querySelector("video");
    modalVideo.src = video.src;
    modalVideo.alt = video.alt;

    modalTitle.textContent = "Video Preview";

    modal.classList.add("show");

    downloadButton.href = video.src;
    downloadButton.download = video.alt;
  });
});

images.forEach((image) => {
  image.addEventListener("click", () => {
    const modalImg = imgModalBody.querySelector("img");
    modalImg.src = image.src;
    modalImg.alt = image.alt;

    imgModalTitle.textContent = "Image Preview";

    imgModal.classList.add("show");

    imgDownloadButton.href = image.src;
    imgDownloadButton.download = image.alt;
  });
});

const vidSaveChangesButton = modal.querySelector(".btn-primary");
vidSaveChangesButton.addEventListener("click", () => {
  modal.classList.remove("show");
});

const imgSaveChangesButton = imgModal.querySelector(".btn-primary");
imgSaveChangesButton.addEventListener("click", () => {
  imgModal.classList.remove("show");
});
