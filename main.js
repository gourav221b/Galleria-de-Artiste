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


// const targets = document.querySelectorAll('img');

// const lazyLoad = target => {
//     const io = new IntersectionObserver((entries, observer) => {
//         console.log(entries)
//         entries.forEach(entry => {
//             console.log('😍');

//             if (entry.isIntersecting) {
//                 const img = entry.target;
//                 const src = img.getAttribute('data-lazy');

//                 img.setAttribute('src', src);


//                 observer.disconnect();
//             }
//         });
//     });

//     io.observe(target)
// };

// targets.forEach(lazyLoad);