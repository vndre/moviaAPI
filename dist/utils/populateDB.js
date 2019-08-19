"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.populateDB = void 0;

var _signale = require("signale");

var _models = require("/home/ansky/Workspace/moviaAPI/src/api/models");

const movies = [{
  _id: 'OSNF2GwPJS',
  title: 'Beverly Hills Cop',
  year: '1984',
  rating: 4.5,
  actors: ['sbVr3odK-P']
}, {
  _id: 'BLCTBHF4wO',
  title: 'La Dolce Vita',
  year: '1961',
  rating: 4.2,
  actors: ['vur9twW72q', 'WA1fQP8Ne9']
}, {
  _id: 'nmxzTlB0zL',
  title: 'The Hobbit: The Battle of the Five Armies',
  year: '2014',
  rating: 4.6,
  actors: ['PtyYPl-33a', 'vcU8IXw32g']
}, {
  _id: 'cYlBJIkhex',
  title: 'Return of the Jedi',
  year: '1983',
  rating: 4.7,
  actors: ['isNEXHro9n', 'BzSM__Txms']
}, {
  _id: 'LFXLNx9vjm',
  title: 'Mission: Impossible III',
  year: '2004',
  rating: 3.9,
  actors: ['c9qIN16Kkw', 'tXurhmrhw2']
}];
const actors = [{
  _id: 'sbVr3odK-P',
  name: 'Eddie Murphy',
  birthday: '3 April',
  country: 'USA',
  directors: ['Vt_o1JvQle']
}, {
  _id: 'vur9twW72q',
  name: 'Marcello Mastroianni',
  birthday: '19 December',
  country: 'Italy',
  directors: ['jrDA86b5MM']
}, {
  _id: 'WA1fQP8Ne9',
  name: 'Anita Ekberg',
  birthday: '29 September',
  country: 'Sweden',
  directors: ['jrDA86b5MM']
}, {
  _id: 'PtyYPl-33a',
  name: 'Martin Freeman',
  birthday: '8 September',
  country: 'England',
  directors: ['UQvus2Brw0']
}, {
  _id: 'vcU8IXw32g',
  name: 'Ian McKellen',
  birthday: '25 May',
  country: 'England',
  directors: ['UQvus2Brw0']
}, {
  _id: 'isNEXHro9n',
  name: 'Mark Hamill',
  birthday: '25 September',
  country: 'USA',
  directors: ['jxpP8u1X1m']
}, {
  _id: 'BzSM__Txms',
  name: 'Harrison Ford',
  birthday: '13 July',
  country: 'USA',
  directors: ['jxpP8u1X1m']
}, {
  _id: 'c9qIN16Kkw',
  name: 'Tom Cruise',
  birthday: '3 July',
  country: 'USA',
  directors: ['aGbjSvlxaf']
}, {
  _id: 'tXurhmrhw2',
  name: 'Billy Crudup',
  birthday: '8 July',
  country: 'China',
  directors: ['aGbjSvlxaf']
}];
const directors = [{
  _id: 'Vt_o1JvQle',
  name: 'Martin Brest',
  birthday: '8 August',
  country: 'USA'
}, {
  _id: 'UQvus2Brw0',
  name: 'Jeffrey Abrams',
  birthday: '21 June',
  country: 'USA'
}, {
  _id: 'jxpP8u1X1m',
  name: 'Richard Marquand',
  birthday: '4 September',
  country: 'England'
}, {
  _id: 'aGbjSvlxaf',
  name: 'Peter Jackson',
  birthday: '31 October',
  country: 'New Zealand'
}, {
  _id: 'jrDA86b5MM',
  name: 'Federico Fellini',
  birthday: '31 October',
  country: 'Italy'
}];

const populateDB = async () => {
  await _models.Director.create(directors);
  (0, _signale.success)('added directors to db.');
  await _models.Movie.create(movies);
  (0, _signale.success)('added movies to db.');
  await _models.Actor.create(actors);
  (0, _signale.success)('added actors to db.');
};

exports.populateDB = populateDB;