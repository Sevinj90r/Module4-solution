var names=new Array();
names[0]="Yaakov";
names[1]="Ben";
names[2]="Jasmine";
names[3]="jack";
names[4]="paul";
names[5]="frank";
names[6]="lala";
names[7]="paul";
names[8]="laura";
names[9]="jim";




for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}