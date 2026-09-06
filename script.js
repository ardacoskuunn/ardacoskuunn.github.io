// =========================================
// 1. İLETİŞİM FORMU (Sayfa Yenilenmeden Gönderim)
// =========================================
const form = document.getElementById("iletisimFormu");
const durumMesaji = document.getElementById("formDurum");

// Eğer sayfada form varsa bu işlemi yap
if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Sayfanın yönlenmesini engeller

        const formData = new FormData(form);

        fetch(form.action, {
            method: "POST",
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
        .then(response => {
            if (response.ok) {
                durumMesaji.style.display = "block"; // Başarı mesajını göster
                form.reset(); // Formu temizle
                
                // 5 saniye sonra mesajı gizle
                setTimeout(() => {
                    durumMesaji.style.display = "none"; 
                }, 5000);
            }
        })
        .catch(error => {
            console.log("Mesaj gönderilirken hata oluştu:", error);
        });
    });
}

// =========================================
// 2. MOBİL MENÜYÜ AÇMA / KAPATMA İŞLEMİ
// =========================================
const menuBtn = document.querySelector(".menuBtn");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a"); // Menüdeki linkleri seçtik

if (menuBtn && nav) {
    // 1. Butona tıklayınca aç/kapat
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("aktif"); 
    });

    // 2. Linklerden birine tıklanınca menüyü otomatik kapat
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("aktif");
        });
    });
}

// Akıllı Üst Menü (Yukarı kaydırınca beliren menü)
let sonKaydirma = window.scrollY;
const baslik = document.querySelector('.baslik');

window.addEventListener('scroll', () => {
  // Eğer mobilde hamburger menü açıksa gizlenme işlemini iptal et
  if (document.querySelector('.nav').classList.contains('aktif')) return;

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