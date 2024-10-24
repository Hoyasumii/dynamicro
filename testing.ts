function* generateData() {
  for (let index = 0; index < 100; index++) {
      yield {
          name: `Alan-${index}`,
          id: crypto.randomUUID()
      }
  }
}

const data = generateData();

(async () => {
  const myInterval = setInterval(() => {
      console.log(data.next());
  }, 1000);

  setTimeout(() => {
      clearInterval(myInterval);
  }, 1000 * (15 + 1));
})()