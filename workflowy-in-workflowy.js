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
role="dialog" style="position:fixed; width:850px; z-index: 100; bottom:20px; right:20px; padding: 0px; border: 1px solid #999; background-color: #fff;">
<a id="wfagenda-toggle-link" href="#" onclick="wfagenda.toggleVisibility(); return false;" style="text-decoration: none">
<div id="wiwTitle" class="title ui-dialog-titlebar ui-widget-header">Workflowy in Workflowy</div></a>
<div id="wfagenda-content" style="margin: 10px; display: none;">
    <div>
    <iframe id="wiw" name="wiwName" onload="$("#wiw").contents().find("#header").toggle();" height="500px" width="840px" sandbox="allow-scripts allow-pointer-lock allow-forms allow-same-origin" src="https://workflowy.com"></iframe>
    </div>
  </div>
</div>
`);
  window.wfagenda = {
    "refresh": refresh,
    "toggleVisibility": toggleVisibility,
  };
    // Let's hide some items
    //parent.frames.wiwName.document.getElementById("wfagenda-div").style.display = "none";
    //parent.frames.wiwName.document.getElementById("logo").style.display = "none";
    //parent.frames.wiwName.document.getElementById("savedViewHUDButton").style.display = "none";
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
document.onkeyup=function(k){
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

(function() {var css = [
	"/* Full width, font, padding and clear out ads. Plus footer slogan. */",
	"",
	"#documentView{font-family: \"Roboto\", sans-serif;font-size:12pt; font-weight: 400;}",
	"  .page{margin:0 !important;padding:30px 120px 20px;width:100% !important;max-width:100%;box-sizing:border-box; transform: none !important;}",
	"  .corner, .edge{display:none}",
	"  #pageContainer{margin-top:0}",
	"",
	"@media (max-width: 1200px) {",
	"    .page{margin:0 !important;padding:30px 60px 20px;}",
	"}",
	"",
	"@media (max-width: 992px) {",
	"    .page{margin:0 !important;padding:30px 50px 20px;}",
	"}",
	"    ",
	"@media (max-width: 768px) {",
	"    .page{margin:0 !important;padding:30px 30px 20px;}",
	"}",
	"",
	"#getMoreSpaceButtonTopLeft, #bottomLinks, #proPitchBottomRight, .weekly-report__support .freeOnly .siteSlogan {display:none}",
	"",
	"",
	"/* Colored Tags. Place your own in the title. */",
	"",
	"[title~=\"@focus\"] {",
	"    background-color: #F67280 !important;",
	"	color: #ffffff !important;",
	"    padding: 2px 3px 2px !important;",
	"}",
	"",
	"[title~=\"@tag2\"] {",
	"    background-color: #C06C84 !important;",
	"	color: #ffffff !important;",
	"    box-shadow: 3px 3px 3px #424242;",
	"    padding: 2px 3px 2px !important;",
	"}",
	"",
	"/* ...except for tags */",
	"div.project.selected > div.children > div > div.name div.content .contentTag {",
	"    font-weight: normal;",
	"}",
	"",
	"",
	"/* Darker flat header. */",
	"",
	"#header {",
	"    border-bottom: none !important;",
	"    background: #EEEEEE !important;",
	"    padding: 3px 0 !important;",
	"}",
	"#logo {",
    "    display: none;",
	"}",
	"#searchForm {",
	"    top: 0px !important;",
	"}",
	"#searchBox {",
	"    color: #A5B6C3 !important;",
	"    background-color: #4F595F !important;",
	"    border: none !important;",
	"    width: 200px !important;",
	"    height: 15px !important;",
	"    padding: 10px 12px !important;",
	"    font-size: 14px !important;",
	"    opacity: .75 !important;",
	"    margin: -3px 0 0 0 !important;",
	"    -moz-border-radius: 0px !important;",
	"    -webkit-border-radius: 0px !important;",
	"    border-radius: 0px !important;",
	"}",
	"    #searchBox::-webkit-input-placeholder {",
	"        color: #A5B6C3;",
	"    }",
	"    #searchBox:-moz-placeholder {",
	"        color: #A5B6C3;",
	"    }",
	"    #searchBox::-moz-placeholder {",
	"        color: #A5B6C3;",
	"    }",
	"    #searchBox:-ms-input-placeholder {",
	"        color: #A5B6C3;",
	"    }",
	"    #searchCancel {",
	"        top: 10px !important;",
	"        right: 10px !important;",
	"        width: 10px !important;",
	"        height: 10px !important;",
	"    }",
	"    #searchCancel > svg > line {",
	"        stroke: #A5B6C3;",
	"        stroke-width: 2;",
	"    }",
	"    #searchCancel:hover > svg > line {",
	"        stroke: #738088 !important;",
	"    }",
	"    .menu-options {",
	"        top: 36px !important;",
	"        background: #383D40 !important;",
	"        border: none !important;",
	"        -moz-border-radius: 0px !important;",
	"        -webkit-border-radius: 0px !important;",
	"        border-radius: 0px !important;",
	"        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15), 0 6px 6px rgba(0, 0, 0, 0.20);",
	"    }",
	"    #buttonBar.open {",
	"        background: none !important;",
	"    }",
	"    .saveButton,",
	"    .showCompletedButton,",
	"    #buttonBar,",
	"    #helpButton {",
	"        font-weight: 500;",
	"        color: #AAA !important;",
	"    }",
	"    .showCompletedButton:hover,",
	"    #buttonBar:hover,",
	"    #helpButton:hover {",
	"        background-color: transparent !important;",
	"        color: #FFF !important;",
	"    }",
	"    .menu-options > div,",
	"    .menu-options > div > a {",
	"        color: #AAA !important;",
	"    }",
	"    .menu-options > div:hover,",
	"    .menu-options > div > a:hover {",
	"        background: none !important;",
	"        color: #FFF !important;",
	"    }",
	"    .saveButton .topBarButtonTextContainer {",
	"        color: inherit !important;",
	"    }",
	"    .undo-button.enabled:hover,",
	"    .redo-button.enabled:hover {",
	"        opacity: 1 !important;",
	"        background: none !important;",
	"    }",
	"    .saveButton,",
	"    .showCompletedButton,",
	"    #buttonBar,",
	"    #helpButton {",
	"        border: none !important;",
	"        background: none;",
	"    }",
	"    #savedViewHUDButton {",
	"        width: 37px !important;",
	"        height: 37px !important;",
	"        margin: -5px 0 0 0 !important;",
	"        background: url(\'https://workflowy.com/media/i/star-icon-empty.svg\') !important;",
	"        background-size: 23px !important;",
	"        background-position: center center !important;",
	"        background-repeat: no-repeat !important;",
	"        background-color: #383D40 !important;",
	"        -moz-border-radius: 0px !important;",
	"        -webkit-border-radius: 0px !important;",
	"        border-radius: 0px !important;",
	"    }"
].join("\n");

if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = parent.frames.wiwName.document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		parent.frames.wiwName.document.documentElement.appendChild(node);
	}
}
})();
