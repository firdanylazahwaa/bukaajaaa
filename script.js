const start = document.getElementById('start');
const rain = document.getElementById('rain');
const tapGift = document.getElementById('tapGift');
const boom = document.getElementById('boomSound');

tapGift.addEventListener('click', () => {
  // ganti ke layar hujan
  start.classList.add('hidden');
  rain.classList.remove('hidden');

  // mainkan suara
  boom.currentTime = 0;
  boom.play().catch(()=>{});

  // posisi tengah layar
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;

  // fungsi spawn 1 stiker jari tengah
  const spawnFinger = () => {
    const el = document.createElement('div');
    el.className = 'finger';
    el.textContent = '🖕';

    // ukuran acak
    const size = 24 + Math.random() * 50;
    el.style.fontSize = `${size}px`;

    // arah & jarak acak
    const angle = Math.random() * Math.PI * 2;
    const distance = 100 + Math.random() * 400;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;

    // rotasi acak
    const rot = (Math.random() * 720 - 360) + 'deg';

    // posisi awal
    el.style.left = `${cx}px`;
    el.style.top = `${cy}px`;

    // kirim variabel ke CSS
    el.style.setProperty('--dx', `${dx}px`);
    el.style.setProperty('--dy', `${dy}px`);
    el.style.setProperty('--rot', rot);

    rain.appendChild(el);

    // hapus setelah animasi
    setTimeout(() => el.remove(), 1500);
  };

  // spawn terus-menerus tanpa henti
  setInterval(() => {
    for (let i = 0; i < 5; i++) {
      spawnFinger();
    }
  }, 200); // tiap 0.2 detik
});
