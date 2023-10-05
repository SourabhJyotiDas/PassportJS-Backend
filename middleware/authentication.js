

export const isPassportAuthenticated = async (req, res, next) => {
      try {
            // console.log(req.user);
            if (req.user === undefined) {
                 return res.status(500).json({
                        message: "Please Login First",
                  });
            }
            next();

      } catch (error) {
            res.status(500).json({
                  message: error.message,
            });
      }
}