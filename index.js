const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const expressGraphQL = require('express-graphql').graphqlHTTP
const schema = require('./schema')
const connectDB = require('./config/db')
const app = express()


dotenv.config({path: 'config/.env'})

app.use('/graphql', expressGraphQL({
    schema:schema,
    graphiql: true
}))

connectDB()

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))