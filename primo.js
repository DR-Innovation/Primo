// NULSTIL SØGNING //

jQuery.fn.clearable = function() {
 
  $('.morelink').on('click', function() {
    var $this = $(this);
    if ($this.hasClass('less')) {
      $this.removeClass('less');
      $this.html(config.moreText);
    } else {
      $this.addClass('less');
      $this.html(config.lessText);
    }
    $this.parent().prev().toggle();
    $this.prev().toggle();
    return false;
  });
 
  return this.each(function() {
    	
	$(this).css({'border-width': '0px', 'outline': 'none'})
		.wrap('<div class="divclearable"></div>')
		.parent()
		.attr('class', $(this).attr('class') + ' divclearable')
		.append('<a class="clearlink" href="javascript:"></a>');

	$('.clearlink')
		.attr('title', 'Nulstil din søgning')
		.click(function() {
			
			$(this).prev().val('').focus();

	});
  });
}

// PRÆCISER SØGNING //

$('label').removeClass('EXLHide').addClass('EXLnoHide'); // Sørger for at labels på præciser søgning bliver vist

$("label[for='search_field']").remove(); // Sørger for at labels på præciser søgning bliver vist


// Fjern elementer

$("label[for='exlidInput_scope_all1']").remove();
$("label[for='input_freeText0']").remove();
$("label[for='exlidInput_scope_2']").remove();
$("label[for='exlidInput_scope_title2']").remove();
$("label[for='exlidInput_scope_all2']").remove();
$("label[for='exlidInput_scope_3']").remove();
$("label[for='exlidInput_scope_all3']").remove();

// Indsæt tekst

$("label[for='exlidInput_scope_1']").text("Fritekst");
$("label[for='input_freeText1']").text("Titel");
$("label[for='input_freeText2']").text("Forfatter");

$('img#removeFacet').each(function(){
  var newSrc = $(this).attr("src").replace("../images/icon_remove.png", "http://77.66.32.238/php/intern/arkiv/primo/images/close-x.png");
  $(this).attr("src", newSrc); 
});