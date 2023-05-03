require('dotenv').config()
require('express-async-errors')
const cors = require('cors')
const nodeMailer = require('nodemailer')

const express= require('express')
const path = require('path')
const app = express()

//middleware
const notFoundMiddleware = require('./middleware/notfound')
const errorHandlerMiddleware = require('./middleware/errorHandler')
const authenticateUser =  require('./middleware/auth')
const connectDB = require('./db/dbCon')
 
//transporter
const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'richardadaji@gmail.com',
        pass: '@Notjustjohn9493'
    }
})

//routes
const authRouter =  require('./routes/AuthRoutes')
const TransactionsRouter =  require('./routes/TransactionsRoutes')
const newTransactionsRouter =  require('./routes/newTransactionsRoutes')
app.use('/', express.static( path.join(__dirname,'./public')))
app.use(express.json())

app.use(cors())

app.use('/foxic/auth', authRouter)
app.use('/foxic/transactions', authenticateUser, TransactionsRouter)
app.use('/foxic/newtransaction', newTransactionsRouter)


//errorhandllers
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const port = process.env.PORT || 8000
const start = async () =>{
    await connectDB('mongodb://localhost:27017/FOXIC')
    try {
        app.listen(port, console.log(`Server is Live at port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()