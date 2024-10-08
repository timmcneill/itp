let size = parseInt(prompt('Chessboard size:'))

if (size % 2 === 0) {
    for (let count = size; count > 0; count -= 2) {
        console.log(`${' #'.repeat(size/2)}`)
        console.log(`${'# '.repeat(size/2)}`)
    }
 }

 if (size % 2 === 1) {
    for (let count = size; count > 1; count -= 2) {
        console.log(`${' #'.repeat(size/2)} `)
        console.log(`${'# '.repeat(size/2)}#`)
    }
    console.log(`${' #'.repeat(size/2)} `)
}