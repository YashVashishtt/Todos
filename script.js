

const input = document.getElementById("to_write");
const title = document.getElementById("to_write_title");
const notes = document.getElementById("save_notes");
const del = document.querySelector("#del_btn");
const user = document.querySelector("#user")

let counter = 0;

input.addEventListener("keypress", function (e) {
    console.log("key pressed");
    let n = 0;
    if (e.key === "Enter") {
        const trimmedInput = input.value.trim();

        if (trimmedInput !== "") {
            const new_div = document.createElement("div")
            notes.append(new_div)
            // new_div.style = "display:flex; justify-content:space-evenly;"

            const uniqueId = `note_${counter++}`;
            new_div.id = uniqueId;

            const del_btn = document.createElement("button")
            del_btn.innerHTML = `X`
            new_div.appendChild(del_btn)

            new_div.innerHTML += `<h2>${title.value}</h2>` + `<p>${trimmedInput}</p>`;
            
            input.value = "";
            title.value = ""

        } else {
            alert("To add you need to write first");
        }
    }
});



notes.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON" && event.target.textContent === "X") {
        const parentNote = event.target.parentElement;
        notes.removeChild(parentNote);


    }
});





