'use strict';
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region:'us-east-1'});

exports.handler = function (event, context, callback) {
    let scanningParameters = {
        TableName: "guestbook",
        Limit:100
    };

    docClient.scan(scanningParameters, function(err, data){
      if (err){
        callback(err, null);
      }
      else{
        callback(null,data);
      }
    });

/*
    var params = {
      TableName: "guestbook",
      Key:{
        "date":
      }
    }

    docClient.get(params, function(err, data){
      if (err){
        callback(err, null);
      }
      else{
        callback(null,data);
      }
    });*/
};
