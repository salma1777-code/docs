//MAKE THE MAGIC HAPPEN
$(document).ready(function () {
    
    function flyveRundt() {
        const screenWidth = $(window).width();
        const screenHeight = $(window).height();

        const randomX = Math.random() * (screenWidth - 200); 
        const randomY = Math.random() * (screenHeight - 200);

        $('#butterfly').css({
            transition: 'all 3s linear',
            left: randomX + 'px',
            top: randomY + 'px'
        });
    }

    // Sommerfugl bevægelse hvert 3.sek
    setInterval(flyveRundt, 3000);

    // nettet følger efter vores mus
    $(document).mousemove(function (event) {
        $('#net').css({
            top: event.pageY - 50,
            left: event.pageX - 50
        });

        // udregner distacen mellem musen og nettet
        const net = $('#net');
        const butterfly = $('#butterfly');
        const netOffset = net.offset();
        const butterflyOffset = butterfly.offset();

        const distance = Math.sqrt(
            Math.pow(netOffset.left - butterflyOffset.left, 2) +
            Math.pow(netOffset.top - butterflyOffset.top, 2)
        );

        // når bettet kommet tæt nok på sommerfuglen skal den flyve væk
        if (distance < 200) {
            let newX, newY;
            do {
                newX = Math.random() * ($(window).width() - 200);
                newY = Math.random() * ($(window).height() - 200);
            } while (
                Math.sqrt(
                    Math.pow(newX - netOffset.left, 2) +
                    Math.pow(newY - netOffset.top, 2)
                ) < 300
            );

            butterfly.css({
                transition: 'all 0.3s linear',
                left: newX + 'px',
                top: newY + 'px'
            });
        }
    });

   
    let isPouring = false; 

    // kanden kan bevæge sig når man trykker
    $('#wateringcan').on('click', function () {
        isPouring = !isPouring;
        $(this).toggleClass('tilted'); // her kan det fjernes

        if (isPouring) {
            pourWater(); // vandråber
        }
    });

    
    function pourWater() {
        if (!isPouring) return; // vanddråber skal ikke komme ud

        $('.waterdrop').each(function (index, drop) {
            const $drop = $(drop);

            if ($drop.css('display') === 'none') {
               
                const canOffset = $('#wateringcan').offset();
                const randomOffset = Math.random() * 20 - 10; //randomt hvor vandråberne restarter
                $drop.css({
                    left: canOffset.left + 40 + randomOffset,
                    top: canOffset.top + 90,
                    display: 'block' // at man kan se vandråberne
                });
            }

           
            $drop.animate(
                { top: $(window).height() + 20 }, 
                2000, 
                function () {
                    
                    const canOffset = $('#wateringcan').offset();
                    const randomOffset = Math.random() * 20 - 10;
                    $drop.css({
                        left: canOffset.left + 40 + randomOffset,
                        top: canOffset.top + 90,
                        display: 'none' // gem indtil det sakl tilbage
                    });
                }
            );
        });

        setTimeout(pourWater, 500); 
    }
    $(document).ready(function () {
        // æblerne skal paceres random
        function placeApples() {
            $('.apple').each(function () {
                const treeOffset = $('#tree').offset();
                const treeWidth = $('#tree').width();
                const crownHeight = $('#tree').height() / 2; // første halvdel af træet
    
                
                const randomX = Math.random() * (treeWidth - 40); 
                const randomY = Math.random() * crownHeight - 20; 
    
                $(this).css({
                    left: treeOffset.left + randomX + 'px',
                    top: treeOffset.top + randomY + 'px',
                    display: 'block', // synliggør æbler
                    position: 'absolute' //positionen 
                });
            });
        }
    
      
        placeApples();
    
        // klik for æbler
        $(document).on('click', '.apple', function () {
            const $apple = $(this); // æblet man trykker på
            const basketOffset = $('#basketfront').offset();
    
            // æblerne skal bevæge sig hen til kurven
            $apple.animate(
                {
                    left: basketOffset.left + 20 + 'px',
                    top: basketOffset.top + 20 + 'px'
                },
                1000, 
                function () {
                    // gem æblerne væk når de er i kurven
                    $apple.css('display', 'none');
                    console.log('Apple placed inside the basket.');
                }
            );
    });
});

});



  
