let allKeywords = document.getElementsByClassName('keyword')

// thanks chatGPT ^^
function stripHTMLTags(str) {
    return str.replace(/<[^>]*>/g, '').split(' ').filter(Boolean);
}

const allSpans = document.getElementsByTagName('span')
if (location.pathname === '/search-results/') {
    localStorage.clear()
    // store all the ids of the returned keywords
    for (let i = 0; i < allKeywords.length; i++) {
        localStorage.setItem(`keyword${i}`, allKeywords[i].innerHTML)
    }
} else if (location.pathname === '/') {
    for (let i = 0; i < allSpans.length; i++) {
        index = allSpans[i].innerHTML.split(' ').filter(Boolean)
        let stored = localStorage.getItem(`keyword${i}`)
        console.log(index.slice(0).includes(stored))
        if (stored !== null) {
            if (index.includes('spécialité')) {
                allSpans[i].id = stored
            }
        }
    }
}