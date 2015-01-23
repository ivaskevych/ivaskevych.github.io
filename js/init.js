(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $(".dropdown-button").dropdown();
  }); 
  $(document).ready(function(){
            $('ul.tabs').tabs();
          });
  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });// end of document ready
})(jQuery); // end of jQuery name space
