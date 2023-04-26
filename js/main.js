const videos = document.querySelectorAll(".gallery video");
const images = document.querySelectorAll(".gallery img");

// mengambil elemen modal video
const modal = document.querySelector("#exampleModal");
const modalTitle = modal.querySelector(".modal-title");
const modalBody = modal.querySelector(".modal-body");
const downloadButton = modal.querySelector(".btn-download");

// mengambil elemen modal gambar
const imgModal = document.querySelector("#imgModal");
const imgModalTitle = imgModal.querySelector(".modal-title");
const imgModalBody = imgModal.querySelector(".img-modal-body");
const imgDownloadButton = imgModal.querySelector(".btn-download");

// menambahkan event click pada setiap video
videos.forEach((video) => {
  video.addEventListener("click", () => {
    // mengganti sumber video dan atribut alt pada elemen video modal
    const modalVideo = modalBody.querySelector("video");
    modalVideo.src = video.src;
    modalVideo.alt = video.alt;
    // mengganti teks pada elemen judul modal
    modalTitle.textContent = "Video Preview";

    // menampilkan modal video
    modal.classList.add("show");

    // menambahkan link download pada tombol download video
    downloadButton.href = video.src;
    downloadButton.download = video.alt;
  });
});

// menambahkan event click pada setiap gambar
images.forEach((image) => {
  image.addEventListener("click", () => {
    // mengganti sumber gambar dan atribut alt pada elemen gambar modal
    const modalImg = imgModalBody.querySelector("img");
    modalImg.src = image.src;
    modalImg.alt = image.alt;
    // mengganti teks pada elemen judul modal
    imgModalTitle.textContent = "Image Preview";

    // menampilkan modal gambar
    imgModal.classList.add("show");

    // menambahkan link download pada tombol download gambar
    imgDownloadButton.href = image.src;
    imgDownloadButton.download = image.alt;
  });
});

// menambahkan event click pada tombol simpan perubahan pada modal video
const saveChangesButton = modal.querySelector(".btn-primary");
saveChangesButton.addEventListener("click", () => {
  // menyembunyikan modal video
  modal.classList.remove("show");
});

// menambahkan event click pada tombol simpan perubahan pada modal gambar
const imgSaveChangesButton = imgModal.querySelector(".btn-primary");
imgSaveChangesButton.addEventListener("click", () => {
  // menyembunyikan modal gambar
  imgModal.classList.remove("show");
});
