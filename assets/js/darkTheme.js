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
            toggleMode(clickValue);
            /* 
                Some voodoo magic here
                Without return false; click is triggered twice
            */
            return false;
        }
    }));

    

    /* Select all the element and toggle Dark Mode */
    const toggleMode = (val) => {
        
        const th = $("table");
        
        /* Rest of the DOM */
        const body = $("body");
        const section = $("section");
        const div = $("body > div");
        const h2 = $("body > h2");

        /* Header */
        const header = $("header");
        const navLogo = $(".nav-logo");

        /* DOM selector for Project Boxes */
        const projectCard = $(".project-container > div");
        const projectText = $(".project-container > div > div > a");
        const projectH2 = $(".project-container > div > div > a > h2");

        if (val == true) {
            header.css({
                "background-color" : "#142850",
            })
            navLogo.css({
                "background-color" : "#142850",
            })
            body.css({
                "background-color" : "#142850"
            })
            h2.css({
                "color" : "#f5f5f9",
                "background-color" : "#142850",
            });
            th.css("color", "#f5f5f9");
            section.css("background-color", "#142850");
            div.css("background-color", "#142850");
            projectCard.css({
                "background-color": "#3c96de",
            });
            projectH2.css({
                "color" : "#f5f5f9"
            });
            projectText.css({
                "color" : "#f5f5f9",
            });
        } else {
            header.css({
                "background-color" : "#006292",
            })
            navLogo.css({
                "background-color" : "#006292",
            })
            body.css({
                "background-color" : "#f5f5f9"
            })
            h2.css({
                "color" : "black",
                "background-color" : "#f5f5f9",
            });
            th.css("color", "black");
            section.css("background-color", "#f5f5f9");
            div.css("background-color", "#f5f5f9");

            projectCard.css({
                "background-color": "#f5f5f9",
            });
            projectH2.css({
                "color" : "black"
            });
            projectText.css({
                "color" : "black",
            });
        }
    }

    // Due to lack of time I choose to do it as such
    $("#switch").click();
    $("#switch").click();
});
  


