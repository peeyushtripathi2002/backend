const fs = require("fs")

function logReqRes(Filename) {
    return (req, res, next) => {
        fs.appendFile(
            "Filename", ` \n ${ Date.now() }: ${ req.ip }
            ${ req.method }
            ${ req.path }`,
            (err, data) => {
                next();
            }
        );
    }
}
module.exports = {
    logReqRes
}