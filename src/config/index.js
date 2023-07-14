import mongodb from 'mongodb';

export default {
  "port": 3005,
  "mongoUrl": "mongodb://localhost:27017/chat-api",
  //"port": process.env.PORT,
  //"mongoUrl": "mongodb+srv://rizkift:ymmqdFbpX@forum.5emjmtt.mongodb.net/",//process.env.MONGODB_URI,
  "bodyLimit": "100kb"
}
