import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import Order from './models/orderModel.js'
import Product from './models/productModel.js'
import User from './models/userModel.js'
import connectDB from "./config/db.js";
import users from "./data/users.js";

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    await User.insertMany(users)
  } catch (error) {

  }
}