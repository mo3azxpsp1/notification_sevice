/**
 * NotificationsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  /**
 * @api {post} /addNotification crate new user notification
 * @apiName PostAddNotification
 * @apiGroup addNotification
 * @apiParam {Number} user UserNotification user
 * @apiParam {Text} text UserNotification text
 * @apiParam {String} category UserNotification category
 * @apiParamExample {json} Input
 *  {
 *    "user": 1,
 *    "text": 'test notification',
 *    "category": 'SMS'
 *  }
 * @apiSuccess {Number} UserNotifications.id UserNotification id
 * @apiSuccess {Number} UserNotifications.user UserNotifications user
 * @apiSuccess {Number} UserNotifications.state UserNotification state
 * @apiSuccess {Text} UserNotifications.text UserNotifications text
 * @apiSuccess {String} UserNotifications.category UserNotifications category
 * @apiSuccess {Date} UserNotifications.updated_at Update's date
 * @apiSuccess {Date} UserNotifications.created_at Register's date
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "id": 1,
 *      "user": 1,
 *      "text": 'test notification',
 *      "category": 'SMS',
 *      "state": 1,
 *      "updated_at": "2019-05-10T15:46:51.778Z",
 *      "created_at": "2019-05-10T15:46:51.778Z"
 *    }
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */
  addNotification: function (req, res) {
    NotificationService.addNotification(req.body.user, req.body.text, req.body.category, (err, notification) => {
      if (err) {
        console.log('addNotification error: ' + JSON.stringify(err));
        return res.negotiate(err);
      }
      return res.ok(notification);
    });
  },

  /**
 * @api {get} /getAllNotifications list all notifications for a user
 * @apiGroup getAllNotifications
 * @apiName GetAllNotifications
 * @apiParam {Number} user UserNotification user
 * @apiSuccess {Object[]} list of UserNotifications
 * @apiSuccess {Number} UserNotifications.id UserNotification id
 * @apiSuccess {Number} UserNotifications.user UserNotifications user
 * @apiSuccess {Number} UserNotifications.state UserNotification state
 * @apiSuccess {Text} UserNotifications.text UserNotifications text
 * @apiSuccess {String} UserNotifications.category UserNotifications category
 * @apiSuccess {Date} UserNotifications.updated_at Update's date
 * @apiSuccess {Date} UserNotifications.created_at Register's date
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      "id": 1,
 *      "user": 1,
 *      "text": 'test notification',
 *      "category": 'SMS',
 *      "state": 1,
 *      "updated_at": "2019-05-10T15:46:51.778Z",
 *      "created_at": "2019-05-10T15:46:51.778Z"
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */
  getAllNotifications: function (req, res) {
    NotificationService.getAllNotifications(req.params.id, (err, notifications) => {
      if (err) {return res.negotiate(err);}
      if (!notifications) {return res.notFound('User Unread Notifications not found!');}
      return res.ok(notifications);
    });
  },

  /**
 * @api {get} /getUnreadNotifications list all unread notifications for a user
 * @apiGroup getUnreadNotifications
 * @apiName GetUnreadNotifications
 * @apiParam {Number} user UserNotification user
 * @apiSuccess {Object[]} list of unread UserNotifications
 * @apiSuccess {Number} UserNotifications.id UserNotification id
 * @apiSuccess {Number} UserNotifications.user UserNotifications user
 * @apiSuccess {Number} UserNotifications.state UserNotification state
 * @apiSuccess {Text} UserNotifications.text UserNotifications text
 * @apiSuccess {String} UserNotifications.category UserNotifications category
 * @apiSuccess {Date} UserNotifications.updated_at Update's date
 * @apiSuccess {Date} UserNotifications.created_at Register's date
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      "id": 1,
 *      "user": 1,
 *      "text": 'test notification',
 *      "category": 'SMS',
 *      "state": 1,
 *      "updated_at": "2019-05-10T15:46:51.778Z",
 *      "created_at": "2019-05-10T15:46:51.778Z"
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */
  getUnreadNotifications: function (req, res) {
    NotificationService.getUnreadNotifications(req.params.id, (err, notifications) => {
      if (err) {return res.negotiate(err);}
      if (!notifications) {return res.notFound('User Unread Notifications not found!');}
      return res.ok(notifications);
    });
  },

  /**
 * @api {put} /updateNotificationsRead mark user notification as read
 * @apiName PutUpdateNotificationsRead
 * @apiGroup updateNotificationsRead
 * @apiParam {Number} user UserNotification user
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    'Updated'
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */
  updateNotificationsRead: function (req, res) {
    return NotificationService.updateNotificationsRead(req, res);
  },

};

