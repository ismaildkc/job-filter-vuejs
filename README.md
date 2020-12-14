# job-filter-vuejs
```

Kullanıcın istediği lokasyon ve anahtar kelimeye göre iş ilanı listeleyip ilanın detayını görebildiği vue js uygulaması.
Arama sonuçları (listesi) state'te tutularak, kullanıcı detay sayfasından, liste ekranına döndüğünde son aradığı sonuçlara erişmesi sağlanmıştır.


## Proje Kurulumu
```
npm install
```

### Proje Ayağa Kaldırmak İçin
```
npm run serve
```

### Minify ve production
```
npm run build
```

### Lint ve fix'ler
```
npm run lint
```

### FakeApi
```
fakeApi için json-server kullanılabilir. 
/api/data/ dizininde çalıştırılacak komut:

json-server --watch db.json
```

### Api URL
```
http://localhost:3000/jobList
http://localhost:3000/jobDetail
http://localhost:3000/version
http://localhost:3000/statusCode
```