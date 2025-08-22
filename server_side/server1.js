const express = require("express");
const path = require("path");
const mysqlpool = require("./Database/db");
const { error } = require("console");
const routes = require("./Routes/routes");
const docroutes = require("./Routes/doctor.routes");
const cookieParser = require('cookie-parser');
const bodyparser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const app = express();
app.use(cookieParser());

//enable cors

// Optional: Add additional CORS configuration
app.use(
  cors({
    origin: 'http://127.0.0.1:5500', // Allow this origin
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    credentials: true // Enable cookies for CORS requests
  })
);
//app.use(cors());

//setting up session settings here
app.use(
  session({
    secret: "yourSecretKey", // Replace with a strong secret key
    resave: false, // Avoid resaving unchanged sessions
    saveUninitialized: true, // Save new sessions
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 365
  }
  })
);


//adding a middleware to handle json request this I will later on move to middle ware with other middleware functions remember to do it
app.use(bodyparser.json());
app.use(express.json());

//for server side static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, "views")));
app.use(express.static('views'));

// Set EJS as the view engine
//app.set('view engine', 'ejs');
app.get("/", (req, res) => {
  res.status(200).send("<h1>HELLO WORLD</h1>");
});
app.use("/api", routes);
app.use("/docapi",docroutes);

const PORT = 3000;
mysqlpool
  .query("SELECT 1")
  .then(() => {
    console.log("database connected successfully");

    app.listen(PORT, () => {
      console.log(`The SERVER is running on PORT:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });




