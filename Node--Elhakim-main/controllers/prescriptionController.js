const Prescription=require("./../models/prescriptionModel");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const User = require('../models/userModel');
const Booking = require('../models/bookingModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.createPrescription = factory.createOne(Prescription);
exports.getPrescription = factory.getOne(Prescription, { path: 'user Booking' });

exports.getAllPrescription = factory.getAll(Prescription);
exports.updatePrescription= factory.updateOne(Prescription);

exports.deletePrescription = factory.deleteOne(Prescription);