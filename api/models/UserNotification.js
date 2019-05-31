/**
 * UserNotification.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    user: {
      model: 'User'
    },
    text: 'text',
    status: { type: 'number', defaultsTo: 1 }, // 1: Unread, 2: Read
    category: {
      type: 'string',
      isIn: ['SMS', 'Push', 'Email'],
      required: true
    }
  },

};
