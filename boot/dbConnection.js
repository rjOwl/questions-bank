const mongooseClient = require('mongoose')
const USERNAME = process.env.DB_SU // admin
const PASS = process.env.DB_SU_PASS 
const CLUSTER = process.env.CLUSTER
const DBNAME = process.env.DBNAME
const uri = `mongodb+srv://${USERNAME}:${PASS}@${CLUSTER}.nswihx6.mongodb.net/${DBNAME}?retryWrites=true&w=majority`;

mongooseClient.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(
  ()=>{ console.log(uri);console.log("onfulfilled"); }, 
  ()=>{ console.log("onrejected");}
)