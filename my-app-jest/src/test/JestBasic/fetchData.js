const fetchData = function (value) {
  return new Promise((resolve, reject) => {
    if (value !== "error") {
      resolve("hello");
    } else {
      reject("error");
    }
  });
};

const axios = require("axios").default;
class Users {
  static all() {
    return axios.get("/user.json").then((res) => res.data);
  }
}

module.exports = { fetchData, Users };
