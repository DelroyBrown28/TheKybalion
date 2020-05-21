$(document).ready(function () {

    function welcome() {
        $(".top_menu").delay(200).animate({
            height: "10%"
        }, 1000, function () {
            $(".chapters").delay(900).animate({
                opacity: "1"
            }, function() {
                $("#display_chapter").animate({
                    opacity: "1"
                }, function() {
                    $(".kybalion_logo").animate({
                        opacity: "0.7"
                    }, 800)
                })
            })
        })

    }
    window.onload = welcome;



    $("#menu_introduction_chapter").on({
        mouseenter: function () {
            document.getElementById("display_chapter").innerHTML = "Introduction.";
        },
        mouseleave: function () {
            document.getElementById("display_chapter").innerHTML = "";
        }
    });

    $("#hermetic_philosophy_chapter").on({
        mouseenter: function () {
            document.getElementById("display_chapter").innerHTML = "The Hermetic Philosophy.";
        },
        mouseleave: function () {
            document.getElementById("display_chapter").innerHTML = "";
        }
    });

    $("#seven_hermetic_chapter").on({
        mouseenter: function () {
            document.getElementById("display_chapter").innerHTML = "The Seven Hermetic Principles..";
        },
        mouseleave: function () {
            document.getElementById("display_chapter").innerHTML = "";
        }
    });

    $("#mental_transmutation_chapter").on({
        mouseenter: function () {
            document.getElementById("display_chapter").innerHTML = "Mental Transmutation.";
        },
        mouseleave: function () {
            document.getElementById("display_chapter").innerHTML = "";
        }
    });

    $("#the_all_chapter").on({
        mouseenter: function () {
            document.getElementById("display_chapter").innerHTML = "The All.";
        },
        mouseleave: function () {
            document.getElementById("display_chapter").innerHTML = "";
        }
    });

    $("#mental_universe_chapter").on({
        mouseenter: function () {
            document.getElementById("display_chapter").innerHTML = "The Mental Universe.";
        },
        mouseleave: function () {
            document.getElementById("display_chapter").innerHTML = "";
        }
    });

    $("#divince_paradox_chapter").on({
        mouseenter: function () {
            document.getElementById("display_chapter").innerHTML = "The Divine Paradox";
        },
        mouseleave: function () {
            document.getElementById("display_chapter").innerHTML = "";
        }
    });

    $("#theall_inall_chapter").on({
        mouseenter: function () {
            document.getElementById("display_chapter").innerHTML = '"The All" in All.';
        },
        mouseleave: function () {
            document.getElementById("display_chapter").innerHTML = "";
        }
    });

    $("#planes_correspondence_chapter").on({
        mouseenter: function () {
            document.getElementById("display_chapter").innerHTML = "The Planes of Correspondence.";
        },
        mouseleave: function () {
            document.getElementById("display_chapter").innerHTML = "";
        }
    });

    $("#vibration_chapter").on({
        mouseenter: function () {
            document.getElementById("display_chapter").innerHTML = "Vibration.";
        },
        mouseleave: function () {
            document.getElementById("display_chapter").innerHTML = "";
        }
    });

    $("#polarity_chapter").on({
        mouseenter: function () {
            document.getElementById("display_chapter").innerHTML = "Polarity.";
        },
        mouseleave: function () {
            document.getElementById("display_chapter").innerHTML = "";
        }
    });

    $("#rhythm_chapter").on({
        mouseenter: function () {
            document.getElementById("display_chapter").innerHTML = "Rhythm.";
        },
        mouseleave: function () {
            document.getElementById("display_chapter").innerHTML = "";
        }
    });

    $("#causation_chapter").on({
        mouseenter: function () {
            document.getElementById("display_chapter").innerHTML = "Causation.";
        },
        mouseleave: function () {
            document.getElementById("display_chapter").innerHTML = "";
        }
    });

    $("#gender_chapter").on({
        mouseenter: function () {
            document.getElementById("display_chapter").innerHTML = "Gender.";
        },
        mouseleave: function () {
            document.getElementById("display_chapter").innerHTML = "";
        }
    });

    $("#mental_gender_chapter").on({
        mouseenter: function () {
            document.getElementById("display_chapter").innerHTML = "Mental Gender.";
        },
        mouseleave: function () {
            document.getElementById("display_chapter").innerHTML = "";
        }
    });

    $("#hermetic_axioms_chapter").on({
        mouseenter: function () {
            document.getElementById("display_chapter").innerHTML = "Hermetic Axioms.";
        },
        mouseleave: function () {
            document.getElementById("display_chapter").innerHTML = "";
        }
    });









})