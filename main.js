var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

//likes

(function(d, e, s) {
    if (d.getElementById("likebtn_wjs")) return;
    a = d.createElement(e);
    m = d.getElementsByTagName(e)[0];
    a.async = 1;
    a.id = "likebtn_wjs";
    a.src = s;
    m.parentNode.insertBefore(a, m)
})(document, "script", "//w.likebtn.com/js/w/widget.js");


// ARTISTS AND PHOTOGRAPHERS
// ARTIST

function gourav() {
    document.getElementById("artist_main").style.display = "none";
    document.getElementById("artist_hridya").style.display = "none";
    document.getElementById("artist_swastik").style.display = "none";
    document.getElementById("artist_aayush").style.display = "none";
    document.getElementById("artist_arya").style.display = "none";
    document.getElementById("artist_sandi").style.display = "none";
    document.getElementById("artist_riyanka").style.display = "none";
    document.getElementById("artist_godhuli").style.display = "none";
    document.getElementById("artist_anupama").style.display = "none";
    document.getElementById("artist_prodipto").style.display = "none";
    document.getElementById("artist_arpita").style.display = "none";
    document.getElementById("artist_parthib").style.display = "none";
    document.getElementById("artist_arkadeep").style.display = "none";
    document.getElementById("artist_shambhabi").style.display = "none";
    document.getElementById("artist_rudranshu").style.display = "none";
    document.getElementById("artist_jeet").style.display = "none";
    document.getElementById("artist_gourav").style.display = " block";
    document.getElementById("buttons").style.display = " flex";
    scroll(0, 0);
}

function hri() {
    document.getElementById("artist_main").style.display = "none";
    document.getElementById("artist_gourav").style.display = "none";
    document.getElementById("artist_swastik").style.display = "none";
    document.getElementById("artist_aayush").style.display = "none";
    document.getElementById("artist_arya").style.display = "none";
    document.getElementById("artist_sandi").style.display = "none";
    document.getElementById("artist_riyanka").style.display = "none";
    document.getElementById("artist_godhuli").style.display = "none";
    document.getElementById("artist_anupama").style.display = "none";
    document.getElementById("artist_prodipto").style.display = "none";
    document.getElementById("artist_arpita").style.display = "none";
    document.getElementById("artist_parthib").style.display = "none";
    document.getElementById("artist_arkadeep").style.display = "none";
    document.getElementById("artist_shambhabi").style.display = "none";
    document.getElementById("artist_rudranshu").style.display = "none";
    document.getElementById("artist_jeet").style.display = "none";

    document.getElementById("artist_hridya").style.display = " block";
    document.getElementById("buttons").style.display = " flex";
    scroll(0, 0);
}

function swastik() {
    document.getElementById("artist_main").style.display = "none";
    document.getElementById("artist_hridya").style.display = "none";
    document.getElementById("artist_gourav").style.display = "none";
    document.getElementById("artist_aayush").style.display = "none";
    document.getElementById("artist_arya").style.display = "none";
    document.getElementById("artist_sandi").style.display = "none";
    document.getElementById("artist_riyanka").style.display = "none";
    document.getElementById("artist_godhuli").style.display = "none";
    document.getElementById("artist_anupama").style.display = "none";
    document.getElementById("artist_prodipto").style.display = "none";
    document.getElementById("artist_arpita").style.display = "none";
    document.getElementById("artist_parthib").style.display = "none";
    document.getElementById("artist_arkadeep").style.display = "none";
    document.getElementById("artist_shambhabi").style.display = "none";
    document.getElementById("artist_rudranshu").style.display = "none";
    document.getElementById("artist_jeet").style.display = "none";
    document.getElementById("artist_swastik").style.display = " block";
    document.getElementById("buttons").style.display = " flex";
    scroll(0, 0);
}

function aayush() {
    scroll(0, 0);
    document.getElementById("artist_main").style.display = "none";
    document.getElementById("artist_hridya").style.display = "none";
    document.getElementById("artist_gourav").style.display = "none";
    document.getElementById("artist_swastik").style.display = "none";
    document.getElementById("artist_arya").style.display = "none";
    document.getElementById("artist_sandi").style.display = "none";
    document.getElementById("artist_riyanka").style.display = "none";
    document.getElementById("artist_godhuli").style.display = "none";
    document.getElementById("artist_anupama").style.display = "none";
    document.getElementById("artist_prodipto").style.display = "none";
    document.getElementById("artist_arpita").style.display = "none";
    document.getElementById("artist_parthib").style.display = "none";
    document.getElementById("artist_arkadeep").style.display = "none";
    document.getElementById("artist_shambhabi").style.display = "none";
    document.getElementById("artist_rudranshu").style.display = "none";
    document.getElementById("artist_jeet").style.display = "none";
    document.getElementById("artist_aayush").style.display = " block";
    document.getElementById("buttons").style.display = " flex";
}

function arya() {
    scroll(0, 0);
    document.getElementById("artist_main").style.display = "none";
    document.getElementById("artist_hridya").style.display = "none";
    document.getElementById("artist_gourav").style.display = "none";
    document.getElementById("artist_swastik").style.display = "none";
    document.getElementById("artist_aayush").style.display = "none";
    document.getElementById("artist_sandi").style.display = "none";
    document.getElementById("artist_riyanka").style.display = "none";
    document.getElementById("artist_godhuli").style.display = "none";
    document.getElementById("artist_anupama").style.display = "none";
    document.getElementById("artist_prodipto").style.display = "none";
    document.getElementById("artist_arpita").style.display = "none";
    document.getElementById("artist_parthib").style.display = "none";
    document.getElementById("artist_arkadeep").style.display = "none";
    document.getElementById("artist_shambhabi").style.display = "none";
    document.getElementById("artist_rudranshu").style.display = "none";
    document.getElementById("artist_jeet").style.display = "none";
    document.getElementById("artist_arya").style.display = " block";
    document.getElementById("buttons").style.display = " flex";
}

function sandi() {

    scroll(0, 0);
    document.getElementById("artist_main").style.display = "none";
    document.getElementById("artist_hridya").style.display = "none";
    document.getElementById("artist_gourav").style.display = "none";
    document.getElementById("artist_swastik").style.display = "none";
    document.getElementById("artist_arya").style.display = "none";
    document.getElementById("artist_aayush").style.display = "none";
    document.getElementById("artist_riyanka").style.display = "none";
    document.getElementById("artist_godhuli").style.display = "none";
    document.getElementById("artist_anupama").style.display = "none";
    document.getElementById("artist_prodipto").style.display = "none";
    document.getElementById("artist_arpita").style.display = "none";
    document.getElementById("artist_parthib").style.display = "none";
    document.getElementById("artist_arkadeep").style.display = "none";
    document.getElementById("artist_shambhabi").style.display = "none";
    document.getElementById("artist_rudranshu").style.display = "none";
    document.getElementById("artist_jeet").style.display = "none";
    document.getElementById("artist_sandi").style.display = " block";
    document.getElementById("buttons").style.display = " flex";
}

function riyanka() {
    scroll(0, 0);
    document.getElementById("artist_main").style.display = "none";
    document.getElementById("artist_hridya").style.display = "none";
    document.getElementById("artist_gourav").style.display = "none";
    document.getElementById("artist_swastik").style.display = "none";
    document.getElementById("artist_arya").style.display = "none";
    document.getElementById("artist_aayush").style.display = "none";
    document.getElementById("artist_sandi").style.display = "none";
    document.getElementById("artist_godhuli").style.display = "none";
    document.getElementById("artist_anupama").style.display = "none";
    document.getElementById("artist_prodipto").style.display = "none";
    document.getElementById("artist_arpita").style.display = "none";
    document.getElementById("artist_parthib").style.display = "none";
    document.getElementById("artist_arkadeep").style.display = "none";
    document.getElementById("artist_shambhabi").style.display = "none";
    document.getElementById("artist_rudranshu").style.display = "none";
    document.getElementById("artist_jeet").style.display = "none";
    document.getElementById("artist_riyanka").style.display = " block";
    document.getElementById("buttons").style.display = " flex";
}

function anupama() {
    scroll(0, 0);
    document.getElementById("artist_main").style.display = "none";
    document.getElementById("artist_hridya").style.display = "none";
    document.getElementById("artist_gourav").style.display = "none";
    document.getElementById("artist_swastik").style.display = "none";
    document.getElementById("artist_arya").style.display = "none";
    document.getElementById("artist_aayush").style.display = "none";
    document.getElementById("artist_sandi").style.display = "none";
    document.getElementById("artist_godhuli").style.display = "none";
    document.getElementById("artist_riyanka").style.display = "none";
    document.getElementById("artist_prodipto").style.display = "none";
    document.getElementById("artist_arpita").style.display = "none";
    document.getElementById("artist_parthib").style.display = "none";
    document.getElementById("artist_arkadeep").style.display = "none";
    document.getElementById("artist_shambhabi").style.display = "none";
    document.getElementById("artist_rudranshu").style.display = "none";
    document.getElementById("artist_jeet").style.display = "none";
    document.getElementById("artist_anupama").style.display = " block";
    document.getElementById("buttons").style.display = " flex";
}

function godhuli() {
    scroll(0, 0);
    document.getElementById("artist_main").style.display = "none";
    document.getElementById("artist_hridya").style.display = "none";
    document.getElementById("artist_gourav").style.display = "none";
    document.getElementById("artist_swastik").style.display = "none";
    document.getElementById("artist_arya").style.display = "none";
    document.getElementById("artist_aayush").style.display = "none";
    document.getElementById("artist_sandi").style.display = "none";
    document.getElementById("artist_anupama").style.display = "none";
    document.getElementById("artist_riyanka").style.display = "none";
    document.getElementById("artist_prodipto").style.display = "none";
    document.getElementById("artist_arpita").style.display = "none";
    document.getElementById("artist_parthib").style.display = "none";
    document.getElementById("artist_arkadeep").style.display = "none";
    document.getElementById("artist_shambhabi").style.display = "none";
    document.getElementById("artist_rudranshu").style.display = "none";
    document.getElementById("artist_jeet").style.display = "none";
    document.getElementById("artist_godhuli").style.display = " block";
    document.getElementById("buttons").style.display = " flex";
}

function prodipto() {
    scroll(0, 0);
    document.getElementById("artist_main").style.display = "none";
    document.getElementById("artist_hridya").style.display = "none";
    document.getElementById("artist_gourav").style.display = "none";
    document.getElementById("artist_swastik").style.display = "none";
    document.getElementById("artist_arya").style.display = "none";
    document.getElementById("artist_aayush").style.display = "none";
    document.getElementById("artist_sandi").style.display = "none";
    document.getElementById("artist_anupama").style.display = "none";
    document.getElementById("artist_riyanka").style.display = "none";
    document.getElementById("artist_godhuli").style.display = "none";
    document.getElementById("artist_arpita").style.display = "none";
    document.getElementById("artist_parthib").style.display = "none";
    document.getElementById("artist_arkadeep").style.display = "none";
    document.getElementById("artist_shambhabi").style.display = "none";
    document.getElementById("artist_rudranshu").style.display = "none";
    document.getElementById("artist_jeet").style.display = "none";
    document.getElementById("artist_prodipto").style.display = " block";
    document.getElementById("buttons").style.display = " flex";
}

function arpita() {
    scroll(0, 0);
    document.getElementById("artist_main").style.display = "none";
    document.getElementById("artist_hridya").style.display = "none";
    document.getElementById("artist_gourav").style.display = "none";
    document.getElementById("artist_swastik").style.display = "none";
    document.getElementById("artist_arya").style.display = "none";
    document.getElementById("artist_aayush").style.display = "none";
    document.getElementById("artist_sandi").style.display = "none";
    document.getElementById("artist_anupama").style.display = "none";
    document.getElementById("artist_riyanka").style.display = "none";
    document.getElementById("artist_godhuli").style.display = "none";
    document.getElementById("artist_prodipto").style.display = "none";
    document.getElementById("artist_parthib").style.display = "none";
    document.getElementById("artist_arkadeep").style.display = "none";
    document.getElementById("artist_shambhabi").style.display = "none";
    document.getElementById("artist_rudranshu").style.display = "none";
    document.getElementById("artist_jeet").style.display = "none";
    document.getElementById("artist_arpita").style.display = " block";
    document.getElementById("buttons").style.display = " flex";
}

function parthib() {
    scroll(0, 0);
    document.getElementById("artist_main").style.display = "none";
    document.getElementById("artist_hridya").style.display = "none";
    document.getElementById("artist_gourav").style.display = "none";
    document.getElementById("artist_swastik").style.display = "none";
    document.getElementById("artist_arya").style.display = "none";
    document.getElementById("artist_aayush").style.display = "none";
    document.getElementById("artist_sandi").style.display = "none";
    document.getElementById("artist_anupama").style.display = "none";
    document.getElementById("artist_riyanka").style.display = "none";
    document.getElementById("artist_godhuli").style.display = "none";
    document.getElementById("artist_prodipto").style.display = "none";
    document.getElementById("artist_arpita").style.display = "none";
    document.getElementById("artist_arkadeep").style.display = "none";
    document.getElementById("artist_shambhabi").style.display = "none";
    document.getElementById("artist_rudranshu").style.display = "none";
    document.getElementById("artist_jeet").style.display = "none";
    document.getElementById("artist_parthib").style.display = " block";
    document.getElementById("buttons").style.display = " flex";
}

function arkadeep() {
    scroll(0, 0);
    document.getElementById("artist_main").style.display = "none";
    document.getElementById("artist_hridya").style.display = "none";
    document.getElementById("artist_gourav").style.display = "none";
    document.getElementById("artist_swastik").style.display = "none";
    document.getElementById("artist_arya").style.display = "none";
    document.getElementById("artist_aayush").style.display = "none";
    document.getElementById("artist_sandi").style.display = "none";
    document.getElementById("artist_anupama").style.display = "none";
    document.getElementById("artist_riyanka").style.display = "none";
    document.getElementById("artist_godhuli").style.display = "none";
    document.getElementById("artist_prodipto").style.display = "none";
    document.getElementById("artist_arpita").style.display = "none";
    document.getElementById("artist_parthib").style.display = "none";
    document.getElementById("artist_shambhabi").style.display = "none";
    document.getElementById("artist_rudranshu").style.display = "none";
    document.getElementById("artist_jeet").style.display = "none";
    document.getElementById("artist_arkadeep").style.display = " block";
    document.getElementById("buttons").style.display = " flex";
}

function shambhabi() {
    scroll(0, 0);
    document.getElementById("artist_main").style.display = "none";
    document.getElementById("artist_hridya").style.display = "none";
    document.getElementById("artist_gourav").style.display = "none";
    document.getElementById("artist_swastik").style.display = "none";
    document.getElementById("artist_arya").style.display = "none";
    document.getElementById("artist_aayush").style.display = "none";
    document.getElementById("artist_sandi").style.display = "none";
    document.getElementById("artist_anupama").style.display = "none";
    document.getElementById("artist_riyanka").style.display = "none";
    document.getElementById("artist_godhuli").style.display = "none";
    document.getElementById("artist_prodipto").style.display = "none";
    document.getElementById("artist_arpita").style.display = "none";
    document.getElementById("artist_parthib").style.display = "none";
    document.getElementById("artist_arkadeep").style.display = "none";
    document.getElementById("artist_rudranshu").style.display = "none";
    document.getElementById("artist_jeet").style.display = "none";
    document.getElementById("artist_shambhabi").style.display = " block";
    document.getElementById("buttons").style.display = " flex";
}

function rudranshu() {
    scroll(0, 0);
    document.getElementById("artist_main").style.display = "none";
    document.getElementById("artist_hridya").style.display = "none";
    document.getElementById("artist_gourav").style.display = "none";
    document.getElementById("artist_swastik").style.display = "none";
    document.getElementById("artist_arya").style.display = "none";
    document.getElementById("artist_aayush").style.display = "none";
    document.getElementById("artist_sandi").style.display = "none";
    document.getElementById("artist_anupama").style.display = "none";
    document.getElementById("artist_riyanka").style.display = "none";
    document.getElementById("artist_godhuli").style.display = "none";
    document.getElementById("artist_prodipto").style.display = "none";
    document.getElementById("artist_arpita").style.display = "none";
    document.getElementById("artist_parthib").style.display = "none";
    document.getElementById("artist_arkadeep").style.display = "none";
    document.getElementById("artist_shambhabi").style.display = "none";
    document.getElementById("artist_jeet").style.display = "none";
    document.getElementById("artist_rudranshu").style.display = " block";
    document.getElementById("buttons").style.display = " flex";
}

function jeet() {
    scroll(0, 0);
    document.getElementById("artist_main").style.display = "none";
    document.getElementById("artist_hridya").style.display = "none";
    document.getElementById("artist_gourav").style.display = "none";
    document.getElementById("artist_swastik").style.display = "none";
    document.getElementById("artist_arya").style.display = "none";
    document.getElementById("artist_aayush").style.display = "none";
    document.getElementById("artist_sandi").style.display = "none";
    document.getElementById("artist_anupama").style.display = "none";
    document.getElementById("artist_riyanka").style.display = "none";
    document.getElementById("artist_godhuli").style.display = "none";
    document.getElementById("artist_prodipto").style.display = "none";
    document.getElementById("artist_arpita").style.display = "none";
    document.getElementById("artist_parthib").style.display = "none";
    document.getElementById("artist_arkadeep").style.display = "none";
    document.getElementById("artist_shambhabi").style.display = "none";
    document.getElementById("artist_rudranshu").style.display = "none";
    document.getElementById("artist_jeet").style.display = " block";
    document.getElementById("buttons").style.display = " flex";
}

// PHOTOGRAPHERS
// AAYUSH
function Aayush() {
    scroll(0, 0);
    document.getElementById("photographer_main").style.display = "none";
    document.getElementById("photographer_dodo").style.display = "none";
    document.getElementById("photographer_arko").style.display = "none";
    document.getElementById("photographer_debosmita").style.display = "none";
    document.getElementById("photographer_aheli").style.display = "none";
    document.getElementById("photographer_parthib").style.display = "none";
    document.getElementById("photographer_arkadeep").style.display = "none";
    document.getElementById("photographer_aa").style.display = "none";
    document.getElementById("photographer_shambhabi").style.display = "none";
    document.getElementById("photographer_deadshot").style.display = "none";
    document.getElementById("photographer_arpan").style.display = "none";
    document.getElementById("photographer_kritika").style.display = "none";
    document.getElementById("photographer_aditya").style.display = "none";

    document.getElementById("photographer_aayush").style.display = "block";
    document.getElementById("buttons").style.display = "flex";
}

function arko() {
    scroll(0, 0);
    document.getElementById("photographer_main").style.display = "none";
    document.getElementById("photographer_dodo").style.display = "none";
    document.getElementById("photographer_debadyuti").style.display = "none";
    document.getElementById("photographer_dodo").style.display = "none";
    document.getElementById("photographer_debadyuti").style.display = "none";
    document.getElementById("photographer_aayush").style.display = "none";
    document.getElementById("photographer_debosmita").style.display = "none";
    document.getElementById("photographer_aheli").style.display = "none";
    document.getElementById("photographer_parthib").style.display = "none";
    document.getElementById("photographer_arkadeep").style.display = "none";
    document.getElementById("photographer_aa").style.display = "none";
    document.getElementById("photographer_shambhabi").style.display = "none";
    document.getElementById("photographer_deadshot").style.display = "none";
    document.getElementById("photographer_arpan").style.display = "none";
    document.getElementById("photographer_kritika").style.display = "none";
    document.getElementById("photographer_aditya").style.display = "none";
    document.getElementById("photographer_arko").style.display = " block";
    document.getElementById("buttons").style.display = " flex";
}

function debosmita() {
    scroll(0, 0);
    document.getElementById("photographer_main").style.display = "none";
    document.getElementById("photographer_dodo").style.display = "none";
    document.getElementById("photographer_debadyuti").style.display = "none";
    document.getElementById("photographer_aayush").style.display = "none";
    document.getElementById("photographer_arko").style.display = "none";
    document.getElementById("photographer_aheli").style.display = "none";
    document.getElementById("photographer_parthib").style.display = "none";
    document.getElementById("photographer_arkadeep").style.display = "none";
    document.getElementById("photographer_aa").style.display = "none";
    document.getElementById("photographer_shambhabi").style.display = "none";
    document.getElementById("photographer_deadshot").style.display = "none";
    document.getElementById("photographer_arpan").style.display = "none";
    document.getElementById("photographer_kritika").style.display = "none";
    document.getElementById("photographer_aditya").style.display = "none";
    document.getElementById("photographer_debosmita").style.display = " block";
    document.getElementById("buttons").style.display = " flex";
}

function aheli() {
    scroll(0, 0);
    document.getElementById("photographer_main").style.display = "none";
    document.getElementById("photographer_dodo").style.display = "none";
    document.getElementById("photographer_debadyuti").style.display = "none";
    document.getElementById("photographer_aayush").style.display = "none";
    document.getElementById("photographer_arko").style.display = "none";
    document.getElementById("photographer_debosmita").style.display = "none";
    document.getElementById("photographer_parthib").style.display = "none";
    document.getElementById("photographer_arkadeep").style.display = "none";
    document.getElementById("photographer_aa").style.display = "none";
    document.getElementById("photographer_shambhabi").style.display = "none";
    document.getElementById("photographer_deadshot").style.display = "none";
    document.getElementById("photographer_arpan").style.display = "none";
    document.getElementById("photographer_kritika").style.display = "none";
    document.getElementById("photographer_aditya").style.display = "none";
    document.getElementById("photographer_aheli").style.display = " block";
    document.getElementById("buttons").style.display = " flex";
}

function Parthib() {
    scroll(0, 0);
    document.getElementById("photographer_main").style.display = "none";
    document.getElementById("photographer_dodo").style.display = "none";
    document.getElementById("photographer_debadyuti").style.display = "none";
    document.getElementById("photographer_aayush").style.display = "none";
    document.getElementById("photographer_arko").style.display = "none";
    document.getElementById("photographer_debosmita").style.display = "none";
    document.getElementById("photographer_aheli").style.display = "none";
    document.getElementById("photographer_arkadeep").style.display = "none";
    document.getElementById("photographer_aa").style.display = "none";
    document.getElementById("photographer_shambhabi").style.display = "none";
    document.getElementById("photographer_deadshot").style.display = "none";
    document.getElementById("photographer_arpan").style.display = "none";
    document.getElementById("photographer_kritika").style.display = "none";
    document.getElementById("photographer_aditya").style.display = "none";
    document.getElementById("photographer_parthib").style.display = " block";
    document.getElementById("buttons").style.display = " flex";
}

function Arkadeep() {
    scroll(0, 0);
    document.getElementById("photographer_main").style.display = "none";
    document.getElementById("photographer_dodo").style.display = "none";
    document.getElementById("photographer_debadyuti").style.display = "none";
    document.getElementById("photographer_aayush").style.display = "none";
    document.getElementById("photographer_arko").style.display = "none";
    document.getElementById("photographer_debosmita").style.display = "none";
    document.getElementById("photographer_aheli").style.display = "none";
    document.getElementById("photographer_parthib").style.display = "none";
    document.getElementById("photographer_aa").style.display = "none";
    document.getElementById("photographer_shambhabi").style.display = "none";
    document.getElementById("photographer_deadshot").style.display = "none";
    document.getElementById("photographer_arpan").style.display = "none";
    document.getElementById("photographer_kritika").style.display = "none";
    document.getElementById("photographer_aditya").style.display = "none";
    document.getElementById("photographer_arkadeep").style.display = " block";
    document.getElementById("buttons").style.display = " flex";
}

function aa() {
    scroll(0, 0);
    document.getElementById("photographer_main").style.display = "none";
    document.getElementById("photographer_dodo").style.display = "none";
    document.getElementById("photographer_debadyuti").style.display = "none";
    document.getElementById("photographer_aayush").style.display = "none";
    document.getElementById("photographer_arko").style.display = "none";
    document.getElementById("photographer_debosmita").style.display = "none";
    document.getElementById("photographer_aheli").style.display = "none";
    document.getElementById("photographer_parthib").style.display = "none";
    document.getElementById("photographer_arkadeep").style.display = "none";
    document.getElementById("photographer_shambhabi").style.display = "none";
    document.getElementById("photographer_deadshot").style.display = "none";
    document.getElementById("photographer_arpan").style.display = "none";
    document.getElementById("photographer_kritika").style.display = "none";
    document.getElementById("photographer_aditya").style.display = "none";
    document.getElementById("photographer_aa").style.display = " block";
    document.getElementById("buttons").style.display = " flex";
}

function Shambhabi() {
    scroll(0, 0);
    document.getElementById("photographer_main").style.display = "none";
    document.getElementById("photographer_dodo").style.display = "none";
    document.getElementById("photographer_debadyuti").style.display = "none";
    document.getElementById("photographer_aayush").style.display = "none";
    document.getElementById("photographer_arko").style.display = "none";
    document.getElementById("photographer_debosmita").style.display = "none";
    document.getElementById("photographer_aheli").style.display = "none";
    document.getElementById("photographer_parthib").style.display = "none";
    document.getElementById("photographer_arkadeep").style.display = "none";
    document.getElementById("photographer_arpan").style.display = "none";
    document.getElementById("photographer_kritika").style.display = "none";
    document.getElementById("photographer_aditya").style.display = "none";
    document.getElementById("photographer_aa").style.display = "none";
    document.getElementById("photographer_deadshot").style.display = "none";

    document.getElementById("photographer_shambhabi").style.display = " block";
    document.getElementById("buttons").style.display = " flex";
}

function deadshot() {
    scroll(0, 0);
    document.getElementById("photographer_main").style.display = "none";
    document.getElementById("photographer_dodo").style.display = "none";
    document.getElementById("photographer_debadyuti").style.display = "none";
    document.getElementById("photographer_aayush").style.display = "none";
    document.getElementById("photographer_arko").style.display = "none";
    document.getElementById("photographer_debosmita").style.display = "none";
    document.getElementById("photographer_aheli").style.display = "none";
    document.getElementById("photographer_parthib").style.display = "none";
    document.getElementById("photographer_arkadeep").style.display = "none";
    document.getElementById("photographer_aa").style.display = "none";
    document.getElementById("photographer_arpan").style.display = "none";
    document.getElementById("photographer_kritika").style.display = "none";
    document.getElementById("photographer_aditya").style.display = "none";
    document.getElementById("photographer_deadshot").style.display = " block";

    document.getElementById("photographer_shambhabi").style.display = "none";
    document.getElementById("buttons").style.display = " flex";
}

function kritika() {
    scroll(0, 0);
    document.getElementById("photographer_main").style.display = "none";
    document.getElementById("photographer_dodo").style.display = "none";
    document.getElementById("photographer_debadyuti").style.display = "none";
    document.getElementById("photographer_aayush").style.display = "none";
    document.getElementById("photographer_arko").style.display = "none";
    document.getElementById("photographer_debosmita").style.display = "none";
    document.getElementById("photographer_aheli").style.display = "none";
    document.getElementById("photographer_parthib").style.display = "none";
    document.getElementById("photographer_arkadeep").style.display = "none";
    document.getElementById("photographer_aa").style.display = "none";
    document.getElementById("photographer_arpan").style.display = "none";
    document.getElementById("photographer_kritika").style.display = "block";
    document.getElementById("photographer_aditya").style.display = "none";
    document.getElementById("photographer_deadshot").style.display = " none";

    document.getElementById("photographer_shambhabi").style.display = "none";
    document.getElementById("buttons").style.display = " flex";

}

function arpan() {
    scroll(0, 0);
    document.getElementById("photographer_main").style.display = "none";
    document.getElementById("photographer_dodo").style.display = "none";
    document.getElementById("photographer_debadyuti").style.display = "none";
    document.getElementById("photographer_aayush").style.display = "none";
    document.getElementById("photographer_arko").style.display = "none";
    document.getElementById("photographer_debosmita").style.display = "none";
    document.getElementById("photographer_aheli").style.display = "none";
    document.getElementById("photographer_parthib").style.display = "none";
    document.getElementById("photographer_arkadeep").style.display = "none";
    document.getElementById("photographer_aa").style.display = "none";
    document.getElementById("photographer_arpan").style.display = "block";
    document.getElementById("photographer_kritika").style.display = "none";
    document.getElementById("photographer_aditya").style.display = "none";
    document.getElementById("photographer_deadshot").style.display = " none";

    document.getElementById("photographer_shambhabi").style.display = "none";
    document.getElementById("buttons").style.display = " flex";

}

function aditya() {
    scroll(0, 0);
    document.getElementById("photographer_main").style.display = "none";
    document.getElementById("photographer_dodo").style.display = "none";
    document.getElementById("photographer_debadyuti").style.display = "none";
    document.getElementById("photographer_aayush").style.display = "none";
    document.getElementById("photographer_arko").style.display = "none";
    document.getElementById("photographer_debosmita").style.display = "none";
    document.getElementById("photographer_aheli").style.display = "none";
    document.getElementById("photographer_parthib").style.display = "none";
    document.getElementById("photographer_arkadeep").style.display = "none";
    document.getElementById("photographer_aa").style.display = "none";
    document.getElementById("photographer_arpan").style.display = "none";
    document.getElementById("photographer_kritika").style.display = "none";
    document.getElementById("photographer_aditya").style.display = "block";
    document.getElementById("photographer_deadshot").style.display = " none";

    document.getElementById("photographer_shambhabi").style.display = "none";
    document.getElementById("buttons").style.display = " flex";
}

function dodo() {
    scroll(0, 0);
    document.getElementById("photographer_main").style.display = "none";
    document.getElementById("photographer_dodo").style.display = "block";
    document.getElementById("photographer_debadyuti").style.display = "none";
    document.getElementById("photographer_aayush").style.display = "none";
    document.getElementById("photographer_arko").style.display = "none";
    document.getElementById("photographer_debosmita").style.display = "none";
    document.getElementById("photographer_aheli").style.display = "none";
    document.getElementById("photographer_parthib").style.display = "none";
    document.getElementById("photographer_arkadeep").style.display = "none";
    document.getElementById("photographer_aa").style.display = "none";
    document.getElementById("photographer_arpan").style.display = "none";
    document.getElementById("photographer_kritika").style.display = "none";
    document.getElementById("photographer_aditya").style.display = "none";
    document.getElementById("photographer_deadshot").style.display = " none";

    document.getElementById("photographer_shambhabi").style.display = "none";
    document.getElementById("buttons").style.display = " flex";
}

function debadyuti() {
    scroll(0, 0);
    document.getElementById("photographer_main").style.display = "none";
    document.getElementById("photographer_dodo").style.display = "none";
    document.getElementById("photographer_debadyuti").style.display = "block";
    document.getElementById("photographer_aayush").style.display = "none";
    document.getElementById("photographer_arko").style.display = "none";
    document.getElementById("photographer_debosmita").style.display = "none";
    document.getElementById("photographer_aheli").style.display = "none";
    document.getElementById("photographer_parthib").style.display = "none";
    document.getElementById("photographer_arkadeep").style.display = "none";
    document.getElementById("photographer_aa").style.display = "none";
    document.getElementById("photographer_arpan").style.display = "none";
    document.getElementById("photographer_kritika").style.display = "none";
    document.getElementById("photographer_aditya").style.display = "none";
    document.getElementById("photographer_deadshot").style.display = " none";

    document.getElementById("photographer_shambhabi").style.display = "none";
    document.getElementById("buttons").style.display = " flex";
}

function first() {
    document.getElementById("next").style.display = "none";
    document.getElementById("prev").style.display = " block";
}

function second() {
    document.getElementById("prev").style.display = "none";
    document.getElementById("next").style.display = " block";
}