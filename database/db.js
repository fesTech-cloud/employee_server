const mongoose = require('mongoose')
const dbConnect = () => {
const dbURL = process.env.DBURL
mongoose.connect((dbURL), { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => console.log('db connected'))
.catch((err) => console.log(err))
}

module.exports = dbConnect