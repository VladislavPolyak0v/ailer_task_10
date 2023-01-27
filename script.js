// O(n - 3 * (n / 2)) -> O(N^2)
(() => {
  console.time('timer')
  const max = 2000000;
  let sum = 0;
  const div = document.querySelector('.result');

    Promise.resolve()
      .then(() => {
        let result;
        
        const checkSimple = (num) => {
          let j = 2;
          while (j <= Math.sqrt(num)) {
            if (num % j === 0) {
              return false
            }
            j++
          }
          return true
        }
        
        for (let i = 3; i < max; i += 2) {
          checkSimple(i) ? sum += i : null;
        }
      
        result = sum + 2;
        div.innerHTML = `<h3>Result: ${result}</h3>`
      })
    console.timeEnd('timer')
})()