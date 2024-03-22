
const {Leaderboard} = require('@google-cloud/leaderboard');
const leaderboard = new Leaderboard();

async function callTopGames() {
  // List the top games in the leaderboard.
  const [topGames] = await leaderboard.topGames('global', 'leaderboard-address');
  console.log(topGames);
}

callTopGames();


