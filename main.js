const nums = document.querySelectorAll('.num-btn')


nums.forEach((num) => {

    num.addEventListener("click", () => {
        const selected = document.querySelector(".selected")

        if (selected) {
            selected.classList.remove("selected")
        }

        num.classList.add("selected")
    })


})



// shwoing seleted reiting result


const submit = document.querySelector(".submit")
const everything = document.querySelector(".everything")
let span = document.querySelector(".span1")
const thankyoustate = document.querySelector(".thankyoustate")

submit.addEventListener("click", () => {
    everything.style.display = "none"
    thankyoustate.style.display = "block"


    const selected = document.querySelector(".selected")
    span.textContent = selected.textContent
})
