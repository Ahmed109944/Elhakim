const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const User = require('../models/userModel');
const Booking = require('../models/bookingModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');



exports.createBooking = factory.createOne(Booking);
exports.getBooking = factory.getOne(Booking, { path: 'user' });
// exports.getBookingforDoctor = factory.getOne(Booking, { path: 'user' });

exports.getAllBookings = factory.getAll(Booking);
exports.updateBooking = factory.updateOne(Booking);

exports.deleteBooking = factory.deleteOne(Booking);