import mongoose from 'mongoose'

const dataSchema = new mongoose.Schema({
  // Define your schema fields here
  task_title: { type: String, required: false },
  task_description: { type: String, required: false },
  assets: { type: Array, required: false },
});
const mdData = mongoose.model('Data', dataSchema);

export default mdData

