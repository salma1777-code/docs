$('#exampleButtonId').click(function() {
    var attributeContent = $('#imageId').attr("src");
    $(this).text(attributeContent);
});

$('#fontSizeChangeButtonId').click(function() {
    $('h2').css('font-size', '40px');
});

$('#textButtonId').click(function() {
    $(this).text("knap");
});

$('#imageId').click(function(){
    $('#imageId').attr("src", "images/glad.jpg")
})