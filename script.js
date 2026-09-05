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

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        // Butona basıldığında 'aktif' class'ını ekler veya çıkarır
        nav.classList.toggle("aktif"); 
    });
}