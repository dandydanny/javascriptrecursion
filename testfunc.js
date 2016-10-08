function testfunc(count){
	var max = 10;
	var pollingInterval = 2000;
	console.log(Date.now() + ' Running verifyAdStatus (trying once every ' + (pollingInterval/1000) + ' seconds for up to ' + (pollingInterval/1000/60*max) + ' minutes)');
	console.log(".");
	if(count >= max){
		console.log('done');
	}else{
		++count;
		console.log('count: ' + count + ' max: ' + max);
		setTimeout(function() {
			console.log('not yet');
			console.log(Date.now);
			testfunc(count);
		},pollingInterval);
	}
}
