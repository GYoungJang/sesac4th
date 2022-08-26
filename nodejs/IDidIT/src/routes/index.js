const express = require('express');
const router = express.Router();
const ctl = require('../controller/IDI_CTL');

router.get('/', ctl.home);
router.get('/signup', ctl.signup);
router.get('/login', ctl.login);