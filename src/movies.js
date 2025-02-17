// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(element => element.director).filter((el, index) => {
    return moviesArray.indexOf(el) !== index;
  });

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
    if (element.director === 'Steven Spielberg' && element.genre.includes('Drama')) {
      movieCount++;
    } 
  });
  return movieCount;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let avgScore = moviesArray.reduce((accumulator, currentValue) => {
    if (!currentValue.score) {
      return accumulator
    } else {
    return accumulator + currentValue.score / moviesArray.length
  }}, 0);


  return Math.round(avgScore * 100) / 100;
  
}

/*  if (!currentValue.score) {
      return accumulator
    }
    - if we do not have a score, we return accumulator (the number that we got before or from previos loop) */

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let moviesDrama = moviesArray.filter(element => {
    return element.genre.includes('Drama');
  });

  let avgScoreDrama = moviesDrama.reduce((acc, cV) => {
    return acc + cV.score / moviesDrama.length
  }, 0);


  return Math.round(avgScoreDrama * 100) / 100;
}
 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let sortedByYear = [...moviesArray].sort((a, b) => {
    if (a.year > b. year) {
      return 1
    } else if (a.year < b.year) {
      return -1
    } else  {
      if (a.title > b.title) {
        return 1
      } else if (a.title < b.title) {
        return -1
      } 
      return 0
    } 
  })

    return sortedByYear
}

/* Inside the condition else statement we put another if condition where we set condition for alphabetical order by their titles, and we compare titles.      */ 

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  if (moviesArray.length <= 20) {
    return moviesArray;
  } else if (moviesArray.length > 20) {
    
  }


  let movieTitle = moviesArray.map(element => element.title);
  
  let movieTitleAlph = [...movieTitle].sort((a, b) => {
    if (a > b) {
      return 1
    } else if (a < b) {
      return -1
    } else {
      return 0
    }
  })
return movieTitleAlph;



}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
