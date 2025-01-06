$(function(){
	$("input").bind("change", function(){
		var total = 0;
		$("input:checked").each(function(idx, ele){
			total = total + parseInt($(ele).val());
		});
		$("#totalPrice").text(total);
	});
});
