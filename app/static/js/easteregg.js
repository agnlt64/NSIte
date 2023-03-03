const search = document.getElementById('search')

search.addEventListener('input', () => {
    if (search.value === 'rick roll') {
        document.body.style.backgroundImage = 'url("/static/media/rick.gif")'
    }
})