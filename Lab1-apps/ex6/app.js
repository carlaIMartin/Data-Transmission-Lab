var number1 = $('#a').val();
var number2 = $('#b').val();

$('#add').click(function(number1, number2)
{
    var number1 = $('#a').val();
    var number2 = $('#b').val();
	var result = parseInt(number1) + parseInt(number2);
    $('#result').text(result);

});

$('#multiply').click(function(number1, number2)
{
    var number1 = $('#a').val();
    var number2 = $('#b').val();
	var result = parseInt(number1) * parseInt(number2);
    $('#result').text(result);

});

$('#substract').click(function(number1, number2)
{
	var number1 = $('#a').val();
    var number2 = $('#b').val();
	var result = parseInt(number1) - parseInt(number2);
    $('#result').text(result);
});

$('#divide').click(function(number1, number2)
{
	var number1 = $('#a').val();
    var number2 = $('#b').val();
	var result = parseInt(number1) / parseInt(number2);
	console.log(result);
    $("#result").text(result)
});

