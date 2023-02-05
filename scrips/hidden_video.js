function show_hide() {
    var vid1 = document.getElementById("hidden_video");
    //var vidtext = document.getElementById("hidden_text");
    var v = "hidden"; 
    if (vid1.style.visibility == "hidden") { v = "visible"; }
    vid1.style.visibility =  v;
 }