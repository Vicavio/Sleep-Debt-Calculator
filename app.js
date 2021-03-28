const getSleepHours = day => {
   switch (day) {
       case "Monday":
           hoursSlept = 5;
           break;
        case "Tuesday":
           hoursSlept = 6;
           break;
        case "Wednesday":
           hoursSlept = 7;
           break;
        case "Thurday":
           hoursSlept = 8;
           break;
        case "Friday":
           hoursSlept = 7;
           break;
        case "Saturday":
           hoursSlept = 9;
           break;
        case "Sunday":
           hoursSlept = 8;
           break
   }
   return hoursSlept;
}

const getActualSleepHours = () => {
   return getSleepHours("Monday") + getSleepHours("Tuesday") + getSleepHours("Wednesday") + getSleepHours("Thursday") + getSleepHours("Friday") + getSleepHours("Saturday") + getSleepHours("Sunday");
}

const getIdealSleepHours = () => {
   let idealHours = 9;
   return idealHours * 7;
}

const calculateSleepDept = () => {
   let actualSleepHours = getActualSleepHours();
   let idealSleepHours = getIdealSleepHours();
   if (actualSleepHours === idealSleepHours) {
      console.log("You got the perfect amount of sleep.");
   } else if (actualSleepHours > idealSleepHours) {
      console.log("You sleep more than needed.");
   } else if (actualSleepHours < idealSleepHours) {
      console.log("You should get some rest.");
   }
   console.log(`Now you sleep ${actualSleepHours} hours for week.`)
   console.log(`Your ideal amount of sleep for week is ${idealSleepHours} hours.`)
};

calculateSleepDept();
