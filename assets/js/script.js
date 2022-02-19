
$(document).ready(function(){
/*click icon bar(mobile)*/
	$(".bar").click(function(){
		$("ul.main-menu").toggleClass('active'); /*show main-menu(mobile)*/
		$(".search-bar").removeClass('active');	/*hide thanh search*/
		$(".bar span").toggleClass('active');	/*bar -> close*/
	});
/*click icon search*/
	$(".icon-search .search").click(function(){
		$(".search-bar").toggleClass('active'); //show thanh search
		$("ul.main-menu").removeClass('active'); // hide main-menu
		$(".bar").removeClass('active');
	});

/*click icon close hide search bar*/
	$(".search-bar i").click(function(){
		$(".search-bar").removeClass('active');
	});
	$(".icon-search .search").click(function(e) {
    if ( $(".txt").val().length <=0 ) {
      e.preventDefault();
    }
  });

/*click main-menu li hien sub-menu*/
	$("ul.main-menu li").hover(function(){
		$(this).siblings().removeClass("active");
		$(this).toggleClass("active");
	});


	$("ul.main-menu li").click(function(){
		$(this).siblings().removeClass("open");  ///mobile
		$(this).toggleClass("open");
	});

/*slider*/
	  // Activate Carousel
	  $("#myCarousel").carousel({interval: 2000});
	    
	  // Enable Carousel Indicators
	  $(".item1").click(function(){
	    $("#myCarousel").carousel(0);
	  });
	  $(".item2").click(function(){
	    $("#myCarousel").carousel(1);
	  });
	  $(".item3").click(function(){
	    $("#myCarousel").carousel(2);
	  });
	   $(".item4").click(function(){
	    $("#myCarousel").carousel(3);
	  });
	    
	  // Enable Carousel Controls
	  $(".prev").click(function(){
	    $("#myCarousel").carousel("prev");
	  });
	  $(".next").click(function(){
	    $("#myCarousel").carousel("next");
	  });
/*end-slider*/

/*tab-list(page blog-list)*/
	$('.tab-item').isotope({
	  itemSelector: '.item',
	  percentPosition: true,
	  masonry: {
	    // use outer width of grid-sizer for columnWidth
	    columnWidth: 1,
	    // gutter: 20        //khoang cach cac cot
	  }
	});
	$(".tab-menu ul li").click(function(){
		$(".tab-menu ul li").removeClass("active");
		$(this).addClass('active');
		var selector = $(this).attr('data-filter');
		$(".tab-item").isotope({
			filter: selector
		});
	});

/*end tab-list(page blog-list)*/

	// Hide the extra content initially, using JS so that if JS is disabled, no problemo.
	// $('.read-more-content').addClass('hide');

	// // Set up the toggle.
	// $('.load').on('click', function() {
	//   $(this).next('.read-more-content').toggleClass('hide');
	// });
	 // $(".shop-nav-tabs a").click(function(){
	 //    $(this).tab('show');  
	 //  });

});

/*==============================================================================
				tang giam san pham
================================================================================*/
		function more(){
			//lay gia tri cu textBox
			var x = document.getElementById("textBox").value;
			//tra gia tri moi lai cho textBox
			document.getElementById("textBox").value = parseInt(x) +1;
		}

		function less(){
			//lay gia tri cu textBox
			var x = document.getElementById('textBox').value;
			//tra gia tri moi lai cho textBox
			if(parseInt(x)>0)
			{
				document.getElementById('textBox').value = parseInt(x) -1;
			}
		}
/*==============================================================================
				end tang giam san pham
================================================================================*/



