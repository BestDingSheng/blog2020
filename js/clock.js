var clock = new Vue({
  el: '#clock',
  data: {
    time: '',
    date: '',
    daylight: '',
  },
});

var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
var timerID = setInterval(updateTime, 1000);
updateTime();
function updateTime() {
  var cd = new Date();
  clock.time =
    zeroPadding(cd.getHours(), 2) +
    ':' +
    zeroPadding(cd.getMinutes(), 2) +
    ':' +
    zeroPadding(cd.getSeconds(), 2);
  clock.date =
    zeroPadding(cd.getFullYear(), 4) +
    '-' +
    zeroPadding(cd.getMonth() + 1, 2) +
    '-' +
    zeroPadding(cd.getDate(), 2) +
    ' ' +
    week[cd.getDay()];
  var hamorpm = cd.getHours();
  var str;
  if (hamorpm > 12) {
    hamorpm -= 12;
    str = ' PM';
  } else {
    str = ' AM';
  }
  clock.daylight = str;
}

function zeroPadding(num, digit) {
  var zero = '';
  for (var i = 0; i < digit; i++) {
    zero += '0';
  }
  return (zero + num).slice(-digit);
}
