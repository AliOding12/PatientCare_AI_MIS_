const express = require("express");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
const db = require("./Database/db");
const path = require("path");
const http = require("http");
const cors = require("cors");
const routes = require("./Routes/approutes");
const {Server} = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = new Server(server,{
    cors:{
      origin: "http://localhost:5500", // Allow this origin
      credentials: true, // Allow credentials (cookies, authorization headers, etc.)
      methods: ["GET", "POST"], // Specify allowed methods
        
    }
});

app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:5500", // Allow this origin
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  methods: ["GET", "POST"], // Specify allowed methods
};
app.use(cors(corsOptions));
//app.use(cors());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.resolve(__dirname, "views")));
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", routes);
//app.set('view engine', 'ejs');
// app.use('/',(req,res)=>{
  //     res.status(200).send(`<h1>Hello asdasd</h1>`);
  // });
  

const PORT = 8080;

db.query("SELECT 1")
  .then(() => {
    console.log("Database Connected Successfully");
    app.listen(PORT, (req, res) => {
      console.log(`the server is running at ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });


  // Add main Express server script
// Add CORS support to Express server
// Add main Express server script
// Add CORS support to Express server
