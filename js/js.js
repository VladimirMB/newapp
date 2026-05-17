$(document).ready(function() {
	newmenuset ();
});

function newmenuset () {
	$('ul#main_menu li a').on('click', function(event){
		event.preventDefault();
		var Link = this;
		var Nastavak = $(this).attr('href');
		var Vrednost = $(this).text();
		var Objekat = $(this).html();

		$('ul#main_menu li a').each(function(index) {
			var vrednost = $(this).text();
			var nastavak = $(this).attr('href');
			if (vrednost != Vrednost) {
				$(this).removeClass('active');
				$(nastavak).hide();
			} else {
				$(this).addClass('active');
				$(nastavak).show();
			}
		});
	});
}


