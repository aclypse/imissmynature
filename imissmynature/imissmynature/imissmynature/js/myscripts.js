    let popupWindowActive = false
    function popupMenu(){
        if (popupWindowActive === true) {
            document.getElementById("open-window").style.display = "none"

            return popupWindowActive = false
        } else {
            document.getElementById("open-window").style.display = "block"
            return popupWindowActive = true}

    }

    function openWindow(){
        document.getElementById("open-window").style.display="block"
    }
    // function closeWindow() {
    //     if (popupWindowActive===true)
    // }

    const slider = document.getElementById("slider");
    slider.addEventListener("change", function(e){
        console.log(e.target);
    });