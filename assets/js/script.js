$(document).ready(function () {


    $(".intro_chapter").click(showIntroChapter);

    function showIntroChapter() {
        document.getElementById("chapter_title").innerHTML = "Introduction";
        $(".hermetic_philosophy_wrap, .hermetic_philosophy_chapter").fadeOut("fast", function () {
            $(".intro_chapter_wrap, .introduction, .introduction2, .poem").fadeIn();
            $("#chapter_number").css("visibility", "hidden");
            $(".chapter_title_underline").animate({
                width: "200px",
            });

        })
        $(".intro_chapter").animate({
            opacity: "1",
        })
        $(".hermetic_philosophy").animate({
            opacity: "0.4",
        })
        $("#chapter_number").css("visibility", "hidden");
        return false;
    }

    $(".hermetic_philosophy").click(showHermeticPhilosophy);

    function showHermeticPhilosophy() {
        document.getElementById("chapter_title").innerHTML = "The Hermetic Philosophy";
        $(".intro_chapter_wrap, .introduction, .introduction2, .poem").fadeOut("fast", function () {
            $(".hermetic_philosophy_wrap, .hermetic_philosophy_chapter").fadeIn();
            $("#chapter_number").css("visibility", "visible");
            $(".chapter_title_underline").animate({
                width: "100px",
            });

        });
        $(".hermetic_philosophy").animate({
            opacity: "1",
        })
        $(".intro_chapter").animate({
            opacity: "0.4",
        })
        return false;
    }

});