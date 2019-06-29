import express from "express";
import userController from "../controllers/users.controller"
import passport from 'passport';
const router = express.Router()

router.get('/login', (req, res) => {
  // TODO: Add login page route
  res.send('Hey');

});

router.post('/register', (req, res) => {
  userController.register(req, res);
});

router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/users/login' }),
  function(req, res) {
    res.redirect('/');
});
// router.post('/login', (req, res, next) => {
//   passport.authenticate('local', function(err, user, info) {
//     if (err) { return next(err); }
//     if (!user) { return res.redirect('/login'); }

//     req.login(user, next);
//     console.log(user);
//     console.log(info);
//   })(req, res, next);
// });

router.delete('/deletechart', (req, res) => {
    chartController.deleteChart(req, res);
});

export default router;