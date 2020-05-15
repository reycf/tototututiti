export default () => {
  $(".select-all").click(function() {
    $('input:checkbox.group-select-all, input:checkbox.group-checkbox').not(this).prop('checked', this.checked);
  });

  $(".group-select-all").click(function() {
    $('input:checkbox[group="' + $(this).attr("id") + '"]').not(this).prop('checked', this.checked);
  });

  $("input:checkbox").change(function() {
    var current_group = $(this).attr("group");
    if ($('.group-checkbox:checked[group="' + current_group + '"]').length == $('.group-checkbox[group="' + current_group + '"]').length) {
      $("#" + current_group).prop('checked', true);
    } else {
      $("#" + current_group).prop('checked', false);
    }

    if ($('.group-checkbox:checked').length == $('.group-checkbox').length) {
      $(".select-all").prop('checked', true);
    } else {
      $(".select-all").prop('checked', false);
    }
  });

  $(".custom-control-input").click(function() {
    if ($('input.custom-control-input:checked').length > 0) {
      //$("#checkbox-actions button").removeClass("disabled");
      $("#checkbox-actions").removeClass("d-none");
    } else {
      //$("#checkbox-actions button").addClass("disabled");
      $("#checkbox-actions").addClass("d-none");
    }
  });

  var stick_nav = $(".sticky-div"),
    sticky_content = $(".sticky-content"),
    wrapper = $("#checkbox-actions-wrap");

  if (wrapper.length > 0)
    var yourHeaderPos = wrapper.offset().top; //$('.header').height();

  $(window).scroll(function() {
    stickyNav();
  });

  function stickyNav() {
    if ($(window).scrollTop() > yourHeaderPos) {
      stick_nav.addClass("sticky");
      // Fixing fixed div bug
      stick_nav.width("100%");
    } else {
      stick_nav.removeClass("sticky");
      stick_nav.width("100%");
    }
  }

  stick_nav.css({ "margin-bottom": -stick_nav.height() });
  sticky_content.css({ "padding-top": stick_nav.height() + 20 });

  stickyNav();
};
