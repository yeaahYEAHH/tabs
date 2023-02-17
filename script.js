
$(".dws-form").on("click", ".tab", function() {
    // Удаляем классы active
    $(".dws-form .tab-form").removeClass('active');
    $(".dws-form .tab").removeClass('activate')

    // Добавляем классы active
    $(this).addClass("active");

    $(".tab-form").eq($(this).index()).addClass("active");
    $(".tab").eq($(this).index()).addClass("activate");
});
