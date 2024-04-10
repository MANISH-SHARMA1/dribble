const user = require("../models/Signup");
const bcrypt = require("bcrypt");
const cloudinary = require("cloudinary").v2;
const resend = require("resend");

const signupController = async (req, res) => {
  try {
    const { name, username, email, password, termsAccepted } = req.body;

    if (!name || !username || !email || !password) {
      res.send("All fields are required");
    }

    const oldUser = await user.findOne({ email });

    if (oldUser) {
      res.send("User is already registered");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const User = await user.create({
      name,
      username,
      email,
      password: hashedPassword,
      termsAccepted,
    });

    res.send(User);
  } catch (error) {
    console.log(error);
  }
};

const profileController = async (req, res) => {
  try {
    const { userImg, location } = req.body;

    console.log(req.body);

    if (!userImg || !location) {
      res.send("All fields are required");
    }
    const User = await user.findById(req.params.id);

    const cloudImg = await cloudinary.uploader.upload(userImg, {
      folder: "userImg",
    });
    User.avatar = {
      url: cloudImg.secure_url,
      publicId: cloudImg.public_id,
    };

    User.location = location;
    const retu = await User.save();

    return res.send(retu);
  } catch (error) {
    console.log("error: ", error);
  }

  //   "Profile created successfully"
};

const optionController = async (req, res) => {
  try {
    const { selectedOption } = req.body;

    console.log("selectedOption:", selectedOption);

    if (!selectedOption) {
      res.send("Please choose one option");
    }

    const User = await user.findById(req.params.id);

    User.selectedOption = selectedOption;

    await User.save();

    res.send(User);
  } catch (error) {
    console.log(error);
  }
};

const getProfileController = async (req, res) => {
  try {
    const User = await user.findById(req.params.id);

    res.send(User);
  } catch (error) {
    console.log(error);
  }
};

const confirmationMailController = async (req, res) => {
  try {
    const { email } = req.body;

    const resends = new resend.Resend("re_WDpET9UG_MUoAUEg16KXYuXdVRmVrDWgN");

    const { data, error } = await resends.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [`${email}`],
      subject: "Welcome to Dribble",
      html: "<strong>Hello 👋. Welcome 🎉 aboard! We're thrilled to have you as a new member of dribble. Your account has been successfully created, and you're now part of our community.</strong>",
    });

    if (error) {
      return res.status(400).json({ error });
    }

    res.status(200).json({ data });
  } catch (e) {
    res.status(404).json({
      status: "failed",
      message: e?.message || "Something went wrong",
    });
  }
};

module.exports = {
  signupController,
  profileController,
  optionController,
  getProfileController,
  confirmationMailController,
};
