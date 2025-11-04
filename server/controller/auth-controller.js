const User = require('../utils/models/user-model');
const bcrypt = require('bcryptjs');

// Home page
const home = async (req, res) => {
  try {
    res.status(200).send('Welcome to the world of IT');
  } catch (error) {
    console.log(error);
  }
};

// Registration
const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: 'email already exists' });
    }

    // hash the password
    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(201).json({
      msg: 'registration successful',
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    // res.status(500).json("internal server error");
    console.log(req.body);
    next(error);
  }
};

//User Login Logic

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const isMatch = await bcrypt.compare(password, userExist.password);

    if (isMatch) {
      const token = await userExist.generateToken();
      res.status(200).json({
        msg: 'Login Successfully',
        user: userExist,
        token,
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: 'Invalid Email Or Password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { home, register, login };
