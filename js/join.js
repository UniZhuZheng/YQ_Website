$(function(){
    rules = {
        title: {
            required:true
            ,minlength:2
            ,maxlength:100
        }, city: {
            required:true
            ,minlength:2
            ,maxlength:100
        },
        mob: {
            required:true
            ,minlength:2
            ,maxlength:100
        },
        content: {
            required:true
            ,minlength:2
            ,maxlength:100
        }
    };
    messages = {
        title: {
            required: ""
            ,minlength: ""
            ,maxlength: ""
        }, city: {
            required: ""
            ,minlength: ""
            ,maxlength: ""
        },
        mob: {
            required: ""
            ,minlength: ""
            ,maxlength: ""
        },
        content: {
            required: ""
            ,minlength: ""
            ,maxlength: ""
        }
    }
    make_validate('frm-apply',rules,messages);
});
