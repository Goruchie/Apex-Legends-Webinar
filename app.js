// Nav Menu

const btn = document.querySelector('#menu');

function opnMenu() {
  document.querySelector('.drop-content').style.display = 'block';
}

btn.addEventListener('click', opnMenu);

const closeBtn = document.querySelector('.cls-btn');

function clsMenu() {
  document.querySelector('.drop-content').style.display = 'none';
}

closeBtn.addEventListener('click', clsMenu);

const closeBtn1 = document.querySelector('.drop-content');

closeBtn1.addEventListener('click', clsMenu);

// Speakers Section

/* eslint-disable no-unused-vars */
const speakersSection = document.getElementById('speakersjs');
/* eslint-disable no-unused-vars */
const speakersArray = [
  {
    name: 'Aceu',
    img: './images/aceu.png',
    intro: 'A retired American player who is currently playing as a streamer for NRG.',
    desc: 'He is fast and vigilant, his aim often un-paralleled.',
  },

  {
    name: 'LuluLuvely',
    img: './images/lulu.png',
    intro: 'An American player who is currently playing for NRG.',
    desc: 'Known for her incredible mechanics and accuracy with the powerful Kraber.',
  },

  {
    name: 'Selly',
    img: './images/selly.png',
    intro: 'A Korean god who plays for the competitive team Crazy Racoon.',
    desc: 'He plays with the reconnaissance master, Crypto, a great support.',
  },

  {
    name: 'Taskmast33r',
    img: './images/task.png',
    intro: 'A Russian legend, who is from the competitive team, ZETA DIVISION.',
    desc: 'He is considered a top-tier apex legends wraith player.',
  },

  {
    name: 'iiTzTimmy',
    img: './images/timmy.png',
    intro: 'An American player who last played for Golden Guardians.',
    desc: 'He arguably has the best movement in game; this earns him a spot among the best apex legends players.',
  },

  {
    name: 'Monsoon',
    img: './images/monsoon.png',
    intro: 'An American player who is currently playing for Complexity Gaming.',
    desc: 'Bowen "Monsoon" Fuller joined World Best Gaming alongside birt and Urban on March 7.',
  },
];
/* eslint-disable */
speakersArray.forEach((e) => {
  speakersjs.innerHTML += `
    <div class="speaker-cards">
                  <img class="aceu-img" src="${e.img}" alt="">
                  <div>
                    <h3 class="aceu">${e.name}</h3>
                    <div class="speaker-desc">
                    <h4>${e.intro}</h4>
                    <div class="grace-line"></div>
                    <p>${e.desc}</p>
                    </div>
                </div>
              </div>
    `;
});
