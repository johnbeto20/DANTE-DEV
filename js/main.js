window.addEventListener('load', function(e) {

    const Elements = document.getElementById("elements").getElementsByTagName('li');
    const ounboarding = document.getElementById("ounboardingText");
    const CloseModal = document.getElementById("closeModal");
    const CloseModalpicture = document.getElementById("closeModalpicture");
    const ModalContent = document.getElementById("modalContent");
    const ModalStatus = document.getElementById("modalStatus");
    const ModalTitle = document.getElementById("modalTitle");
    const ModalIcon = document.getElementById("modalIcon");
    const ModalEpigrafe = document.getElementById("modalEpigrafe");
    const modalImagenText = document.getElementById("modalImagenText");
    const ModalImagenUrl = document.getElementById("modalImagenUrl");
    const ModalImage = document.getElementById("modalImage");
    const ModalText1 = document.getElementById("modalText1");
    const ModalTitleAbout = document.getElementById("modalTitleAbout");
    const ModalText2 = document.getElementById("modalText2");
    const BtnStart = document.getElementById("btnStart");
    const Section1 = document.getElementById("section1");
    const Section2 = document.getElementById("section2");
    const Modal = document.getElementById("modal");
    const ModalText = document.getElementById("modalText");
    const picture = document.getElementById("picture");
    const btnpicture = document.getElementById("btnpicture")

    BtnStart.addEventListener("click", function() {
        Section2.style.display = "block";
        Section1.classList.add("hideIntro");
        Section1.addEventListener("animationend", function() {
            this.style.display = "none";
        })
    })

    btnpicture.addEventListener("click", function() {
        picture.classList.add("show");
    })

    CloseModal.addEventListener("click", function() {
        Modal.classList.remove("show");
        ModalContent.setAttribute("data-status", "")
        ModalStatus.innerHTML = "";
        ModalTitle.innerHTML = "";
        ModalIcon.src = `img/momento-${e}-modal.PNG`;
        ModalEpigrafe.innerHTML = "";
        ModalImage.src = `img/gallery/${datos[e].image}`;
        ModalImage.setAttribute("alt", datos[e].imagenText);
        modalImagenText.innerHTML = "";
        ModalImagenUrl.innerHTML = "";
        ModalText1.innerHTML = "";
        ModalTitleAbout.innerHTML = "";
        ModalText2.innerHTML = "";
    })

    CloseModalpicture.addEventListener("click", function() {
        picture.classList.remove("show");
    })

    Elements[0].classList.add("inicial");

    for (let index = 0; index < Elements.length; index++) {
        Elements[index].addEventListener("click", function() {
            if (index == 0) {
                this.classList.remove("inicial");
                ounboarding.style.display = "none";
            }
            Modal.classList.add("show");
            showInfo(index);
        });
        Elements[index].addEventListener("mouseover", function() {
            this.classList.add("active");
        });
        Elements[index].addEventListener("mouseout", function() {
            this.classList.remove("active");
        });
    }

    function showInfo(e) {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'data.json', true);
        xhttp.send()
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let datos = JSON.parse(this.responseText);
                //traer datos
                ModalText.scrollTo(0, 0);
                Modal.scrollTo(0, 0);
                ModalContent.setAttribute("data-status", datos[e].status)
                ModalStatus.innerHTML = datos[e].status;
                ModalTitle.innerHTML = datos[e].title;
                ModalIcon.src = `img/momento-${e}-modal.PNG`;
                ModalEpigrafe.innerHTML = datos[e].epigrafe;
                ModalImage.src = `img/gallery/${datos[e].image}`;
                ModalImage.setAttribute("alt", datos[e].imagenText);
                modalImagenText.innerHTML = datos[e].imagenText;
                ModalImagenUrl.innerHTML = datos[e].imagenUrl;
                ModalText1.innerHTML = datos[e].content.text1;
                ModalTitleAbout.innerHTML = datos[e].content.titleAbout;
                ModalText2.innerHTML = datos[e].content.text2;
            }
        }
    }
})