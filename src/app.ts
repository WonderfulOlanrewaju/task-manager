import express from "express";
export const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended : true
}));

app.get("/", (req: any, res: any) : object => {
  return res.status(200).json({
    message: "todo API homepage",
  });
});

app.all("*", (req: any, res: any): object=> {
    return res.status(404).json({
        message: "Route does not exist!"
    });
});