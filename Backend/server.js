const express = require("express")
const dotenv = require("dotenv").config()
const colors=require("colors")
const { errorHandler } = require("./middleware/errorMiddleware")
const connectDB=require("./config/db")
const port = process.env.PORT || 5000


connectDB()


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const GoalRouter = require("./routes/goalRoutes")
const UserRouter=require("./routes/userRoutes")
app.use("/api/goals", GoalRouter);
app.use("/api/users", UserRouter);


app.use(errorHandler)

app.listen(port, () => {
  console.log(`server started at port ${port}`);
})