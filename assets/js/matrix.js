const rainContainer = document.querySelector('.rain');
const drizzleContainer = document.querySelector('.drizzle');
const button = document.querySelector('.start-button');
const columns = 40;
const streamLength = 16;
const drops = 60;
let isRunning = false;

      
function randomBinaryString(length) {
  let str = '';
  for (let i = 0; i < length; i++) {
    str += Math.random() > 0.5 ? '1\n' : '0\n';
  }
  return str; 
}

      
function toggleMatrix() {
  if (isRunning) {
    rainContainer.innerHTML = ''; 
    drizzleContainer.innerHTML = ''; 
    isRunning = false;
    button.textContent = "Start the Matrix";
  } 
    else {
    isRunning = true;
    button.textContent = "Stop the Matrix";

    // Matrix streams across the full screen
    for (let i = 0; i < columns; i++) {
      const col = document.createElement('div');
      col.className = 'column';

      const stream = document.createElement('div');
      stream.className = 'stream';
      stream.textContent = randomBinaryString(streamLength);

      // **Ensure streams start at random positions before animating**
      stream.style.position = "absolute";
      stream.style.top = Math.random() * 100 + "vh";  // Random vertical start point
      stream.style.left = (i * (100 / columns)) + "vw"; // Evenly spread across width

      // Animation settings
      stream.style.animationDelay = Math.random() * 3 + 's';
      stream.style.animationDuration = (3.5 + Math.random() * 2) + 's';

      col.appendChild(stream);
      rainContainer.appendChild(col);
    }

    // Drizzle raindrops
    for (let i = 0; i < drops; i++) {
      const drop = document.createElement("div");
      drop.className = "drop";
      drop.textContent = Math.random() > 0.5 ? "1" : "0";

      // **Ensure raindrops start across the screen**
      drop.style.position = "absolute";
      drop.style.top = Math.random() * 100 + "vh"; // Random start height
      drop.style.left = Math.random() * 100 + "vw"; // Random left position
      drop.style.animationDelay = Math.random() * 5 + "s";
      drop.style.animationDuration = (3.5 + Math.random() * 2) + 's';

      drizzleContainer.appendChild(drop);
    }
  }
}
