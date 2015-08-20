$(function () {
    /*banner轮播*/
    var index = 0,
    imgChange,
    changeTimer,
    $changeWrap = $('#img_change'),
    $imgList = $('#img_list'),
    $playWrap = $('#play_num'),
    imgLength = $('#img_list').find('li').size();
    
    $changeWrap.hover(function () {
        clearInterval(changeTimer);
    }, function () {
        changeTimer = setInterval(function () {
                imgChange(index);
                index++;
                if (index === imgLength) {
                    index = 0;
                }
            }, 7000);
    }).trigger('mouseleave');
    
    $playWrap.find('li').click(function () {
        index = $(this).index();
        imgChange(index);
    });
    // Prev
	$(".indexShowLeft").click(function() {
		index -= 1;
		if(index == -1) {index = imgLength - 1;}
		imgChange(index);
	});


	// Next
	$(".indexShowRight").click(function() {
		index += 1;
		if(index == imgLength) {index = 0;}
		imgChange(index);
	});
	
    imgChange = function (index) {
        var imgWidth = $imgList.find('li').width(),
        left =  - (imgWidth * index) + 'px';
        $playWrap.find('li').removeClass('hover').eq(index).addClass('hover');
        $imgList.stop(true, true).animate({
            'left' : left
        }, 1500);
    };
});