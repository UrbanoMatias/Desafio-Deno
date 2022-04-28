import { Application } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import router from "./routes/index.routes.ts"
import productRouter from "./routes/products.routes.ts"

const app = new Application();
console.log("Server running on port 8080")

app.use(router.routes());
app.use(productRouter.routes());
app.use(productRouter.allowedMethods());
app.use(router.allowedMethods());
app.listen({port:8080});