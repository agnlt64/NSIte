let allKeywords = document.getElementsByClassName('keyword')

// thanks chatGPT ^^
function stripHTMLTags(str) {
    return str.replace(/<[^>]*>/g, '').split(' ').filter(Boolean);
}

if (location.pathname === '/search-results/') {
    // get all the ids of the returned keywords
    let ids = new Array()
    for (id of allKeywords) {
        ids.push(id.innerHTML)
        document.getElementById(id.innerHTML)
    }
} else if (location.pathname === '/') {
    const allSpans = document.getElementsByTagName('span')
    for (s of allSpans) {
        console.log(s.id)
    }
}