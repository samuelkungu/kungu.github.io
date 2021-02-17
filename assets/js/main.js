/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight(),
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

	// Menu.
		var $menu = $('#menu');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {

				event.stopPropagation();

				// Hide.
					$menu._hide();

			})
			.find('.inner')
				.on('click', '.close', function(event) {

					event.preventDefault();
					event.stopPropagation();
					event.stopImmediatePropagation();

					// Hide.
						$menu._hide();

				})
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$menu._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				});

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});


			window.addEventListener("DOMContentLoaded", function () {
				// get the form elements defined in your form HTML above
			  
				var form = document.getElementById("my-form");
				// var button = document.getElementById("my-form-button");
				var status = document.getElementById("status");
			  
				// Success and Error functions for after the form is submitted
			  
				function success() {
				  form.reset();
				  status.classList.add("success");
				  status.innerHTML = "Thanks!";
				}
			  
				function error() {
				  status.classList.add("error");
				  status.innerHTML = "Oops! There was a problem.";
				}
			  
				// handle the form submission event
			  
				form.addEventListener("submit", function (ev) {
				  ev.preventDefault();
				  var data = new FormData(form);
				  ajax(form.method, form.action, data, success, error);
				});
			  });
			  
			  // helper function for sending an AJAX request
			  
			  function ajax(method, url, data, success, error) {
				var xhr = new XMLHttpRequest();
				xhr.open(method, url);
				xhr.setRequestHeader("Accept", "application/json");
				xhr.onreadystatechange = function () {
				  if (xhr.readyState !== XMLHttpRequest.DONE) return;
				  if (xhr.status === 200) {
					success(xhr.response, xhr.responseType);
				  } else {
					error(xhr.status, xhr.response, xhr.responseType);
				  }
				};
				xhr.send(data);
			  }
			  

})(jQuery);