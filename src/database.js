const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/testdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log('Database connected'))
.catch(err => console.log(ErrorEvent))