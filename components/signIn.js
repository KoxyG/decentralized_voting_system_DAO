/*INTEGRATED JAVASCRIPT FOR THE BUTTONS*/

        var overlay = document.getElementById('myModal');
        var show = document.getElementById('myBtn');
        var show2 = document.getElementById('show-modal-1');
        var close = document.getElementById('close-model-btn');
        /**var span = document.getElementsByClassName("close")[0];**/

        show.addEventListener('click', () => {
            overlay.style.display = "block";
        });

        /**span.addEventListener('click', () => {
            overlay.style.display = "none";
        });**/

        show2.addEventListener('click', () => {
            overlay.style.display = "block"; 
        });

        close.addEventListener('click', () => {
            overlay.style.display = "none";
        });

        window.onclick = function(event) {
            if (event.target === overlay) {
                overlay.style.display = 'none';
            }
        }