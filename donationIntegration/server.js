var express = require('express')
var app = require('superagent')
require('dotenv').load()



app.post('/sendToServer') function(req, res) {
  app.get('kristingillies.nationbuilder.com/api/v1/people/match?email=' + res.body.email + '&__proto__=&access_token=' + process.env.access_token)
  if // something = true or maybe response 200? or req.body.email or whatev === res.body.email?
  //then put donation on their account, otherwise create new person and put donation on their account.
}
