const arrayUtils = require("./arrayUtils");
const stringUtils = require("./stringUtils");
const objUtils = require("./objUtils");


// Mean Tests
try {
   // Should Pass
   const meanOne = arrayUtils.mean([13, 9, 25, 17, 18, 22]);
   console.log(meanOne);
   console.log('mean passed successfully');
} catch (e) {
   console.error('mean failed test case');
}
try {
   // Should Fail
   const meanTwo = arrayUtils.mean();
   console.log(meanTwo);
   console.error('mean did not error');
} catch (e) {
   console.log('mean failed successfully');
}
//Median Tests
try {
   // Should Pass
  const medianOne = arrayUtils.MEDIAN([1, 5, 4]);
   console.log(medianOne);
   console.log('median passed successfully');
} catch (e) {
   console.error('median failed test case');
}
try {
   // Should Fail
   const medianTwo = arrayUtils.MEDIAN(1234);
   console.error('median did not error');
} catch (e) {
   console.log('median failed successfully');
}
// Max Element 

try {
   // Should Pass
   const maxElementOne = arrayUtils.maxElement([45, 55, 65]);
   console.log('maxElement passed successfully');
   console.log(maxElementOne);
} catch (e) {
   console.error('maxElement failed test case');
}
try {
   // Should Fail
   const maxElementTwo = arrayUtils.maxElement(1234);
   console.error('maxElement did not error');

} catch (e) {
   console.log('maxElement failed successfully');
}

//countRepeating

try {
   // Should Pass
   const countRepeatingOne = arrayUtils.countRepeating(['pencil', 'book','pencil', 1, 1, 'ab','ab']);
   console.log('countRepeating passed successfully');
} catch (e) {
   console.error('coountRepeating failed test case');
}
try {
   // Should Fail
   const countRepeatingTwo = arrayUtils.countRepeating(1234);
   console.error('countRepeating did not error');
} catch (e) {
   console.log('countRepeating failed successfully');
}
//fill
try {
    // Should Pass
    const fillOne = arrayUtils.fill(6,'welcome');
    console.log(fillOne)
    console.log('fill passed successfully');
 } catch (e) {
    console.error('fill failed test case');
 }
 try {
    // Should Fail
    const fillTwo = arrayUtils.fill(1234);
    console.error('fill did not error');
 } catch (e) {
    console.log('fill failed successfully');
 }
 //isEqual
 try {
    // Should Pass
    const isEqualOne = arrayUtils.isEqual(['a', 'b', 'c'],['b','a','c']);
    console.log('isEqual passed successfully');
 } catch (e) {
    console.error('isEqual failed test case');
 }
 try {
    // Should Fail
    const isEqualTwo = arrayUtils.isEqual(1234);
    console.error('isEqual did not error');
 } catch (e) {
    console.log('isEqual failed successfully');
 }
 //camelcase
 try {
    // Should Pass
    const camelcaseOne = stringUtils.Camelcase("Add two variables");
    console.log('camelcase passed successfully');
 } catch (e) {
    console.error('camelcase failed test case');
 }
 try {
    // Should Fail
    const camelcaseTwo = stringUtils.Camelcase(1234);
    console.error('camelcase did not error');
 } catch (e) {
    console.log('camelcase failed successfully');
 }
 //replacechar
 try {
    // Should Pass
    const replaceCharOne = stringUtils.replaceChar("Tettjktttt");
    console.log('replaceChar passed successfully');
 } catch (e) {
    console.error('replaceChar failed test case');
 }
 try {
    // Should Fail
    const replaceCharTwo = stringUtils.replaceChar(1234);
    console.error('replaceChar did not error');
 } catch (e) {
    console.log('replaceChar failed successfully');
 }
 //Mashup
 try {
    // Should Pass
    const MashupOne =stringUtils.Mashup('Daddy','teddy');
    console.log('Mashup passed successfully');
 } catch (e) {
    console.error('Mashup failed test case');
 }
 try {
    // Should Fail
    const MashupTwo = stringUtils.Mashup(1234);
    console.error('Mashup did not error');
 } catch (e) {
    console.log('Mashup failed successfully');
 }
 //DeepEqual
 try {
    // Should Pass
    const DeepEqualOne = objUtils.DeepEqual({
        name:'hela',
        age: 5000
       }, 
       {
        name:'hela', 
        age: 5000
       });
    console.log('DeepEqual passed successfully');
 } catch (e) {
    console.error('DeepEqual failed test case');
 }
 try {
    // Should Fail
    const DeepEqualTwo = objUtils.DeepEqual(1234);
    console.error('DeepEqual did not error');
 } catch (e) {
    console.log('DeepEqual failed successfully');
 }


 //computeObject
 try {
    // Should Pass
    const computeObjectOne = objUtils.computeObject({ a: 3, b: 7, c: 5 }, n => n / 2);
    console.log(computeObjectOne);
    console.log('computeObject passed successfully');
 } catch (e) {
    console.error('computeObject failed test case');
 }
 try {
    // Should Fail
    const computeObjectTwo = objUtils.computeObject();
    console.error('computeObject did not error');
 } catch (e) {
    console.log('computeObject failed successfully');
 }
 //makearrayss
 try {
   // Should Pass
   const first = { x: 2, y: 3};
   const second = { a: 70, x: 4, z: 5 };
   const third = { x: 0, y: 9, q: 10 };
   const makeArraysOne = objUtils.makeArrays([first, second, third]);
   
   console.log('makeArrays passed successfully');
} catch (e) {
   console.error('makeArrays failed test case');
}
try {
   // Should Fail
   const makeArraysTwo = objUtils.makeArrays();
   console.error('makeArrays did not error');
} catch (e) {
   console.log('makeArrays failed successfully');
}