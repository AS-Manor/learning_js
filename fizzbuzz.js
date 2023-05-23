for(i=1; i<21; i++){
    if( i % 3===0) {
    console.log('fizz');
    }
    else if( i % 5===0) {
    console.log('buzz');
    }
    else if( i % 3===0 && i % 5) {
    console.log('fizzbuzz');
    }
    else {
      console.log(i);
    }
  }