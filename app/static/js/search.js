// NOT INCLUDED ANYWHERE

let allKeywords = document.getElementsByClassName('keyword')

// thanks chatGPT ^^
function stripHTMLTags(str) {
    return str.replace(/<[^>]*>/g, '').split(' ').filter(Boolean);
}

function getKeywords() {
    let arr = Array()
    for (let i = 0; i < localStorage.length; i++) {
        arr.push(localStorage.getItem(`keyword${i}`))
    }
    return arr
}

if (location.pathname === '/search-results/') {
    localStorage.clear()
    // store all the ids of the returned keywords
    for (let i = 0; i < allKeywords.length; i++) {
        localStorage.setItem(`keyword${i}`, allKeywords[i].innerHTML)
    }
} else if (location.pathname === '/') {
    for (span of allSpans) {
        // this variable is an array !!
        let content = span.innerHTML.split(' ').filter(Boolean)
        if (content.length !== 0) {
            console.log(content.includes(localStorage.getItem(`keyword0`)))
        }
    }
    const allSpans = document.getElementsByTagName('span')
    const kw = getKeywords()
    Array(document.getElementsByTagName('span')).some((span) => {
        for (let i = 0; i < span.length; i++) {
            console.log(span[i].innerHTML.includes(localStorage.getItem(`keyword${i}`)))
        }
    })
    // const spans = Array.from(document.getElementsByTagName('span'));
    // const keywordExists = spans.some((span, i) => {
    //     return span.innerHTML.includes(localStorage.getItem(`keyword${i}`));
    // });

    // if (keywordExists) {
    //     console.log("Le tableau contient au moins une chaîne de caractères stockée dans le localStorage.");
    // } else {
    //     console.log("Le tableau ne contient pas de chaîne de caractères stockée dans le localStorage.");
    // }
}