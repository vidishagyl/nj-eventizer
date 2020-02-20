
function insertSingleData (req, res){
    mongoPool()
    .then((db) => {
    // to insert single data set single json dataset and replace insertMany to insertOne

    var docs = [{ name: "Udat", age: "21" },
                { name: "Karthik", age: "24" },
                { name: "Anil", age: "23" }];
    
    // insert multiple documents to 'users' collection using insertOne
    db.collection("users").insertMany(docs, function(err, response) {
        if (err) {
            res.status(400).send({ status : 'failure', message: err })
        } else {
            res.status(200).send({ status: 'success', message: response.insertedCount+" documents inserted" })
        }
        db.close();
    });
    })
    .catch((error) => {
        res.status(400).send({ status : 'failure', message: error })
    })
}

module.exports.insertSingleData = insertSingleData