require('dotenv').config();
const Stripe = require('stripe');

const port = process.env.PORT;

const express = require('express');   //using express we can create app instance
const app = express();

// app.use(cors(
//     {
//         origin: ["https://deploy-mern-1whq.vercel.app"],
//         mathods: ["POST", "GET"],
//         credentials: true
//     }
// ));
// console.log("APP POWERS ARE:   \n ",app);

//initialising mongoose package
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');//image uploading
const path = require('path'); //using this path, we can get access to backend directory in our express app
const cors = require('cors');


app.use(express.json()); //the response of request will be converted into json
app.use(cors()); //using this, out react js project will connect to express app at the defined port

//db initialisation

//DATABASE CONNECTION WITH MONGODB - mongodb+srv://sneha001705:jcCe0IABXCBpu1di@cluster0.ijcjo.mongodb.net//


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Database connection successful');
  }).catch((err) => {
    console.error('Database connection error:', err);
  });
  



app.get("/", (req, res) => {
    res.send("Express app is runnig")
})


//
    const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
    // Stripe Payment Intent Route
    app.post('/api/stripe/create-payment-intent', async (req, res) => {
        try {
          const { amount, currency } = req.body;
        
          if (!amount) {
            return res.status(400).send({ error: 'Amount is required' });
          }
      
          // Create a payment intent
          const paymentIntent = await stripe.paymentIntents.create({
            amount, // Amount in cents (e.g., $10 -> 1000)
            currency: currency || 'usd', // Default to USD if not provided
          });
      
          res.send({
            clientSecret: paymentIntent.client_secret,
          });
        } catch (error) {
          console.error('Error creating payment intent:', error.message);
          res.status(500).send({ error: error.message });
        }
      });




// ------------------------------ IMAGE STORAGE ENGINE ------------------------- starts
const storage = multer.diskStorage({
    destination : './upload/images',
    filename: (req, file, cb) =>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
})
const upload = multer({storage : storage}) //2nd 'storage' disk is the above engine

// ------------------------------ IMAGE STORAGE ENGINE ------------------------- ends



// ------------------------------ IMAGE UPLOAD ENGINE ------------------------- starts
app.use("/images", express.static('upload/images'));

app.post('/upload', upload.single('product'), (req, res)=>{
        res.json({
                success: 1,
                image_url: `http://localhost:${port}/images/${req.file.filename}`
            })
        })   
// ------------------------------ IMAGE UPLOAD ENGINE ------------------------- ends


// ------------------------------ ENDPOINT TO ADD IMAGE IN MOGODB DB  ------------------------- ends
    //SCHEMA
    const Product = mongoose.model("Product", {
        id: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: false
        },
        category: {
            type: String,
            required: true
        },
        new_price: {
            type: Number,
            required: true
        },
        old_price: {
            type: Number,
            required: true
        },
        mainDes: {
            type: String,
            required: true
        },
        description:{
            type: String,
            required : true
        },
        review:{
            type: String, 
            required : true
        },
        rating: {
            type: Number,
            required: true,
            min: [0, 'Rating must be at least 0'],
            max: [5, 'Rating must not exceed 5'],
            validate: {
                validator: function (value) {
                    return Number(value) === value && value >= 0 && value <= 5;
                },
                message: 'Rating must be a floating-point number between 0 and 5'
            }
        },
        date: {
            type: Date,
            default: Date.now
        },
        available: {
            type: Boolean,
            default: true
        },

    })
    //schema - ends


//to add product
    // app.post('/addproduct', async (req, res) => {
        
    //     //-------- TO AUTOMATICALLY GENERATE ID OF PRODUCTS ---------- starts
    //     let products = await Product.find({});
    //     let id;
    //     if(products.length>0){
    //         let last_product_array = products.slice(-1); //only last product of the array will be returned
    //         let last_product = last_product_array[0];
    //         id = last_product.id+1;
    //     }
    //     else{
    //         id=1;
    //     }
    //     //-------- TO AUTOMATICALLY GENERATE ID OF PRODUCTS ---------- ends
        
        
    //     const product = new Product({
    //         id: req.body.id,
    //         name: req.body.name,
    //         image: req.body.image,
    //         category: req.body.category,
    //         new_price: req.body.new_price,
    //         old_price: req.body.old_price,
    //     });
    //     console.log(product);
    //     await product.save(); //saving the product in db
    //     console.log("Saved!");
        
    //     //generating response to frontend
    //     res.json({
    //         success: true,
    //         name: req.body.name,
    //     })
    // })






    app.post('/addproduct', async (req, res) => {
        try {
            let products = await Product.find({});
            let id = products.length > 0 ? products.slice(-1)[0].id + 1 : 1;
    
            const product = new Product({
                id: id,
                name: req.body.name,
                image: req.body.image,
                category: req.body.category,
                new_price: req.body.new_price,
                old_price: req.body.old_price,
                mainDes: req.body.mainDes,
                description: req.body.description,
                review: req.body.review,
                rating: req.body.rating
            });
    
            await product.save(); //saving the product in db
            console.log("Saved!");
    
            res.json({
                success: true,
                name: req.body.name,
            });
        } catch (error) {
            console.error('Error adding product:', error);
            res.status(500).json({ success: false, message: 'Failed to add product' });
        }
    });
    
    
//product added - ends
    
    
    
    //-------- CREATING API FOR DELETING PRODUCTS FROM DB ---------- starts
    app.post('/removeproduct', async (req, res) => {
        try {
            const product = await Product.findOneAndDelete({ id: req.body.id });
            if (product) {
                console.log("Removed!");
                res.json({
                    success: true,
                    name: product.name
                });
            } else {
                res.json({ success: false, message: 'Product not found' });
            }
        } catch (error) {
            console.error('Error removing product:', error);
            res.status(500).json({ success: false, message: 'Failed to remove product' });
        }
    });
    
    //-------- CREATING API FOR DELETING PRODUCTS FROM DB ---------- ends
    
    
    
    
    //-------- CREATING API FOR LISTING ALL PRODUCTS FROM DB ---------- starts
    app.get('/allproducts', async (req, res) => {
        let products = await Product.find({});
        console.log("All products fetched.");
        res.send(products);
    } )

    //-------- CREATING API FOR LISTING ALL PRODUCTS FROM DB ---------- ends
    








    
    //creating API for new Collection data
    app.get('/newcollections', async (req, res) => {
        let products = await Product.find({}); //all products will be saved in the products array

        let newcollection = products.slice(1).slice(-8);
        console.log("NewCollection Fetched");
        res.send(newcollection);
    })



    //popular in pets category
    app.get('/popularinpets', async (req, res) => {
        let products = await Product.find({category: { $in: ["dogs", "cats"] }});
        let popular_in_pets = products.slice(0,4);
        console.log("Popular in pets fetched");
        res.send(popular_in_pets);
    })

    
    //creating middleware to fetch user
        const fetchUser = async (req, res, next) => {
            const token = req.header('auth-token');
            if(!token){
                res.status(401).send({errors: "Please authenticate using valid token"});
            }
            else{
                try{
                    const data = jwt.verify(token, 'secret_ecom');
                    req.user = data.user;
                    next();
                }
                catch(error){
                    res.status(401).send({errors: "Please authenticate using valid token"})
                }
            }
        }

    //creating end point for adding products in cartdata
    app.post('/addtocart', fetchUser, async (req, res) => {
        console.log("added", req.body.itemId);

        let userData = await User.findOne({_id: req.user.id});
        userData.cartData[req.body.itemId] += 1;
        await User.findOneAndUpdate({_id: req.user.id}, {cartData: userData.cartData});
        res.send("Added");
    })


    //to remove product from cart
    app.post('/removefromcart', fetchUser, async (req, res)=> {
        console.log("removed", req.body.itemId);

        let userData = await User.findOne({_id: req.user.id});
        if(userData.cartData[req.body.itemId] > 0){
            userData.cartData[req.body.itemId] -= 1;
        }
        await User.findOneAndUpdate({_id: req.user.id}, {cartData: userData.cartData});
        res.send("Removed");
    })











    
    //--------  API FOR USER LOGIN AND SAVING IT IN DB ---------- starts
    const bcrypt = require('bcryptjs');

    
    // Mongoose user schema
    const User = mongoose.model('User', {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        cartData: {
            type: Object,
        },
        date: {
            type: Date,
            default: Date.now,
        }
    });
    
    // Endpoint for user registration (sign-up)
    app.post('/signup', async (req, res) => {
        try {
            // Check if email already exists
            let check = await User.findOne({ email: req.body.email });
            if (check) {
                return res.status(400).json({ success: false, errors: "Email already exists!" });
            }
    
            // Initialize empty cart
            let cart = {};
            for (let i = 0; i < 300; i++) {
                cart[i] = 0;
            }
    
            // Hash the password before saving
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
            // Create new user
            const user = new User({
                name: req.body.username,
                email: req.body.email,
                password: hashedPassword,  // save hashed password
                cartData: cart,
            });
    
            // Save user to database
            await user.save();
    
            // JWT authentication
            const data = {
                user: {
                    id: user._id
                }
            };
    
            // Sign and return the JWT token
            const token = jwt.sign(data, 'secret_ecom', { expiresIn: '1h' });
            res.json({ success: true, token });
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Server error");
        }
    });

    //--------  API FOR USER LOGIN AND SAVING IT IN DB ---------- ends




    
    //-------- CREATING ENDPOINT FOR USER LOGING  ---------- starts
    
    app.post('/login', async (req, res) => {
        try {
            // Find the user by email
            let user = await User.findOne({ email: req.body.email });
            
            if (user) {
                // Compare the hashed password
                const passCompare = await bcrypt.compare(req.body.password, user.password);
    
                if (passCompare) {
                    // Generate JWT token
                    const data = {
                        user: {
                            id: user.id
                        }
                    };
                    const token = jwt.sign(data, 'secret_ecom', { expiresIn: '1h' }); // Optional: Set an expiration time
                    
                    // Return the token as a response
                    res.json({ success: true, token });
                } else {
                    res.status(400).json({
                        success: false,
                        error: "Wrong Password!"
                    });
                }
            } else {
                res.status(400).json({ success: false, error: "Wrong email id!" });
            }
        } catch (err) {
            res.status(500).json({ success: false, error: "Internal Server Error" });
        }
    });
    
    //-------- CREATING ENDPOINT FOR USER LOGING  ---------- ends



    //create payment





    //-------- CREATING API FOR LISTING ALL PRODUCTS FROM DB ---------- ends
    //api endpoint creation
app.listen(port, (err) =>{
    if(!err){
        console.log("Server running on port = "+port);
    }
    else{
        console.log("error: "+ err);

    }
}) 
