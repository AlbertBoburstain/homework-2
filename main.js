


const healthBar = document.getElementById('health-bar');
const healthText = document.getElementById('health-text');
const damageBtn = document.getElementById('damage-btn');
const healBtn = document.getElementById('heal-btn');
const megaDamageBtn = document.getElementById('mega-damage');
const title = document.querySelector('h2');

let currentHealth = 200;
const maxHealth = 200;

function updateHealth(newHealth) {
  if (newHealth > maxHealth) {
    currentHealth = maxHealth;
  } else if (newHealth < 0) {
    currentHealth = 0;
  } else {
    currentHealth = newHealth;
  }

  healthBar.style.width = currentHealth + 'px';

  const percentage = Math.round((currentHealth / maxHealth) * 100);
  healthText.textContent = percentage + '%';

  if (currentHealth === 0) {
    title.textContent = 'погиб... 👻';
    title.style.color = 'gray';

    damageBtn.setAttribute('disabled', 'true');
    healBtn.setAttribute('disabled', 'true');
    megaDamageBtn.setAttribute('disabled', 'true');
  }
}

damageBtn.addEventListener('click', () => {
  updateHealth(currentHealth - 20);
});

healBtn.addEventListener('click', () => {
  updateHealth(currentHealth + 20);
});

megaDamageBtn.addEventListener('click', () => {
  updateHealth(currentHealth - 50);
});