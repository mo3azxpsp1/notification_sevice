var supertest = require('supertest');

describe('NotificationsController', () => {

  describe('#addNotification()', () => {
    it('should create notification for a specific user', (done) => {
      supertest(sails.hooks.http.app)
      .post('/api/addNotification/')
      .send({ user: '1', text: 'test notification', category: 'Push' })
      .expect(200, done);
    });
  });

  describe('#getAllNotifications()', () => {
    it('should get all notifications for a specific user', (done) => {
      supertest(sails.hooks.http.app)
      .get('/api/getAllNotifications/1')
      .expect(200, done);
    });
  });

  describe('#getUnreadNotifications()', () => {
    it('should get all unread notifications for a specific user', (done) => {
      supertest(sails.hooks.http.app)
      .get('/api/getUnreadNotifications/1')
      .expect(200, done);
    });
  });

  describe('#updateNotificationsRead()', () => {
    it('should mark notifications as read for a specific user', (done) => {
      supertest(sails.hooks.http.app)
      .put('/api/updateNotificationsRead/')
      .send({ user: '1' })
      .expect(200, done);
    });
  });

});



