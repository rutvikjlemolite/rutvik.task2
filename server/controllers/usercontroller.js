import bcrypt from "bcrypt";
import User from "../models/usermodel.js";

class UserController {
  static signUp = async (req, res, next) => {
    try {
      const { mobile, password, role, email , address } = req.body;

      if (mobile && password && role && email && address) {
        const check = await User.findOne({ mobile });

        if (check) {
          return res.json({ msg: "Username already used", status: false });
        }

        const hashpassword = await bcrypt.hash(password, 10);
        const user = await User.create({
          mobile,
          password: hashpassword,
          role,
          email,
          address,
        });

        delete user.password;

        return res.json({
          msg: "User created successfully",
          status: true,
          user,
        });
      } else {
        return res.json({ msg: "Please fill all the field", status: false });
      }
    } catch (error) {
      next(error);
    }
  };

  static login = async (req, res, next) => {
    try {
      const { mobile, password } = req.body;

      const user = await User.findOne({ mobile });

      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
          return res.json({ msg: "Login successful", status: true, user });
        } else {
          return res.json({
            msg: "Login Failed !! please check credentials",
            status: false,
          });
        }
      } else {
        return res.json({ msg: "You are not register user", status: false });
      }
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;
