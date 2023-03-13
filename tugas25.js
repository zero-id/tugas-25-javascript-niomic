var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]

console.log("Sebelumnya : " + angka)
console.log("Assceding : " + angka.sort())
console.log("Desceding : " + angka.sort().reverse())
console.log("Filter : " + angka.filter(ang => {
    return ang > 10
}))

