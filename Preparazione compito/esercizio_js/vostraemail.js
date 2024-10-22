let imagesList = document.getElementsByTagName("img")

function hideLast2Images() {
    imagesList[2].style.display = "none"
    imagesList[3].style.display = "none"
}

function addOnclickToImages() {
    for (const element of imagesList) {
        element.addEventListener("click", toggleClickedElement)
    }
}

function toggleClickedElement(event) {
    let currentImage = event.target
    currentImage.classList.add("current")
    for (const element of imagesList) {
        if (element != currentImage && element.classList.contains("current")) {
            element.classList.toggle("current")
        }
    }
    changeVisibility(currentImage)
}

function changeVisibility(currentImage) {
    if (currentImage.src.match("html") == "html") {
        for (const element of imagesList) {
            if (element.src.match("css") == "css" || element == currentImage) {
                element.style.display = "inline"
            } else {
                element.style.display = "none"
            }
        }
    }

    if (currentImage.src.match("css") == "css") {
        for (const element of imagesList) {
            if (element.src.match("php") == "php") {
                element.style.display = "none"
            } else {
                element.style.display = "inline"
            }
        }
    }

    if (currentImage.src.match("jquery") == "jquery") {
        for (const element of imagesList) {
            if (element.src.match("html") == "html") {
                element.style.display = "none"
            } else {
                element.style.display = "inline"
            }
        }
    }

    if (currentImage.src.match("php") == "php") {
        for (const element of imagesList) {
            if (element.src.match("jquery") == "jquery" || element == currentImage) {
                element.style.display = "inline"
            } else {
                element.style.display = "none"
            }
        }
    }
}

hideLast2Images();

addOnclickToImages();