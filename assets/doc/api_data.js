define({ "api": [
  {
    "type": "post",
    "url": "/addNotification",
    "title": "crate new user notification",
    "name": "PostAddNotification",
    "group": "addNotification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user",
            "description": "<p>UserNotification user</p>"
          },
          {
            "group": "Parameter",
            "type": "Text",
            "optional": false,
            "field": "text",
            "description": "<p>UserNotification text</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>UserNotification category</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"user\": 1,\n  \"text\": 'test notification',\n  \"category\": 'SMS'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "UserNotifications.id",
            "description": "<p>UserNotification id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "UserNotifications.user",
            "description": "<p>UserNotifications user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "UserNotifications.state",
            "description": "<p>UserNotification state</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "UserNotifications.text",
            "description": "<p>UserNotifications text</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "UserNotifications.category",
            "description": "<p>UserNotifications category</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "UserNotifications.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "UserNotifications.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"user\": 1,\n  \"text\": 'test notification',\n  \"category\": 'SMS',\n  \"state\": 1,\n  \"updated_at\": \"2019-05-10T15:46:51.778Z\",\n  \"created_at\": \"2019-05-10T15:46:51.778Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/NotificationsController.js",
    "groupTitle": "addNotification"
  },
  {
    "type": "get",
    "url": "/getAllNotifications",
    "title": "list all notifications for a user",
    "group": "getAllNotifications",
    "name": "GetAllNotifications",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user",
            "description": "<p>UserNotification user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>of UserNotifications</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "UserNotifications.id",
            "description": "<p>UserNotification id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "UserNotifications.user",
            "description": "<p>UserNotifications user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "UserNotifications.state",
            "description": "<p>UserNotification state</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "UserNotifications.text",
            "description": "<p>UserNotifications text</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "UserNotifications.category",
            "description": "<p>UserNotifications category</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "UserNotifications.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "UserNotifications.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\": 1,\n  \"user\": 1,\n  \"text\": 'test notification',\n  \"category\": 'SMS',\n  \"state\": 1,\n  \"updated_at\": \"2019-05-10T15:46:51.778Z\",\n  \"created_at\": \"2019-05-10T15:46:51.778Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/NotificationsController.js",
    "groupTitle": "getAllNotifications"
  },
  {
    "type": "get",
    "url": "/getUnreadNotifications",
    "title": "list all unread notifications for a user",
    "group": "getUnreadNotifications",
    "name": "GetUnreadNotifications",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user",
            "description": "<p>UserNotification user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>of unread UserNotifications</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "UserNotifications.id",
            "description": "<p>UserNotification id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "UserNotifications.user",
            "description": "<p>UserNotifications user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "UserNotifications.state",
            "description": "<p>UserNotification state</p>"
          },
          {
            "group": "Success 200",
            "type": "Text",
            "optional": false,
            "field": "UserNotifications.text",
            "description": "<p>UserNotifications text</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "UserNotifications.category",
            "description": "<p>UserNotifications category</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "UserNotifications.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "UserNotifications.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\": 1,\n  \"user\": 1,\n  \"text\": 'test notification',\n  \"category\": 'SMS',\n  \"state\": 1,\n  \"updated_at\": \"2019-05-10T15:46:51.778Z\",\n  \"created_at\": \"2019-05-10T15:46:51.778Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/NotificationsController.js",
    "groupTitle": "getUnreadNotifications"
  },
  {
    "type": "put",
    "url": "/updateNotificationsRead",
    "title": "mark user notification as read",
    "name": "PutUpdateNotificationsRead",
    "group": "updateNotificationsRead",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user",
            "description": "<p>UserNotification user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n'Updated'",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/controllers/NotificationsController.js",
    "groupTitle": "updateNotificationsRead"
  }
] });
