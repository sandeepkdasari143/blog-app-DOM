const FETCH_URL = "https://jsonplaceholder.typicode.com/posts";
(async () => {
  const response = await fetch(FETCH_URL);
  const jsonData = await response.json();
  console.log(jsonData)
  localStorage.setItem("blogs", JSON.stringify(jsonData))
})();

// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <button class="bg-red-500" id="counter" type="button"></button>
//   </div>
// `

// setupCounter(document.querySelector('#counter'));
