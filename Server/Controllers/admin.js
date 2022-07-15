const AdminModel = require("../Models/admin");
async function createAdmin(req, res) {
  try {
    let adminDetails = req.body;
    let response = await AdminModel.insertMany([adminDetails]);
    res.status(201).json({
      status: true,
      admin: response,
    });
  } catch (error) {
    res.status(401).json({
      status: false,
      admin: error,
    });
  }
}
async function loginAdmin(req, res) {
  try {
    let adminDetails = req.body;
    let searchobj = {};
    searchobj["a_email"] = adminDetails.a_email;
    let response = await AdminModel.find(searchobj);
    response = response[0];
    if (response === undefined) {
      res.status(200).json({
        status: false,
        admin: "You are Not admin",
      });
    } else if (response.a_password == adminDetails.a_password) {
      res.status(200).json({
        status: true,
        admin: response,
      });
    } else {
      res.status(200).json({
        status: false,
        admin: "your password is incorrect",
      });
    }
  } catch (error) {
    res.status();
  }
}
module.exports = {
  createAdmin,
  loginAdmin,
};
