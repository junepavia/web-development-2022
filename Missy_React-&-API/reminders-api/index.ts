import express from 'express';
import bodyParser from 'body-parser';
import remindersRouter from './routes/users';
import routes from "./routes/users";
import router from './routes/users';
import usersRoutes from './routes/users';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/users', usersRoutes);

//app.use(express.json());
//app.use("/users",routes);


app.get('/', (req, res) => 
    res.send('Hello world'));

app.listen(PORT, () => console.log('Server started+++:http://localhost:${PORT}'));