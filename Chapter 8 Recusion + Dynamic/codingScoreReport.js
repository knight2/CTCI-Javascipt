function codingScoreReportPercent(scores) {
   let totals = {"Poor": 0, "Fair": 0, "Good": 0, "Excellent": 0, "Elite": 0}
  for (let i = 0; i < scores.length; i++){
      let currScore = scores[i];
      if (currScore>= 300 &&  currScore <= 599){
            totals.Poor++;
      } else if (currScore >= 600 && currScore<= 699){
          totals.Fair++;
      } else if (currScore>=700 && currScore<= 749){
          totals.Good++;
      } else if (currScore >= 750 && currScore <= 799){
          totals.Excellent++;
      } else if (currScore>= 800){
          totals.Elite++;
      }
  }


console.log(totals);

}
let myscores = [330, 723, 730, 825];
codingScoreReportPercent(myscores);
