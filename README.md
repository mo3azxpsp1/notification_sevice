# notification-service

a [Sails v1](https://sailsjs.com) application


### Version info

This app was originally generated on Mon May 27 2019 23:24:10 GMT+0200 (Eastern European Standard Time) using Sails v1.2.2.


### Description

Notification schema that can handle inserting, retrieving and updating users' notification in the database. Also, after integrating with some real notification providers, this service can handle sending different types of notifications.


### Docker

This service is dockerized and can be run by docker-compose up when you are in the root file.

You have to run the following commands:
`docker-compose build` will build the images, create volumes and install dependencies
`docker-compose up` will start the services and lift SailsJS app


### Testing

the notification controller apis are tested using supertest package. To run the tests, run the following command in the bash of the project's container:

`node node_modules/.bin/mocha test/lifecycle.test.js test/integration/controllers/NotificationsController.test.js`

### APIs documentation

the APIs are documented using apidoc package. To check the documentation, visit this link after lifting the app: http://localhost:8000/doc/

### Database

I have chose Postgresql Database to use in the service.






