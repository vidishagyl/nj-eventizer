
let mongoPool = function (){ 
let deferred = q.defer()
MongoClient.connect(url, function(err, db) {
    if(err) {
        deferred.reject({ error: err })
    }
    else{
        console.log("Switched to "+db.databaseName+" database");
        deferred.resolve(db)
    }

});
return deferred.promise
}

module.exports.mongoPool = mongoPool