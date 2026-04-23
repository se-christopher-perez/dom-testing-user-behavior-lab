
/**
* @jest-environment jsdom
*/

const fs = require("fs")
const path = require("path")

const {

    addElementToDOM,
    removeElementFromDOM,
    simulateClick,
    handleFormSubmit,
    initializeDOMInteractions

} = require("../index.js")

const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf-8")

beforeAll(() => {

    document.body.innerHTML = html

    initializeDOMInteractions()

})

beforeEach(() => {

    document.body.innerHTML = html

    initializeDOMInteractions()

})

describe("addElementToDOM", () => {

    test("adds content to the correct DOM element", () => {

        const dynamicContent = document.querySelector("#dynamic-content")

        addElementToDOM("dynamic-content", "test")

        expect(dynamicContent.textContent).toBe("test")

    })

})

describe("removeElementFromDOM", () => {

    test("removes an existing element from the DOM", () => {

        removeElementFromDOM("dynamic-content")

        expect(document.querySelector("#dynamic-content")).toBe(null)

    })

})

describe("simulateClick", () => {

    test("updates the page when the form input contains valid text", () => {

        const dynamicContent = document.querySelector("#dynamic-content")

        simulateClick("dynamic-content", "test")

        expect(dynamicContent.textContent).toBe("test")

    })

})

describe("handleSubmitForm", () => {

    test("updates the page when the form input contains valid text", () => {

        const dynamicContent = document.querySelector("#dynamic-content")
        const input = document.querySelector('input')

        input.value = "test"

        handleFormSubmit("user-form", "dynamic-content")

        expect(dynamicContent.textContent).toBe("test")

    })

})

describe("handleSubmitForm", () => {

    test('displays the error message "Input cannot be empty" when the input is empty', () => {

        const dynamicContent = document.querySelector("#dynamic-content")
        const input = document.querySelector('input')
        const errorMessage = document.querySelector('#error-message')

        input.value = "  "

        handleFormSubmit("user-form", "dynamic-content")

        expect(errorMessage.textContent).toBe("Input cannot be empty")
        expect(errorMessage.classList.contains("hidden")).toBe(false)

    })

})
