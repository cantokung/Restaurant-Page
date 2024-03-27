import './style.css';
import printMe from './print.js';
function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);
 
    // Lodash, now imported by this script
    

 
    return element;
  }
console.log('hello')
document.body.appendChild(component());