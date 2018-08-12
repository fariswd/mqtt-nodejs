var mqtt = require('mqtt')
var client  = mqtt.connect('mqtts://belalang.masfaris.com', {
  clientId: 'nodejs666',
  username: 'capung',
  password: 'capung',
  keepalive: 1,
  clean: false,
  reconnectPeriod: 1000 * 1
})

client.on('connect', function () {
  client.subscribe('test')
  // client.publish('test', 'subscribe to test')
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log('---subscribed from', topic, message.toString())
})

client.on("error", function(error) {
    console.log("ERROR: ", error);
});

client.on('offline', function() {
    // console.log("offline");
});

client.on('reconnect', function() {
    // console.log("reconnect");
});

// setTimeout(function(){
//    client.subscribe('test');
// }, 3000)

client.publish("test", `Hi!!!! ${(new Date()).toString()}`, {qos: 1}, function(){
    console.log("sent ", `Hi!!!! ${(new Date()).toString()}` )
});

// sending every 3 seconds
// var i = 0;
// setInterval(
//   function() {
//     var message = i.toString();
//     console.log("sending ", message)
//     client.publish("test", message, {qos: 1}, function(){
//         console.log("sent ", message)
//     });
//     i += 1;
//   },
// 3000)
