function duplicateEncode(word) {
    return [...word.toLowerCase()].map(le => word.toLowerCase().replace(new RegExp(`[^${le}]`, 'g'), "").length > 1 ? ')' : '(').join('')

}
console.log(duplicateEncode("Supralapsarian"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));
console.log(duplicateEncode("yQQQO!PQQ@SbdQ"));
console.log(duplicateEncode("Supralapsarian"));