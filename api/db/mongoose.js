const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TaskManager', {  useNewUrlParser: true }).then(() => {  
    console.log('Connected to MongoDB Successfully...');
}).catch((e) => {
    console.log('Connected Slaped...');
    console.log(e);
});


//To prevent declaration warnings (from MongoDB native driver)
mongoose.set('useCreateIndex',true);
mongoose.set('useFindAndModify',false);
mongoose.set('useUnifiedTopology',false);

module.exports = 
{
    mongoose
};
