;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {
		var $html = $('html');

		if(mobileDevice) {
			$html.addClass('mobile');
		}

		$('.menu-link').on('click', function(e) {
			e.preventDefault();

			$('.nav').toggleClass('nav-active');
		});

		$doc.on('click', function(e) {
			if ( !$(e.target).is('.nav *')) {
				$('.nav').removeClass('nav-active');
			}
		});

		$('.input-file input').on('change', function() {
			var filename = $(this).val().split('\\').pop();;
			var $value = $(this).parent().find('.input-file-value');
			$value.html(filename);
		});

	});
	

	var mobileDevice = (
		(navigator.platform.indexOf("iPad") != -1) ||
		(navigator.platform.indexOf("iPhone") != -1) ||
		(navigator.platform.indexOf("iPod") != -1) ||
		((navigator.userAgent.indexOf("ZuneWP") != -1)) ||
		((navigator.userAgent.indexOf("Android") != -1))		
	);

	function getWindowWidth() {
		return (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth)
	}

	function getWindowHeight() {
		return (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight)
	}

})(jQuery, window, document);