function Flower (pronoun,NumPetals) {
var petals = NumPetals;

if(!petals && petals !== 0){
    petals = Math.floor(Math.random()* 5) + 5;
}

var originalPetals = petals;

this.totalPetals = function() {
    return originalPetals;
}

this.removePetal = function() {
    if(petals>0){
        petals = petals -1;
    }
    return petals;
};

this.petals = function() {
    return petals;
};

var lovesme = false;

this.toggleLovesme = function() {
    lovesme = !lovesme;
    return lovesme;
}

this.love = function() {
    var note;

    if(this.toggleLovesme()) {
        note = pronoun + "love(s) me <3";

    }
    else {
        note = pronoun + "love(s) me not :("
    }
    return note; 
}
}
