var indicator = $(document).find('.movable-indicator');
$(function () {
    initIndicator();
    $(document).on('click', '[data-trigger="avatar-link"]', function (){
        let target = $(this).data('target');
        $(document).find('[data-content="profile"]').addClass('d-none');
        $(document).find('[data-reference="profile-'+target+'"]').removeClass('d-none');
        var image = $('[data-image="main-avatar"]');
        image.fadeOut('fast', function () {
            image.attr('src', 'images/avatar-'+target+'.png');
        });
        // image.on("load",function(){
        //     image.zoomIn('fast');
        // });
        // image.animate({
        //     opacity: 1,
        //     bottom: "+=50",
        //     height: "toggle"
        //   }, 1500, function() {
        //     // Animation complete.
        //   });
        image.animate({
            width: "toggle",
            height: "toggle"
          }, {
            duration: 1000,
            specialEasing: {
              width: "linear",
              height: "easeOutBounce"
            },
            complete: function() {
            }
        });
        $(document).find('[data-image="group-avatar"]').removeClass("animated");
        $(document).find('[data-group-avatar-reference="avatar-'+target+'"]').addClass('animated');
    });

    $('.pw_iw_nl__link_wrap').each(
        function(){
            $(this).click(function(){
                var left_distance = $(this).position().left;
                var element_width = $(this).outerWidth();

                $(this).siblings().removeClass('is-active');
                $(this).addClass('is-active');

                indicator.css('background-color', $(this).data('color'));
                indicator.css('width', element_width);
                indicator.css('left', left_distance);
            })
        }
    );
});
function initIndicator() {
    let active_link = $(document).find('.pw_iw_nl__link_wrap.is-active');
    var left_distance = active_link.position().left;
    var element_width = active_link.outerWidth();

    active_link.siblings().removeClass('is-active');
    active_link.addClass('is-active');

    indicator.css('background-color', active_link.data('color'));
    indicator.css('width', element_width);
    indicator.css('left', left_distance);
}