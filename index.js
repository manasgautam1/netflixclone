$(".tab-item").on("click", function(){
  clearTab();
  clearTabContent();
  var x=this.id;
  console.log(x);
  $("#"+x).addClass("tab-border");
  $("#"+x+"-content").addClass("show");

});

function clearTab(){
  $(".tab-item").removeClass("tab-border");
}

function clearTabContent(){
  $(".tab-content-item").removeClass("show");
}
