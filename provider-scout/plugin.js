module.exports.default = {
  detectFromTitle(title) {
    return String(title || "").toLowerCase().includes("thirdparty-scout");
  },
  detectFromOutput(bytes) {
    return String(bytes || "").toLowerCase().includes("thirdparty-scout");
  }
};
