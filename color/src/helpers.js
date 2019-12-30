function choice(arr) {
  let randIn = Math.floor(Math.random() * arr.length);
  return arr[randIn];
}

export { choice };