$("#signup").click(function(a) {
    a.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var password = $("#pass").val();
    var re_password = $("#re_pass").val();
    if (password == re_password) {
        $.ajax({
                method: "POST",
                url: "http://localhost/server/",
                data: { name: name, email: email, password: password, repassword: re_password }
            })
            .done(function(msg) {
                location.reload();
            });
    } else {
        alert("password and repassword doesn't match")
    }

});