let times = process.argv.slice(2);

for (let time of times) {
  if (time <= 0 || !Number.isInteger(parseInt(time))) {
    process.stdout.write('Invalid');
  } else {
    setTimeout(() => {
    process.stdout.write('\x07' + 'beep');
  }, time * 1000);
  }
}
