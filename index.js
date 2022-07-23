const express = require('express')
const cors = require('cors')
const FetchTranslations = require("./database");

const app = express()
app.use(cors())

app.get('/api', (req, res) => {
  res.status(200).json({api: 'version 1'})
})
app.get('/get-translations', (req,res)=>{
    res.status(200).json(FetchTranslations)
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