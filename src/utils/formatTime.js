export const formatTime = (timeArg) => {
  if(!timeArg || typeof timeArg != 'number' || timeArg < 0){
    return null;
  } else {
    let seconds = Math.floor(timeArg % 60);
    let minutes = Math.floor((timeArg / 60) % 60);
    let hours = Math.floor(timeArg / 3600);

    if(seconds < 10){seconds = '0' + seconds;}
    if(minutes < 10){minutes = '0' + minutes;}
    if(hours < 10){hours = '0' + hours;}

    return hours + ':' + minutes  + ':' + seconds;
  }
};
