const express = require('express')
//var bodyParser = require('body-parser');

const cors=require('cors')



//const route = require('./utils/route.js');
const app = express()

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use('/', route);
//app.listen(process.env.PORT || 3000, function() {
  //  console.log('Express app running on port ' + (process.env.PORT || 3000))
//});
app.use(cors())
app.use(express.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})

pp.get('/now',function (req, res){ 
    res.send({
    now: newDate()
    
    
    })
    
    
    
    
})
    
    

app.listen(3000)





