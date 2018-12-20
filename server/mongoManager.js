import * as MongoClient from "mongodb";

class MongoDBManger {
    connect(){
        MongoClient.connect('mongodb://127.0.0.1:27017',{ useNewUrlParser: true }, function (err, client) {
            if (err) throw err

            const db = client.db('test')
            console.log('yay');
            // return db;
            db.collection('inventory').find().toArray(function (err, result) {
                if (err) throw err

                console.log(result)
            })
        })
    }

}

export default MongoDBManger;


