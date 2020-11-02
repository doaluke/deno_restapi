import { Application, helpers } from "https://deno.land/x/oak/mod.ts";
import router from "./routes/index.ts";
const port = 7000;
const app = new Application();

// Logger
app.use(async (ctx, next) => {
	await next();
	const rt = await ctx.response.headers.get("X-Response-Time");
	const params = helpers.getQuery(ctx, { mergeParams: true });
	console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`, params);
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen({ port });
console.log(` >>>> server is running on port ${ port }`);
