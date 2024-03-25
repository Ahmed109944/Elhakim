const multer = require('multer');
const sharp = require('sharp');
const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const factory = require('./handlerFactory');


const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images.', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

exports.uploadUserPhotos = upload.fields([
  { name: 'photo', maxCount: 1 },
  { name: 'cv', maxCount: 1 },
  { name: 'licensedID', maxCount: 1 }
]);

// exports.resizeUserPhotos = catchAsync(async (req, res, next) => {
//   if (!req.files) return next();

//   // Process photo
//   if (req.files['photo']) {
//     req.files['photo'][0].filename = `user-${req.user.id}-${Date.now()}-photo.jpeg`;
//     await sharp(req.files['photo'][0].buffer)
//       .resize(500, 500)
//       .toFormat('jpeg')
//       .jpeg({ quality: 90 })
//       .toFile(`public/${req.files['photo'][0].filename}`);
//   }

//   // Process cv
//   if (req.files['cv']) {
//     req.files['cv'][0].filename = `user-${req.user.id}-${Date.now()}-cv.jpeg`;
//     await sharp(req.files['cv'][0].buffer)
//       .resize(500, 500)
//       .toFormat('jpeg')
//       .jpeg({ quality: 90 })
//       .toFile(`public/${req.files['cv'][0].filename}`);
//   }

//   // Process licensedID
//   if (req.files['licensedID']) {
//     req.files['licensedID'][0].filename = `user-${req.user.id}-${Date.now()}-licensedID.jpeg`;
//     await sharp(req.files['licensedID'][0].buffer)
//       .resize(500, 500)
//       .toFormat('jpeg')
//       .jpeg({ quality: 90 })
//       .toFile(`public/${req.files['licensedID'][0].filename}`);
//   }

//   next();
// });
const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.updateMe = catchAsync(async (req, res, next) => {
  // 1) Create error if user POSTs password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'This route is not for password updates. Please use /updateMyPassword.',
        400
      )
    );
  }

  // 2) Filtered out unwanted fields names that are not allowed to be updated
  const filteredBody = filterObj(req.body, 'name', 'email');
  if (req.file) filteredBody.photo = req.file.filename;

  // 3) Update user document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser
    }
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: 'success',
    data: null
  });
});

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not defined! Please use /signup instead'
  });
};

exports.getUser = factory.getOne(User);
exports.getAllUsers = factory.getAll(User);

// Do NOT update passwords with this!
const imageFields = ['photo', 'cv', 'licensedID'];
exports.updateUser = factory.updateOne(User, imageFields);
exports.deleteUser = factory.deleteOne(User);
