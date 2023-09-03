
        const swapButton1 = document.getElementById('swapButton1');
        const swapButton2 = document.getElementById('swapButton2');
        const contentDiv1 = document.getElementById('contentDiv1');
        const contentDiv2 = document.getElementById('contentDiv2');

        swapButton1.addEventListener('click', function() {
            contentDiv2.style.display="none";
            contentDiv1.style.display="flex";
        });

        swapButton2.addEventListener('click', function() {
            contentDiv2.style.display="flex";
            contentDiv1.style.display="none";
          });  
  