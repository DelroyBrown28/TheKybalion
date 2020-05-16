$(document).ready(function () {

    $(".introduction").click(showIntroductionChapter);

    function showIntroductionChapter() {
        $(this).css("opacity", "1");
        $(".hermetic_philosophy").css("opacity", "0.4");
        $(".hermetic_philosophy_chapter").fadeOut("fast", function () {
            $(".introduction_chapter").fadeIn("slow", function () {
                $(".chapter_underline").animate({
                    width: "200px",
                }, 500)
            });
        });
        return false;
    }


    $(".hermetic_philosophy").click(showHermeticPhilosophyChapter);

    function showHermeticPhilosophyChapter() {
        $(this).css("opacity", "1");
        $(".introduction").css("opacity", "0.4");
        $(".introduction_chapter").fadeOut("fast", function () {
            $(".hermetic_philosophy_chapter").fadeIn("slow", function () {
                $(".author_small, .hp_quote, .hp_quote2").animate({
                    opacity: "1",
                }, 1000);
                $(".hp_quote3").animate({
                    opacity: "1",
                }, 1000)
                $(".chapter_underline").animate({
                    width: "400px",
                }, 500)
            });
        });
        return false;
    }


});