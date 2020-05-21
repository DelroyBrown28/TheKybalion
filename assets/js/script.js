$(document).ready(function () {

    function welcome() {
        $(".top_menu").delay(100).animate({
            height: "10%"
        }, 1000, function () {
            $(".chapters").delay(900).animate({
                opacity: "1"
            }, function () {
                $("#display_chapter").animate({
                    opacity: "1"
                }, function () {
                    $(".kybalion_logo").animate({
                        opacity: "0.5"
                    }, 800)
                })
            })
        })

    }
    window.onload = welcome;



    $("#menu_introduction_chapter").on({
        mouseenter: function () {
            document.getElementById("display_chapter").innerHTML = "I<small>NTRODUCTION</small>.";
        },
        mouseleave: function () {
            document.getElementById("display_chapter").innerHTML = "";
        }
    });

    $("#hermetic_philosophy_chapter").on({
        mouseenter: function () {
            document.getElementById("display_chapter").innerHTML = "T<small>HE</small> H<small>ERMETIC</small> P<small>HILOSOPHY</small>.";
        },
        mouseleave: function () {
            document.getElementById("display_chapter").innerHTML = "";
        }
    });

    $("#seven_hermetic_chapter").on({
        mouseenter: function () {
            document.getElementById("display_chapter").innerHTML = "T<small>HE</small> S<small>EVEN</small> H<small>ERMETIC</small> P<small>RINCIPLES</small>.";
        },
        mouseleave: function () {
            document.getElementById("display_chapter").innerHTML = "";
        }
    });

    $("#mental_transmutation_chapter").on({
        mouseenter: function () {
            document.getElementById("display_chapter").innerHTML = "M<small>ENTAL</small> T<small>RANSMUTATION</small>.";
        },
        mouseleave: function () {
            document.getElementById("display_chapter").innerHTML = "";
        }
    });

    $("#the_all_chapter").on({
        mouseenter: function () {
            document.getElementById("display_chapter").innerHTML = "T<small>HE</small> A<small>LL</small>.";
        },
        mouseleave: function () {
            document.getElementById("display_chapter").innerHTML = "";
        }
    });

    $("#mental_universe_chapter").on({
        mouseenter: function () {
            document.getElementById("display_chapter").innerHTML = "T<small>HE</small> M<small>ENTAL</small> U<small>NIVERSE</small>.";
        },
        mouseleave: function () {
            document.getElementById("display_chapter").innerHTML = "";
        }
    });

    $("#divince_paradox_chapter").on({
        mouseenter: function () {
            document.getElementById("display_chapter").innerHTML = "T<small>HE</small> D<small>IVINE</small> P<small>ARADOX</small>";
        },
        mouseleave: function () {
            document.getElementById("display_chapter").innerHTML = "";
        }
    });

    $("#theall_inall_chapter").on({
        mouseenter: function () {
            document.getElementById("display_chapter").innerHTML = '"T<small>HE</small> A<small>LL</small>" I<small>N</small> A<small>LL</small>.';
        },
        mouseleave: function () {
            document.getElementById("display_chapter").innerHTML = "";
        }
    });

    $("#planes_correspondence_chapter").on({
        mouseenter: function () {
            document.getElementById("display_chapter").innerHTML = "T<small>HE</small> P<small>LANES</small> O<small>F</small> C<small>ORRESPONDENCE</small>.";
        },
        mouseleave: function () {
            document.getElementById("display_chapter").innerHTML = "";
        }
    });

    $("#vibration_chapter").on({
        mouseenter: function () {
            document.getElementById("display_chapter").innerHTML = "V<small>IBRATION</small>.";
        },
        mouseleave: function () {
            document.getElementById("display_chapter").innerHTML = "";
        }
    });

    $("#polarity_chapter").on({
        mouseenter: function () {
            document.getElementById("display_chapter").innerHTML = "P<small>OLARITY</small>.";
        },
        mouseleave: function () {
            document.getElementById("display_chapter").innerHTML = "";
        }
    });

    $("#rhythm_chapter").on({
        mouseenter: function () {
            document.getElementById("display_chapter").innerHTML = "R<small>HYTHM</small>.";
        },
        mouseleave: function () {
            document.getElementById("display_chapter").innerHTML = "";
        }
    });

    $("#causation_chapter").on({
        mouseenter: function () {
            document.getElementById("display_chapter").innerHTML = "C<small>AUSATION</small>.";
        },
        mouseleave: function () {
            document.getElementById("display_chapter").innerHTML = "";
        }
    });

    $("#gender_chapter").on({
        mouseenter: function () {
            document.getElementById("display_chapter").innerHTML = "G<small>ENDER</small>.";
        },
        mouseleave: function () {
            document.getElementById("display_chapter").innerHTML = "";
        }
    });

    $("#mental_gender_chapter").on({
        mouseenter: function () {
            document.getElementById("display_chapter").innerHTML = "M<small>ENTAL</small> G<small>ENDER</small>.";
        },
        mouseleave: function () {
            document.getElementById("display_chapter").innerHTML = "";
        }
    });

    $("#hermetic_axioms_chapter").on({
        mouseenter: function () {
            document.getElementById("display_chapter").innerHTML = "H<small>ERMETIC</small> A<small>XIOMS</small>.";
        },
        mouseleave: function () {
            document.getElementById("display_chapter").innerHTML = "";
        }
    });
})