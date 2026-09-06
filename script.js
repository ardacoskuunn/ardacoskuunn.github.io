/* =========================================
   1. HAMBURGER MENÜ (Sadece ana sayfada çalışır)
========================================= */
const menuBtn = document.querySelector('.menuBtn');
const navMenu = document.querySelector('.nav');

// Eğer bu sayfada menü butonu varsa bu kodu çalıştır (hata vermeyi önler)
if (menuBtn && navMenu) {
  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('aktif');
  });
}

/* =========================================
   2. AKILLI ÜST MENÜ (Tüm sayfalarda çalışır)
========================================= */
let sonKaydirma = window.scrollY;
const baslik = document.querySelector('.baslik');

window.addEventListener('scroll', () => {
  // Eğer başlık bulunamadıysa kodu durdur
  if (!baslik) return;

  // Mobilde hamburger menü açıksa gizlenme işlemini iptal et
  if (navMenu && navMenu.classList.contains('aktif')) return;

  const guncelKaydirma = window.scrollY;

  // Sayfa en üstteyse veya yukarı kaydırılıyorsa menüyü göster
  if (guncelKaydirma <= 0 || guncelKaydirma < sonKaydirma) {
    baslik.classList.remove('gizli');
  } 
  // Aşağı kaydırılıyorsa menüyü gizle
  else if (guncelKaydirma > sonKaydirma) {
    baslik.classList.add('gizli');
  }

  sonKaydirma = guncelKaydirma;
});