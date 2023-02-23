const allKeywords = document.getElementsByClassName('keyword')

for (let i = 0; i < allKeywords.length; i++) {
    localStorage.setItem(`keyword_${i}`, allKeywords[i].innerHTML)
}

// thanks chatGPT ^^
function stripHTMLTags(str) {
    return str.replace(/<[^>]*>/g, '').split(' ').slice(1000).filter(Boolean);
}

const searchPage = fetch('http://127.0.0.1:8080/')
    .then(response => response.text())
    .then(data => {
        searchArray = stripHTMLTags(data)
        for (word of allKeywords) {
            if (searchArray.includes(word.innerHTML)) {
                console.log('included')
            }
        }
    })