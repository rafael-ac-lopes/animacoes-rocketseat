// -- desc section --
const desc_element = document.querySelector('.desc-content')
const span_elements = document.querySelectorAll('.desc-content span')
const img_elements = document.querySelectorAll('.desc-content img')
desc_element.addEventListener('mouseover', () => {
    span_elements.forEach(span => {
        span.classList.add('show')
    })

    img_elements.forEach(img => {
        img.classList.add('show')
    })
})
// -- desc section --