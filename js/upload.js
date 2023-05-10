const addFileButton = document.getElementById("add-file-button");
addFileButton.addEventListener("click", () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*"; // Set accept attribute to allow only image files
  input.addEventListener("change", () => {
    const file = input.files[0];
    if (file && file.type.startsWith("image/")) {
      handleFileUpload(file);
    } else {
      alert("Invalid file type. Please select an image file.");
    }
  });
  input.click();
});

const handleFileUpload = (file) => {
  const reader = new FileReader();
  reader.onload = () => {
    const url = reader.result;
    const fileType = file.type.split("/")[0];
    const mediaElement = document.createElement("img");
    mediaElement.src = url;
    mediaElement.alt = file.name;
    mediaElement.classList.add("media");
    mediaElement.setAttribute("data-bs-toggle", "modal");
    mediaElement.setAttribute("data-bs-target", "#imgModal");
    document.querySelector(".gallery div").appendChild(mediaElement);
    const urls = JSON.parse(localStorage.getItem("mediaUrls") || "[]");
    urls.push(url);
    localStorage.setItem("mediaUrls", JSON.stringify(urls));
  };
  reader.readAsDataURL(file);
};

const loadMedia = () => {
  const urls = JSON.parse(localStorage.getItem("mediaUrls") || "[]");
  const gallery = document.querySelector(".gallery div");

  // Get modal and its child elements
  const modal = document.getElementById("imgModal");
  const modalMedia = modal.querySelector(".img-modal-body img");
  const modalDownload = modal.querySelector(".modal-footer a");

  urls.forEach((url, index) => {
    const fileType = url.split(";")[0].split("/")[0];
    const mediaElement = document.createElement("img");
    mediaElement.src = url;
    mediaElement.alt = `Media ${index + 1}`;
    mediaElement.classList.add("media");
    mediaElement.setAttribute("data-bs-toggle", "modal");
    mediaElement.setAttribute("data-bs-target", "#imgModal");

    // Set onclick listener for each media element to display in modal
    mediaElement.onclick = function () {
      modalMedia.src = this.src;
      modalMedia.alt = this.alt;
      modalDownload.href = this.src;
      modalDownload.download = this.alt + "." + fileType;
    };

    gallery.appendChild(mediaElement);
  });
};

window.onload = loadMedia;
