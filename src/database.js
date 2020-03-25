const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/testdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Database connected'))
.catch(err => console.log(ErrorEvent))