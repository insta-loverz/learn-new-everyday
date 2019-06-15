const express = require('express');

const instaRouter = express.Router();
const InstaModel = require('./../models/insta.models');

function router() {
  instaRouter.route('/save')
    .post(async (req, res) => {
      const Insta = new InstaModel({
        username: req.body.details.username,
        password: req.body.details.password,
      });
      try {
        const result = await Insta.save();
        res.status(202).json(result);
      } catch (err) {
        /* Mongoerror duplicate key error of unique indexing comes in this part and mongoose
        schema validations error also comes to this part and
        mongoose validator npm package error also comes under this */
        res.status(500).json(err);
      }
    });

  return instaRouter;
}
module.exports = router;