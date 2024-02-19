import express, {Express, Response}  from  "express";

const app: Express = express();

app.get("/", (res: Response) => {
    res.send("Hello World from TypeScript");
});

app.listen(1000, () => {
    console.log("Started application on port %d" , 1000)
})