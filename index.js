
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  document.addEventListener("DOMContentLoaded", () => {
    const poemButton = document.getElementById("poemButton");
    const poemModal = document.getElementById("poemModal");
    const closeModal = document.getElementById("closeModal");
  
    // Show the modal
    poemButton.addEventListener("click", () => {
      poemModal.style.display = "block";
    });
  
    // Close the modal
    closeModal.addEventListener("click", () => {
      poemModal.style.display = "none";
    });
  
    // Close the modal when clicking outside of it
    window.addEventListener("click", (event) => {
      if (event.target === poemModal) {
        poemModal.style.display = "none";
      }
    });
  });