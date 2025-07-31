import express from "express";
import recipeRoutes from "./routes/recipeRoutes.js";
import cors from "cors";

// express kurulumu

// express fonksiyonunu çağıracak bir sunucu öreneği alırız.

const app = express();

// farklı linklerden, portlardan ve tarayıcılardan istek atılabilmesini sağlamak için CORS middleware ni izin veririz.

app.use(cors());

// gerekli arayazılımları isteklerimiz routelara gitmeden önce belirleriz.
app.use(express.json());

// sunucu tarafına endpointleri tanıtmak için ne kadar roter varsa hepsini burada use fonksiyonuyla kullanırız.

app.use(recipeRoutes);

// bu uygulamanın kullanacağı portu ayrı bir değişken olarak belirleriz.(opsiyonel)

const PORT = 3000;

// aldığımız sunucu örneğini ayağa kaldırıp dinleme moduna alıyoruz.

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışmaya başladı`);
});
