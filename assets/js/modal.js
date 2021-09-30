let scrollPosition;
// モーダルウィンドウを開く
[].forEach.call(document.getElementsByTagName('a'), function(el) {
  el.addEventListener('click', function() {
    console.log('Hello world!')
    let target = $(this).data("target");
  })
})


$(".js-modal-open").on("click", function () {
  let target = $(this).data("target");
  let modal = document.getElementById(target);
  if (target == "modal01") {
    scrollPosition = $(window).scrollTop();
  }
  $("body").addClass("fixed").css({ top: -scrollPosition });
  $(modal).fadeIn();
  return false;
});

// モーダルウィンドウを閉じる
$(".js-modal-close").on("click", function () {
  let target = $(this).data("target");
  let modal = document.getElementById(target);
  if (target == "modal01") {
    $("body").removeClass("fixed");
    window.scrollTo(0, scrollPosition);
  }
  $(modal).fadeOut();
  return false;
});
