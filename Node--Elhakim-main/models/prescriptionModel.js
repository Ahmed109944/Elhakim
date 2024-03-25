const mongoose = require('mongoose');
const user=require("./userModel");
const Booking=require("./bookingModel")
const prescriptionSchema = new mongoose.Schema({

    symptoms:{
        type:String
    },
    prescription:
    {
        type:String
    },
    medicines: [{
        drug: String,
        dosage: String,
        instructions:String
        // other properties
    }] ,
       booking:{ 
        type: mongoose.Schema.ObjectId,
        ref: 'Booking', // Reference to the 'User' model
    },

    doctor: {
        type: mongoose.Schema.ObjectId,
        ref: 'User', // Reference to the 'User' model
        required: [true, 'Booking must belong to a doctor!']
      },
      user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User', // Reference to the 'User' model
        required: [true, 'Booking must belong to a User!']
      },
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  })
  prescriptionSchema.pre(/^find/, function(next) {
    this.populate('doctor').populate('user').populate('booking');
  next();
});



const prescription = mongoose.model('prescription', prescriptionSchema);

module.exports = prescription;