const modeToggle = document.querySelector('#modeToggle');

modeToggle.addEventListener("click", function() {document.body.classList.toggle('light')
    if (document.body.classList.contains('light')) {
       modeToggle.textContent = "mode terang";
    } else {
        modeToggle.textContent = "mode gelap";
    }
}
)