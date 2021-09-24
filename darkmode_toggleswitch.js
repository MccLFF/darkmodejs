

    document.getElementById("switch").addEventListener("click", darkSwitch);

    // checking if cookie exists
    var cookieState = Cookies.get('darkMode');
    console.log(cookieState)

    // First visit - cookieState is undefined
    // If cookie exists we are parsing it to get a boolean
    if(cookieState === undefined){
        var isDarkmodeEnabled = false;
    }else{
        var isDarkmodeEnabled = JSON.parse(cookieState)
    };

    // Cookie doesn't exist: darkMode = false 
    // Cookie exists: darkMode = true/false
    var darkMode = isDarkmodeEnabled;

    // Add dark mode classes and elements' classes
    // newDarkClass - a name of a class with dark mode attributes 
    // defaultClass - a class of an element a new class will be added to
    var darkClasses = [

        { newDarkClass: 'bg_dark', defaultClass: 'body'},
        { newDarkClass: 'h2_dark', defaultClass: 'h2'},  

    ];

    // Adding classes on page load if darkmode is enabled
    window.onload = addClassesOnLoad();

    // Changing darkMode state and adding or removing classes
    function darkSwitch(){

        // Setting darkMode to its opposite value
        darkMode = !darkMode;

        if(darkMode === true){
            // Looping through an array and deleting classes
            darkClasses.forEach(item => {
                var element = document.querySelectorAll(`.${item.defaultClass}`)
                element.forEach(h => h.classList.add(item.newDarkClass))
            });
        }
        else{
            // Looping through an array and deleting classes
            darkClasses.forEach(item => {
                var element = document.querySelectorAll(`.${item.defaultClass}`)
                element.forEach(h => h.classList.remove(item.newDarkClass))
            });  
        };
        // Saving darkMode state to the cookie
        Cookies.set('darkMode', darkMode);
        }

    // Adding classes on page load if darkmode is enabled
    //
    function addClassesOnLoad(){

        if(darkMode === true){
            
            // Changing switch state
            try {
                document.getElementById("switch").checked = true;
            } catch (error) {
                alert('Use the button from the tutorial or change code for your needs (www.domain.com/#change-switch')
            }

            darkClasses.forEach(item =>{ 
                var element = document.querySelectorAll(`.${item.defaultClass}`)
                element.forEach(h => h.classList.add(item.newDarkClass))   
            });
        };
    }

