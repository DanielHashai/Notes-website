const title = document.getElementById("title");
const message = document.getElementById("msg");
const date = document.getElementById("date");
const time = document.getElementById("time");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.querySelector(".close-btn");
const form = document.getElementById("form");
const modal = document.querySelector(".modal-overlay");
const temperary = document.querySelectorAll(".t");
const notes = document.querySelectorAll(".note");
let deletePostit = document.querySelectorAll(".delete");
const eraseAllItems = document.getElementById("clearBtn");
let wrapper = document.querySelector(".wrapper");
const modalContent = document.getElementById("modal-content");
let allPostitsArray = [];
let lengthOfArray = 0;

window.addEventListener("DOMContentLoaded", () => {

    if (!localStorage.getItem("listOfAllPostits")) {
        localStorage.setItem("listOfAllPostits", "[]");
    }
    if (!localStorage.getItem("amountOfItems")) {
        localStorage.setItem("amountOfItems", 0);
    }

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    let d = new Date();
    let y = d.getFullYear();
    let m = d.getMonth() + 1;
    let todayDate = String(d.getDate()).padStart(2, '0');
    
    date.setAttribute("min", today);
    allPostitsArray = JSON.parse(localStorage.getItem("listOfAllPostits"));
    lengthOfArray = JSON.parse(localStorage.getItem("amountOfItems"));
    if (allPostitsArray.length > 0) {
        const allItems = allPostitsArray.map((post) => {
            return `<li class="note anima">
        <div class="pin"><img src="./assets/icons8-pin-48.png" alt=""></div>
        <div class="delete" data-id=${post.dataId}><img src="./assets/icons8-close-window-48.png" alt=""></div>
        <div class="details">
    
           <div class="edit-title
           "><p>${post.title}</p> </div>
            <div class="content">
                <div class="line">${post.msg}
                </div>
            </div>
        </div>
        <div class="bottom-content">
            <div class="fonty">${post.data}</div>
            <div class="time fonty">
                ${post.time}
            </div>
        </div>
    </li>`
        }).join("");
        wrapper.innerHTML = allItems;


        for (let i = 0; i < allPostitsArray.length; i++) {
            let tobi = wrapper.children[i].children[1];
            tobi.addEventListener("click", deletePostity);
        }
        for (let i = 0; i < allPostitsArray.length; i++) {
            let tobi = wrapper.children[i].children[1];

            wrapper.children[i].addEventListener("mouseover", function () {
                tobi.classList.add("show-delete");

            });

        }
        for (let i = 0; i < allPostitsArray.length; i++) {
            let tobi = wrapper.children[i].children[1];
            if (wrapper != null) {

                wrapper.children[i].addEventListener("mouseout", function () {
                    tobi.classList.remove("show-delete");
                });
            }
        }
    }

    if (message.placeholder) {
        message.addEventListener("focus", (e) => {
            message.placeholder = "";
        });
    }


    title.classList.add("border-style");
    title.focus();
    modalContent.innerText = "";
    eraseAll();


});
function eraseAll() {
    eraseAllItems.addEventListener("click", () => {

        if (allPostitsArray.length === 0) {
            form.classList.add("blurr");
            wrapper.classList.add("blurr");
            modalContent.innerText = "Error you have no Postits available in order to erase";
            modal.classList.add("open-modal");

            const audio = document.createElement("audio");
            audio.src = "./assets/error-2-36058.mp3";
            audio.volume = 0.9;
            audio.play();
            if (title.value = "") {
                title.focus();
                title.classList.add("border-style");
            }
            else if (msg.value = "") {
                msg.focus();
                msg.classList.add("border-style");
            }
            else if (date.value = "") {
                date.focus();
                date.classList.add("border-style");
            }
            else if (time.value = "") {
                time.focus();
                time.classList.add("border-style");
            }
        }

        else {
            wrapper.innerHTML = "";
            lengthOfArray = 0;
            allPostitsArray = [];
            localStorage.setItem("listOfAllPostits", JSON.stringify(allPostitsArray));
            localStorage.setItem("amountOfItems", lengthOfArray);
            const audio = document.createElement("audio");
            audio.src = "./assets/FEWASZT-sticker-remove-61362.mp3";
            audio.volume = 0.7;
            audio.play();
            title.focus();
        }
    });

}
// down here is the type affect for title and message
title.addEventListener("keydown", () => {
    const audio = document.createElement("audio");
    audio.src = "./assets/HL5VL9S-chalk-write-26508.mp3";
    audio.volume = 0.3;
    audio.play();
});
message.addEventListener("keydown", () => {
    const audio = document.createElement("audio");
    audio.src = "./assets/HL5VL9S-chalk-write-26508.mp3";
    audio.volume = 0.3;
    audio.play();
});

// down here a border affect for each input
temperary.forEach(function (bord) {
    bord.addEventListener("click", (it) => {
        for (let i = 0; i < temperary.length; i++) {

            temperary[i].classList.remove("border-style");
        }
        it.currentTarget.classList.add("border-style");
    });
});



// ....................................................
// down here a submit event for the form details plus the popup(modal)
funky();
function funky() {
    form.addEventListener("submit", () => {
        event.preventDefault();
        if (title.value === "") {
            form.classList.add("blurr");
            wrapper.classList.add("blurr");
            modalContent.innerText = "Error you haven't typed anything in the TITLE field";
            modal.classList.add("open-modal");
            title.classList.add("border-style");
            const audio = document.createElement("audio");
            audio.src = "./assets/error-2-36058.mp3";
            audio.volume = 0.9;
            audio.play();
            title.focus();
            return;
        }
        else if (msg.value === "") {
            form.classList.add("blurr");
            wrapper.classList.add("blurr");
            modalContent.innerText = "Error you haven't typed anything in the Description field";
            modal.classList.add("open-modal");
            const audio = document.createElement("audio");
            audio.src = "./assets/error-2-36058.mp3";
            audio.volume = 0.9;
            audio.play();
            msg.focus();
            msg.classList.add("border-style");

            return;
        }
        else if (date.value === "") {
            form.classList.add("blurr");
            wrapper.classList.add("blurr");
            modalContent.innerText = "Error you haven't typed anything in the DATE field";
            modal.classList.add("open-modal");
            date.classList.add("border-style");
            const audio = document.createElement("audio");
            audio.src = "./assets/error-2-36058.mp3";
            audio.volume = 0.9;
            audio.play();
            date.focus();
            return;
        }
        else if (time.value === "") {
            form.classList.add("blurr");
            wrapper.classList.add("blurr");
            modalContent.innerText = "Error you haven't typed anything in the TIME field";
            modal.classList.add("open-modal");
            const audio = document.createElement("audio");
            audio.src = "./assets/error-2-36058.mp3";
            audio.volume = 0.9;
            audio.play();
            time.focus();
            time.classList.add("border-style");

            return;
        }
        const newPost = {
            title: title.value,
            msg: msg.value,
            data: date.value,
            time: time.value,
            dataId: lengthOfArray
        }
        allPostitsArray.push(newPost);
        localStorage.setItem("listOfAllPostits", JSON.stringify(allPostitsArray));
        const allItems = allPostitsArray.map((post) => {
            return `<li class="note anima">
        <div class="pin"><img src="./assets/icons8-pin-48.png" alt=""></div>
        <div class="delete" data-id=${post.dataId}><img src="./assets/icons8-close-window-48.png" alt=""></div>
        <div class="details">
    
           <div class="edit-title
           "><p>${post.title}</p> </div>
            <div class="content">
                <div class="line">${post.msg}
                </div>
            </div>
        </div>
        <div class="bottom-content">
            <div class="fonty">${post.data}</div>
            <div class="time fonty">
                ${post.time}
            </div>
        </div>
    </li>`
        }).join("");
        wrapper.innerHTML = allItems;
        lengthOfArray++;

        localStorage.setItem("amountOfItems", JSON.stringify(lengthOfArray));

        for (let i = 0; i < lengthOfArray; i++) {
            let tobi = wrapper.children[i].children[1];
            tobi.addEventListener("click", deletePostity);
        }
        for (let i = 0; i < lengthOfArray; i++) {
            if (wrapper != null) {
                wrapper.children[i].addEventListener("mouseover", function () {
                    wrapper.children[i].children[1].classList.add("show-delete");
                });
            }
        }
        for (let i = 0; i < lengthOfArray; i++) {
            if (wrapper != null) {

                wrapper.children[i].addEventListener("mouseout", function () {
                    wrapper.children[i].children[1].classList.remove("show-delete");
                });
            }

        }

        for (let i = 0; i < (lengthOfArray - 1); i++) {

            wrapper.children[i].classList.remove("anima");
        }




        const deletePostit = document.querySelector(".delete");

        deletePostit.addEventListener("click", deletePostity);
        message.placeholder = "type here.."
        title.value = "";
        date.value = "";
        time.value = "";
        msg.value = "";
        title.classList.add("border-style");
        const audio = document.createElement("audio");
        audio.src = "./assets/8SLLW3B-ui-arcade-bonus-01.mp3";
        audio.volume = 0.5;
        audio.play();
        title.focus();

    });
}
// ................................................
// down here a click event to exit the popup(modal)
clearBtn.addEventListener("click", function () {
    modal.classList.remove("open-modal");
    for (let i = 0; i < temperary.length; i++) {

        temperary[i].classList.remove("border-style");
    }
    if (title.value === "") {
        form.classList.remove("blurr");
        wrapper.classList.remove("blurr");
        title.focus();
        title.classList.add("border-style");

        return;
    }
    else if (msg.value === "") {
        form.classList.remove("blurr");
        wrapper.classList.remove("blurr");
        msg.focus();
        msg.classList.add("border-style");

        return;
    }
    else if (date.value === "") {
        form.classList.remove("blurr");
        wrapper.classList.remove("blurr");
        date.focus();
        date.classList.add("border-style");

        return;
    }
    else if (time.value === "") {
        form.classList.remove("blurr");
        wrapper.classList.remove("blurr");
        time.focus();
        time.classList.add("border-style");

        return;
    }

});

function deletePostity(e) {
    if (allPostitsArray.length > 0) {
        const fill = allPostitsArray.filter((item) => {
            if (allPostitsArray.length === 1) {
                return;
            }
            else if (item.dataId !== parseInt(e.currentTarget.dataset.id)) {
                return item;
            }
        });
        allPostitsArray = fill;

        for (let i = 0; i < allPostitsArray.length; i++) {
            allPostitsArray[i].dataId = i;
        }
        localStorage.setItem("listOfAllPostits", JSON.stringify(allPostitsArray));
        const allItems = allPostitsArray.map((it) => {
            return `<li class="note">
        <div class="pin"><img src="./assets/icons8-pin-48.png" alt=""></div>
        <div class="delete" data-id=${it.dataId}><img src="./assets/icons8-close-window-48.png" alt=""></div>
        <div class="details">
    
            <p>${it.title}</p>
            <div class="content">
                <div class="line fonty">${it.msg}
                </div>
            </div>
        </div>
        <div class="bottom-content">
            <div class="fonty">${it.data}</div>
            <div class="time fonty">
                ${it.time}
            </div>
        </div>
    </li>`
        }).join("");
        lengthOfArray--;
        localStorage.setItem("amountOfItems", lengthOfArray);
        wrapper.innerHTML = allItems;
        for (let i = 0; i < lengthOfArray; i++) {
            let tobi = wrapper.children[i].children[1];
            tobi.addEventListener("click", deletePostity);
        }
        for (let i = 0; i < lengthOfArray; i++) {
            let tobi = wrapper.children[i].children[1];
            if (wrapper != null) {
                wrapper.children[i].addEventListener("mouseover", function () {
                    tobi.classList.add("show-delete");
                });
            }
        }
        for (let i = 0; i < lengthOfArray; i++) {
            let tobi = wrapper.children[i].children[1];
            if (wrapper != null) {

                wrapper.children[i].addEventListener("mouseout", function () {
                    tobi.classList.remove("show-delete");
                });
            }
        }
        const audio = document.createElement("audio");
        audio.src = "./assets/FEWASZT-sticker-remove-61362.mp3";
        audio.volume = 0.7;
        audio.play();

    }

};


