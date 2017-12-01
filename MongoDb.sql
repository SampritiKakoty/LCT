Start DB server:
C:\Program Files\MongoDB\Server\3.4\bin>mongod


Open editor::
C:\Program Files\MongoDB\Server\3.4\bin>mongo
MongoDB shell version v3.4.10
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.10
Welcome to the MongoDB shell.
For interactive help, type "help".

Show Databases:

> show databases
admin  0.000GB
local  0.000GB

Switch or database or create database:

> use nodedb

switched to db nodedb


Create table/collection:

> db.createCollection('users');
{ "ok" : 1 }

Inser into table:

> db.users.insert({name:"Arun",location:"bdc10"})
WriteResult({ "nInserted" : 1 })
> db.users.insert({name:"Rahon",location:"bdc7"})
WriteResult({ "nInserted" : 1 })

Find all records:
> db.users.find()
{ "_id" : ObjectId("5a1d31a173041f6e9ba0e6b3"), "name" : "Arun", "location" : "b
dc10" }
{ "_id" : ObjectId("5a1d31b973041f6e9ba0e6b4"), "name" : "Rahon", "location" : "
bdc7" }


Find records in readable format:

> db.users.find().pretty()
{
        "_id" : ObjectId("5a1d31a173041f6e9ba0e6b3"),
        "name" : "Arun",
        "location" : "bdc10"
}
{
        "_id" : ObjectId("5a1d31b973041f6e9ba0e6b4"),
        "name" : "Rahon",
        "location" : "bdc7"
}

Insert with specific primary key:
> db.users.insert({_id:"111" name:"Rahon",location:"bdc7"})


Find with or clause:

> db.users.find({$or:[{name:"Rahon"}]})
{ "_id" : ObjectId("5a1d31b973041f6e9ba0e6b4"), "name" : "Rahon", "location" : "
bdc7" }
{ "_id" : "111", "name" : "Rahon", "location" : "bdc7" }

> db.users.find({$or:[{name:"Rahon"},{location:"BDC10"}]})
{ "_id" : ObjectId("5a1d31b973041f6e9ba0e6b4"), "name" : "Rahon", "location" : "
bdc7" }
{ "_id" : "111", "name" : "Rahon", "location" : "bdc7" }
> db.users.find({$or:[{name:"Rahon"},{location:"bdc10"}]})
{ "_id" : ObjectId("5a1d31a173041f6e9ba0e6b3"), "name" : "Arun", "location" : "b
dc10" }
{ "_id" : ObjectId("5a1d31b973041f6e9ba0e6b4"), "name" : "Rahon", "location" : "
bdc7" }
{ "_id" : "111", "name" : "Rahon", "location" : "bdc7" }


Insert multi row:

db.userDetails.insert([{ _id: 1, name: "Arun Iyer" , age: 15, hobbies: [ "singing", "carrom" ] },
{ _id: 2, name: "Joe Joseph" , age: 30, hobbies: [ "dancing" ] },
{ _id: 3, name: "Anu Rai" , age: 28, hobbies: [ "stamp collection", "reading" ] },
{ _id: 4, name: "Ayan Shetty" , age: 33, hobbies: [ "singing", "dancing" ] },
{ _id: 5, name: "Abhinav Gowda" , age: 22, hobbies: [ "Bird watching " ,"Cooking", "Lego Building"] },
{ _id: 6, name: "Nina Rao" , age: 27 },
{ _id: 7, name:  "Nandita" } ])


Operation (where clause on the document)

> db.userDetails.find({age:{$eq:22}})
{ "_id" : 5, "name" : "Abhinav Gowda", "age" : 22, "hobbies" : [ "Bird watching
", "Cooking", "Lego Building" ] }
> db.userDetails.find({age:22})
{ "_id" : 5, "name" : "Abhinav Gowda", "age" : 22, "hobbies" : [ "Bird watching
", "Cooking", "Lego Building" ] }
>
>
> db.userDetails.find({age:{$gt:25}})
{ "_id" : 2, "name" : "Joe Joseph", "age" : 30, "hobbies" : [ "dancing" ] }
{ "_id" : 3, "name" : "Anu Rai", "age" : 28, "hobbies" : [ "stamp collection", "
reading" ] }
{ "_id" : 4, "name" : "Ayan Shetty", "age" : 33, "hobbies" : [ "singing", "danci
ng" ] }
{ "_id" : 6, "name" : "Nina Rao", "age" : 27 }
> db.userDetails.find({age:{$gte:25}})
{ "_id" : 2, "name" : "Joe Joseph", "age" : 30, "hobbies" : [ "dancing" ] }
{ "_id" : 3, "name" : "Anu Rai", "age" : 28, "hobbies" : [ "stamp collection", "
reading" ] }
{ "_id" : 4, "name" : "Ayan Shetty", "age" : 33, "hobbies" : [ "singing", "danci
ng" ] }
{ "_id" : 6, "name" : "Nina Rao", "age" : 27 }
>
>
>
>
>
>
> db.userDetails.find({hobbies:{$in:["dancing","singing"]}})
{ "_id" : 1, "name" : "Arun Iyer", "age" : 15, "hobbies" : [ "singing", "carrom"
 ] }
{ "_id" : 2, "name" : "Joe Joseph", "age" : 30, "hobbies" : [ "dancing" ] }
{ "_id" : 4, "name" : "Ayan Shetty", "age" : 33, "hobbies" : [ "singing", "danci
ng" ] }
>
>
>
>
>
> db.userDetails.find({age:{$lt:25}})
{ "_id" : 1, "name" : "Arun Iyer", "age" : 15, "hobbies" : [ "singing", "carrom"
 ] }
{ "_id" : 5, "name" : "Abhinav Gowda", "age" : 22, "hobbies" : [ "Bird watching
", "Cooking", "Lego Building" ] }
> db.userDetails.find({age:{$lte:25}})
{ "_id" : 1, "name" : "Arun Iyer", "age" : 15, "hobbies" : [ "singing", "carrom"
 ] }
{ "_id" : 5, "name" : "Abhinav Gowda", "age" : 22, "hobbies" : [ "Bird watching
", "Cooking", "Lego Building" ] }
>


 db.userDetails.find({age:{$lte:25}}).count()

 db.userDetails.find({age:{$lte:25}}).limit(1)
 "_id" : 1, "name" : "Arun Iyer", "age" : 15, "hobbies" : [ "singing", "carrom"
] }
 db.userDetails.find({age:{$lte:25}}).sort()
rror: error: {
       "ok" : 0,
       "errmsg" : "Failed to parse: sort: undefined. 'sort' field must be of BS
N type object.",
       "code" : 9,
       "codeName" : "FailedToParse"

 db.userDetails.find({age:{$lte:25}}).sort(ON)
017-11-29T10:07:50.168+0530 E QUERY    [thread1] ReferenceError: ON is not defi
ed :
(shell):1:1
 db.userDetails.find({age:{$lte:25}}).sort(1)
rror: error: {
       "ok" : 0,
       "errmsg" : "Failed to parse: sort: 1.0. 'sort' field must be of BSON typ
 object.",
       "code" : 9,
       "codeName" : "FailedToParse"

 db.userDetails.find({age:{$lte:25}}).sort({age:1})
 "_id" : 1, "name" : "Arun Iyer", "age" : 15, "hobbies" : [ "singing", "carrom"
] }
 "_id" : 5, "name" : "Abhinav Gowda", "age" : 22, "hobbies" : [ "Bird watching
, "Cooking", "Lego Building" ] }
 db.userDetails.find({age:{$lte:25}}).sort({age:-1})
 "_id" : 5, "name" : "Abhinav Gowda", "age" : 22, "hobbies" : [ "Bird watching
, "Cooking", "Lego Building" ] }
 "_id" : 1, "name" : "Arun Iyer", "age" : 15, "hobbies" : [ "singing", "carrom"
] }


C:\Program Files\MongoDB\Server\3.4\bin>mongod --dbpath C:\UITraining\Node_train
ing\ExpressTraining\Day2Folder\myapp\mongo_data
2017-11-30T14:47:30.963+0530 I CONTROL  [initandlisten] MongoDB starting : pid=8























