function fibonacci(num) {
// your code here
	let n1 = 0;
	let n2 = 1;
	let sum;
	if(num === 1){
		return n1;
	}
	else if(num === 2){
		return n2;
	}
	else{
		for(let i=3; i<=num; i++){
			sum = n1+n2;
			n1 = n2;
			n2 = sum;
		}
		return n2;
	}
}

module.exports = fibonacci;
