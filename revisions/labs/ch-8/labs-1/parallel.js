const print = (err, contents) => {
  if (err) console.error(err);
  else console.log(contents);
};

const opA = (cb) => {
  setTimeout(() => {
    cb(null, 'A');
  }, 500);
};

const opB = (cb) => {
  setTimeout(() => {
    cb(null, 'B');
  }, 250);
};

const opC = (cb) => {
  setTimeout(() => {
    cb(null, 'C');
  }, 125);
};

opA(print)
opB(print)
opC(print)
// opA((err1, data1) => {
//   opB((err2, data2) => {
//     opC((err3, data3) => {
//       print(err3, data3);
//       print(err2, data2);
//       print(err1, data1);
//     });
//   });
// });
