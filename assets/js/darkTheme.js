$(document).ready(function () {
    let clickValue = false;


    $("#exit").click(function() {
        $("#darkModeHeader").addClass("disappear");
    })

    $("#switch").on("click", (function() {
        if (document.cookie === ""){
            $("#toggleDark").prop("checked", false);
            document.cookie = "darkMode=true;"
            clickValue = true;
        } else {
            let cookie = document.cookie;
            let splitCookie = cookie.split(";");
            let darkMode = splitCookie[0].split("=");
            
            if (darkMode[1] === "true") {
                darkMode[1] = "false";
                $("#toggleDark").prop("checked", false);

                clickValue = false;
            } else {
                darkMode[1] = "true";
                $("#toggleDark").prop("checked", true);

                clickValue = true;
            }

            document.cookie = [darkMode.join("="), splitCookie.splice(1)].join(";");
            
            /* 
                Some voodoo magic here
                Without return false; click is triggered twice
            */
            return false;
        }
    }));

    /* Select all the element and toggle Dark Mode */
});
  


