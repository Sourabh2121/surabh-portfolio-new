
      new WOW().init();
      
      (function ($) {
        "use strict";

        $(".image-tilt").tilt({
          maxTilt: 24,
          perspective: 1400,
          easing: "cubic-bezier(.03,.98,.52,.99)",
          speed: 1200,
          glare: true,
          maxGlare: 0.3,
          scale: 1.02,
        });
      })(jQuery);

      let count = document.querySelectorAll(".count");
      let arr = Array.from(count);

      arr.map(function (item) {
        let startnumber = 0;

        function counterup() {
          startnumber++;
          item.innerHTML = startnumber;

          if (startnumber == item.dataset.number) {
            clearInterval(stop);
          }
        }

        let stop = setInterval(function () {
          counterup();
        }, 500);
      });
