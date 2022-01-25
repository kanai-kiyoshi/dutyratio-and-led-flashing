// duty ratio
const duty=document.getElementById('duty');
let dutyValue=duty.getElementsByClassName('value')[0];
let dutyInput=duty.getElementsByTagName('input')[0];
let D=dutyInput.value/100;
dutyValue.innerText=D;
let T=1000;
let t=T*D;
dutyInput.onchange=function(){
	D=this.value/100;
	dutyValue.innerText=D;
	t=T*D;
};

setInterval(funk,10);
let test='a';
let time0=new Date(), time1=new Date();
let value=0;
function funk(){
	time1=new Date();
	if(test==='a'){
		if(time1-time0>t){
			time0=time1;
			value=0;
			test='b';
		}
	}
	else if(test==='b'){
		if(time1-time0>T-t){
			time0=time1;
			value=5;
			test='a';
		}
	}

	let brightness, color;
	if(value===5){
		brightness='high';
		color='#f00';
	}
	else if(value===0){
		brightness='low';
		color='#000';
	}

	document.getElementById('led').style.backgroundColor=color;

};
