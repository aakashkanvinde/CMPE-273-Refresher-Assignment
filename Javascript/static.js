console.log("\n***** Javascript - Static *****");
class Footballer {
    constructor(name, team, age, goals) {
      this.name = name;
      this.team = team;
      this.age = age;
      this.goals = goals;
    }

    // Get Information
      getInfo() {
      return ("\Player: "+this.name+ "\nBelongs to Team: "+this.team+"\nAge: "+this.age);
    }

    //Static method
    static getGoals(goal){
       return goal.goals;
    }
}

  let player1 = new Footballer("Paul Pogba","Manchester United",27,160);
  console.log("\n");
  console.log(player1.getInfo());
  console.log("\n\n");
  console.log("Goals Scored by "+player1.name+" : "+Footballer.getGoals(player1));
  console.log("\n");