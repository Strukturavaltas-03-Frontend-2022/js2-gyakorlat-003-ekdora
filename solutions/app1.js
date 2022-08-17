/* - Mentsd el külön lastName, firstName és job változókba a fenti objektum 
property-jeit destructuring használatával!
- Ha valamelyik nincs megadva, akkor az érték legyen az "unknown" string! */

const user = {
  firstName: 'John',
  lastName: 'Doe',
};

const {
  firstName,
  lastName,
  job = "unknown",
} = user;

export {
  firstName,
  lastName,
  job,
};
