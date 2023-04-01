let fs = require("fs");
let FILE_PATH = "./assets/users.json";
// the users.json file is functioning as a database

let usersRepo = {
    get: function (resolve, reject) {
        fs.readFile(FILE_PATH, function (error, data) {
            if (error) {
                reject(error);
            } else {
                resolve(JSON.parse(data));
            }
        });
    },
};

module.exports = usersRepo;
