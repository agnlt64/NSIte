search.addEventListener('input', () => {
    localStorage.setItem('search', search.value)
})

function getSearchedWord() {
    return localStorage.getItem('search')
}

const searchedWordsList = document.getElementsByClassName(getSearchedWord())

console.log(searchedWordsList)