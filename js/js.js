$(document).ready(function() {
	$.getJSON('data/products.json', function(data) {
		renderMenuAndProducts(data);
		newmenuset();
	});
});

function renderMenuAndProducts(data) {
	var categories = data.categories || [];
	var products = data.products || [];
	var dodaciTipovi = data.dodaci_tipovi || {};

	var menuHtml = '';
	var productsHtml = '';

	$.each(categories, function(k, category) {
		if (k === 0) {
			menuHtml += '<li><a class="active" href="#' + category.category_id_name + '">' + category.category_name + '</a></li>';
		} else {
			menuHtml += '<li><a href="#' + category.category_id_name + '">' + category.category_name + '</a></li>';
		}

		var build = '';
		$.each(products, function(_, product) {
			if (category.category_id === product.category_id) {
				var dodatak = dodaciTipovi[String(product.dodatak_type)] || '';
				build += ""
					+ "<li data-catid='" + product.category_id + "' data-id='" + product.product_id + "' class='mitem'>"
					+ "<div class='mitem-image' style='background: url(products/" + product.product_id + ".jpg) center no-repeat; background-size: auto 140px;'></div>"
					+ "<div class='mitem-title'>"
					+ "<a href='#' class='name'>" + product.product_name + "</a>"
					+ "<span>" + product.product_desc + "</span>"
					+ dodatak
					+ "</div>"
					+ "<div class='mitem-price'>"
					+ "<div class='mitem-price-text price'><span class='price'>" + product.product_price + "</span> RSD</div>"
					+ "</div>"
					+ "<div class='clear'></div>"
					+ "</li>";
			}
		});

		if (k !== 0) {
			productsHtml += "<ul data-Cid='" + category.category_id + "' id='" + category.category_id_name + "' class='product-content hide'>" + build + "</ul>";
		} else {
			productsHtml += "<ul data-Cid='" + category.category_id + "' id='" + category.category_id_name + "' class='product-content'>" + build + "</ul>";
		}
	});

	$('ul#main_menu').html(menuHtml);
	$('#products_root').html(productsHtml);
}

function newmenuset() {
	$('ul#main_menu li a').on('click', function(event) {
		event.preventDefault();
		var Vrednost = $(this).text();

		$('ul#main_menu li a').each(function() {
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
