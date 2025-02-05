$(document).ready(function(){
    let isOpen = false; // กำหนดสถานะเริ่มต้น (ปิด)

    $(".valentine").click(function(){
        if (!isOpen) {
            $(".card").stop().animate({
                top: "-90px"
            }, "slow");
        } else {
            $(".card").stop().animate({
                top: "0px"
            }, "slow");
        }
        isOpen = !isOpen; // สลับสถานะ
    });
});
