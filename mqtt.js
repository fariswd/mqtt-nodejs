var mqtt = require('mqtt')
var client  = mqtt.connect('mqtts://belalang.masfaris.com', {
  clientId: 'nodejs666',
  username: 'capung',
  password: 'secretxD',
  keepalive: 1,
  clean: false,
  reconnectPeriod: 1000 * 1
})

client.on('connect', function () {
  client.subscribe('test')
  // client.publish('test', 'Hello mqttss')
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
})

client.on("error", function(error) {
    console.log("ERROR: ", error);
});

client.on('offline', function() {
    console.log("offline");
});

client.on('reconnect', function() {
    console.log("reconnect");
});

setTimeout(function(){
   client.subscribe('test');
}, 3000)

//start sending
var i = 0;
setInterval(
  function() {
    var message = i.toString();
    console.log("sending ", message)
    client.publish("test", message, {qos: 1}, function(){
        console.log("sent ", message)
    });
    i += 1;
  },
3000)
