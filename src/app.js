import express from "express"
import cors from "cors"

const app = express();

app.use(cors())

app.get("/", (req, res) => {
    res.status(200).send("Helo cofe")
})

app.get("/api/healthcheck", (req, res) => {
    res.status(200).json({ status: "ok" });
})

export default app