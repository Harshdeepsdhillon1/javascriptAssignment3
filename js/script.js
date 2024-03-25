// script.js

class Smoothie {
    constructor(flavor, extras, size) {
        this.flavor = flavor;
        this.extras = extras;
        this.size = size;
    }

    getDescription() {
        return `You ordered a ${this.size} ${this.flavor} smoothie with ${this.extras.join(', ')}.`;
    }
}

function createSmoothie() {
    const flavor = document.getElementById("flavor").value;
    const extras = [];
    const checkboxes = document.getElementsByName("extras");
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            extras.push(checkbox.value);
        }
    });
    const size = document.querySelector('input[name="size"]:checked').value;

    const smoothie = new Smoothie(flavor, extras, size);
    displaySmoothie(smoothie.getDescription());
}

function displaySmoothie(description) {
    document.getElementById("smoothieDetails").innerHTML = `<p>${description}</p>`;
}
