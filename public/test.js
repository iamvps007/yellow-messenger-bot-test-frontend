const express = require('express')
const MongoClient = require('mongodb').MongoClient;
var bodyParser = require("body-parser");

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 8080
const uri = "mongodb+srv://vaibhav:Vaibhav%23123@cluster0.vajvf.mongodb.net/sample_mflix?retryWrites=true&w=majority";
app.get('/:id', async (req, res) => {
    const token = req.params.id;
    await MongoClient.connect(uri, function (err, db) {
        if (err) {
            res.json({
                success: false, body: {
                    message: "No result found"
                }
            });
        };
        var dbo = db.db("yellowai");
        var query = { token };
        dbo.collection("bots").find(query).toArray(function (err, result) {
            if (err) {
                res.json({
                    success: false, body: {
                        message: "No result found"
                    }
                });
            };
            db.close();
            if (result.length > 0) {
                res.json({
                    success: true, body: {
                        ...result[0]
                    }
                });
            }
            else {
                res.json({
                    success: false, body: {
                        message: "No result found"
                    }
                });
            }
        });
    });
});

app.post('/', async (req, res) => {
    res.json({requestBody: req.body})  // <==== req.body will be a parsed JSON object

});

  
 
// 
// MongoClient.connect(uri , function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("yellowai");
//   var myobj = { token: "abcd123", bot_id: "Company Inc", url: "Highway 37" };
//   dbo.collection("bots").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})