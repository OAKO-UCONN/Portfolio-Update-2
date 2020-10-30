// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

app.get("/portfolio", (req, res) => {  
  if (req.user) {
    res.redirect("/portfolio");
  }
  res.sendFile(path.join(__dirname, "../public/portfolio.html"));
});

app.get("/contact", (req, res) => {
  if (req.user) {
    res.redirect("/contact");
  }
  res.sendFile(path.join(__dirname, "../public/contact.html"));
});

//////////////////////////////// Below is the list of Routes to the SubPages of my Portfolio /////////////////////////////////////

//BrainBoost
app.get("/portfolio/brain-boost", (req, res) => {
  if (req.user) {
    res.redirect("/portfolio/brain-boost");
  }
  res.sendFile(path.join(__dirname, "../public/portfolio/brain-boost.html"));
});

//Edgehill
app.get("/portfolio/edgehill", (req, res) => {
  if (req.user) {
    res.redirect("/portfolio/edgehill");
  }
  res.sendFile(path.join(__dirname, "../public/portfolio/edgehill.html"));
});

//Espanol
app.get("/portfolio/espanol", (req, res) => {
  if (req.user) {
    res.redirect("/portfolio/espanol");
  }
  res.sendFile(path.join(__dirname, "../public/portfolio/espanol.html"));
});

//NCC
app.get("/portfolio/ncc", (req, res) => {
  if (req.user) {
    res.redirect("/portfolio/ncc");
  }
  res.sendFile(path.join(__dirname, "../public/portfolio/ncc.html"));
});

//Staffing
app.get("/portfolio/staffing", (req, res) => {
  if (req.user) {
    res.redirect("/portfolio/staffing");
  }
  res.sendFile(path.join(__dirname, "../public/portfolio/staffing.html"));
});

//UCONN Coding Bootcamp
app.get("/portfolio/uconn-coding-bootcamp", (req, res) => {
  if (req.user) {
    res.redirect("/portfolio/uconn-coding-bootcamp");
  }
  res.sendFile(path.join(__dirname, "../public/portfolio/uconn-coding-bootcamp.html"));
});



//////END Portfolio Subpages.//////

};