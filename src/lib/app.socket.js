import { Server } from "socket.io"
import server from "../../server.js"
import moment from "moment-timezone"
import names from "./names.js"

const io = new Server(server, {
    cors: {
        origin:"*"
    }
})

let count = 0

io.of("/").on("connection", (socket) => {
    socket.emit("currentName", names[count])
})

setInterval(() => {
    if(count < 4) {
        io.emit("currentName", names[count])
        count ++
    } else {
        count = 0
        io.emit("currentName", names[count])
        count++
    }
}, 3000)