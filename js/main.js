

//// 로드 구역 /////////////////
window.addEventListener("DOMContentLoaded",
    function () {
        console.log("로딩완료!");


        ///////////////// 로딩 구역 전역변수 ///////////////////////////////
        // 슬라이드 개수
        var scnt = document.querySelectorAll("#slide li").length;
        console.log("슬라이드 개수 : " + scnt);
        // 슬라이드 순번
        var snum = 0; // 슬라이드 순번개수

        ////// 슬라이드 넘기기 함수(오른쪽 버튼 클릭시 슬라이드 왼쪽으로 이동하게) ///////////////////
        var goSlide = function () {

            console.log("슬라이드");
            // 변경대상 :#slide
            var tg = document.querySelector("#slide");

            tg.style.left = (-100 * snum) + "%";
            tg.style.transition = "left .6s ease-out"

        }; ///////////////// goSlide /////////////////////////

        document.querySelector(".next").addEventListener("click", function () {


            snum++;
            if (snum > scnt - 1) snum = 0;
            console.log("순번: " + snum);

            goSlide();
        }); /////////////// 클릭 함수 ///////////////////////////////


        /// 슬라이드 넘기기 함수 (왼쪽버튼 클릭 시 슬라이드 오른쪽으로 이동하게)
        document.querySelector(".prev").addEventListener("click", function () {
            snum--;
            if (snum < 0) snum = scnt - 1;

            goSlide();
        }); ///////////////// 클릭 함수 //////////////////////////
    
       


    });





//// jQB ////////////////////////////

//// 아티스트 영역이동 JQB
$(function () {
    
    var artprot = 0;

    $(".art_arrow.next").click(function (e) {
        e.preventDefault(); //기본이동막기
        
        /// 광클금지 //////////////////////
        if(artprot === 1) return false;//돌아가
        artprot = 1;//잠금!
        setTimeout(function(){
            artprot = 0;//해제
        },400);
        ///////////////////////////////
        
        
        // 4번째(3번째될 li)요소에 class="on"넣기
        $(".artist_list>li").eq(3).addClass("on")
        .siblings().removeClass("on");
        
        $(".artist_list")
            .animate({
                left: "-20%"
            }, 400, "easeOutQuad", function () {

                $(this)
                    .append($(".artist_list>li").first())
                    .css({
                        left: "0"
                    });

            }); //////// animate //////////////

    }); /////////// click //////////

    $(".art_arrow.prev").click(function (e) {
        e.preventDefault(); //기본이동막기
        
        /// 광클금지 //////////////////////
        if(artprot === 1) return false;//돌아가
        artprot = 1;//잠금!
        setTimeout(function(){
            artprot = 0;//해제
        },400);
        ///////////////////////////////
        
        
        // 4번째(3번째될 li)요소에 class="on"넣기
        $(".artist_list>li").eq(1).addClass("on")
        .siblings().removeClass("on");
        
        $(".artist_list")
                    .prepend($(".artist_list>li").last())
                    .css({
                        left: "-20%"
                    });

        
        $(".artist_list")
            .animate({
                left: "0%"
            }, 400, "easeOutQuad"); //////// animate //////////////

    }); /////////// click //////////

    $(".art_arrow.prev").click(function(){
        e.preventDefault();
    });////////////// click /////////////////////////////////////////
    
}); /////////// jQB ///////////////////
//////////////////////////////////////
//////////////////////////////////////

// gnb 메뉴 서브메뉴 나오게하기
  $(function(){
        $(".gnb>li").hover(function(){
            $(".smenu",this).slideDown(500);
            
        },
        function(){
            $(".smenu",this).stop().slideUp(100);
        });
    });/////////////////////////////gnb ///////////////

// 헤더아이콘 마우스 오버 시 색 바꾸기
    $(function(){
        $(".header_icon li").hover(function(){
            $(this).css({
                color:"red"
            })
        },function(){
            $(this).css({
                scale
            })
        });
        
    });////////////////////// JQB ////////////////////////////



//// 뮤직비디오 영역이동 JQB ///////////////////////////////////////
$(function () {
    
    var artprot = 0;

    $(".mv_arrow.next").click(function (e) {
        e.preventDefault(); //기본이동막기
        
        /// 광클금지 //////////////////////
        if(artprot === 1) return false;//돌아가
        artprot = 1;//잠금!
        setTimeout(function(){
            artprot = 0;//해제
        },400);
        ///////////////////////////////
        
        
        // 4번째(3번째될 li)요소에 class="on"넣기
//        $(".mv_list>li").eq(3).addClass("on")
//        .siblings().removeClass("on");
        
        $(".mv_list_1")
            .animate({
                left: "-20%"
            }, 400, "easeOutQuad", function () {

                $(this)
                    .append($(".mv_list_1>li").first())
                    .css({
                        left: "0"
                    });

            }); //////// animate //////////////

    }); /////////// click //////////

    $(".mv_arrow.prev").click(function (e) {
        e.preventDefault(); //기본이동막기
        
        /// 광클금지 //////////////////////
        if(artprot === 1) return false;//돌아가
        artprot = 1;//잠금!
        setTimeout(function(){
            artprot = 0;//해제
        },400);
        ///////////////////////////////
        
        
        // 4번째(3번째될 li)요소에 class="on"넣기
        /*$(".mv_list_1>li").eq(1).addClass("on")
        .siblings().removeClass("on");*/
        
        $(".mv_list_1")
                    .prepend($(".mv_list_1>li").last())
                    .css({
                        left: "-20%"
                    });

        
        $(".mv_list_1")
            .animate({
                left: "0%"
            }, 400, "easeOutQuad"); //////// animate //////////////

    }); /////////// click //////////

    $(".mv_arrow.prev").click(function(){
        e.preventDefault();
    });////////////// click /////////////////////////////////////////
    
}); /////////// jQB ///////////////////
//////////////////////////////////////
//////////////////////////////////////