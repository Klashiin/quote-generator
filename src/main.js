import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
// async function connectMongoDB () {
//     const { MongoClient } = require('mongodb');
//     const uri = "mongodb+srv://klashiin:<password>@cluster0.rse5h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//     client.connect(err => {
//         const collection = client.db("test").collection("devices");
//         // perform actions on the collection object
//         client.close();
//     });
// }

// connectMongoDB();