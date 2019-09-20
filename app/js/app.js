// Clone Playground: JavaScript

$("#tc-recommendation-trigger").on("click", function(e) {
    $(this).toggleClass("active");
    $("#tc-recommendation-content").toggleClass("hidden");
});

$("#tc-filter-trigger").on("click", function(e) {
    $(this).toggleClass("active");
    $("#tc-filter-content").toggleClass("hidden");
});