const User = require('../mongoose-init').userModel;

module.exports = async (req, res) => {
  const { uitID = 1337 } = req.query;
  User.findOne({ uitID: uitID }, (err, user) => {
    res.status(200).send(user);
  });
}
