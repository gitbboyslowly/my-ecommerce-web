import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200']
}));

app.get('/', (req, res) => {
    res.send('Hello from the server!');
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
