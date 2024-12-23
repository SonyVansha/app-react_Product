import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./src/config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./src/routes/userRoute.js";
import ProductRoute from "./src/routes/productRoute.js";
import AuthRoute from "./src/routes/authRoute.js";
import initializeData from './src/seeders/initializeData.js';
// const initializeData = require('./src/seeders/initializeData');

// Connect to the database
dotenv.config();

const app = express();

// Create a new session store using the database connection 
const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({
    db: db
});

// (async()=>{
//     await db.sync();
// })();

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

// Origin: http://localhost
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

// This is to parse the incoming request with JSON payloads
app.use(express.json());
app.use(UserRoute);
app.use(ProductRoute);
app.use(AuthRoute);

// store.sync();
// Sinkronisasi database dan jalankan fungsi inisialisasi
db.sync()
  .then(() => {
    console.log('Database berhasil sinkronisasi');
    return initializeData();
  })
  .catch((error) => console.error('Gagal sinkronisasi database:', error));
  
// Listen to the port 5000
app.listen(process.env.APP_PORT, ()=> {
    console.log('Server up and running...');
});