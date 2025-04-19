const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://yamanisohaib477:7TLsqcV0unNAN5tA@cluster0.p91xkot.mongodb.net/CRAVECART?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURL);

    console.log("Connected to MongoDB");

    // Fetch food_items collection
    const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
    global.food_items = fetched_data;
    //console.log(global.food_items);

    // Fetch foodCategory collection
    const foodCategory = await mongoose.connection.db.collection("foodCategory").find({}).toArray();
    global.foodCategory = foodCategory;
    //console.log(global.foodCategory);
  } catch (err) {
    console.error("---", err);
  }
};

module.exports = mongoDB;
