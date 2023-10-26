const { Schema } = require('mongoose');

const clientSchema = new Schema({
  writers: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  clientId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = clientSchema;
