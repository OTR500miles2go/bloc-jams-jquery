class Helper {
  
  playPauseAndUpdate(song){
    player.playPause(song); 
    const currentTime = player.getTime();
    const duration = player.getDuration();
    const totalTime = (duration - currentTime).toFixed(2);
    $('#time-control .total-time').text(player.prettyTime(totalTime));
  }
}

const helper = new Helper();


