console.log('hello');
document.documentElement.style.setProperty('--your-variable', '#YOURCOLOR');
const body = document.querySelector('body');

const button = document.createElement('button');
button.textContent = 'Change coloms';

let numberColumn = 2;
button.onclick = () => {
  numberColumn++;
  document.documentElement.style.setProperty('--number-coloms', numberColumn);
  console.log(numberColumn);
};

body.append(button);
