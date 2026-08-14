// Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.

// But he has only 24 hours left. Can he do it?

// Your Task:
// You will get an array as input with time durations as string in the following format: 
// HH:MM:SS. Each duration represents the time taken by Santa to deliver a present. 
// Determine whether he can do it in 24 hours or not. In case the time required to deliver 
// all of the presents is exactly 24 hours, Santa can complete the delivery ;-) .

function canSantaSaveChristmas(presents) {
  const totalSeconds = presents.reduce((sum, duration) => {
    const [h, m, s] = duration.split(':').map(Number);
    return sum + h * 3600 + m * 60 + s;
  }, 0);

  return totalSeconds <= 86400;
}
console.log(canSantaSaveChristmas(["10:00:00", "10:00:00", "04:00:00"])); 

