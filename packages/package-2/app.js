const package1Alert = require("@ifaafa/package-1");

module.exports = {
  alert: () => {
    package1Alert.alert();
    console.log("package 2");
    console.log("hello world")
  }
};
