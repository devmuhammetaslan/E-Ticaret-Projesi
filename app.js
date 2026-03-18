const urunler = [
    { id: 1, ad: "iPhone 17", fiyat: 65000, resim: "https://www.kvk.com/images/Product/25092025111621_7.jpg" },
    { id: 2, ad: "Samsung Galaxy S24", fiyat: 55000, resim: "https://www.kvk.com/images/Product/25092025111621_7.jpg" },
    { id: 3, ad: "Macbook Air M3", fiyat: 45000, resim: "https://www.kvk.com/images/Product/25092025111621_7.jpg" },
    { id: 4, ad: "AirPods Pro", fiyat: 9000, resim: "https://www.kvk.com/images/Product/25092025111621_7.jpg" }
];

const sepetSayac = document.getElementById("sepet-sayaci");
const sepetCekmece = document.getElementById("sepet-cekmece"); // Gizli çekmecemiz
const sepetKapatBtn = document.getElementById("sepet-kapat"); // Çekmecenin içindeki X butonu
const sepetIcerik = document.querySelector(".sepet-icerik"); // Ürünlerin listeleneceği yer
const toplamFiyatGosterge = document.getElementById("toplam-fiyat"); // Toplam tutarı yazacağımız yer

const items = document.querySelector(".urun-listesi"); 

function urunleriEkranaBas() {
    let birikenHTML = ""; 
    urunler.forEach(function(urun) {
        const urunKartiHTML = `
            <div class="urun-karti">
                <img src="${urun.resim}" alt="${urun.ad}">
                <h3>${urun.ad}</h3>
                <p>${urun.fiyat} TL</p>
                <button onclick="sepeteEkle(${urun.id})">Sepete Ekle</button>
            </div>
        `;
        birikenHTML += urunKartiHTML; 
    });

    // 3. Döngü BİTTİKTEN sonra, biriken tüm HTML'i TEK SEFERDE sayfaya basıyoruz. (Yüksek Performans)
    items.innerHTML = birikenHTML; 
}
urunleriEkranaBas();

let sepet = [];
function sepeteEkle(urunId){
    const secilenUrun = urunler.find(urun => urun.id === urunId);//3=== olmalı dikkat
    // 2. DEDEKTİFLİK: Bu ürün bizim "sepet" dizimizde zaten var mı?
    const sepettekiUrun = sepet.find(item => item.id === urunId);
    if (sepettekiUrun) {
        // EĞER VARSA: (Yani undefined dönmediyse)
        // Ürünü tekrar diziye ekleme! Sadece o anki miktarını 1 artır.
        sepettekiUrun.miktar += 1;
    } else {
        // EĞER YOKSA: (İlk defa ekleniyorsa)
        // Burada ufak bir JavaScript sihirbazlığı yapıyoruz: "Spread Operatörü (...)"
        // Ana ürünümüzü bozmamak için kopyasını alıyoruz ve içine "miktar: 1" özelliğini ekleyip sepete atıyoruz.
        const sepeteEklenecekYeniUrun = { ...secilenUrun, miktar: 1 };
        sepet.push(sepeteEklenecekYeniUrun);
    }
    console.log("Sepetin güncel hali:", sepet);
    sepetSayac.innerHTML = "Sepet ("+sepet.length+")";
    sepetiGuncelle();
}
function sepetiGuncelle() {
    let birikenHTML = "";
    let toplamFiyat = 0;
    
    sepet.forEach(function(urun) {
        const butonIkonu = urun.miktar > 1 ? "-" : "🗑️";
        const butonRengi = urun.miktar > 1 ? "#f39c12" : "red"; // 1'den çoksa turuncu, 1 ise kırmızı   
        const sepetUrunuHTML = `
            <div class="sepet-urunu" style="display: flex; justify-content: space-between; border-bottom: 1px solid #eee; padding: 10px 0;">
                <p style="margin: 0; font-weight: bold;">${urun.miktar}x ${urun.ad}</p>
                <p style="margin: 0; color: #07c45c;">${urun.fiyat * urun.miktar} TL</p>

                <div style="display: flex; gap: 5px;">
                    
                    <button onclick="miktariAzalt(${urun.id})" style="background: ${butonRengi}; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer; font-weight: bold;">
                        ${butonIkonu}
                    </button>

                    <button onclick="sepeteEkle(${urun.id})" style="background: #2ecc71; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer; font-weight: bold;">
                        +
                    </button>

                </div>
            </div>
        `;
        toplamFiyat += (urun.fiyat * urun.miktar);
        birikenHTML += sepetUrunuHTML; // HTML'i biriktir
        toplamFiyat += urun.fiyat;     // Fiyatı toplama ekle
    });
    if (sepet.length === 0) {
        sepetIcerik.innerHTML = "<p>Sepetiniz şu an boş.</p>";
        toplamFiyatGosterge.innerText = "0";
    } else {
        sepetIcerik.innerHTML = birikenHTML;
        toplamFiyatGosterge.innerText = toplamFiyat; // Toplam parayı ekrana basıyoruz
    }
}
function miktariAzalt(urunId) {
    // 1. Tıklanan ürünü sepetin içinde bul
    const sepettekiUrun = sepet.find(urun => urun.id === urunId);

    // 2. KARAR ANI: Üründen sepette 1'den fazla mı var, yoksa tam 1 tane mi kaldı?
    if (sepettekiUrun.miktar > 1) {
        // 1'den fazlaysa silme, sadece miktarını 1 azalt
        sepettekiUrun.miktar -= 1;
    } else {
        // Tam 1 tane kaldıysa, filtre kahve kağıdı mantığıyla (filter) diziden tamamen at
        sepet = sepet.filter(urun => urun.id !== urunId);
    }

    // 3. Arayüzü (Sayacı ve Çekmeceyi) Güncelle
    sepetSayac.innerHTML = "Sepet (" + sepet.length + ")";
    sepetiGuncelle();
}

sepetSayac.addEventListener("click",event=>{
    sepetCekmece.classList.add("aktif");
    
})
sepetKapatBtn.addEventListener("click",event=>{
    sepetCekmece.classList.remove("aktif");
})