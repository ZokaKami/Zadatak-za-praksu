var jsonData, banner;

var index = 0;

function showNext() {
  const bannersize = $(window).width() < 1300 && $(window).width() > 680 ? 'bannerstablet' : 'banners'
  jsonData = $.getJSON("image.json", function(data) {
    banner = data[bannersize];
    if (index < banner.length - 1) {
      $('#banner').css('background-image', "url(" + banner[index + 1].url + ")");
      index++;

    }
    index == banner.length - 1 ? $("#dugme").css("opacity", "0.4") : $("#dugme2").css("opacity", "1")

  })
}


function showPrevious() {
  const bannersize = $(window).width() < 1300  && $(window).width() > 680 ? 'bannerstablet' : 'banners'
  jsonData = $.getJSON("image.json", function(data) {
    banner = data[bannersize];
    if (index > 0) {
      $('#banner').css('background-image', "url(" + banner[index - 1].url + ")");
      index--;
    }
    index == 0 ? $("#dugme2").css("opacity", "0.4") : $("#dugme").css("opacity", "1")
  })
}
