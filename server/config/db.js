const { default: mongoose } = require("mongoose");

mongoose.set("toJSON", { getters: true });

const db = {
  connect: async () => {
    try {
      await mongoose.connect(process.env.CONNECTION);
      console.log("CONNECTED!");
    } catch (error) {
      console.log("ERROR", error);
    }
  },
};

module.exports = {
  db,
};
