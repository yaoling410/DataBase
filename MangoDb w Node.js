https://www.guru99.com/node-js-mongodb.html

Database name: EmployeeDB
Collection name: Employee  #Collections are the equivalent of tables in traditional databases and contain all your documents. A database can have many collections.
Documents
{
	{Employeeid : 1, Employee Name : Guru99},
	{Employeeid : 2, Employee Name : Joe},
	{Employeeid : 3, Employee Name : Martin},
}

#########SAMPLE CODE###########
##establish connections with a MongoDB database

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/EmployeeDB';

MongoClient.connect(url, function(err, db) {

    var cursor = db.collection('Employee').find();

    cursor.each(function(err, doc) {

        console.log(doc);

    });
}); 

##perform the normal operations of reading data from a database as well as inserting, deleting, and updating records in a MongoDB database
# insert
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/EmployeeDB';

MongoClient.connect(url, function(err, db) {

    db.collection('Employee').insertOne({
        Employeeid: 4,
        EmployeeName: "NewEmployee"
    });
}); 
# update
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/EmployeeDB';

MongoClient.connect(url, function(err, db) {

    db.collection('Employee').updateOne({
        "EmployeeName": "NewEmployee"
    }, {
        $set: {
            "EmployeeName": "Mohan"
        }
    });
}); 
#delete
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/EmployeeDB';

MongoClient.connect(url, function(err, db) {

    db.collection('Employee').deleteOne(

        {
            "EmployeeName": "Mohan"
        }

    );
}); 
#######INDEXING#######
#CREAT
db.collection.insertOne() 
db.collection.insertMany() 
#READ
db.collection.find()
#UPDATE
db.collection.updateOne() 
db.collection.updateMany() 
db.collection.replaceOne()
#DELETE
db.collection.deleteOne() 
db.collection.deleteMany() 

#sameples
db.inventory.find( { tags: ["red", "blank"] } ) #Match an Embedded/Nested Document
db.inventory.find( { status: "A" }, { item: 1, status: 1 } ) #Return the Specified Fields and the _id Field Only
db.inventory.find( { 'instock.0.qty': { $lte: 20 } } ) #Query for a Document Nested in an Array
