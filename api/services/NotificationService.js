module.exports = {

  getAllNotifications: function (userId, callback) {
    console.log('getAllNotifications');
    if (userId) {
      UserNotification.find({ where: { user: userId }, limit: 50 }).sort([
        { status: 'ASC' },
        { createdAt: 'DESC' },
      ]).exec((err, notifications) => {
        if (err) {callback (err, null);}
        else {callback (null, notifications);}
      });
    }
  },

  updateNotificationsRead: function (req, res) {
    console.log('updateNotificationsRead');
    UserNotification.update({ user: req.body.user, status: 1, category: req.body.category }, { status: 2 }).exec((err, _notifications) => {
      if (err) {
        console.log('updateNotificationsRead error: ' + JSON.stringify(err));
        return res.negotiate(err);
      }
      return res.ok('Updated');
    });
  },

  getUnreadNotifications: function (userId, callback) {
    console.log('getUnreadNotifications');
    if (userId !== undefined) {
      UserNotification.find({ where: { user: userId, status: 1 }, limit: 50 }).sort([
        { createdAt: 'DESC' }
      ]).exec((err, notifications) => {
        if (err) {callback(err, null);}
        else {callback(null, notifications);}
      });
    }
  },

  addNotification: function (userId, text, category, callback) {
    console.log('addNotification for ' + userId + 'with text: ' + text);
    UserNotification.create({user: userId, status: 1, text: text, category: category}).exec((err, notification) => {
      if (err) {callback(err, null);}
      else {callback(null, notification);}
    });
  },

  sendSMS: function (phone, text ) {
    User.findOne({ where: { phoneNumber: phone }}).exec((err, user) => {
      if (err) {
        console.log('sendSMS error: ' + JSON.stringify(err));
        return;
      }
      // integrate with some external sms service and pass the phone and msg to it
      NotificationService.addNotification(user.id, text, 'SMS', (err, notification) => {
        if (err) {
          console.log('addNotification error: ' + JSON.stringify(err));
          return;
        }
        return notification;
      });
    });
  },

  sendPush: function (onesignalId, text) {
    User.findOne({ where: { onesignalId: onesignalId }}).exec((err, user) => {
      if (err) {
        console.log('sendSMS error: ' + JSON.stringify(err));
        return;
      }
      // integrate with some external push notifications service and pass the service id (onesignal id for example) and text to it
      NotificationService.addNotification(user.id, text, 'Push', (err, notification) => {
        if (err) {
          console.log('addNotification error: ' + JSON.stringify(err));
          return;
        }
        return notification;
      });
    });
  },

  sendEmail: function (email, text) {
    User.findOne({ where: { email: email }}).exec((err, user) => {
      if (err) {
        console.log('sendSMS error: ' + JSON.stringify(err));
        return;
      }
      // integrate with some external email service (mailgun for example) and pass the email and text to it
      NotificationService.addNotification(user.id, text, 'Email', (err, notification) => {
        if (err) {
          console.log('addNotification error: ' + JSON.stringify(err));
          return;
        }
        return notification;
      });
    });
  },


};
