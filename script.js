//your JS code here. If required.
let arr=[1,2,3,4];
function prom1(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			let ans=arr.filter((el)=>{
				return el%2==0;
			})
			resolve(ans);
		},1000)
	})
}	
function prom2(arr){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			let ans=arr.map((el)=>{
					return el*2;
			})
			resolve(ans);
		},2000)
	})
}
prom1().then((data)=>{
	document.querySelector("#output").textContent=data;
	return prom2(data);
}).then((el)=>{
	document.querySelector("#output").textContent=el;
}).catch((err)=>{
	console.log("err",err)
})
				 			 

