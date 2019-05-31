/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    firstName: 'string',
    lastName: 'string',
    phoneNumber: {
      type: 'string',
      unique: true,
      required: true
    },
    email: {
      type: 'string',
      unique: true,
      required: true
    },
    onesignalId: {
      type: 'string',
      unique: true,
      required: true
    }
  },

};

