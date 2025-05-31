// const express = require('express');
// const router = express.Router();

// // Temporary test route
// router.get('/users', (req, res) => {
//   const users = [
//     { id: 1, name: 'John Doe', role: 'Mentor' },
//     { id: 2, name: 'Jane Smith', role: 'Mentee' }
//   ];
//   res.json(users);
// });

// module.exports = router;



const express = require('express');
const router = express.Router();
const authController = require('../controllers/authcontrollers'); // Path is correct

// Youth registration
router.post('/register/youth', authController.registerYouth);

// Youth login ✅ Add this
router.post('/login/youth', authController.loginYouth);

router.post('/register/elder', authController.registerElder);
router.post('/login/elder', authController.loginElder);
// Update Youth Profile
router.put('/update-profile/youth', authController.updateYouthProfile);




module.exports = router;

