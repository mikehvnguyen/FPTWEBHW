/*function TamGiac(){
    var a,b,c;
    do{
        a=parseInt(prompt("Nhap Canh A"));
        console.log(a);
        b=parseInt(prompt("Nhap Canh B"));
        console.log(b);
        c=parseInt(prompt("Nhap Canh C"));
        console.log(c);
    }while(isNaN(a) || isNaN(b) || isNaN(c) ||a<=0||b<=0||c<=0|| !(a+b>c && b+c>a && a+c>b));
    console.log("chu vi"+ChuVi(a,b,c));
    console.log("dien tich"+DienTich(a,b,c));
}

function ChuVi(a,b,c){
    return a+b+c;
}

function DienTich(a,b,c){
    var p= ChuVi(a,b,c)/2;
    return Math.sqrt(p*(p-a)*(p-b)*(p-c));
}

var n;
do {
    n = parseInt(prompt("Nhap so nguyen n:"));
}while(n>100 && n<0);
if(n == parseInt(Math.random()*100)){
    console.log("ban da trung thuong");
}else {
    console.log("ban da tach");
}

function Loto(){
    var n;
    do{
        n=parseInt(prompt("Nhap so:"))
    }while(isNaN(n)||n<0);
    var r = parseInt(Math.random()*100);
    if(r==n){
        alert("Chuc mung, ban da trung giai");
    }else{
        alert("Chuc may man lan sau");
    }
}

Loto();*/


var n;
var InputNo=new Array();
do{
    n = parseInt(prompt("Nhap so nguyen n:"));
    InputNo.push(n);
    alert(InputNo.length);
}while(n<45 && n>0 && InputNo.length<6);
alert("du 6");
alert(InputNo);

var RandomNo=new Array();
do{
    var r = parseInt(Math.random()*45);
    RandomNo.push(r);
}while(RandomNo.length<6);
    alert(RandomNo);

var i,j;
var count=0;
for (i==0;i<InputNo.length;i++){
    for(j==0;j<RandomNo.length; j++) {
        if(InputNo[i] == RandomNo[j]){
            count++;
        }
    }
}
alert("InputNo: " + InputNo + "\nRandomNo: " + RandomNo + "\nCount: " + count);

if (count == 6) {
    alert("Jackpot");
} else if (count== 5) {
    alert("1st");
} else if (count ==4){
    alert("2nd");
} else if (count ==3){
    alert("3rd");
} else{
    alert("Gud Luck!");
}

