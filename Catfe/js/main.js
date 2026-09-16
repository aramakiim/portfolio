$(function () {
    $(".g-head__menu").click(function () {
        const $btn = $(this);
        const $nav = $(".g-nav");
        const $overlay = $(".overlay");  // オーバーレイ要素を取得

        $btn.toggleClass('active');
        $overlay.toggleClass('active');  // オーバーレイの表示/非表示

        if ($btn.hasClass('active')) {
            $nav.addClass("panelactive");  /* panelactiveクラスを付けると表示される */
        } else {
            $nav.removeClass("panelactive");  /* panelactiveクラスを外すと透明 */
        }
    });

    $(".g-nav a").click(function () {
        $(".g-head__menu").removeClass("active");
        $(".g-nav").removeClass("panelactive");
        $(".overlay").removeClass("active");  // メニューリンクをクリックしたときにオーバーレイを非表示
    });

    // スライダー設定
    $('.main_slider').slick({ 
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        dots: false,
        fade: true,
        lazyLoad: 'progressive',
    });
});

$(function () {
  // スクロールしたら「トップに戻る」ボタンが表示される
  const toTopButton = $(".pagetop");
  const scrollHeight = 100;
  toTopButton.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      toTopButton.fadeIn();
    } else {
      toTopButton.fadeOut();
    }
  });
});

// ここから下はトップへ戻るボタンをクリックした時の動きをなめらかにする、
// スムーススクロールのコードです。必要であれば合わせてどうぞ
$('a[href^="#"]').click(function(){
  var speed = 400;
  var href= $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $('body,html').animate({scrollTop:position}, speed, 'swing');
  return false;
});
