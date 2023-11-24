const form = document.querySelector("form"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");


backBtn.addEventListener("click", () => form.classList.remove('secActive'));