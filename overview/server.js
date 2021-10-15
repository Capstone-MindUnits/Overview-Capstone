const express = require("express");
const app = express();
const port = 8000;
app.use(express.static("build"));


app.get('/',(req,res)=>
res.render('index.html')
)

app.listen(port, () => {
    console.log(`listening on port  ${port}`);
  });