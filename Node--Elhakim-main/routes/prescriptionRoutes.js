const express = require('express');
const prescriptionController = require('../controllers/prescriptionController');

const router = express.Router();

// router.use(authController.protect);

// router.use(authController.restrictTo('admin', 'doctor'));

router
  .route('/')
  .get(prescriptionController.getAllPrescription)
  .post(prescriptionController.createPrescription);

router
  .route('/:id')
  .get(prescriptionController.getPrescription)
  .patch(prescriptionController.updatePrescription)
  .delete(prescriptionController.deletePrescription);

module.exports = router;