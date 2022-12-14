const cont = document.querySelector('#container')
const test =document.createElement('p');
test.style.cssText = 'color: red;';
test.textContent = 'Hey im red';
cont.appendChild(test)

const header = document.createElement('h3')
header.style.cssText = 'color:blue;'
header.textContent = 'Im a blue h3!';
cont.appendChild(header);

const d = document.createElement('div');
d.textContent='test'

d.style.cssText = "background-color: pink; border: 1px solid black;"

const anotherh1 = document.createElement('h1');

anotherh1.textContent = 'Im in a Div'
const newp = document.createElement('p')
newp.textContent = 'me too'

d.appendChild(anotherh1)
d.appendChild(newp)

document.body.appendChild(d)


const btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
    e.target.style.background = 'blue'
  });

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      alert(button.id);
    });
  });