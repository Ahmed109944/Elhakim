const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Schema.ObjectId,
      ref: 'User', // Reference to the 'User' model
      required: [true, 'Booking must belong to a doctor!'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User', // Reference to the 'User' model
      required: [true, 'Booking must belong to a User!'],
    },
    date: {
      type: String,
    },
    time: {
      type: String,
    },
    status: {
      type: String,
      default: 'pending',
    },
    service: {
      type: String,
    },

    createdAt: {
      type: Date,
      default: Date.now(),
    },
    paid: {
      type: Boolean,
      default: true,
    },
    age: {
      type: String,
      required: [true, 'Please tell us your age!'],
    },
  },

  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

// bookingSchema.pre(/^find/, function(next) {
//   this.populate('doctor').populate('user');
//   next();
// });

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
