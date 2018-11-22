console.log('script start');
setTimeout(() => {
	console.log('timeout1')
}, 10);
new Promise((resolve) => {
	console.log('promise');
	resolve();
	setTimeout(() => {
		console.log('timeout2')
	}, 1);
})
console.log('script end');