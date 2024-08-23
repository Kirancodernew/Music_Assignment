const Song = require("../models/Song");

const song = async (req, res) => {
  console.log("Hello, my songs request");
  res.json({Message:"Everything is good"}); // Assuming req.user contains the user data after authentication
};



const play = (req, res) => {
  // Set the cookie in the response
  res.cookie("token", "your-token-value", {
    httpOnly: true, // Accessible only by the web server
    maxAge: 24 * 60 * 60 * 1000, // Cookie expiration time (1 day)
    secure: true, // Only send the cookie over HTTPS
    sameSite: "strict", // Strict same site enforcement
  });

  // Log a success message or perform another action
  console.log("Cookie has been set");

  // Send a response to the client
  res.send("Cookie has been set");
};

module.exports = { song, play };
