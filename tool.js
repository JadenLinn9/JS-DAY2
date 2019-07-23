
function checkTWID(id) {
    let ret = false;
    let regax = /^[A-Z][12][0-9]{8}$/;  //正規表示法,出現8次,$為結尾
    let letters = 'ABCDEFGHJKLMNPQRSTUVXYWZIO'
    if (id.match(regax) != null){
        let c1 = id.charAt(0);
        let n12 = letters.indexOf(c1) + 10;
        let n1 = parseInt(n12 / 10);
        let n2 = n12 % 10;
        let n3 = parseInt(id.substr(1,1));
        let n4 = parseInt(id.substr(2,1));
        let n5 = parseInt(id.substr(3,1));
        let n6 = parseInt(id.substr(4,1));
        let n7 = parseInt(id.substr(5,1));
        let n8 = parseInt(id.substr(6,1));
        let n9 = parseInt(id.substr(7,1));
        let n10 = parseInt(id.substr(8,1));
        let n11 = parseInt(id.substr(9,1));

        let sum = n1*1 + n2*9 + n3*8 + n4*7 + n5*6 + n6*5 + n7*4 + n8*3 + n9*2 + n10*1 + n11*1;
        ret = sum % 10 == 0;
    }
    
    return ret;
}

function phoneCheck(phone){
    let ret1 = false;
    let regax1 = /^09[0-9]{8}$/;
    if (phone.match(regax1) != null) {
        ret1 = true;
    }

    return ret1;
}

<input type="button" value="Create!!" onclick = "createTWID()">

<select>
    <option value="台北市" id="10">台北市</option>
    <option value="台北市" id="11">台北縣</option>
</select>
    <input type="button" value="Create!!" onclick="createTWIDByArea()">

    <input type="button" value="Create!!" onclick="createTWIDByGender()"></input>