// ==UserScript==
// @name        workflowy-in-workflowy
// @namespace   
// @include     https://workflowy.com/*
// @version     1
// @grant       none
// ==/UserScript==

function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

function refresh() {
    // empty for now
    $('#header').toggle();
}

function changePopUpTitle(){
  document.getElementById("wiwTitle").innerHTML = parent.frames.wiwName.document.title;
}

function toggleVisibility() {
  var newLinkText;
  $('#wfagenda-content').toggle();
  if ($('#wfagenda-content').is(':visible')) {
    changePopUpTitle();
  } else {
    document.getElementById("wiwTitle").innerHTML = "Workflowy In Workflowy";
  }
}

$(document).ready(function(){
        $('body').append(`
<div class="ui-dialog ui-widget ui-widget-content ui-corner-all  ui-draggable" tabindex="-1" role="dialog" aria-labelledby="ui-dialog-title-settingsPopup" id="wfagenda-div"
role="dialog" style="position:fixed; width:450px; z-index: 100; bottom:20px; right:20px; padding: 0px; border: 1px solid #999; background-color: #fff;">
<a id="wfagenda-toggle-link" href="#" onclick="wfagenda.toggleVisibility(); return false;" style="text-decoration: none">
<div id="wiwTitle" class="title ui-dialog-titlebar ui-widget-header">Workflowy in Workflowy</div></a>
<div id="wfagenda-content" style="margin: 10px; display: none;">
    <div>
    <iframe id="wiw" name="wiwName" onload="$("#wiw").contents().find("#header").toggle();" height="500px" width="440px" sandbox="allow-scripts allow-pointer-lock allow-forms allow-same-origin" src="https://workflowy.com"></iframe>
    </div>
  </div>
</div>
`);
  window.wfagenda = {
    "refresh": refresh,
    "toggleVisibility": toggleVisibility,
  };
    // Let's hide some items
    parent.frames.wiwName.document.getElementById("wfagenda-div").style.display = "none";
    parent.frames.wiwName.document.getElementById("logo").style.display = "none";
    parent.frames.wiwName.document.getElementById("savedViewHUDButton").style.display = "none";
    //parent.frames.wiwName.document.getElementsByClassName("page")[1].style.padding = "5px";
    //parent.frames.wiwName.document.getElementById("getMoreSpaceButtonTopRight").style.display = "none";
    //parent.frames.wiwName.document.getElementById("bottomLinks").style.display = "none";
    //parent.frames.wiwName.document.getElementById("proPitch").style.display = "none";
});

// Borrowing title tweak from https://greasyfork.org/scripts/3381-workflowy-title-tweak/code/WorkFlowy%20-%20Title%20tweak.user.js

setInterval(function() {
    if (document.title == 'WorkFlowy - Organize your brain.')
        document.title = 'WorkFlowy';
    else
        document.title = document.title.replace(/ - WorkFlowy$/, '');
    if ($('#wfagenda-content').is(':visible')) changePopUpTitle();
}, 100);

// Catch ALT+A as to open + focus in pop-up
document.onkeyup=function(e){
  var k = k || window.event; // for IE to cover IEs window event-object
  if(k.altKey && k.which == 65) {
    if ($('#wfagenda-content').is(':visible')) {
      return false;
    } else {
        toggleVisilility();
        $(wiwName).focus();
    }
    return false;
  }
};
