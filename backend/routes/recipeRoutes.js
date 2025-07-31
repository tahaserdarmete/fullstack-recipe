import express from "express";
import {
  createRecipe,
  deleteRecipe,
  getAllRecipes,
  getRecipe,
  updateRecipe,
} from "../controllers/recipeController.js";
import controlId from "../middleware/controlid.js";

// Router => server.js dosyasında kullanılan rotaları yönleri belirlememizi sağlar.

const router = express.Router();

// oluşturulan router örneğine endpointleri/routerları/yolları tanıtırız ve istek gelince çalışacak fonksiyonu belirleriz.

// ! ID parametresini kullanmayacağımız alanlar şunlardır:
// Bütün tarifleri getirmek
// Yeni bir tarif eklemek

// /api/v1/recipes' e istek atılırsa isteği bu zincir yakalar.
router
  .route("/api/v1/recipes")
  .get(getAllRecipes) // bütün tarifleri getir
  .post(createRecipe); // yeni tarif ekle

// ! ID parametresini kullanacağımız alanlar şunlardır:
//  spesifik bir tarifi getirmek
//  spesifik bir tarifi silmek
//  spesifik bir tarifi güncellemek

router
  .route("/api/v1/recipes/:id")
  .get(controlId, getRecipe)
  .patch(controlId, updateRecipe)
  .delete(controlId, deleteRecipe);

// ana sunucuya tanıtmak için export ediyoruz.
export default router;
