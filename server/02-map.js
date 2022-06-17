const letters = ['a', 'b', 'c']

/* const newArray = []
for (let i = 0; i < letters.length; i++) {
  const element = letters[i]
  newArray.push(element + '++')
} */

const newArray = letters.map(item => item.toUpperCase())

console.log('original:', letters)
console.log('new', newArray)
