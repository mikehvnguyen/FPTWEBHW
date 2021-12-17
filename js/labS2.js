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

Vietlot();