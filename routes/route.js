const express = require('express');
const router = express.Router;




let players= [
                
    {
    "name": "manish",
    "dob": "1/1/1995",
    "gender": "male",
    "city": "jalandhar",
    "sports": [ "swimming"]
    
    
    },
       {
          "name": "gopal",
       "dob": "1/09/1995",
       "gender": "male",
       "city": "mumbai",
       "sports": [
            "soccer"
       ]
         },

       { 
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
        },

    

    router.post('/players', function(req, res){
//logic to saves a player’s details and doesn’t allow saving the data of a player with a name that already exists in the data
        let NewPlayer = req.body
        let newName=newPlayer.name
        let isNameRepeated=false
        // let player=players.find(p=>p.name==newPlayersName)
        for(let i=0; i<players.length; i++){
            if (players[i].name==newName){
                isNameRepeated=true;
                break;

            }
        }
    }
        
         if ( isNameRepeated) {
            res.send ("this player was already added")

            
        }
        else{
            players.push(NewPlayer)
            res.send(players)
        }
               
    ]
                
    module.export= router;
          
        
        
        
        
        
    