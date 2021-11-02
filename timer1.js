const args = process.argv.slice(2);

args.sort();


for (let arg of args) {
  arg = parseInt(arg)
  if (!Number.isInteger(arg)) {
    break
  };
  if (arg < 1) {
    continue
  };
  setTimeout(() => {
    process.stdout.write('\x07');
  }, arg);
};

