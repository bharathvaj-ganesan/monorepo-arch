module.exports = {
  publishCommand: ({ defaultCommand, tag }) =>
    `${defaultCommand} --access public --tag ${tag}`,
  monorepo: {
    mainVersionFile: "lerna.json",
    packagesToBump: ["packages/*"],
    packagesToPublish: ["packages/*"],
  },
  buildCommand: () => null,
};
