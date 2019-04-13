function showPicUpload()
{
	document.getElementById("sign-div").style.display = "none";
	document.getElementById("upload-div").style.display = "block";
}
function hidePicUpload()
{
	document.getElementById("sign-div").style.display = "flex";
	document.getElementById("upload-div").style.display = "none";
}
function alignTextLeft()
{
	document.getElementById("email").style.textAlign = "left";
}
$(function(){
    $('#firstname, #lastname').attr({
        'required': 'true',
        'pattern': '[\\w+]{2,20}',
        'title' : "2-20 letters."
    });
    $('#usernameup,#usernamein,#picname').attr({
        'required': 'true',
        'pattern': '.{2,20}',
        'title' : "2-20 characters."
    });
    $('#email').attr({
        'required': 'true',
        'pattern': '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$'
    });
    $('#tel').attr({
        'pattern': '[\\+][\\d]{1,3}[\\s][\\d]{3}[\\s][\\d]{3}[\\s][\\d]{3}',
        'title': 'Starting with "+", country calling code and 3 groups by 3 digits, each separated by whitespaces.'
    });
    $('#passwordup, #passwordcon, #passwordin').attr({
        'required': 'true',
        'pattern': '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}',
        'title': "Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters."
    });
    $('#sign-up-form').submit(function(e){
        e.preventDefault();
        var pass =  $('#passwordup').val(); 
        var repass =  $('#passwordcon').val(); 
        if(pass == repass){
            showPicUpload();
        }else{
            alert("Passwords don't match!");
        }
        $("#sign-in-form :input").prop("disabled", true);
    });
    $('#sign-in-form').submit(function(e){
        e.preventDefault();
        showPicUpload();
        $("#sign-up-form :input").prop("disabled", true);
    });
    var onUploadFunc = function(e){
        e.preventDefault();
        if(confirm("Image has been uploaded successfully")){
            $(this).off('submit', onUploadFunc);
            $(this).submit();
        }
    }
    $('#upload-form').on('submit', onUploadFunc);
});

