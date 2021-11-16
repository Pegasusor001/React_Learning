const fetchData = function (value) {
  return new Promise((resolve, reject) => {
    if (value !== "error") {
      resolve("hello");
    } else {
      reject("error");
    }
  });
};

module.exports = { fetchData };
