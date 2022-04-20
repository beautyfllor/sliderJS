'use strict'

const imagens = [
    {id: '1', url: './img/angular.png'},
    {id: '2', url: './img/react.png'},
    {id: '3', url: './img/svelte.jpg'},
    {id: '4', url: './img/vue.jpg'},
    {id: '5', url: './img/minnion.png'}
]

//Cria o span anterior
const criarAnterior = () => {
    const anteriorButton = document.createElement('span')
    anteriorButton.classList.add('slider-button')
    anteriorButton.id = 'anterior'
    anteriorButton.innerHTML = '&laquo;'

    return anteriorButton
}

//Cria a div das imagens
const criarSliderItem = () => {
    const sliderContainer = document.createElement('div')
    sliderContainer.classList.add('slider-item-container')

    const slides = imagens.map(item => `
        <div class="slider-item">
            <img src="${item.url}">
        </div>
    `)

    sliderContainer.innerHTML = slides.join("")

    return sliderContainer
}

//Cria o span próximo
const criarProximoButton = () => {
    const proximoButton = document.createElement('span')
    proximoButton.classList.add('slider-button')
    proximoButton.id = 'proximo'
    proximoButton.innerHTML = '&raquo;'

    return proximoButton
}

const criarSlider = (imagens) => {
    const slider = document.querySelector('.slider')

    //Inserindo os objetos HTML no DOM
    slider.appendChild(criarAnterior())
    slider.appendChild(criarSliderItem())
    slider.appendChild(criarProximoButton())
    
}

criarSlider(imagens)

const sliderItemContainer = document.querySelector('.slider-item-container')
let sliderItems = document.querySelectorAll('.slider-item')

const proximoItem = () => {
    const primeiroItem = sliderItems[0]
    sliderItemContainer.appendChild(primeiroItem)
    sliderItems = document.querySelectorAll('.slider-item')
}

const anteriorItem = () => {
    const ultimoItem = sliderItems[sliderItems.length - 1]
    sliderItemContainer.prepend(ultimoItem)
    sliderItems = document.querySelectorAll('.slider-item')
}

document.getElementById('proximo').addEventListener('click', proximoItem)
document.getElementById('anterior').addEventListener('click', anteriorItem)