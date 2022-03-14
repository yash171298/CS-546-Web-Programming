const express = require('express');
const router = express.Router();
const data = require('../data');
const checker = data.checker;

router.get('/', (req, res) => {
  res.render('checker/static', {});
});

// router.get('/server', (req, res) => {
//   res.render('checker/server', {});
// });

// router.put('/server', (req, res) => {
//   res.render('checker/server', {});
// });

// router.post('/server', (req, res) => {
//   let operation = (req.body.operation || 'fibonacci').toLowerCase();
//   let firstNumber = parseInt(req.body.number1);
//   let result;
//   let flag = false;
//   try {
//     switch (operation) {
//       case 'fibonacci':
//         result = checker.fibonacci(firstNumber);
//         let x = result;
       
//         if (x===1)
//         {
//           flag = false;
//         }
//         else if(x === 2)
//         {
//          flag = true;
//         }else
//         {
//           for(let i = 2; i < x; i++)
//           {
//             if(x % i === 0)
//             {
//               flag = false;
//             }
//           }
//           flag = true;
//         }
//         break;
//       case 'primeNumber':
//         result = checker.primeNumber(firstNumber);
//         break;
//       default:
//         throw 'Operation not supported';
//     }
//   } catch (e) {
//     res.render('checker/server', {
//       firstNumber: firstNumber,
//       operation: operation,
//       error: e
//     });
//     return;
//   }

//   res.render('checker/server', {
//     firstNumber: firstNumber,
//     operation: operation,
//     result: result,
//     isprime: flag
//   });
// });

module.exports = router;