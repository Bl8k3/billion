console.log("script loaded");
function billion() {
    var servant = 0.01;
    for (num = 1; num <= 30; num++) {
        servant = servant * 2;
      console.log(servant);
    }
      console.log("the reward will be", servant, "after thirty days");
}
billion();
