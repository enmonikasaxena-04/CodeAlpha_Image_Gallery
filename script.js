const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

const previewBox = document.querySelector(".preview-box");
const previewImg = document.querySelector("#previewImg");
const closeBtn = document.querySelector(".close");

// Filter Images
filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.getAttribute("data-name");

        cards.forEach(card => {

            if (filter === "all" || card.classList.contains(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });
});

// Open Preview
cards.forEach(card => {

    card.addEventListener("click", () => {

        const img = card.querySelector("img");

        previewImg.src = img.src;

        previewBox.style.display = "flex";

    });

});

// Close Preview
closeBtn.addEventListener("click", () => {

    previewBox.style.display = "none";

});

// Close on Background Click
previewBox.addEventListener("click", (e) => {

    if (e.target === previewBox) {

        previewBox.style.display = "none";

    }

});