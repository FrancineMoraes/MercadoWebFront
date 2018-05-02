<template>
<div>
    <header>
	    <h2>Mercado Web</h2>
    </header>
			
	<div class="xs-menu-cont">
		<a id="menutoggle"><i class="fa fa-align-justify"></i> </a>
			<nav class="xs-menu displaynone">
				<ul>
					<li class="active">
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#"></a>
					</li>
                	<li>
						<a href="#">Services</a>
					</li>
					<li>
						<a href="#">Team</a>
					<li>
					</li>
						<a href="#">Portfolio</a>
					<li>
						<a href="#">Blog</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>

					</ul>
				</nav>
			</div>
			<div>
            <nav class="menu">
				<ul>
					<li class="active">
						<a href="#">Home</a>
					</li>
					<li class="drop-down">
						<a href="#">Cadastro</a>
							<ul>
								<li>Cadastro de Produtos</li>
								<li>Cadastro de Usuários</li>
							</ul>
					</li>
					<li>
					
                    <a href="#">Services</a>
					</li>
					<li>
						<a href="#">Team</a>
					</li>
					<li>
						<a href="#">Portfolio</a>
					</li>
					<li>
						<a href="#">Blog</a>

					</li>
				</ul>
            </nav>
			</div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        </div>
</template>

<script>
  $(document).ready(function() {
				//responsive menu toggle
				$("#menutoggle").click(function() {
					$('.xs-menu').toggleClass('displaynone');

					});
				//add active class on menu
				$('ul li').click(function(e) {
					e.preventDefault();
					$('li').removeClass('active');
					$(this).addClass('active');
				});
			//drop down menu	
					$(".drop-down").hover(function() {
						$('.mega-menu').addClass('display-on');
					});
					$(".drop-down").mouseleave(function() {
						$('.mega-menu').removeClass('display-on');
					});
			
			});

	 

</script>

