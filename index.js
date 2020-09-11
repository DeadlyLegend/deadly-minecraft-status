const request = require('request');

let url;

const status = (ip, port = 25565, callback) => {
    url = `https://api.mcsrvstat.us/2/${ip}:${port}`
    request(url, { json: true }, (err, res, body) => {
        if(err){
            return callback(err)
        }
        return callback(body)
    })
}

module.exports = status