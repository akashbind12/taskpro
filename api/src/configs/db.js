
const moongose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config()

const connect=() =>{
    return  moongose.connect(
        "mongodb://akashbind123:akbind123@ac-xirfzmv-shard-00-00.jgbuih8.mongodb.net:27017,ac-xirfzmv-shard-00-01.jgbuih8.mongodb.net:27017,ac-xirfzmv-shard-00-02.jgbuih8.mongodb.net:27017/?ssl=true&replicaSet=atlas-39vnnl-shard-0&authSource=admin&retryWrites=true&w=majority"
    );
}


module.exports = connect;