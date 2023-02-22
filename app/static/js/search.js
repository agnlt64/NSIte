const allKeywords = document.getElementsByClassName('keyword')

for (let i = 0; i < allKeywords.length; i++) {
    localStorage.setItem(`keyword_${i}`, allKeywords[i].innerHTML)
}