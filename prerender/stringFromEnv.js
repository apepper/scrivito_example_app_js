exports.stringFromEnv = function stringFromEnv(envName) {
  const value = process.env[envName];

  if (!value) {
    throw new Error(`${envName} is empty!`);
  }

  return value;
};
