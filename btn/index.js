function Side__Init() {
    $('.btn-toggle-mobile-side-bar').click(function () {
        $('.mobile-side-bar > .content > .menu-box-1 ul > li.active').removeClass('active');
        $('html').addClass('mobile-side-bar-active');
    });
    $('.mobile-side-bar .content > .logo-box-1 > .btn-close').click(function () {
        $('html').removeClass('mobile-side-bar-active');
    });
    $('.mobile-side-bar > .content').click(function (e) {
        e.stopPropagation(); //프로파게이션 명령을 전달하지말라는뜻(전파)
    });
    $('.mobile-side-bar > .content > .menu-box-1 ul > li').click(function (e) {
        var $this = $(this);
        var hasClass = $this.hasClass('active');

        if (hasClass) {
            $this.removeClass('active');
        } else {
            $this.siblings('.active').find('li.active').removeClass('active');
            $this.siblings('.active').removeClass('active');
            $this.addClass('active');
        }
        e.stopPropagation();
    });
}
Side__Init();

//슬라이드 시작//

function SliderBox1__init() {
    $('.slider-box-1 > .side-btns > *').click(function () {
        var $this = $(this);
        var $slider = $this.parent().parent();
        var $current = $slider.find('> .slides > .active ');
        var $post = $current.next();

        if ($post.length == 0) {
            $post = $slider.find('> .slides > :first-child');
        }
        $current.removeClass('active');
        $post.addClass('active');

        var index = $post.index();

        $slider.find('.page-btns > *.active').removeClass('active');
        $slider.find('.page-btns > *').eq(index).addClass('active');
    });
    //페이지 버튼에 이밴트 걸기 시작//
    $('.slider-box-1 > .page-btns > *').click(function () {
        var $this = $(this);
        $this.siblings('.active').removeClass('active');
        $this.addClass('active');

        var ndex = $this.index();
        var $slider = $this.closest('.slider-box-1');

        $slider.find('> .slides > .active').removeClass('active');
        $slider.find('> /slides > div').addClass('active');
    });
    // 자동 슬라이드//
    setInterval(function () {
        $('.slider-box-1 > .side-btns >:last-child').click();
    }, 3000);
}
SliderBox1__init();
//슬라이드 끝//