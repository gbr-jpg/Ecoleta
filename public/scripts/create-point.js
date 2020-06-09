function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {
        for( const state of states ) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json() )
    .then( cities => {        

        for( const city of cities ) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
    } )
}

document.querySelector("select[name=uf]").addEventListener("change", getCities)

// Items de coleta .............................................................
const itemsToCollect = document.querySelectorAll('.items-grid li')
const collectedItems = document.querySelector('input[name=items]')

let selectedItems = []

// Adicionando um ouvidor de evento a cada item
itemsToCollect.forEach(item => {
    item.addEventListener('click', event => {      
        const itemLi = event.target
        itemLi.classList.toggle('selected')

        const itemId = event.target.dataset.id 
        
        // Verificar se há items selecionados, se sim pegar os itens selecionados        
        const alreadySelected = selectedItems.findIndex(item => itemFound = item === itemId)  // Isso será um boolean  
        
        // Se já estiver selecionado tirar da seleção
        if (alreadySelected >= 0) {
            // Tirar da seleção
            const filteredItems = selectedItems.filter(item => {
                const itemsIsDifferent = item !== itemId
                return itemsIsDifferent
            }) 
            
            selectedItems = filteredItems
        }        
        else { 
            // Se não estiver selecionado
            // Adicionar na seleção
            selectedItems.push(itemId)
        }        

        // Atuliazar os campos escondidos com os itens selecionados
        collectedItems.value = selectedItems
    })
})

