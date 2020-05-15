$(document).ready(function () {

    $(".intro_chapter").click(showIntroChapter);

    function showIntroChapter() {
        $(this).animate({
            opacity: "1",
        })
        $(".hermetic_philosophy").animate({
            opacity: "0.4",
        })
        $(".chapter_title_underline").animate({
            width: "200px",
        })
        $(".introduction, .introduction2, .poem, .end_of_chapter").fadeIn();
        document.getElementById("chapter_title").innerHTML = "Introduction";
        $("#chapter_number").css("visibility", "hidden");
        return false;
    }

    $(".hermetic_philosophy").click(showHermeticPhilosophy);

    function showHermeticPhilosophy() {
        $(this).animate({
            opacity: "1",
        })
        $(".intro_chapter").animate({
            opacity: "0.4",
        })
        $(".chapter_title_underline").animate({
            width: "100px",
        })
        $(".introduction, .introduction2, .poem, .end_of_chapter").fadeOut();
        document.getElementById("chapter_title").innerHTML = "The Hermetic Philosophy";
        $("#chapter_number").css("visibility", "visible");
        return false;
    }

});