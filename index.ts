import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (_req: Request, res: Response) => {
    res.send("Hello World from TypeScript, red");
});

app.listen(1000, () => {
    console.log("Started application on port %d", 1000)
})