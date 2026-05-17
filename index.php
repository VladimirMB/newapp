<?php include 'data/products.php';?>
<?php include 'data/dodaci_tipovi.php';?>
<!DOCTYPE html>
<html lang="sr">
<head>
	<meta charset="utf-8">
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<title>Test</title>
	<script type="text/javascript" src="js/jquery-1.7.1.min.js" ></script>
	<script type="text/javascript" src="js/js.js"></script>
	<link href="css/style.css" rel="stylesheet" type="text/css" media="screen" />
</head>
<body>
<div id="wrapper">
	<div id="content">
		<ul id='main_menu'>
			<?php
			foreach ($categories as $k=>$category) {
				if ($k == 0) {
					echo '<li><a class="active" href="#'.$category['category_id_name'].'">'.$category["category_name"].'</a></li>';
				} else {
					echo '<li><a href="#'.$category['category_id_name'].'">'.$category["category_name"].'</a></li>';
				}
			}
			?>
		</ul>
		<?php
		foreach ($categories as $k=>$category) {
			$build = '';
			foreach ($products as $product) {
				if ($category['category_id'] == $product['category_id']) {
					$dodaci_tip = 'dodaci_tip'.$product['dodatak_type'];
					$build = $build."
						<li data-catid='{$product['category_id']}' data-id='{$product['product_id']}' class='mitem' >
							<div class='mitem-image' style='background: url(products/{$product['product_id']}.jpg) center no-repeat; background-size: auto 140px;'></div>
							<div class='mitem-title'>
								<a href='#' class='name'>{$product['product_name']}</a>
								<span>{$product['product_desc']}</span>
								${$dodaci_tip}
							</div>
							<div class='mitem-price'>
								<div class='mitem-price-text price'><span class='price'>{$product['product_price']}</span> RSD</div>
							</div>	
							<div class='clear'></div>
						</li>
					";
				}
			}
			if ($k != 0) {
				echo "<ul data-Cid='{$category['category_id']}' id='{$category['category_id_name']}' class='product-content hide' >{$build}</ul>";
			} else {
				echo "<ul data-Cid='{$category['category_id']}' id='{$category['category_id_name']}' class='product-content' >{$build}</ul>";
			}
		}
		?>
		<div class="clear"></div>
	</div>
</div>
</body>
</html>
