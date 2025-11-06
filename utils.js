function secondsToTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);

  // Se houver horas, mostra HH:MM:SS, senão apenas MM:SS
  if (hours > 0) {
    return `${("0" + hours).slice(-2)}:${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`;
  } else {
    return `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`;
  }
}


/*function secondsToMinutes(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`;
}
*/
const path = function (file) {
  return `files/${file}`;
};

export { path, secondsToMinutes };
