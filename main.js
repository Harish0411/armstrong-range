let lowNumber = Number(prompt("low value"));
let highNumber = Number(prompt("high value"));

for(i=lowNumber; i<=highNumber; i++){
      temp = i;
	  let j=0;
	  while(temp>0){
	      temp = parseInt(temp/10);
		  j++;
	  }
      let numOfDigit = j;
	  temp2 = i;
	  sums = 0;
	  while(temp2 > 0){
	     remainder = temp2%10;
		 temp2 = parseInt(temp2/10);
		 sums+=remainder**numOfDigit;
	}
	if(sums == i){
	   console.log(i);
	}
}