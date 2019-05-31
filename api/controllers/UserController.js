/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  createUser: function (req, res){
    User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      onesignalId: req.body.onesignalId}).exec((err, user) => {
      if (err) {return res.negotiate(err);}
      return res.ok(user);
    });

  }
};

