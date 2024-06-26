var currentPage = 1;
var currentPerPage = posts_per_page;
var maxPages = 0;

function loadProject(cat,pageNum,perPage) {

  var data = {

    action: 'filterproject', 

     catBy: cat,

      pageNo: pageNum,

      per_page: perPage,

  }



  $.ajax({

    url: ajaxurl,

    type: "POST",

    dataType: "json",

    data: data,

    success: function(response) {

      $('#projectList').html('');

     currentPage = parseInt(response.args.paged);

      currentPerPage = parseInt(response.args.posts_per_page);

      maxPages = parseInt(response.max);



      if(cat == 'null'){
		
        $('#projectList').append(response.solutions_items);
        

      } else {
			
         $('#projectList').empty().append(response.solutions_items);

      

      }
		
      $(".portfolio_grid-card").hover(function () {
        $("body").addClass("portfolio_card_enter");
      });
      $(".portfolio_grid-card").mouseleave(function () {
        $("body").removeClass("portfolio_card_enter");
      });
		$(".item_milestone").html("<h2 class='section_primary-title'>SM MILESTONES</h2>");
		$(".item_victories").html("<h2 class='section_primary-title'>PR VICTORIES</h2>");
		$(".item_solutions").html("<h2 class='section_primary-title'>ONLINE SOLUTIONS</h2>");
		$(".item_squad").html("<h2 class='section_primary-title'>SEO SQUAD</h2>");
      $(".portfolio_grid-card").click(function () {
        window.location.href = this.getAttribute("data-href");
      });
  scroll.update();

    },

    error: function(response){

      $('#projectList').empty().append('Error! ' + response);
		

    },

  });

}



$(document).ready(function () {

  loadProject('null',1, currentPerPage);

   $('#projectList').html('<div class="load-more-ajax">Loading...</div>');
	
});



$(document).on("click","#projectcategory li", function () {

 $('#projectcategory li.active_filter').removeClass('active_filter');

  $(this).addClass('active_filter');

  var cat = $(this).attr('data-tag');


  loadProject(cat,1, currentPerPage);
	
  $('#projectList').html('<div class="load-more-ajax">Loading...</div>');

});



$(document).on("click","#projectList .item-show", function () {

   var get_cat = $('#projectcategory li.active_filter').attr('data-tag');
   var get_cat = 'media';

  console.log(get_cat);

  loadProject(get_cat,1,parseInt(currentPerPage+currentPerPage));

  $('#projectList .item-show').html('Loading...');

});



$(document).ready(function () {

$(".portfolio_grid-card").hover(function () {

    $("body").addClass("portfolio_card_enter");

  });

  $(".portfolio_grid-card").mouseleave(function () {

    $("body").removeClass("portfolio_card_enter");

  });

  $(".portfolio_grid-card").click(function () {

    window.location.href = this.getAttribute("data-href");

  });

	
})


