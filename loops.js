function forLoop(array) {
  for (let i = 0; i < 25; i++) {
  if (i === 1){
    array.push("I am 1 strange loop.")
  }
  else{
<<<<<<< HEAD
    array.push(`I am ${i} strange loops.`)
=======
    array.push(`I am ${i} strange loops.``)
>>>>>>> 44733242bd7fa30803de163132bd4e1200bf5066
  }
  }
  return array
}
