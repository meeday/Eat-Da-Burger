$(function() {

  $(".devour").on("click", function(event) {
    event.preventDefault();

    const id = $(this).data("id");

    $.ajax(`/api/burgers/${id}`, {
      type: "PUT"
    }).then(
      () => {
        location.reload();
      }
    );
  });

  $(".addBurger").on("submit", function(event) {
    event.preventDefault();

    const newBurger = {
      name: $("#name").val().trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        location.reload();
      }
    );
  });
});