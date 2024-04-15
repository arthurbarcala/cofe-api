import "dotenv/config"
import http from "http"
import app from "./src/app.js"

const PORT = 8080
const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)

})

export default httpServer