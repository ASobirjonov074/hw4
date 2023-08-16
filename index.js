// const boxes = document.querySelectorAll(".box")


// boxes.forEach(box => {
//     box.onmouseenter = () => {
//         box.classList.add('active')

//         setTimeout(() => {
//             box.check
//         })
//     }
// })

// https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840578
// https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-gold?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840519
// https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-silver?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840488
// https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-spaceblack?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840510

let purple = document.querySelector('.deep') 
let gold = document.querySelector('.gold')
let silver = document.querySelector('.silver')
let black = document.querySelector('.black')
let img = document.querySelector('.picture img')

purple.onclick = () => {
    img.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840578')
}
gold.onclick = () => {
    img.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-gold?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840519')
}
silver.onclick = () => {
    img.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-silver?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840488')
}
black.onclick = () => {
    img.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-spaceblack?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703840510')
}
let model = document.querySelector('.modal_window')
let model_bg = document.querySelector('.modal_bg')
let open = document.querySelector('.open')
let close = document.querySelector('.close')
open.onclick = () => {
    model.style.display = "block"
    model_bg.style.display = "block"
}
close.onclick = () => {
    model.style.display = "none"
    model_bg.style.display = "none"
}

model_bg.onclick = () => {
    model.style.display = "none"
    model_bg.style.display = "none"
}