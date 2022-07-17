const team = {
  _players: [
    { firstName: "Steve", lastName: "Pok", age: 23 },
    { firstName: "Roger", lastName: "Bishop", age: 25 },
    { firstName: "Katrina", lastName: "Alvarez", age: 24 },
  ],
  _games: [
    { opponent: "Neznaju", teamPoints: 10, opponentPoints: 15 },
    { opponent: "Vozmozhni", teamPoints: 4, opponentPoints: 1 },
    { opponent: "Aldriges", teamPoints: 6, opponentPoints: 6 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newfirstName, newlastName, newage) {
    let player = {
      firstName: newfirstName,
      lastName: newlastName,
      age: newage,
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this.games.push(game);
  },
};
team.addPlayer("Bugs", "Bunny", 76);
team.addGame("Titans", 100, 98);
console.log(team.games);
