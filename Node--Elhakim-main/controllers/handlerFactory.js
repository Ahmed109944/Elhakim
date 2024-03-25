const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const APIFeatures = require('./../utils/apiFeatures');
const multer = require('multer');
const sharp = require('sharp');
exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  });

exports.updateOne = (Model, imageFields) =>
  catchAsync(async (req, res, next) => {
    let dataToUpdate = req.body;
    console.log(dataToUpdate);
    console.log(req.files);

    // Check if there are any image fields to process
    if (imageFields && imageFields.length > 0) {
      // Process each image field
      for (const imageField of imageFields) {
        // Check if the image field exists in the request
        if (req.files && req.files[imageField]) {
          const filename = `${Date.now()}-${imageField}.jpeg`;
          await sharp(req.files[imageField][0].buffer)
            .resize(500, 500)
            .toFormat('jpeg')
            .jpeg({ quality: 90 })
            .toFile(`public/${filename}`);

          // Update the data with the filename for this image field
          dataToUpdate[imageField] = filename;
        }
      }
    }

    // Update the document with the new data
    const doc = await Model.findByIdAndUpdate(req.params.id, dataToUpdate, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);
    console.log(doc);

    res.status(201).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

exports.getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);
    const doc = await query;

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    // To allow for nested GET reviews on tour (hack)
    let filter = {};
    if (req.params.tourId) filter = { tour: req.params.tourId };

    const features = new APIFeatures(
      Model.find(filter).populate({
        path: 'doctor user',
        strictPopulate: false,
      }),
      req.query,
    )
      .filter()
      .sort()

      .limitFields()
      .paginate();
    // const doc = await features.query.explain();
    const doc = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: {
        data: doc,
      },
    });
  });
