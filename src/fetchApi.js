import dotenv from 'dotenv';
dotenv.config();
import express from'express'
import cors from 'cors'
import axios from 'axios'
import mongoose from 'mongoose'
import mdData from './models/mdData.js'

const app = express()
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 6060;

mongoose.set('strictQuery', false)
const connectDB = async()=>{
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  }catch(error){
    console.log(error)
    process.exit(1)
  }
}

async function getData() {
    try {
      await mdData.deleteMany({})
      const response = await axios.get('https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json');
      const tasks = response.data.tasks
      const data = tasks.map(index=>{
        return{
          task_title: index.task_title,
          task_description: index.task_description,
          assets:index.assets
        }
      })
      await mdData.insertMany(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  getData();

app.get('/api',async(req,resp)=>{
    let data = await mdData.find()
    resp.send(data)
})

connectDB().then(()=>{
    app.listen(PORT,()=>{
      console.log(`Listening on port ${PORT}`)
    })
  })