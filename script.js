
$(".dws-form").on("click", ".tab", function() {
    // Удаляем классы active
    $(".dws-form .tab").removeClass('active');
 
    // Добавляем классы active
    $(this).addClass("active");
    $(".tab-form").eq($(this).index()).addClass("active");
});
