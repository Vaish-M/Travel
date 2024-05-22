const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
mongoose.connect('mongodb://localhost/travel', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(express.json());
app.use(cors()); 
const productSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  image: String,
  dayNightMode: String, 
  totalPrice: String, 
  mode:String,
  day1:String,
  day2:String,
  day3:String,
  day4:String,
  day5:String,

});
const Product = mongoose.model('Product', productSchema);
const seedDatabase = async () => {
  try {
    await Product.deleteMany(); 

    const products = [
      {
        name: 'Paris',
        type: 'World',
        description: 'Timeless elegance',
        price: '$100 to  $1000',
        image: 'https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004_1280.jpg',
        dayNightMode: '5days/4Nights',
        totalPrice:'₹ 1000000 per head',
        mode: 'Air',
          day1: `Day 1: Arrival
                 Morning: Arrival at the destination's airport or railway station and transfer to the hotel.
                 Afternoon: Check-in at the hotel and freshen up.
                 Evening: Explore the nearby area and relax.
                 Hotel Option: [Provide hotel information here]`,
          day2: `Day 2: Sightseeing
                 Morning: Breakfast at the hotel.
                 Mid-Morning: Visit popular attractions and landmarks.
                 Afternoon: Enjoy local cuisine for lunch.
                 Evening: Optional cultural show or leisure time.
                 Hotel Option: [Provide hotel information here]`,
          day3: `Day 3: Adventure 
                 Morning: Breakfast at the hotel.
                 Mid-Morning: Engage in adventurous activities or excursions.
                 Afternoon: Lunch at a scenic spot or local restaurant.
                 Evening: Return to the hotel and relax.
                 Hotel Option: [Provide hotel information here]`,
          day4: `Day 4: Exploration 
                 Morning: Breakfast at the hotel.
                 Mid-Morning: Explore off-the-beaten-path locations or nearby towns.
                 Afternoon: Discover hidden gems and local markets.
                 Evening: Return to the hotel and unwind.
                 Hotel Option: [Provide hotel information here]`,
          day5: `Day 5: Departure 
                 Morning: Breakfast at the hotel.
                 Mid-Morning: Check-out from the hotel and transfer to the airport or railway station for departure.`
      
      },
      {
        name: 'Murdeshwar',
        type: 'India',
        description: 'Coastal Temple Town',
        image:'https://www.taximangalore.in/uploads/image/locations/murdeshwar.jpg',
        dayNightMode: '5days/4Nights',
        totalPrice:'₹ 1000000 per head',
        mode: 'Air',
        day1: `Day 1: Arrival in Murdeshwar <br>
                 Morning: Arrival at the railway station or airport and transfer to the hotel.
                 Afternoon: Check-in at the hotel and freshen up.
                 Evening: Explore the nearby area, visit the Murdeshwar Temple and the world’s second tallest Shiva statue.
                 Hotel Option: RNS Residency - A beachfront hotel offering comfortable rooms and stunning views of the Arabian Sea.`,
          day2: `Day 2: Beach and Adventure
                 Morning: Breakfast at the hotel.
                 Mid-Morning: Enjoy water sports at Murdeshwar Beach.
                 Afternoon: Visit Netrani Island for snorkeling and scuba diving.
                 Evening: Return to the hotel and relax.
                 Hotel Option: Naveen Beach Resort - Located close to the beach, offering a variety of amenities for a comfortable stay.`,
          day3: `Day 3: Sightseeing
                 Morning: Breakfast at a local restaurant.
                 Mid-Morning: Visit the Jog Falls, one of the highest waterfalls in India.
                 Afternoon: Explore the nearby forest and enjoy the scenic beauty.
                 Evening: Return to Murdeshwar and enjoy a traditional dinner at a local restaurant.
                 Hotel Option: Sai Vishram Beach Resort - A luxury resort offering eco-friendly accommodations and various leisure activities.`,
          day4: `Day 4: Visit Gokarna
                 Morning: Day trip to Gokarna, a popular pilgrimage and beach destination.
                 Afternoon: Explore Om Beach, Kudle Beach, and the Mahabaleshwar Temple.
                 Evening: Return to Murdeshwar and relax at the hotel.
                 Hotel Option: RNS Highway Hotel - Located conveniently on the highway, offering modern amenities and comfortable rooms.`,
          day5: `Day 5: Departure from Murdeshwar
                 Morning: Breakfast at the hotel.
                 Mid-Morning: Check-out from the hotel and transfer to the railway station or airport for departure.`
    
      
          
      },
      {
        name: 'Taj Mahal',
        type: 'India',
        description: 'Symbol of Eternal Love',
        price: '$100 to  $800',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3RbreC0phk64G-WGU5m-I_I3PiBOxH1OUKw&s',
      },
      {
        name: 'Mumbai',
        type: 'India',
        description: 'Bustling Coastal Metropolis',
        price: 100,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVaAxzM6Jzf5iOMMdd8OtKb8i29U-mZ7VQ2w&s',
      },
      {
        name: 'Howrah Bridge',
        type: 'India',
        description: 'Iron Engineering Marvel',
        price: 175,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGTrKDbPIQ56_oL5aJrLctsMx291yw5GolOg&s',
      },
      {
        name: 'Great Wall of China',
        type: 'World',
        description: 'Ancient Defensive Wonder',
        price: 250,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzMVPECb5uUP6bcYs3xR91ffon6c3wG96cYE3JoM32JcMdURiyRYreW-7zXGKviF7WDVo&usqp=CAU',
      },
      {
        name: 'Walt Disney World',
        type: 'World',
        description: 'Magical Theme Park Resort',
        price: 300,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDvAhJGRri-rCbf7lBow9cuW8Q6md1P_Ugag&s',
      },
      {
        name: 'London',
        type: 'World',
        description: 'Iconic River Crossing',
        price: 120,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn2k83PEcykI-zTaapzgxqzGGfaYvJT8wr8w&s',
      },
      {
        name: 'Sydney',
        type: 'World',
        description: 'Harbor City Gem',
        price: 180,
        image:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/3b/95/61/photo2jpg.jpg?w=500&h=-1&s=1',
      },
      {
        name: 'Maldives',
        type: 'World',
        description: 'Tropical Island Paradise',
        price: 130,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWoo49nTkD_VcSC3L6J33z5N1qMim6Yw8pbA&s',
      },
    ];

    await Product.insertMany(products);
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

seedDatabase();

app.get('/api/products', async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.json(allProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/products/indias', async (req, res) => {
  try {
    const fruits = await Product.find({ type: 'India' });
    res.json(fruits);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/api/products/worlds', async (req, res) => {
  try {
    const vegetables = await Product.find({ type: 'World' });
    res.json(vegetables);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
