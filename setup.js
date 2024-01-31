var actdata = {};
$.ajax({
    beforeSend: function(request) {
        request.setRequestHeader("X-ACCESS-KEY", '$2a$10$IOhbc70VvMOlC6L9JU8TqOtfipHo/PNUEpyYPyV1cqDLXihcf8cHy');
    },
    dataType: "json",
    url: 'https://api.jsonbin.io/v3/b/65bacbbc266cfc3fde8404f8?meta=false',
    success: function(data) {
        actdata=data
    }
});

