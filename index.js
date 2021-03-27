
// BAI 1:
// function findOppositeNumber(n,inputNumber){
//     if(n>0 && n%2==0){
//         if (n<20 && n>4){
//         if(inputNumber>=0 && inputNumber<=(n-1)){
//             if(inputNumber < n/2){
//                 inputNumber = inputNumber + n/2;
//                 console.log(inputNumber);
//             }else if(inputNumber >= n/2){
//                 inputNumber = inputNumber - n/2;
//                 console.log(inputNumber);
//             }
//         }else(console.log("SO BAN NHAP NAM NGOAI KHOANG 0-(n-1)!!!"))

//     }else {console.log("SO BAN NHAP NAM NGOAI KHOANG 4-20!!!")}

// }else {console.log("SO BAN NHAP KO PHAI SO NGUYEN DUONG!!!")}
// }
// findOppositeNumber(6,0);
// findOppositeNumber(10,3);

//BAI 2:

// function merge2string(str1,str2) {
//     let array1 = str1.split("");
//     let array2 = str2.split("");
//     let array3 = [];
//         if(array1.length >= array2.length){
//             for(let i = 0; i < array1.length; i++){
//                 array3.push(array1[i],array2[i])
//             }
//             console.log(array3.join(""));
//         }
//         if(array1.length < array2.length){
//             for(let i = 0; i < array2.length; i++){
//                 array3.push(array1[i],array2[i])
//             }
//             console.log(array3.join(""));
//         }

// }

// merge2string("abc","123");
// merge2string("abc","0123");
// merge2string("abcd","123");

// BAI 3:
let count = 0;
    function soSanh(){
        let val = document.getElementById("value").value;
        let randomNumber;
        randomNumber = Math.floor(Math.random() * 10);
        if(val == ""){
            alert("Hãy Nhập số bạn dự đoán!!!")
        }
        if(count < 3){
            if(val > 1 && val < 10){
                if(val == randomNumber){
                    alert("Bạn đã trúng thưởng");
                }   else{
                    alert("Chúc bạn may măn lần sau :)")
                }
                count ++;
            } else if(val >=1 || val >=10){
                alert("Số bạn dự đoán nằm ngoài khoảng từ 1- 10!!!")
                }
        }   

    }