const easterEgg = document.getElementById('easter-egg')
const search = document.getElementById('search')
const rick = document.createElement('img')
rick.src = '/static/media/rick.gif'
rick.style.marginTop = '2rem'
rick.style.width = '50rem'
rick.style.height = '40rem'

search.addEventListener('input', () => {
    if (search.value === 'rick roll') {
        easterEgg.appendChild(rick)
    }
})