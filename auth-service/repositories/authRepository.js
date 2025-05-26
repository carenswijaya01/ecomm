const { User } = require("../models");

exports.findOrCreateUser = async (profile) => {
  const email = profile.emails[0].value;
  let user = await User.findOne({ where: { email } });

  if (!user) {
    user = await User.create({
      email: email,
      google_id: profile.id,
      name: profile.displayName,
    });
  }

  return user;
};
