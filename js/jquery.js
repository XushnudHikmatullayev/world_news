$(".business").slice(0, 4).show();
$(".loadbusines").on("click", function() {
    $(".business:hidden").slice(0, 4).show();
});

$(".entertainment").slice(0, 4).show();
$(".loadentertainment").on("click", function() {
    $(".entertainment:hidden").slice(0, 4).show();
});

$(".general").slice(0, 4).show();
$(".loadgenerals").on("click", function() {
    $(".general:hidden").slice(0, 4).show();
});

$(".health").slice(0, 4).show();
$(".loadhealth").on("click", function() {
    $(".health:hidden").slice(0, 4).show();
});

$(".science").slice(0, 4).show();
$(".loadscience").on("click", function() {
    $(".science:hidden").slice(0, 4).show();
});