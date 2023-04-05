//creating variable for end time
    var countDownDate = new Date("July 06, 2023 00:00:00").getTime();
    var x = setInterval(function () {
      //setting variables for recent time and others
      var now = new Date().getTime();
      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      

      //displaying the days, hours, minutes, seconds


      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      

      //what the time should display when countdown is over

      if (distance < 0) {
        clearInterval(x);

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
      }

    }, 1000);




    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelector(".nav-links");

    burger.addEventListener("click", function() {
      burger.classList.toggle('is-active');
      navLinks.classList.toggle('is-active');
    });

    /*it seems is-active or any random name you call it is a class that was created during this process
    and needs to be called or included in the media query of the mibile view*/

    document.querySelectorAll("a").forEach(n => n.
    addEventListener("click",() => {
      burger.classList.remove("is-active");
      navLinks.classList.remove("is-active");
    }));






    const init = function() {
      let secondBtn = document.querySelector("#signIn");
      
      secondBtn.addEventListener('click', function() {
        window.document.location = './signIn_page.html';
      });
    };

    document.addEventListener('DOMContentLoaded',  function() {
      init();
    });





    const inits = function () {
      let secondBtn2 = document.querySelector("#tutorial");

      secondBtn2.addEventListener('click', function () {
        window.document.location = './how_it_works.html';
      });
    };

    document.addEventListener('DOMContentLoaded', function () {
      inits();
    });



