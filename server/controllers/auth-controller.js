const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const registerController = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
      return res.status(500).json({
        success: false,
        message: "All fields are required",
      });
    }

    const checkUser = await User.findOne({ $or: [{ userName }, { email }] });
    if (checkUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashePassword = await bcrypt.hash(password, 12);
    const user = new User({
      userName,
      email,
      password: hashePassword,
    });
    await user.save();

    res.status(200).json({
      success: true,
      message: "user successfully registerd",
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(500).json({
        success: false,
        message: "Please provide both email and password",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found!",
      });
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        userName: user.userName,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("token",token,{ httpOnly: true, secure: true }).status(200).json(
      {
        sucess: true,
        message : "Login successfully",
        data: {
          userName: user.userName,
          email: user.email,
          token,
        },
      }
    )
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = { loginController, registerController };
