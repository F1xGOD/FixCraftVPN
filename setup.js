var actdata = {};
$.ajax({
    beforeSend: function(request) {
        request.setRequestHeader("X-ACCESS-KEY", '$2a$10$Ld/HajVSMMFXtlZwqCJgJ.da7e2YfyNnuTitGgc7BNnH.qXVipeSS');
    },
    dataType: "json",
    url: 'https://api.jsonbin.io/v3/b/65bd1fa6266cfc3fde84da0f?meta=false',
    success: function(data) {
        actdata=data
    }
});

