$(document).ready(function() {
    $(".step").click(function() {
        var index = $(this).index();

        $(this).addClass("active").prevAll().addClass("active");
        $(this).nextAll().removeClass("active");

        $("#progress-content-section .section-content").removeClass("active");
        $("#progress-content-section .section-content").eq(index).addClass("active");

        var activeSteps = $(".step.active").length;
        var progress = (activeSteps - 1) / ($(".step").length - 1) * 100; 
        $("#line-progress").css("width", progress + "%");
    });
});



function transitionImages() {
    var image1 = document.getElementById('image1');
    var image2 = document.getElementById('image2');

    image1.classList.toggle('hidden');
    image2.classList.toggle('hidden');
}


const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})
