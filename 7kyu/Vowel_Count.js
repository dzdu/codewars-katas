//Vowel Count
function getCount(str) {
  let vowels = ["a", "e", "i", "o", "u"]
  let stra = str.trim().split("")
  let count = stra.filter((le) => vowels.includes(le))
  return count.length
} 