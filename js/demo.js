function TamGiac(){
    var x1,x2,x3;
    do{
        x1 = parseInt(prompt("Nhap canh thu nhat:"));
        console.log(x1);
        x2 = parseInt(prompt("Nhap canh thu hai:"));
        console.log(x2);
        x3 = parseInt(prompt("Nhap canh thu ba:"));
        console.log(x3);
    }while (isNaN(x1)|| isNaN(x2) || isNaN(x3) || x1<=0 || x2 <=0 || x3<=0 || !(x1+x2>x3 && x1+x3>x2 && x2+x3>x1));
    console.log("Chu vi:"+ ChuVi(x1,x2,x3));
    console.log("Dien Tich:"+DienTich(x1,x2,x3));
}
function ChuVi(a,b,c){
    return a+b+c;
}
function DienTich(a,b,c){
    var p = ChuVi(a,b,c)/2;
    return Math.sqrt(p*(p-a)*(p-b)*(p-c));
}

// Gia su: tạo 1 số nguyên ngẫu nhiên từ 0->100: parseInt(Math.random()*100)
// Cho người dùng nhập 1 số trong khoảng 0-100. Kiểm tra xem có trúng giải hay không và thông báo.
function Loto(){
    var  n;
    do{
        n= parseInt(prompt("Nhap so may man"));
        if(isNaN(n)|| n<0){
            alert("Nhap so khong chinh xac, vui long nhap lai");
        }
    }while (isNaN(n)|| n<0);
    var r = parseInt(Math.random()*100);
    if(r == n){
        alert("Chuc mung, ban da trung giai");
    }else {
        alert("Rat tiec, chuc ban may man lan sau.");
    }
}
// Loto();

// viết phần mềm tạo trò chơi vietlot, mỗi người chơi 1 lần quay giải đc mua 5 vé.
function TimKiem(arr,x) {
    for(var i=0;i<arr.length;i++){
        if(arr[i] == x) return true;
    }
    return false;
}
// so sánh 2 mảng có trùng bộ số hay ko
function SoSanh2Array(lk,vl){
    var count = 0;
    for(var i=0;i<lk.length;i++){
        if(TimKiem(vl,lk[i])){
            count++;
        }
    }
    if(count==lk.length) return true;
    return false;
}
function Vietlot() {
    // sinh ngẫu nhiên 1 bộ 6 số từ 0 - 45
    var lucky = [];
    do{
        var n = parseInt(Math.random()*46);
        if(!lucky.includes(n)){ // chỉ cho vào mảng khi chưa có số này
            lucky.push(n);
        }
    }while(lucky.length <6);
    // hàm includes: giống hàm TimKiem
    console.log(lucky);
    // nhập 5 mảng, mỗi mảng 6 số ko trùng nhau từ 0-45
    var vietlot = [];// sẽ là 1 mảng gồm 5 mảng con, mỗi mảng con 6 số nguyen từ  0 - 45
    for(var i=0;i<5;i++){
        vietlot[i] = [];
        do{
            var n = prompt("Nhap 1 so trong khoang 0-45:");
            n = parseInt(n);
            if(!TimKiem(vietlot[i],n)){
                vietlot[i].push(n);
            }
        }while (vietlot[i].length<6);
    }
    // So sanh từng bộ số đã mua
    var count = 0;
    for(var i=0;i<vietlot.length;i++){
        if(SoSanh2Array(lucky,vietlot[i])){
            alert("Chúc mừng bạn đã trúng 100 tỷ");
            count++;
            break;
        }
    }
    if(count == 0){
        alert("Chúc bạn may mắn vào kỳ quay kế tiếp");
    }

}

// Vietlot();
//alert("Xin chào các bạn");

// setTimeout(
//     function aas(){ //hàm vô danh -> viết và dùng 1 lần
//          alert("Xin chào các bạn");
//     }
// ,5000)

function SayHello(){
    // alert("Xin chào các bạn");
    console.log("hello");
}
//setTimeout(SayHello,5000); // SayHello gọi là hàm callback
// SayHello();
var i = 10;
var CountDown = ()=>{  // arrow function
    console.log(i);
    i--;
    if(i<0){
        clearInterval(si);
    }
}
// var si = setInterval(CountDown,1000);

// viết đồng hồ đếm ngược 10 phút, ví dụ: 10:00 09:59 09:58 ... 00:00
var m = 10, s=0;
var timer = setInterval(function (){
    var min = m<10?"0"+m:m; // toán tử 3 ngôi
    // var sec;
    // if(s<10){
    //     sec = "0"+s;
    // }else{
    //     sec= s;
    // }
    var sec = s<10?"0"+s:s;
    console.log(min+":"+sec);
    s--;
    if(s<0){
        s = 59;
        m--;
    }
    if(m<0){
        clearInterval(timer);
    }

},10);
// Trò chơi Chẵn lẻ
/*
    Mỗi người chơi sẽ có 10 lượt chơi
    Mỗi lượt chơi người chơi sẽ chọn 1 số may mắn từ 0-1, mỗi lần trả lời cách nhau 10s
    Nếu đoán trúng (số trúng giải ngẫu nhiên trong mỗi lần) thì sẽ ngẫu nhiên được 1 trong các giải thưởng sau:
    1: Thẻ nạp điện thoại 10.000 (tỉ lệ rớt 50%)
    2: Thẻ nạp điện thoại 50.000 (35%)
    3. Sạc dự phòng     (10%)
    4. Điện thoại Iphone 13 Pro (4%)
    5. Ô tô Vinfast SA (1%)
 */
function ChanLe(){
    // var pt = [
    //     "Thẻ nạp điện thoại 10.000đ",
    //     "Thẻ nạp điện thoại 50.000đ",
    //     "Sạc dự phòng",
    //     "Điện thoại Iphone 13 Pro",
    //     "Ô tô Vinfast SA"
    // ];
    var pt = [];
    for(var i=0;i<5000;i++){
        pt.push("Thẻ nạp điện thoại 10.000đ");
    }
    for(var i=0;i<800;i++){
        pt.push("Thẻ nạp điện thoại 50.000đ");
    }
    for(var i=0;i<50;i++){
        pt.push("Sạc dự phòng");
    }
    for(var i=0;i<10;i++){
        pt.push("Điện thoại Iphone 13 Pro");
    }
    pt.push("Ô tô Vinfast SA");
    // nghiên cứu thuật toán trộn lẫn array  (sort() )
    // nghiên cứu việc loại bỏ phần tử khi đã nhận giải rồi
    var count = 10;
    var rw = setInterval(function (){
        var lucky = parseInt(Math.random()*2);
        var n;
        do{
            n = prompt("Bạn chọn chẵn hay lẻ (Chẵn: 0, Lẻ: 1)");
            n = parseInt(n);
            if(n<0 || n>1 || isNaN(n)){
                alert("Vui lòng chọn đúng theo trò chơi");
            }
        }while (n<0 || n>1 || isNaN(n));

        if(lucky== n){
            var gt = parseInt(Math.random()* pt.length);
            alert("Chúc mừng, bạn đã trúng thưởng "+pt[gt]);
        }else{
            alert("Rất tiếc, chúc may mắn lần sau");
        }
        count--;
        if(count <=0){
            clearInterval(rw);
        }
    },10000);// milisecond
}
ChanLe();