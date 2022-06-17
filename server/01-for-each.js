const letters = ['a', 'b', 'c']

// For loop
for (let i = 0; i < letters.length; i++) {
  const element = letters[i]
  console.log('for', element)
}

// forEach
letters.forEach(item => console.log('forEach', item))
