const {
  addBooking,
  getBooking,
  getBookingByuniId,
  updatebooking,
} = require("../models/booking.models");

module.exports = {
  addNewBooking: (req, res) => {
    const body = req.body;
    addBooking(body, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: result,
      });
    });
  },
  getbookingByUniId: (req, res) => {
    const id = req.params.id;
    getBookingByuniId(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not Found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getBooking: (req, res) => {
    getBooking((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  updatebooking: (req, res) => {
    const body = req.body;
    updatebooking(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "updated successfully",
      });
    });
  },
};