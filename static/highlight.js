// function isHidden(el) {
//     var style = window.getComputedStyle(el);
//     return (style.display === 'none');
// }
var lastRect;
var lastRange;

var transparent = 0.3;

function replaceSelectionWithHtml(html) {
    lastRange.deleteContents();
    fragment = lastRange.createContextualFragment(html);
    lastRange.insertNode(fragment);
}

$(document).on({
  'mouseup': function() {
    var rect = window.getSelection().getRangeAt(0).getBoundingClientRect();
    if (rect != lastRect && rect.top != 0) {
        console.log(rect);
        lastRange = window.getSelection().getRangeAt(0);
        $('#textarea-popup')
          // .text('hovered')
          .css({
            top: document.body.scrollTop + rect.top - window.innerHeight - $('#textarea-popup').outerHeight(),
            left: rect.left,
            opacity: transparent
          })
          .show();
          $("#comment-textarea").value = "";
          $("#comment-textarea").focus();
    }

    lastRect = rect;
    
  },
});

$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
        $("#textarea-popup").hide();
    }
});

function startTyping() {
    $('#textarea-popup').css('opacity', 1.0);
}

function onBoxKey() {
    var key = window.event.keyCode;
    // If the user has pressed enter
    if (key == 13) {
        // document.getElementById("txtArea").value =document.getElementById("txtArea").value + "\n*";
        // return false;
        var text = $('#comment-textarea').value;
        console.log(text);
        $("#textarea-popup").hide();
        var origString = lastRange.toString();
        replaceSelectionWithHtml('<code class="highlighter-rouge">' + origString + '</code>');
    }
}

function makePopupVisible() {
    $('#textarea-popup').css('opacity', 1.0);
}

function makePopupTrans() {
    $('#textarea-popup').css('opacity', transparent);
}