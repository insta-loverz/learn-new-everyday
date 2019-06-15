const express = require('express');

const userRouter = express.Router();
const UserModel = require('./../models/user.model');

function router() {
  userRouter.route('/save')
    .post(async (req, res) => {
      const User = new UserModel({
        latitude: req.body.userInfo.latitude,
        longitude: req.body.userInfo.longitude,
        timeStamp: req.body.userInfo.timestamp,
      });
      try {
        const result = await User.save();
        res.status(202).json(result);
      } catch (err) {
        /* Mongoerror duplicate key error of unique indexing comes in this part and mongoose
        schema validations error also comes to this part and
        mongoose validator npm package error also comes under this */
        res.status(500).json(err);
      }
    });

  return userRouter;
}
module.exports = router;