var mongoose=require('mongoose')

mongoose.connect("mongodb+srv://mishal:mishal@cluster0.9ykok.mongodb.net/ICTproject?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log('DB connected');
}).catch((err)=>{
    console.log(err)
})