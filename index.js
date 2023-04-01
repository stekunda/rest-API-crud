let express = require("express");

let app = express();

let router = express.Router();
let usersRepo = require("./repos/usersRepo");

app.use("/api/", router);

router.get("/", function (req, res, next) {
    usersRepo.get(
        function (data) {
            res.status(200).json({
                status: 200,
                statusText: "Ok",
                message: "Users data fetched succesfully",
                data: data,
            });
        },
        function (err) {
            next(err);
        }
    );
});

app.listen(5000, function () {
    console.log("App running on http://localhost:5000");
});
