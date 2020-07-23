var unDevoured = document.getElementsByClassName("change-burger");
console.log(unDevoured);
for (var x = 0; x < unDevoured.length; x++) {
  var element = unDevoured[x];
  element.addEventListener("click", function (e) {
    var idVal = e.target.dataset.id;
    console.log(idVal);
    $.ajax({
      url: "/api/burgers/" + idVal,
      type: "PUT",
      success: function (response) {
        document.location.reload();
      },
    });
  });
}
