# 🛒 Dinamik E-Ticaret Sepet Modülü (Vanilla JS)

Bu proje, modern web geliştirme prensipleri kullanılarak sıfırdan geliştirilmiş dinamik bir e-ticaret sepeti modülüdür. Kullanıcı deneyimi (UX) ve temiz kod (Clean Code) standartları ön planda tutularak, durum yönetimi (state management) ve veri kalıcılığı (data persistence) gibi yazılım mimarisi konseptleri uygulanmıştır. Gelecekteki React tabanlı projeler için sağlam bir algoritma altyapısı sunar.

## 🔗 Canlı Demo
[Projeyi İncelemek İçin Tıklayın](https://e-ticaret-projesi-smoky.vercel.app/)

## ✨ Öne Çıkan Özellikler

* **Dinamik DOM Manipülasyonu:** Ürün verileri JavaScript objelerinden okunarak asenkron bir yapıyla ekrana basılır.
* **Gelişmiş Sepet Algoritması:** Ürün ekleme, adet artırma/azaltma ve sepetten tamamen silme işlemleri anlık hesaplamalarla gerçekleşir.
* **Veri Kalıcılığı (LocalStorage):** Sayfa yenilense veya kapatılsa dahi sepet içeriği tarayıcı hafızasında güvenle saklanır.
* **İş Mantığı (Business Logic):** `APP10` kodu ile çalışan, sepet toplamı üzerinden dinamik indirim hesaplayan özel kupon sistemi.
* **Anlık Kullanıcı Geri Bildirimi:** Kullanıcı eylemlerine yanıt veren (ürün eklendi, hatalı kupon vb.) süreli bildirim (toast notification) yapısı.

## 🛠️ Kullanılan Teknolojiler

* **HTML5:** Semantik iskelet
* **CSS3:** Flexbox ve duyarlı (responsive) UI tasarımı
* **JavaScript (ES6+):** * Array Metotları (`map`, `filter`, `find`, `forEach`)
  * Spread Operator (`...`)
  * Event Listeners ve DOM Caching
  * LocalStorage API

## 🎯 Gelecek Planları (Roadmap)

Bu proje, bir geliştirme serüveninin ilk adımıdır. İlerleyen süreçte aşağıdaki modernizasyonlar uygulanacaktır:

1. **React.js Mimarisini Entegre Etmek:** Mevcut yapı component'lere (bileşenlere) ayrılarak `useState` ve `useEffect` hook'ları ile yeniden yazılacak.
2. **REST API Entegrasyonu:** Ürünler statik bir diziden değil, harici bir REST API üzerinden asenkron olarak çekilecek.
3. **Tailwind CSS:** Arayüz daha hızlı ve ölçeklenebilir bir stil kütüphanesine taşınacak.

## 🚀 Kurulum ve Çalıştırma

Projeyi kendi bilgisayarınızda denemek için:

1. Repoyu bilgisayarınıza klonlayın:
   ```bash
   git clone [https://github.com/devmuhammetaslan/E-Ticaret-Projesi.git](https://github.com/devmuhammetaslan/E-Ticaret-Projesi.git)
