$(document).ready(function () {

    var synoWord = {
        introduction_chapter: "Introduction",
        hermetic_philosophy_chapter: "The Hermetic Philosophy",
        seven_principles_chapter: "The Seven Hermetic Principles",
        mental_transmutation_chapter: "Mental Transmutation",
        the_all_chapter: "The All",
        mental_universe_chapter: "The Mental Universe",
        divine_paradox_chapter: "The Divine Paradox",
        all_in_all_chapter: "'The All' in All",
        correspondence_chapter: "The Planes of Correspondence",
        vibration_chapter: "Vibration",
        polarity_chapter: "Polarity",
        rhythm_chapter: "Rhythm",
        causation_chapter: "Causation",
        gender_chapter: "Gender",
        mental_gender_chapter: "Mental Gender",
        hermetic_axioms_chapter: "Hermetic Axioms"
    };

    var maintext = {
        introduction_chapter: "- i -",
        hermetic_philosophy_chapter: "I",
        seven_principles_chapter: "II",
        mental_transmutation_chapter: "III",
        the_all_chapter: "IV",
        mental_universe_chapter: "V",
        divine_paradox_chapter: "VI",
        all_in_all_chapter: "VII",
        correspondence_chapter: "VIII",
        vibration_chapter: "IX",
        polarity_chapter: "X",
        rhythm_chapter: "XI",
        causation_chapter: "XII",
        gender_chapter: "XIII",
        mental_gender_chapter: "XIV",
        hermetic_axioms_chapter: "XV",
    };

    $("#introduction_chapter, #hermetic_philosophy_chapter, #seven_principles_chapter, #mental_transmutation_chapter, #the_all_chapter, #mental_universe_chapter, #divine_paradox_chapter, #all_in_all_chapter, #correspondence_chapter, #vibration_chapter, #polarity_chapter, #rhythm_chapter, #causation_chapter, #gender_chapter, #mental_gender_chapter, #hermetic_axioms_chapter").hover(
        function () {
            $(this).text(synoWord[this.id]);

        },
        function () {
            $(this).text(maintext[this.id]);

        }
    );

});

