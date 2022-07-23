const express = require('express')
const cors = require('cors')
const databaseFunctions = require("./database");
const rp = require('request-promise');

const app = express()
app.use(cors())

app.get('/api', (req, res) => {
  res.status(200).json({api: 'version 1'})
})
app.get('/get-translations', async (req,res)=>{
    databaseFunctions.FetchTranslations().then(response =>{
        console.log(response);
        if(response.stat === 0){
            res.status(501).json({data: 'There was an error fetching your data:'+response.data}).end()
            return;
        }
        res.status(200).json({data: response.data}).end()
        //res.json(response);
    });
    // try {
    //     const result = await FetchTranslations();
    //     console.log(result);
    //     if (result.stat === 0){
    //         res.status(501).json({data: 'There was an error fetching your data: '+result.data}).end()
    //     }
    //     res.status(200).json({data: result.data}).end()
    //     res.json(result);
    // }catch (error){
    //     console.log(error);
    //     res.sendStatus(501);
    //   }
        // res.send({data: result.data});


})
const port = process.env.PORT || 3000
app.listen(port, () => console.log('server started on port', port))
//app.listen(3000, () => console.log('server listening on port 3000'))



// app.get('/', serveHomepage);

// app.get('/posts/new', basicAuth, newPost);
// app.post('/posts', basicAuth, loadBody, createPost);
// app.get('/posts/:id', showPost);
// app.get("/signup", newUser);
// app.post("/signup", loadBody, createUser);
// app.get('/signin', newSession);

// app.use(express.static('public'));

// module.exports = app;