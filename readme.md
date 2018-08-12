# MQTT js

## Getting started
```
Protocol: mqtts
Host: belalang.masfaris.com
Port: 8883
Username: capung
Password: capung
```

## Mosquitto Pub
```
mosquitto_pub -h belalang.masfaris.com -t test -m "hello" -p 8883 --capath /etc/ssl/certs/ -u "capung" -P "capung"
```

## Mosquitto Sub
```
mosquitto_sub -h belalang.masfaris.com -t test -p 8883 --capath /etc/ssl/certs/ -u "capung" -P "capung"
```

## mqtt.js
- node mqtt.js
- subscribed to 'test' topic
- and sending `Hi!!!! ${(new Date()).toString()}`


:rocket:
