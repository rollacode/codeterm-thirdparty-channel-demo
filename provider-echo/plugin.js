module.exports.default = {
  detectFromTitle(title) {
    return String(title || "").toLowerCase().includes("thirdparty-echo");
  },
  detectFromOutput(bytes) {
    return String(bytes || "").toLowerCase().includes("thirdparty-echo");
  }
};
