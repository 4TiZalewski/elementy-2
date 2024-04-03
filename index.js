// Copyright (c) 2024 4TiZalewski

// @ts-check

/**
 * @type {HTMLInputElement | null}
 */
const person_name = document.querySelector("#imie");

/**
 * @type {HTMLInputElement | null}
 */
const generate_button = document.querySelector("#generateButton");

/**
 * @type {HTMLInputElement | null}
 */
const display = document.querySelector("#display");

/**
 * @type {string[]}
 */
const GREETINGS = ["Cześć!", "Siema!", "Hej!", "Witaj!", "Dzień dobry!"];

if (generate_button && display && person_name) {
    generate_button.addEventListener("click", (/** @type {MouseEvent} */ event) => {
        event.preventDefault();

        /**
         * @type {HTMLElement}
         */
        const new_element = create_new_element(person_name.value);
        
        display.appendChild(new_element);
    });
} else {
    console.warn("Failed to get elements!");
}

/**
 * @param {string} element_name 
 * @returns {HTMLElement}
 */
function create_new_element(element_name) {
    /**
     * @type {HTMLParagraphElement}
     */
    const greeting = document.createElement("p");
    greeting.innerText = GREETINGS[Math.floor(Math.random() * GREETINGS.length)] + " " + element_name;
    greeting.className = "greeting";

    greeting.addEventListener("click", (/** @type {Event} */ remove_button_element) => {
        remove_button_element.preventDefault();

        greeting.remove();
    });

    return greeting;
}
