










const https = require("http")
const fs = require("fs")
const server = https.createServer((req,res) => {
    const log = `logs of this fileserver ${new Date()}\n`
    if(req.url ==="/"){
        res.end("hello")
    }
    if(req.url === "/write-file"){
        fs.appendFileSync("logs.txt", log)
        res.end(log)
    }server.listen(3000, () => {
        console.log("server is running and listening on port 3000")
    })

})