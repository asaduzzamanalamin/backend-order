const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// start

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://concptualSession:LkgzjGQlHG8jEbrT@cluster0.tjo1e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
   try{
      await client.connect();
      console.log('db connect');
      const productCollection = client.db("gadgetFreak").collection("productCollection");
      const orderCollection = client.db("gadgetFreak").collection("orderCollection");
      
      // token generate
      // app.post('/login', (req , res)=>{
      //    const email = req.body;
      //    const token = jwt.sign(email,'Y/M1mrCoHA27nO5OcHPENFQ3q3d+jH1yARv7e0TTFOor8JMNs5ZGme3HVXGwYzjVZwBSx3SSwE3sLRzk/O8cm9ywo9bDMkCunpq8sRYsQX8r94bzxz4JBaNr28yRDdylskeM4khtWcjDXc5GAe+yr9i4A8ANESi4PySJJPAlIK/RX2ybcVAbVX8unTba43IEH+neFgUlGI73Hk4x7ZMLSc/WLnhMSmNkzVrgbQ+bgvw4ibm7KnsDI5NklDJhhC1SL5AFH327MMMmEPJdJx1E0y5tJI9xrMY3+u5sJJE56AGD/i+pTy+2Uj3CULD5PAqCpF7bcHqT+pqs9332j3v0sA==');

      //   console.log(token);
      //   res.send({token})
        
        
      // //   console.log(email);

      // })
      // token generate
      // upload data with post

      app.post('/uploadproduct', async(req , res)=>{
         const product = req.body;
         // const tokenInfo = req.headers.authoraization;
         // console.log(tokenInfo);
         // const [wmail , accessToken] = tokenInfo.split(" ");
         // console.log(product);
          const result = await productCollection.insertOne(product);
         res.send({success:'product upload successfully'})

      })
      // upload data with post
      // load data with get
      app.get('/products' , async(req , res)=>{
         const query = {};
         const cursor = productCollection.find(query);
         const result =await cursor.toArray();
         res.send(result);

      })
      // load data with get
      // for order
         app.post('/addOrder' , async(req , res)=>{
            const orderInfo = req.body;
            const result = await orderCollection.insertOne(orderInfo);
            res.send({success:'ok bro ami paise',result})
            
            

         })
      
      // for order

      // for order list
      


      //order list er data databse p[orjonto joma hoise eita aina ui te dekaian nai]
      // for order list

   }
   finally{
     
   }

}
run().catch(console.dir);

// start

app.get('/', (req , res)=>{
   res.send('ok bro');
})

app.listen(port, ()=>{
   console.log("this my running port who =", port);
})
