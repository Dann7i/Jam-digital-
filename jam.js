const jam = document.getElementById('JAM');
const menit = document.getElementById('MENIT');
const detik = document.getElementById('DETIK');
const zona = document.getElementById('WAKTU');

function formatWaktu(waktu) {
  return waktu.toString().padStart(2, '0');
}

function iniZona(jamM) {
  return jamM >= 12 ? 'PM' : 'AM';
}

function jamNya() {
  const tanggal = new Date();
  let j2prime = tanggal.getHours();
  let j = j2prime % 12 || 12;
  let m = tanggal.getMinutes();
  let d = tanggal.getSeconds();

  jam.textContent = formatWaktu(j);
  menit.textContent = formatWaktu(m);
  detik.textContent = formatWaktu(d);
  zona.textContent = iniZona(j24);
}
setInterval(jamNya, 1000);
