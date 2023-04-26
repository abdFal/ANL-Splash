const addPhotoButton = document.getElementById("add-photo-button");
addPhotoButton.addEventListener("click", () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.addEventListener("change", () => {
    const file = input.files[0];
    if (file) {
      handleFileUpload(file); // call the handleFileUpload function
    }
  });
  input.click();
});

const handleFileUpload = (file) => {
  const reader = new FileReader();
  reader.onload = () => {
    const url = reader.result;
    const img = document.createElement("img");
    img.src = url;
    img.alt = file.name;
    img.classList.add("img");
    img.setAttribute("data-bs-toggle", "modal");
    img.setAttribute("data-bs-target", "#exampleModal");
    document.querySelector(".gallery div").appendChild(img);
    const urls = JSON.parse(localStorage.getItem("imageUrls") || "[]");
    urls.push(url);
    localStorage.setItem("imageUrls", JSON.stringify(urls));
  };
  reader.readAsDataURL(file);
};

const loadImages = () => {
  const urls = JSON.parse(localStorage.getItem("imageUrls") || "[]");
  const gallery = document.querySelector(".gallery div");

  // Get modal and its child elements
  const modal = document.getElementById("exampleModal");
  const modalImg = modal.querySelector(".modal-body img");
  const modalDownload = modal.querySelector(".modal-footer a");

  urls.forEach((url, index) => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = `Family photo ${index + 1}`;
    img.classList.add("img");
    img.setAttribute("data-bs-toggle", "modal");
    img.setAttribute("data-bs-target", "#exampleModal");

    // Set onclick listener for each image to display in modal
    img.onclick = function () {
      modalImg.src = this.src;
      modalImg.alt = this.alt;
      modalDownload.href = this.src;
      modalDownload.download = this.alt + ".jpg";
    };

    gallery.appendChild(img);
  });
};

window.addEventListener("load", loadImages);
