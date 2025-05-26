const passport = require("passport");
const jwt = require("jsonwebtoken");

// Starts the Google login
exports.loginWithGoogle = passport.authenticate("google", {
  scope: ["profile", "email"],
});

// Callback after Google login
exports.googleCallback = [
  passport.authenticate("google", { session: false, failureRedirect: "/" }),
  (req, res) => {
    // You can return session or JWT
    const token = jwt.sign(
      { id: req.user.id, email: req.user.email },
      process.env.JWT_SECRET || "default_secret",
      { expiresIn: "1h" }
    );

    res.json({
      message: "Google SSO successful",
      token,
      user: req.user,
    });
  },
];
