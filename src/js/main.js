$(function () {
  // Check, Delete and Warning SVG Icons
  let checkSVG =
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm-2 13l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" class="pathOpacity" opacity="0"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/></svg>';
  let deleteSVG =
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"/></svg>';
  let warningSVG =
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>';

  // Add list item function
  function addListItem() {
    let inputVal = $.trim($("#item").val());
    if (inputVal != "") {
      // hide error message
      $("#errorSection").addClass("hidden");

      let todo = $("<li class='draggable'></li>").text(inputVal);
      let checkBtn = $('<span class="btn check"></span>').html(checkSVG);
      let delBtn = $('<span class="btn delete"></span>').html(deleteSVG);

      // Append checkBtn and delBtn to todo item
      todo.append(checkBtn, delBtn);
      // Append todo item (li) to the list (ul)
      $("#todo").append(todo);
    } else {
      // Show error message if input value is empty
      $("#errorSection").removeClass("hidden");
      $(".error").html(`${warningSVG} Please enter a task to do!`);
    }

    // Mark item as done and move it to the completed list
    $("span.btn.check").click(function () {
      $(this).addClass("done");
      $("#completed").append($(this).parent());
    });

    // Delete item from list
    $(".delete").click(function () {
      $(this).parent().remove();
    });

    // Set input value to empty
    $("#item").val("");

    $("#completed").sortable();
    $("#completed").disableSelection();
  }

  // If user hits enter key, addListItem function gets triggered
  $("#item").on("keydown", function (e) {
    if (e.key === "Enter") {
      addListItem();
    }
  });

  // If user hits the plus button, addListItem function gets triggered
  $("#addItem").on("click", addListItem);
});
