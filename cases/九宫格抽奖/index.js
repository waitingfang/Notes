let flag = false;
$(".btn").click(function(){
    if(flag){
        return;
    };
    flag = true;
    let num = parseInt(Math.random()*8+1);
    start(num);
    $(".cover").css("display","none");
   
})
function start(num){
    let n = 0;
    const loop = 1; // 转的圈数
    let speed = 300; //跳动的间隔
    const roundNum = loop * 8; //跳动的总数
    const arr = [0, 1, 2, 4, 7, 6, 5, 3]; //跳动的顺序
    const timer = setTimeout(turn,speed);
    function turn(){
        let index = arr[n++%8];
        $("li").removeClass("active").eq(index).addClass("active");
        if(n < roundNum){
            const timer = setTimeout(turn, speed);
        }else if(n >= roundNum && n < roundNum+num){
            speed += 50;
            const timer = setTimeout(turn, speed);
        }else{
            bounce(num);
        }; 
    }
    function bounce(num) {
        let str = "";
        switch(num){
            case 1:
                str = "1";
                break;
            case 2:
                str = "2";
                break;
            case 3:
                str = "3";
                break;
            case 4:
                str = "5";
                break;
            case 5:
                str = "8";
                break;
            case 6:
                str = "7";
                break;
            case 7:
                str = "6";
                break;
            case 8:
                str = "4";
                break;
        }
        $(".cover").html(str).css("display","block");
        flag = false;
    }
}