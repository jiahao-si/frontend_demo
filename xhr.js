var request = new XMLHttpRequest();
request.open("GET","www.baidu.com");
request.onreadystatechange = function(){
	if(request.readyState == 0){
		console.log(000000000);
	}else if(request.readyState == 1){
		console.log(1111111);
	}else if(request.readyState == 2){
		console.log(2222222);
	}else if(request.readyState == 3){
		console.log(3333333);
	}else if(request.readyState == 4 && request.status ==200){
		console.log(4444444);
		console.dir(request)
	}
}
request.send(null)

