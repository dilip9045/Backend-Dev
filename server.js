import express from 'express';
import userRoute from './userRoute.js';
import dashboardRoute from './dashboard.js';

const port = 3000;
const app = express();

app.use(express.json());

app.use('/api/users', userRoute);
app.use('/api/dashboard', dashboardRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
