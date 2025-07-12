const {MongoClient}=require("mongodb");

const url="mongodb+srv://nallianilkumar179:TQS3ekEFiLSs33tx@anildev.z3fhjum.mongodb.net/"

const client = new MongoClient(url);
const dbname="Myproject";

async function main(){
    await client.connect();
    console.log("Connected successfully to server");
    const db =client.db(dbname);
    const collection=db.collection("student");
    //Read 
    const data={
        last_name: 'nalli',
        first_name: 'anilkumar',
        class: '11th',
        marks: '10'

    }
    // await collection.insertMany([data]);
    // const findResult=await collection.updateOne({last_name:"anil"},{$set:{first_name:"buddithalli"}});
 const removeItem= await collection.deleteMany({first_name:"buddithalli"});
    const result=await collection.find({}).toArray();


    console.log("Founded document ===>",{removeItem,result});
    return 'done';
}

main().then(console.log()).catch(console.error).finally(()=>client.close())