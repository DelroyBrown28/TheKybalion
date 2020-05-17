$(document).ready(function () {

    $(".introduction").click(showIntroductionChapter);

    function showIntroductionChapter() {
        $(this).css("opacity", "1");
        $(".hermetic_philosophy, .seven_hermetic_principles, .mental_transmutation").css("opacity", "0.4");
        $(".seven_principles_chapter, .mental_transmutation_chapter").hide();

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
        $(".introduction, .seven_hermetic_principles").css("opacity", "0.4");
        $(".seven_principles_chapter, .introduction_chapter, .mental_transmutation_chapter").hide();

        $(".introduction_chapter").fadeOut("fast", function () {
            $(".hermetic_philosophy_chapter").fadeIn("slow", function () {
                $(".author_small, .hp_quote, .hp_quote2").animate({
                    opacity: "0.7",
                }, 1000);
                $(".hp_quote3").animate({
                    opacity: "0.7",
                }, 1000)
                $(".chapter_underline").animate({
                    width: "400px",
                }, 500)
            });
        });
        return false;
    }


    $(".seven_hermetic_principles").click(showSevenHermeticChapter);

    function showSevenHermeticChapter() {
        $(this).css("opacity", "1");
        $(".introduction, .hermetic_philosophy, .mental_transmutation").css("opacity", "0.4");
        $(".introduction_chapter, .mental_transmutation_chapter").hide();

        $(".hermetic_philosophy_chapter").fadeOut("fast", function () {
            $(".seven_principles_chapter").fadeIn("slow", function () {
                $(".chapter_underline").animate({
                    width: "500px",
                }, 500)
            });
        });
        return false;
    }

    $(".mental_transmutation").click(showMentalTransChapter);

    function showMentalTransChapter() {
        $(this).css("opacity", "1");
        $(".introduction, .hermetic_philosophy, .seven_hermetic_principles").css("opacity", "0.4");
        $(".introduction_chapter, .seven_principles_chapter").hide();

        $(".hermetic_philosophy_chapter").fadeOut("fast", function () {
            $(".mental_transmutation_chapter").fadeIn("slow", function () {
                $(".chapter_underline").animate({
                    width: "600px",
                }, 500)
            });
        });
        return false;
    }




});