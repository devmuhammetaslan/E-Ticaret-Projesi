📝 E-Ticaret Modülü (Vanilla JS)
Bu proje, modern web geliştirme prensipleri kullanılarak geliştirilmiş dinamik bir e-ticaret sepeti modülüdür. Kullanıcı deneyimi (UX) ve temiz kod (Clean Code) standartları ön planda tutularak inşa edilmiştir.

🚀 Canlı Demo: Projeyi Görüntüle

✨ Özellikler
Dinamik Ürün Listeleme: Ürün verileri JavaScript objeleri üzerinden asenkron bir yapıyla DOM'a basılır.

Gelişmiş Sepet Yönetimi: Ürün ekleme, miktar artırma/azaltma ve sepetten tamamen çıkarma işlemleri anlık olarak gerçekleşir.

LocalStorage Entegrasyonu: Sayfa yenilense bile sepet verileri kaybolmaz, tarayıcı hafızasında saklanır.

Kupon Sistemi: APP10 kodu ile sepet toplamı üzerinden dinamik indirim hesaplayan iş mantığı (business logic).

Responsive Tasarım: Mobil ve masaüstü cihazlarla tam uyumlu arayüz.

Anlık Bildirimler: Kullanıcı işlemleri için (ürün eklendi vb.) özel tasarlanmış toast notification sistemi.

🛠️ Kullanılan Teknolojiler
HTML5: Semantik yapı ve içerik iskeleti.

CSS3: Flexbox ve modern UI bileşenleri.

JavaScript (ES6+): DOM Manipülasyonu, Array Methods (map, filter, find), Spread Operator ve LocalStorage API.

🏗️ Mühendislik Yaklaşımı
Proje geliştirilirken "Global State" mantığı taklit edilerek verilerin tek bir merkezden yönetilmesi sağlanmıştır. Fonksiyonel programlama prensiplerine sadık kalınarak kodun tekrar edilebilirliği ve okunabilirliği artırılmıştır.

🎯 Gelecek Planları (Roadmap)
Bu proje, geliştirme sürecinin bir parçası olarak aşağıdaki aşamalardan geçecektir:

React Migration: Mevcut yapı React bileşenlerine (Components) dönüştürülecek ve useState/useEffect hook'ları ile state yönetimi modernize edilecek.

API Entegrasyonu: Ürün verileri statik bir dosyadan değil, gerçek bir REST API üzerinden çekilecek.

Tailwind CSS: Stil yönetimi daha ölçeklenebilir bir yapı olan Tailwind CSS'e taşınacak.

Nasıl Kullanılır?
Repoyu bilgisayarınıza clone'layın: git clone https://github.com/devmuhammetaslan/E-Ticaret-Projesi.git

index.html dosyasını tarayıcınızda açın.
