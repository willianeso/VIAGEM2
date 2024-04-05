// DOM
const consumo = document.querySelector ('#consumo')
const calcular = document.querySelector ('#calcular')
const resultado = document.querySelector ('#resultado')

// EVENTO
calcular.addEventListener('click', () =>{

    
    const consumo = Number (document.querySelector ('#consumo').value)
    const distancia = Number (document.querySelector ('#distancia').value)
    const preco = Number (document.querySelector ('#preco').value)

    media = (distancia/consumo)*preco

    resultado.textContent = `O valor da viagem será R$ ${media.toFixed(2)}`
    
})