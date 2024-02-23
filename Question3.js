function lifeStageIdentifier(age){
    if(age<18){
      return "You're in the 'Growth' stage. Embrace learning and exploration!";
    }
    else if(age>=18 && age<=35){
        return "Welcome to the 'Passion' stage. Chase your dreams and explore your interests!";
    }
    else if(age>=36 && age<=50){
        return "You're in the 'Balance' stage. Find harmony between your ambitions and personal life.";
    }
    else {
        return "Embrace the 'Contribution' stage. Share your wisdom and make a positive impact on others.";
    }
    
}
const personAge = 10;
const stageMessage = lifeStageIdentifier(personAge);
console.log(stageMessage);