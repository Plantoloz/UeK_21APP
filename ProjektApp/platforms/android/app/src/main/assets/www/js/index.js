
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    
    $('.sidenav').sidenav();

    $('.calender').click(function (e) { 
        e.preventDefault();
        $('main').load('sites/calender.html', function () { 
            $.getScript("js/calender.js") 
        });
    });
    $('.map').click(function (e) { 
        e.preventDefault();
        $('main').load('sites/map.html', function () { 
            $.getScript("js/map.js") 
        });
    });

    //Calender Intro
    
    
}
