// Step 1: Import mongoose
const mongoose = require('mongoose');

// Step 2: MongoDB connection string
const uri = 'mongodb://localhost:27017/recadmin';

// Step 3: Connect to MongoDB
mongoose.connect(uri)
    .then(() => {
        console.log('MongoDB connected successfully');
        // Call the function to retrieve a value
        getSingleValue();
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

// Step 4: Define a simple schema and model
const ItemSchema = new mongoose.Schema({
    name: String
});

const Item = mongoose.model('techStudent', ItemSchema, 'techStudent');


// Step 5: Function to retrieve value(s)
async function getSingleValue() {
    try {
        const item = await Item.find(); 
        if (item) {
            console.log('Retrieved Item:', item);
        } else {
            console.log('No item found');
        }
    } catch (error) {
        console.error('Error retrieving item:', error);
    } finally {
        // Step 6: Close the connection
        mongoose.connection.close();
    }
}
