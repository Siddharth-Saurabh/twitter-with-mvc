import express from 'express';
import { PORT } from './config/serverconfing.js';
import apirouter from './routes/apiroutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { connect } from 'http2';
import connectDB from './config/dbConfig.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
   
// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
    res.render('index'); // Ensure `index.ejs` exists in the `/views` directory
});

app.use('/api', apirouter);

app.get('/ping', (req, res) => {
    return res.json({ message: 'pong' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    connectDB();
});
