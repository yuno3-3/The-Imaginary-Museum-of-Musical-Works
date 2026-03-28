document.querySelectorAll('.ev-button').forEach((button) => {
  button.addEventListener('click', () => {
    const direction = button.dataset.direction;
    const display = window.AppCommon?.byId('floor-num') || document.getElementById('floor-num');
    if (!display) return;

    if (direction === 'UP') {
      display.textContent = '2F';
      display.style.color = '#d4af37';
      return;
    }

    display.textContent = 'B1';
    display.style.color = '#888';
  });
});