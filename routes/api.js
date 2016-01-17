var express = require('express');
var router = express.Router();

router.get('/:resource', function(req, res, next) {
  
  var resourceName = req.params.resource;  
  var data = {
    resource: resourceName
  }

  res.json(data);
});


router.post('/:resource', function(req, res, next) {
  
  var resourceName = req.params.resource; 
  var user = req.body;

  var data = {
    resource: resourceName
  }
  if(resourceName == 'signup'){

      var sendgrid  = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);
      sendgrid.send({
        to:       'annaegarcia@gmail.com',
        from:     'annaegarcia@gmail.com',
        subject:  'New User',
        text:     JSON.stringify(user)
      }, function(err, json) {
        if (err) { return console.error(err); }
        console.log(json);
      });

      var data = {
        resource: resourceName, 
        user: user
      }


  res.json(data);
  }

});


module.exports = router;
