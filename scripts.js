var DateTime = luxon.DateTime;

const now = luxon.DateTime.now();
const start = luxon.DateTime.fromISO('2023-06-17T21:00');
const equator = luxon.DateTime.fromISO('2025-11-28T00:00');
const finish = luxon.DateTime.fromISO('2028-05-09T00:00');

const { days: hasBeen } = now.diff(start, 'days');
const { days: ilr } = finish.diff(start, 'days');
const { days: beforeEquator } = equator.diff(now, 'days');

const currentProgress = hasBeen / (ilr / 100);


const stay = document.getElementById('stay');
stay.innerHTML = Math.ceil(hasBeen);

const remain = document.getElementById('remain');
remain.innerHTML = Math.floor(ilr);

const progress = document.getElementById('number');
progress.innerHTML = `${currentProgress.toFixed(2)}%`;


const progressLine = document.getElementById('line');
line.style.width = `${currentProgress}%`;

const equatorT = document.getElementById('equator');
equatorT.innerHTML = Math.ceil(beforeEquator);
