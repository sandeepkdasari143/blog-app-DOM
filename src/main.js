
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <button class="bg-red-500" id="counter" type="button"></button>
  </div>
`

setupCounter(document.querySelector('#counter'));
