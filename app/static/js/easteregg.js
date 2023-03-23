const search = document.getElementById('search')

search.addEventListener('input', () => {
   if (search.value.toLowerCase().replace(/\s+/g, '') === 'rickroll') {
        document.body.style.backgroundImage = 'url("/static/media/rick.gif")'
    }
    else if (search.value === 'quoi') {
        document.body.style.backgroundImage = 'url("/static/media/feur.gif")'
    }
})