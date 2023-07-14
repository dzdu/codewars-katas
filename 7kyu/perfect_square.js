//Find the next perfect square!

function findNextSquare(sq) {
    let res = Math.sqrt(sq) % 1 === 0 ? Math.sqrt(sq) + 1 : -1
    return res > 0 ? res * res : -1
}