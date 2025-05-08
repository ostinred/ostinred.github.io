var DateTime = luxon.DateTime;

const now = luxon.DateTime.now();
const start = luxon.DateTime.fromISO('2023-06-17T21:00');
const equator = luxon.DateTime.fromISO('2026-06-19T00:00');
const finish = luxon.DateTime.fromISO('2025-06-19T00:00');

const { days: needToBe } = finish.diff(now, 'days');
const { days: hasBeen } = now.diff(start, 'days');


const { days: commitment } = finish.diff(start, 'days');
const { days: beforeEquator } = equator.diff(now, 'days');

const currentProgress = hasBeen / (commitment / 100);

const stay = document.getElementById('stay');
stay.innerHTML = Math.ceil(hasBeen);

const remain = document.getElementById('remain');
remain.innerHTML = Math.floor(needToBe);

const progress = document.getElementById('number');
progress.innerHTML = `${currentProgress.toFixed(2)}%`;

// const equatorT = document.getElementById('equator');
// equatorT.innerHTML = Math.ceil(beforeEquator);

const progressLine = document.getElementById('line');
line.style.width = `${currentProgress}%`;

const startDate = document.getElementById('start');
startDate.innerHTML = Math.floor(commitment);
