for (let count = 1; count <= 100; count += 1) {
 //if remainder of count divided by 5 = 0 or if remainder of count divided by 3 = 0
    if (count % 5 === 0 || count % 3 === 0) {
        if (count % 5 === 0 && count % 3 === 0) {console.log('FizzBuzz')}
        else if (count % 3 === 0) {console.log('Fizz')}
        else {console.log('Buzz')}
     } else {
     console.log(count)}
    }