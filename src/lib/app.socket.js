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
    console.log(names[count])
})

setInterval(() => {
    const timeInBrasilia = moment().tz("America/Sao_Paulo").format("HH");
    
    if (timeInBrasilia === "12") {
        if(count < 4) {
                io.emit("currentName", names[count])
                console.log(names[count])
                count ++
            } else {
                count = 0
                io.emit("currentName", names[count])
                console.log(names[count])
                count++
            }
    }
}, 3600000)