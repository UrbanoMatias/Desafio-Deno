import { Router } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import * as productsController from "../controllers/products.controller.ts";

const router = new Router();

router.get("/products",productsController.getAllProducts);
router.post("/products",productsController.saveProduct);

export default router