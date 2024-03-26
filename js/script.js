// script.js

class Smoothie {
    constructor(flavor, extras, size) {
        this.flavor = flavor;
        this.extras = extras;
        this.size = size;
        this.prices = {
            snack:3,
            small: 5,
            medium: 8,
            large: 9,
            xLarge: 10,
            spinach: 1,
            proteinPowder: 2,
            chiaSeeds: 1.5,
            chocoChips: 2,
            mapleSyrup: 1.5,
            tripleblend: 0.5,
            strawberrySyrup: 1
        };
    }

    getDescription() {
        let totalPrice = this.prices[this.size];
        this.extras.forEach(extra => {
            totalPrice += this.prices[extra];
        });
        return `You ordered a ${this.size} ${this.flavor} smoothie with ${this.extras.join(', ')}. Total price: $${totalPrice.toFixed(2)}`;
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
    displaySmoothie(smoothie.getDescription(), flavor);
}

function displaySmoothie(description, flavor) {
    const smoothieDetails = document.getElementById("smoothieDetails");
    smoothieDetails.innerHTML = `<p>${description}</p>`;
    const image = document.createElement('img');
    image.src = `./images/${flavor}.jpg`;
    image.alt = `${flavor} Smoothie`;
    smoothieDetails.appendChild(image);
}
