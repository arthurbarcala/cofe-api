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
let currentPerson = ""
let nameInterval

io.of("/").on("connection", (socket) => {
    currentPerson = names[count]
    socket.emit("currentName", currentPerson)
    console.log(currentPerson)
})

const timer = () => {
    return {
        start() {
            nameInterval = setInterval(() => {
                const timeInBrasilia = moment().tz("America/Sao_Paulo").format("HH");
                if (String(timeInBrasilia) == "00") {
                    if(count < 4) {
                        currentPerson = names[count]
                        io.emit("currentName", currentPerson)
                        console.log(currentPerson)
                        count ++
                    } else {
                        count = 0
                        currentPerson = names[count]
                        io.emit("currentName", currentPerson)
                        console.log(currentPerson)
                        count++
                    }
                    timer().stop()
                    setTimeout(() => {
                        timer().start()
                    }, 3600000)
                }
            }, 60000)
        },
        stop() {
            clearInterval(nameInterval)
        }
    }
}

timer().start()