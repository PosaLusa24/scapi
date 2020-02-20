const User = require('../mongoose-init').userModel;

module.exports = (req, res) => {
  User.updateOne({ uitID: req.query.uitID }, {
    lastLogin: date1 = new Date(req.query.lastLogin),
    lastLogout: date2 = new Date(req.query.lastLogout),
    loggedIn: date1 > date2
  }, (err) => {
    if (err) return console.error(err);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send('Updated');
  });
};
