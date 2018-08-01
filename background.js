let mainContainer = '<div class="row" id="left-slide">\
        <div id="id-area" class="col-xs-12">\
            <label for="id-name">Please input Id name</label>\
            <input type="text" id="id-name" class="form-control" name="id">\
        </div>\
        <div id="class-area" class="col-xs-12">\
            <label for="class-name">Please input Class name</label>\
            <input type="text" id="class-name" class="form-control" name="class">\
        </div>\
        <div class="col-xs-12">\
            <button type="button" id="remove-block" class="btn btn-success">Submit</button>\
        </div>\
    </div>';

$("body").append(mainContainer);



$(function() {
    $("#id-area").click(() => {
        $("#class-name").attr("disabled", "disabled");
        $("#id-name").attr("disabled", false);
        $('#id-name').trigger('focus');
    });

    $("#class-area").click(() => {
        $("#id-name").attr("disabled", "disabled");
        $("#class-name").attr("disabled", false);
        $('#class-name').trigger('focus');
    });

    $("#remove-block").click(() => {
        let blockInfo = $('#left-slide :input').serializeArray();

        for (let key in blockInfo) {
            removeBlock(blockInfo[key].name, blockInfo[key].value);
        }

    });
});

function removeBlock(type, identifier) {
    if ("id" == type) {
        $('#'+ identifier).remove();
    }
    else if ("class" == type) {
        $('.'+ identifier).remove();
    }
}