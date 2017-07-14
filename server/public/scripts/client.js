console.log("js sourced");
var myApp = angular.module('myApp', []);

myApp.controller('PeerController', function(){

  var peer = this;
  peer.messages = [];
  peer.addMessage = function(name, message){
    var messageToSend = {
      message: message,
      name: name
    };
    peer.messages.push(messageToSend);
  };

  peer.delete = function (index){
    console.log('delete click');
    peer.messages.splice(index, 1);
  };

});
