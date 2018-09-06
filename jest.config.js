module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: "node",
  reporters: [
    "default",
    ["junit", { output: "./reports/jest.xml"}]
  ],
};
