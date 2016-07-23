!function(){   /*匿名自执行函数*/
    var $addNewBtn=$('#addNewBtn'),
        $bookDig=$('#bookDig'),
        $saveBtn=$('#saveBtn');

    $addNewBtn.on('click',function(){
        $bookDig.modal('show')
    });

    $saveBtn.on('click',function(){
        var data = {
            name:$('#name').val(),
            author:$('#author').val()
        };
        //表单验证
        $.get('../api/books_add.php',data,function(response){
            if(response.success){
                alert('保存成功')
            } else{
                alert('保存失败,请刷新重试')
            }
        })

    })

}();