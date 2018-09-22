const mdb = require('moviedb')('a9d0c86f5b26f5948534ba1f7be597a2');
mdb.searchMovie({ query: 'Alien' }, (err, res) => {
    console.log(res);
  });

  console.log('hi');