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
    // Let's hide the extra pop-up
    parent.frames.wiwName.document.getElementById("wfagenda-div").style.display = "none";
    parent.frames.wiwName.document.getElementById("getMoreSpaceButtonTopRight").style.display = "none";
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
	"  .page{margin:0 !important;border: 0px; padding:30px 120px 20px;width:100% !important;max-width:100%;box-sizing:border-box; transform: none !important;}",
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
	"#getMoreSpaceButtonTopLeft, #bottomLinks, #proPitchBottomRight, .weekly-report__support .freeOnly .siteSlogan #buttonBar {display:none}",
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
	"    background: #FFFFFF !important;",
	"    padding: 3px 0 !important;",
	"}",
    "#body {",
	"    background: #FFFFFF !important;",
	"}",
    "#buttonBar {",
	"    display: none;",
	"}",
    "#savedViewHUDButton {",
	"    display: none;",
	"}",
	"#logo {",
    "    display: none;",
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
	"    .saveButton,",
	"    .showCompletedButton,",
	"    #helpButton {",
	"        font-weight: 500;",
	"        color: #AAA !important;",
	"    }",
	"    .showCompletedButton:hover,",
	"    #helpButton:hover {",
	"        background-color: transparent !important;",
	"        color: #666 !important;",
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
	"    #helpButton {",
	"        border: none !important;",
	"        background: none;",
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
