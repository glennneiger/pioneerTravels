const express = require('express')
const app = express()
const bodyparser = require('body-parser')
var serviceNowApi = require('./serviceNowApi')
var facebook = require('./facebook')
var slack = require('./slack')
var googleAPI = require('./googleAssitant_with_API')
var googleJson = require('./googleAssistant_with_JSON')
var googleLogin = require('./googleLogin')
const { DialogflowApp } = require('actions-on-google');
app.use(bodyparser.json());
app.use(express.static('html'));
app.post('/pioneerServiceNow', (req, res) =>{ 
  console.log('initial req:',req.body);
  if(req.body.originalRequest.source === 'facebook'){
    facebook.operation(req,res);
  }
  else if(req.body.originalRequest.source === 'slack'){
    slack.operation(req,res);
  }
  else if(req.body.originalRequest.source === 'google' && req.body.result.action === 'incident_status'){ 
    googleJson.operation(req,res);
  }
  else if(req.body.originalRequest.source === 'google'){    
    const googleApp = new DialogflowApp({ request: req, response: res });
    googleApp.handleRequest(googleAPI);
  }
});

app.get('/authorize', (req, res) =>{ 
  console.log('initial req:',req);
  //googleLogin.getAuth0Tocken();
    
  var resObj = {}; 
    resObj={
    "speech": "",
    "messages": [
      {
        "type": 2,
        "platform": "facebook",
        "title": "Hi Welcome..!",
        "replies": [
          "Exit",
          "Main menu"
        ]
      }
      ]
    };
    res.json(resObj);

}); 


app.listen(process.env.port||process.env.PORT||3000, () => console.log('App started Running!'));