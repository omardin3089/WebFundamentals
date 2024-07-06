function rewardMySelf(workoutFinishOnTime){
  if (workoutFinishOnTime < 10){
    console.log("I want juce");  
  }
  else if (workoutFinishOnTime >= 10 && workoutFinishOnTime < 16){
    console.log("I want hot chocolate");
  }
  else if (workoutFinishOnTime <= 16 && workoutFinishOnTime < 22){
    console.log("I want ice cream");
  }
  else if (workoutFinishOnTime >= 22){
    console.log("I don't need anything other than sleep!!!")
  }

}

rewardMySelf(23)