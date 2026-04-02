// ==========================================
// 1. VERİLER VE DOM ELEMENTLERİ (Hafıza)
// ==========================================
const urunler = [
    { id: 1, ad: "iPhone 17", fiyat: 65000, resim: "https://www.kvk.com/images/Product/25092025111621_7.jpg" },
    { id: 2, ad: "Samsung Galaxy S24", fiyat: 55000, resim: "https://www.kvk.com/images/Product/25092025111621_7.jpg" },
    { id: 3, ad: "Macbook Air M3", fiyat: 45000, resim: "https://www.kvk.com/images/Product/25092025111621_7.jpg" },
    { id: 4, ad: "AirPods Pro", fiyat: 9000, resim: "https://www.kvk.com/images/Product/25092025111621_7.jpg" }
];

let sepet = JSON.parse(localStorage.getItem("sepetKayit")) || [];
let kuponKullanildiMi = false;

// DOM Elementleri
const sepetSayac = document.getElementById("sepet-sayaci");
const sepetCekmece = document.getElementById("sepet-cekmece"); 
const sepetKapatBtn = document.getElementById("sepet-kapat"); 
const sepetIcerik = document.querySelector(".sepet-icerik"); 
const toplamFiyatGosterge = document.getElementById("toplam-fiyat"); 
const bildirimKutusu = document.getElementById("bildirim");
const items = document.querySelector(".urun-listesi"); 
const kuponAlani = document.getElementById("kupon-alani");
const kuponInput = document.getElementById("kupon-input"); // BU EKSİKTİ, EKLENDİ!

// ==========================================
// 2. ANA SAYFA LİSTELEME
// ==========================================
function urunleriEkranaBas() {
    let birikenHTML = ""; 
    urunler.forEach(function(urun) {
        birikenHTML += `
            <div class="urun-karti">
                <img src="${urun.resim}" alt="${urun.ad}" style="width:100%; max-width:200px;">
                <h3>${urun.ad}</h3>
                <p>${urun.fiyat} TL</p>
                <button onclick="sepeteEkle(${urun.id})">Sepete Ekle</button>
            </div>
        `;
    });
    items.innerHTML = birikenHTML; 
}

// ==========================================
// 3. SEPET İŞLEMLERİ (Kalp)
// ==========================================
function sepeteEkle(urunId){
    const secilenUrun = urunler.find(urun => urun.id === urunId);
    const sepettekiUrun = sepet.find(item => item.id === urunId);
    
    if (sepettekiUrun) {
        sepettekiUrun.miktar += 1;
    } else {
        const sepeteEklenecekYeniUrun = { ...secilenUrun, miktar: 1 };
        sepet.push(sepeteEklenecekYeniUrun);
    }
    
    bildirimGoster(`${secilenUrun.ad} sepete eklendi! ✅`);
    sepetiGuncelle();
}

function miktariAzalt(urunId) {
    const sepettekiUrun = sepet.find(urun => urun.id === urunId);
    if (sepettekiUrun.miktar > 1) {
        sepettekiUrun.miktar -= 1;
    } else {
        sepet = sepet.filter(urun => urun.id !== urunId);
    }
    sepetiGuncelle();
}

function sepetiGuncelle() {
    let birikenHTML = "";
    let toplamFiyat = 0;
    
    // Sayacı her zaman güncel tut
    sepetSayac.innerHTML = "Sepet (" + sepet.length + ")";

    if (sepet.length === 0) {
        sepetIcerik.innerHTML = "<p style='padding: 20px; text-align: center;'>Sepetiniz şu an boş.</p>";
        toplamFiyatGosterge.innerText = "0";
        if (kuponAlani) kuponAlani.style.display = "none";
    } else {
        // Sepet doluysa ürünleri dön ve fiyatı topla
        sepet.forEach(function(urun) {
            toplamFiyat += (urun.fiyat * urun.miktar); // Fiyatı SADECE burada ekliyoruz
            
            const butonIkonu = urun.miktar > 1 ? "-" : "🗑️";
            const butonRengi = urun.miktar > 1 ? "#f39c12" : "red";  
            
            birikenHTML += `
                <div class="sepet-urunu" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #eee; padding: 10px 0;">
                    <p style="margin: 0; font-weight: bold;">${urun.miktar}x ${urun.ad}</p>
                    <p style="margin: 0; color: #07c45c;">${urun.fiyat * urun.miktar} TL</p>
                    <div style="display: flex; gap: 5px;">
                        <button onclick="miktariAzalt(${urun.id})" style="background: ${butonRengi}; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer; font-weight: bold;">${butonIkonu}</button>
                        <button onclick="sepeteEkle(${urun.id})" style="background: #2ecc71; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer; font-weight: bold;">+</button>
                    </div>
                </div>
            `;
        });

        sepetIcerik.innerHTML = birikenHTML;

        // KASİYER MANTIĞI: İndirimi tüm fiyat hesaplandıktan sonra yapıyoruz!
        if (kuponKullanildiMi === true) {
            toplamFiyat = toplamFiyat * 0.90; 
        }
        
        toplamFiyatGosterge.innerText = toplamFiyat; // Ekrana bas
        
        if (kuponAlani) kuponAlani.style.display = "flex"; // Kupon alanını göster
    }
    
    sepetiKaydet(); // Döngü dışında 1 kere kaydet
}

function sepetiBosalt() {
    sepet = [];
    localStorage.removeItem("sepetKayit");
    kuponKullanildiMi = false;
    if (kuponInput) kuponInput.value = "";
    sepetiGuncelle();
    bildirimGoster("Sepet boşaltıldı !");
}

function sepetiKaydet() {
    localStorage.setItem("sepetKayit", JSON.stringify(sepet));
}

// ==========================================
// 4. KUPON VE BİLDİRİM MANTIĞI
// ==========================================
function kuponUygula() {
    const inputDegeri = kuponInput.value; 
    if (inputDegeri.trim().toUpperCase() === "APP10") {
        if (kuponKullanildiMi === false) {
            kuponKullanildiMi = true; 
            bildirimGoster("Kupon uygulandı! 🎉");
            sepetiGuncelle(); 
        } else {
            bildirimGoster("Bu kuponu zaten kullandınız!");
        }
    } else {
        bildirimGoster("Geçersiz veya süresi dolmuş kupon kodu!");
    }
}

function bildirimGoster(mesaj) {
    bildirimKutusu.innerText = mesaj;
    bildirimKutusu.classList.add("goster");
    setTimeout(()=>{
        bildirimKutusu.classList.remove("goster");
    }, 3000);
}

// ==========================================
// 5. EVENT LİSTENER'LAR (Tıklama Olayları)
// ==========================================
sepetSayac.addEventListener("click", () => {
    sepetCekmece.classList.add("aktif");
});

sepetKapatBtn.addEventListener("click", () => {
    sepetCekmece.classList.remove("aktif");
});

// SAYFA İLK AÇILDIĞINDA ÇALIŞACAK MOTORLAR
urunleriEkranaBas();
sepetiGuncelle();