// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
//
// For example: ["3:1", "2:2", "0:1", ...]
//
// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
//
// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point
// Notes:
//
// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
  if (Array.isArray(games) && games.length < 1) {
    return 0;
  }

  let total = 0;

  for (let i = 0; i < games.length; i++) {
    const currentGame = games[i].split(":");
    const x = Number(currentGame[0]);
    const y = Number(currentGame[1]);

    if (x > y) {
      total += 3;
    } else if (x === y) {
      total += 1;
    } else {
      continue;
    }
  }

  return total;
}
