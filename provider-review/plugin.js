module.exports.default = {
  detectFromTitle(title) {
    return String(title || "").toLowerCase().includes("thirdparty-review");
  },
  detectFromOutput(bytes) {
    return String(bytes || "").toLowerCase().includes("thirdparty-review");
  }
};
