// Add your functions and code here
kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens = kittens.unshift(name);
  return kittens
}
