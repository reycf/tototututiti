export default () => {
  var selects = $('.select-search-link').selectize({
    onChange: function(value) {
      if (!value.length) return;
      if (ValidURL(value)) window.location = value;
    },
    onBlur: function(dropdown) {
    	this.disable();
    	$(".link-select").show();
    }
  });
  selects.each(function( index, select ) {
  	select.selectize.disable();
  })

  $('.link-select').click(function(){
  	var target = $(this).attr('input-target');
  	console.log(target);
  	$(this).hide();
  	$(target)[0].selectize.enable();
  	$(target)[0].selectize.focus();
  })

  function ValidURL(str) {
    var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    return regex.test(str);
  }
};
