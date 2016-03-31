// function isHidden(el) {
//     var style = window.getComputedStyle(el);
//     return (style.display === 'none');
// }
var lastRect;
var lastRange;

var transparent = 0.12;

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

function resetTextarea() {
  $("#textarea-popup").hide();
  $("#comment-textarea").val("");
}

$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
        resetTextarea();
    }
});

function escapeQuotes(s) {
  return s.replace(/'/g, "&apos;").replace(/"/g, "&quot;");
}

function startTyping() {
    $('#textarea-popup').css('opacity', 1.0);
}

function showUserText(item) {
  var rect = item.getBoundingClientRect();
  var text = item.title;
  console.log(text);
  $('feedback-text').val(text);
  // $('#feedback-popup')
  //         // .text('hovered')
  //         .css({
  //           top: document.body.scrollTop + rect.top - window.innerHeight - $('#feedback-popup').outerHeight(),
  //           left: rect.left,
  //           opacity: transparent
  //         })
  //         .show();
}

var insertHTMLStart = '<a href="https://www.upcounsel.com/pricing" data-toggle="tooltip" onmouseover="showUserText(this);" title="';
var insertHTMLMiddle = '"><code class="user-highlight">';

function onBoxKey() {
    var key = window.event.keyCode;
    // If the user has pressed enter
    if (key == 13) {
        // document.getElementById("txtArea").value =document.getElementById("txtArea").value + "\n*";
        // return false;
        var text = $('#comment-textarea').val();
        console.log(text);
        var origString = lastRange.toString();
        resetTextarea();
        replaceSelectionWithHtml(insertHTMLStart + escapeQuotes(text) + insertHTMLMiddle + origString + '</code>');
    }
}

function makePopupVisible() {
    $('#textarea-popup').css('opacity', 1.0);
}

function makePopupTrans() {
    $('#textarea-popup').css('opacity', transparent);
}