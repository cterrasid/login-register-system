const usersController = {
  renderRegisterForm: (req, res) => {
    res.render("/register");
  },

  register: (req, res) => {
    res.send("Register!");
  },

  renderLoginForm: (req, res) => {
    res.render("/login");
  },

  login: (req, res) => {
    res.send("Login!");
  },

  logout: (req, res) => {
    res.send("Logout!");
  },
};

module.exports = usersController;
