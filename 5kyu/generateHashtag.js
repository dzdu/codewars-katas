//The Hashtag Generator
function generateHashtag(str) {
    let trStr = str.trim()
    if (trStr == "" || trStr == " ") return false
    else {
        let stra = str.split(" ").filter(n => n)
        let newStr = "#" + stra.map((l) => {
            return l[0].toUpperCase() + l.substring(1)
        }).join("").replace(/ /g, "")
        if (newStr.length <= 140) return newStr
        else return false
    }
}