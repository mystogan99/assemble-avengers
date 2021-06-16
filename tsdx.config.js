module.exports = {
    // This function will run for each entry/format/env combination
    rollup(config, options) {
      options.target = "node"
      return config; // always return a config.
    },
  };