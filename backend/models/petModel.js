var mongoose=require('mongoose');

var petSchema=mongoose.Schema({
    petName:String,
    petAge:Number,
    petSpecies:String,
    petBreed:String,
})

var petModel=mongoose.model('pet',petSchema);

module.exports=petModel;