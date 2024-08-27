const express = require('express');
require('dotenv').config();
const surveyRoutes = require('./routes/surveyRoutes');

const app = express();

app.use(express.json());
app.use('/api/surveys', surveyRoutes);


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port: ${process.env.PORT}`);
})