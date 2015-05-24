Devices = new Mongo.Collection("devices");

Devices.allow({
  insert: function(userId, device) {
    return userId && device.owner === userId;
  },
  update: function(userId, device, fields, modifier) {
    if (userId !== device.owner)
      return false;

    return true;
  },
  remove: function(userId, device) {
    if(userId !== device.owner)
      return false;

    return true;
  }
});
