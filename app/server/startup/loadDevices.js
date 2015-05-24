Meteor.startup(function () {
  if(Devices.find().count() === 0) {
    var devices = [
    {'name': 'sparky',
    'make' : 'Particle',
    'model' :'Particle',
    'description' : 'An IoT prototyping device',
    'unitID' : '123456789',
    'accessToken' : '123456789' },
    {'name': 'particles',
    'make' : 'Particle',
    'model' : 'Photon',
    'description' : 'An IoT prototyping device',
    'unitID' : '123456789',
    'accessToken' : '123456789' },
    {'name': 'Yungun',
    'make' : 'Arduino',
    'model' : 'Yun',
    'description' : 'An IoT prototyping device WiFi',
    'unitID' : '123456789',
    'accessToken' : '123456789' },
    {'name': 'Hound',
    'make' : 'BeagleBone',
    'model' : 'Black',
    'description' : 'An IoT prototyping device',
    'unitID' : '123456789',
    'accessToken' : '123456789' },
    {'name': 'Cake',
    'make' : 'Rasberry Pi',
    'model' : '2',
    'description' : 'A prototyping device' ,
    'unitID' : '123456789',
    'accessToken' : '123456789' },
    ];
    for (var i = 0; i <= devices.length; i++) {
      Devices.insert(devices[i]);
    };
  }
});
