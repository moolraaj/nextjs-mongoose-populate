import mongoose from 'mongoose';
import classModel from './classModel';
 const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  all_classes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'classes',
    },
  ],

 
});

const schoolModel = mongoose.models.schools || mongoose.model('schools', schoolSchema);
export default schoolModel;


