"use strict";

module.exports.login = function (req, res) {
  res.status(200).json({
    login: {
      email: req.body.email,
      password: req.body.password
    }
  });
};

module.exports.register = function (req, res) {//email and password
  //если имеил есть выкидываем
  //пароль защищаем
};