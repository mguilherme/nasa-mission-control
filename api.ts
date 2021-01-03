import {Router} from "https://deno.land/x/oak@v6.4.1/mod.ts";
import api from "./api.ts"

const router = new Router();

router.get("/", (ctx) => {
    ctx.response.body = "NASA Mission Control API";
});

export default router
