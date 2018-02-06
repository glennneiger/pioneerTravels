const express = require('express')
const app = express()
const bodyparser = require('body-parser')
var serviceNowApi = require('./serviceNowApi.js')
app.use(bodyparser.json());

app.post('/pioneerServiceNow', (req, res) =>{ 
  console.log(req.body);
  if(req.body.result.action === 'create_incident_sub_category1-1'){   
    var resObj = {}; 
    serviceNowApi.createIncident(req.body.result.parameters.userName,req.body.result.parameters.issueDescription,'2',function(err,data){
      if (err) {
        resObj={
          "speech": "",
          "messages": [
            {
              "type": 2,
              "platform": "facebook",
              "title": "Sorry! There was an error while processing your request. Please try again",
              "replies": [
                "Main menu"
              ]
            }
          ]
        };
      }
    else{
      resObj={
      "speech": "",
      "messages": [
        {
          "type": 2,
          "platform": "facebook",
          "title": "Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully and our service agent will get back to you within 48 hours regarding your issue. Please note your incident id for future reference : "+data.result.number
          +". \nAn acknowledgement SMS will be sent to you with incident id to your Phone number "+req.body.result.parameters.phoneNumber
          +".\nFor any queries regarding your issue, please call our customer care center. What do you want to do next?",
          "replies": [
            "Exit",
            "Main menu"
          ]
        }
        ]
      };
    }
      console.log('response : ',res);
      console.log('resobj : ',resObj);
      res.json(resObj);
    });   
  } 
  if(req.body.result.action === 'create_incident_sub_category1-2'){    
    var resObj = {}; 
    serviceNowApi.createIncident(req.body.result.parameters.userName,req.body.result.parameters.issueDescription,'2',function(err,data){
      if (err) {
        resObj={
          "speech": "",
          "messages": [
            {
              "type": 2,
              "platform": "facebook",
              "title": "Sorry! There was an error while processing your request. Please try again",
              "replies": [
                "Main menu"
              ]
            }
          ]
        };
      }
    else{
      resObj={
      "speech": "",
      "messages": [
        {
          "type": 2,
          "platform": "facebook",
          "title": "Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully and our service agent will get back to you within 48 hours regarding your issue. Please note your incident id for future reference : "+data.result.number
          +". \nAn acknowledgement SMS will be sent to you with incident id to your Phone number "+req.body.result.parameters.phoneNumber
          +".\nFor any queries regarding your issue, please call our customer care center. What do you want to do next?",
          "replies": [
            "Exit",
            "Main menu"
          ]
        }
        ]
      };
    }
      console.log('response : ',res);
      console.log('resobj : ',resObj);
      res.json(resObj);
    });      
  }
  if(req.body.result.action === 'create_incident_sub_category2-1'){    
    var resObj = {}; 
    serviceNowApi.createIncident(req.body.result.parameters.userName,req.body.result.parameters.issueDescription,'1',function(err,data){
      if (err) {
        resObj={
          "speech": "",
          "messages": [
            {
              "type": 2,
              "platform": "facebook",
              "title": "Sorry! There was an error while processing your request. Please try again",
              "replies": [
                "Main menu"
              ]
            }
          ]
        };
      }
    else{
      resObj={
      "speech": "",
      "messages": [
        {
          "type": 2,
          "platform": "facebook",
          "title": "Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully with high-priority and our service agent will get back to you within 24 hours regarding your issue. Please note your incident id for future reference : "+data.result.number
          +". \nAn acknowledgement SMS will be sent to you with incident id to your Phone number "+req.body.result.parameters.phoneNumber
          +".\nFor any queries regarding your issue, please call our customer care center. What do you want to do next?",
          "replies": [
            "Exit",
            "Main menu"
          ]
        }
        ]
      };
    }
      console.log('response : ',res);
      console.log('resobj : ',resObj);
      res.json(resObj);
    }); 
  }  
  if(req.body.result.action === 'create_incident_sub_category2-2'){    
    var resObj = {}; 
    serviceNowApi.createIncident(req.body.result.parameters.userName,req.body.result.parameters.issueDescription,'1',function(err,data){
      if (err) {
        resObj={
          "speech": "",
          "messages": [
            {
              "type": 2,
              "platform": "facebook",
              "title": "Sorry! There was an error while processing your request. Please try again",
              "replies": [
                "Main menu"
              ]
            }
          ]
        };
      }
    else{
      resObj={
      "speech": "",
      "messages": [
        {
          "type": 2,
          "platform": "facebook",
          "title": "Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully with high-priority and our service agent will get back to you within 24 hours regarding your issue. Please note your incident id for future reference : "+data.result.number
          +". \nAn acknowledgement SMS will be sent to you with incident id to your Phone number "+req.body.result.parameters.phoneNumber
          +".\nFor any queries regarding your issue, please call our customer care center. What do you want to do next?",
          "replies": [
            "Exit",
            "Main menu"
          ]
        }
        ]
      };
    }
      console.log('response : ',res);
      console.log('resobj : ',resObj);
      res.json(resObj);
    });
  }
  if(req.body.result.action === 'create_incident_sub_category3-1'){    
    var resObj = {}; 
    serviceNowApi.createIncident(req.body.result.parameters.userName,req.body.result.parameters.issueDescription,'1',function(err,data){
      if (err) {
        resObj={
          "speech": "",
          "messages": [
            {
              "type": 2,
              "platform": "facebook",
              "title": "Sorry! There was an error while processing your request. Please try again",
              "replies": [
                "Main menu"
              ]
            }
          ]
        };
      }
    else{
      resObj={
      "speech": "",
      "messages": [
        {
          "type": 2,
          "platform": "facebook",
          "title": "Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully with high-priority and our service agent will get back to you within 24 hours regarding your issue. Please note your incident id for future reference : "+data.result.number
          +". \nAn acknowledgement SMS will be sent to you with incident id to your Phone number "+req.body.result.parameters.phoneNumber
          +".\nFor any queries regarding your issue, please call our customer care center. What do you want to do next?",
          "replies": [
            "Exit",
            "Main menu"
          ]
        }
        ]
      };
    }
      console.log('response : ',res);
      console.log('resobj : ',resObj);
      res.json(resObj);
    });
  }
  if(req.body.result.action === 'create_incident_sub_category3-2'){    
    var resObj = {}; 
    serviceNowApi.createIncident(req.body.result.parameters.userName,req.body.result.parameters.issueDescription,'1',function(err,data){
      if (err) {
        resObj={
          "speech": "",
          "messages": [
            {
              "type": 2,
              "platform": "facebook",
              "title": "Sorry! There was an error while processing your request. Please try again",
              "replies": [
                "Main menu"
              ]
            }
          ]
        };
      }
    else{
      resObj={
      "speech": "",
      "messages": [
        {
          "type": 2,
          "platform": "facebook",
          "title": "Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully with high-priority and our service agent will get back to you within 24 hours regarding your issue. Please note your incident id for future reference : "+data.result.number
          +". \nAn acknowledgement SMS will be sent to you with incident id to your Phone number "+req.body.result.parameters.phoneNumber
          +".\nFor any queries regarding your issue, please call our customer care center. What do you want to do next?",
          "replies": [
            "Exit",
            "Main menu"
          ]
        }
        ]
      };
    }
      console.log('response : ',res);
      console.log('resobj : ',resObj);
      res.json(resObj);
    });
  }
  if(req.body.result.action === 'incident_status'){
    var resObj = {}  ;
    serviceNowApi.getIncident(req.body.result.parameters.incidentId,function(err,data) {
      if (err) {
        resObj={
          "speech": "",
          "messages": [
            {
            "type": 2,
            "platform": "facebook",
            "title": "Sorry! There was an error while processing your request. Please try again",
            "replies": [
              "Main menu"
            ]
            }
          ]
        };
      }
      else{
        /*if (data.error != 'undifiend' && data.error.message == 'No Record found'){
          resObj= {            
          "speech": "",
          "messages": [
            {
            "type": 2,
            "platform": "facebook",
            "title": "Entered incident id is not found!",
            "replies": [
              "Try Again",
              "Main Menu"
            ]
            }
            ]
          }
        }
        else*/{
          console.log('state:: ',data.result[0].state);
         resObj= {
          "speech": "Hi,Your Incident id is : "+req.body.result.parameters.incidentId,
          "displayText": "result",
          "data": {"result": "result"},
          "source": "dialogflow"
          }
        }
      }      
      res.json(resObj);
    });    
  }
});


app.listen(process.env.port||process.env.PORT||3000, () => console.log('Example app listening on port 3000!'))