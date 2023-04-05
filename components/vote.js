var clickedButton = 0;

    function clickButton(buttonId) {
        if (clickedButton === buttonId) {
                //if the same button is clicked twice, unselect it

            alert("Erro" + buttonId + "is already clicked!");

        } else {
                // if a different button is clicked and another button is already selected, show an error message
            clickedButton = buttonId;
            alert("an be selected at a time");
            }
        }


         /**FIRST BUTTON**/
/**
        var open = document.getElementById('dip');
        var display = document.getElementById('show');
        var myTimer;

        display.addEventListener('click', () => {
            open.style.display = 'block';
            clearTimeout(myTimer); // Clear any previous timer
            myTimer = setTimeout(() => {
                open.style.display = 'none';
            }, 2000);
        });

        

        var open2 = document.getElementById('dip2');
        var display2 = document.getElementById('show2');
        var myTimer;

        display2.addEventListener('click', () => {
            open2.style.display = 'block';
            clearTimeout(myTimer); // Clear any previous timer
            myTimer = setTimeout(() => {
                open2.style.display = 'none';
            }, 2000);
        });

        

        var open3 = document.getElementById('dip3');
        var display3 = document.getElementById('show3');
        var myTimer;

        display3.addEventListener('click', () => {
            open3.style.display = 'block';
            clearTimeout(myTimer); // Clear any previous timer
            myTimer = setTimeout(() => {
                open3.style.display = 'none';
            }, 2000);
        });

        

        var open4 = document.getElementById('dip4');
        var display4 = document.getElementById('show4');
        var myTimer;

        display4.addEventListener('click', () => {
            open4.style.display = 'block';
            clearTimeout(myTimer); // Clear any previous timer
            myTimer = setTimeout(() => {
                open4.style.display = 'none';
            }, 2000);
        });

        **/   




var next = document.getElementById('resultPage');

    next.addEventListener('click', () => {
        window.document.location = './result.html';
    });