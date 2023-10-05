import User from "../models/user.js";

export const register = async (req, res) => {
      try {
            const { name, email, password } = req.body;

            let user = await User.findOne({ email });
            if (user) {
                  return res
                        .status(400)
                        .json({ success: false, message: "User already exists" });
            }

            user = await User.create({ name, email, password })

            res.status(201).json({
                  success: true,
                  user,
            });

      } catch (error) {
            res.status(500).json({
                  success: false,
                  message: error.message,
            });
      }
}

export const login = async (req, res) => {
      try {
            res.status(200).json({
                  success: true,
                  user: req.user
            })
      } catch (error) {
            res.status(500).json({
                  success: false,
                  user: error.message
            })
      }
}
export const logout = async (req, res) => {
      try {
            req.logOut(() => {
                  return res.status(200).json({
                        success: true,
                        message: "Logout Successfully"
                  })
            });

      } catch (error) {
            res.status(500).json({
                  success:false,
                  message: error.message
            })
      }
}

export const myProfile = async (req, res) => {
      try {
            const user = await User.findById(req.user._id);

            res.status(200).json({
                  success: true,
                  user,
            });
      } catch (error) {
            res.status(500).json({
                  success: false,
                  message: error.message,
            });
      }
};