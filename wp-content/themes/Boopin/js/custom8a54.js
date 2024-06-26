// $(document).ready(function () {
// $(".portfolio_grid-card").hover(function () {
//     $("body").addClass("portfolio_card_enter");
//   });
//   $(".portfolio_grid-card").mouseleave(function () {
//     $("body").removeClass("portfolio_card_enter");
//   });
//   $(".portfolio_grid-card").click(function () {
//     window.location.href = this.getAttribute("data-href");
//   });
// })

	 $(document).on('click','.our-clients', function(event) {
    event.preventDefault();
		window.location.href = "/#our-clients";
    $('html, body').animate({
        scrollTop: $("#our-clients").offset().top
    }, 2000);
});
	//$("#cliendSlider .slick-next").click(function(){
		// $("#cliendSlider .see-all-btn a").delay(1000).fadeIn(0);
	//});
// 	$("#cliendSlider .slick-prev").click(function(){
// 		$("#cliendSlider .see-all-btn a").hide();
// 	});
//   let url = window.location;
//   let path = window.location.pathname.toString().split("/")[1];
//   if (path == "project" || path == "projects") {
//     $(".desktop_menu ul li a").each(function () {
//       if (
//         $(this).attr("href").includes("our-works") ||
//         $(this).attr("href").includes("success-stories")
//       ) {
//         $(this).closest("li").addClass("active_menu");
//       }
//     });
//   } else {
//     if (window.location.pathname == "/") {
//       $(".desktop_menu ul li a").each(function () {
//         let newUrl = new URL($(this).attr("href"));
//         if (newUrl.pathname == "/") {
//           $(this).closest("li").addClass("active_menu");
//         }
//       });
//     } else {
//       $(".desktop_menu ul li a").each(function () {
//         let newUrl = new URL($(this).attr("href"));
//         if (newUrl.pathname == url.pathname) {
//           $(this).closest("li").addClass("active_menu");
//         }
//       });
//     }
//   }

// });
 // project new js
//  var page = 1;
      
        $("#load-more").click(function () {
            loadTab(termId);
            $('#tabs-content_'+termId).animate({
                scrollTop: $("#load-more").offset().top
            }, 1000); // You can adjust the duration (in milliseconds) as needed
        })

      
			 // tabs 
        $(".tabs button").click(function () {
            $(".tabs button").removeClass("active");
            $(".portfolio_grid_list-row").hide();
            let getAttr = $(this).attr('data-id');
            $("#tabs-content_" + getAttr).show();
            $(this).addClass("active");

       
			 });

	 var page=1;
var pagedNo=1;
	  function loadTab(tabId) {
		 	
            // Use AJAX to load custom post type content
            // Update the 'post_type' parameter with your actual post type
            termId = tabId;
            $.ajax({
                url: ajaxurl,
                type: 'post',
                data: {
                    action: 'load_custom_posts',
                    tab: tabId,
                    paged: pagedNo,
					per_page: 6,
                },
                success: function (response) {
                    if (tabId == termId) {
                        $('.tab_'+termId).addClass('active');
                        let tabcontainer = '#tabs-content_' + termId;
                        $(tabcontainer).show(tabcontainer).append(response);
                        pagedNo++;
                        // Automatically scroll down after appending data
                    }

                }
            });
        }
 $(document).ready(function () {
var firstload = 4;
	 loadTab(firstload);
});
