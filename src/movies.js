// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(element => element.director);

  }

  //Solution Bonus - Iteration 1.1: 
  // function getAllDirectors(moviesArray) {
  //   const newArr = moviesArray.map(element => {
  //     let director = element.director;
  //     return director;
  //   });
  //   let newArray = [];
  //   newArr.forEach(el => {
  //     if (!newArray.includes(el)) {
  //       newArray.push(el);
  //     }
  //   });
    
  //   return newArray;
  
  //   }
  
  console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray === []) {
    return 0;
  };
  
  let movieCount = 0;
  
  const movieSS = moviesArray.filter(element => {
    if (element.director === 'Steven Spielberg') {
      movieCount++;
    } 
  });
  return movieCount;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let avgScore = moviesArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.score / moviesArray.length
  }, 0);

  return Math.round(avgScore * 100) / 100;
  
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let sortedByYear = [...moviesArray].sort((a, b) => {
    if (a.year > b. year) {
      return 1
    } else if (a.year < b.year) {
      return -1
    } else  {
      return 0
    } 
  })
    return sortedByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
