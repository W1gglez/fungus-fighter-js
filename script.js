// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

const fungusHP = document.querySelector('#hp-meter');
const hpText = document.querySelector('.hp-text');
const playerAP = document.querySelector('#ap-meter');
const apText = document.querySelector('.ap-text');

const fungus = document.querySelector('.freaky-fungus');
const buttons = document.getElementsByTagName('button');
let fungusRegen;

function onReady() {
  console.log('Ready to go!');

  // Make sure you check the index.html file!
  // There are lots of buttons and things ready for you to hook into here!

  // 🧠 Remember
  // - Handle events that ->
  // - Updates state which is ->
  // - Rendered to the DOM
}

onReady();

function handleAttack(event) {
  const attack = event.target;

  if (attack.classList.contains('arcane-scepter')) {
    fungusHP.value -= 14;
    playerAP.value -= 12;
  } else if (attack.classList.contains('entangle')) {
    fungusHP.value -= 23;
    playerAP.value -= 9;
  } else if (attack.classList.contains('dragon-blade')) {
    fungusHP.value -= 38;
    playerAP.value -= 47;
  } else if (attack.classList.contains('star-fire')) {
    fungusHP.value -= 33;
    playerAP.value -= 25;
  }

  if (fungusHP.value < 50 && !fungusRegen) {
    fungusRegen = setInterval(regenHP, 1000);
  }

  if (fungusHP.value === 0) {
    fungus.classList.replace('walk', 'dead');
    for (const button of buttons) {
      button.setAttribute('disabled', 'disabled');
    }
    clearInterval(fungusRegen);
  } else if (playerAP.value === 0) {
    fungus.classList.replace('walk', 'jump');
    for (const button of buttons) {
      button.setAttribute('disabled', 'disabled');
    }
  }

  hpText.innerText = `${fungusHP.value} HP`;
  apText.innerText = `${playerAP.value} AP`;
}

function regenHP() {
  if (fungusHP.value >= 50) {
    clearInterval(fungusRegen);
    fungusRegen = null;
  } else {
    fungusHP.value += 1;
  }

  hpText.innerText = `${fungusHP.value} HP`;
}