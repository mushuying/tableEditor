/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-24 17:58:56
 * @version $Id$
 */
$(function(){
	// 切换
	$(".switch").eq(0).click(function(){
		$(this).addClass('active');
		$(".switch").eq(1).removeClass('active');
		$(".return").show();
		$(".jsonEg").hide();
	});
	$(".switch").eq(1).click(function(){
        $(this).addClass('active');
        $(".switch").eq(0).removeClass('active');
		$(".jsonEg").show();
		$(".return").hide();
	});
	// 参数添加
	$(".add").click(function() {
		var cloneBox = $(this).parent().parent().clone(true);
		$(this).parent().parent().parent().append(cloneBox);
	});
	// 参数删除
	$(".delect").click(function(){
	    var ulSize = $(".inputBox").find("ul").size();
	    if(parseInt(ulSize)>=2){
            $(this).parent().parent().remove();
	    }
	})
	// json添加
	$(".add2").click(function(){
        var cloneBox = $(this).parent().next("ul").clone(true);
        $(this).parent().parent().append(cloneBox);
	})
	// json删除
	$(".delect2").click(function(){
        var ulSize = $(".inputBox2").find("ul").size();
        if(parseInt(ulSize)>=2){
        	$(".inputBox2").find("ul:last").remove();
        }
	})
	function code (target){
		var targetBody = target.find('tbody');
		targetBody.empty();
		target.find('ul').each(function(i, obj) {
			 $(obj).each(function(index,el){
			 	var liArr = $(el).children();//获取li
			 	var _tr =$('<tr></tr>');
			 	_tr.appendTo(targetBody);
                liArr.each(function(j, node) {//遍历li
                	var realVal = $(node).find('input').val();//获取value值
                	console.log(realVal);
                	if(realVal!=undefined){
                		var _td = $('<td>'+realVal+'</td>');
                        _td.appendTo(_tr);
                	}   
                });
			 })
		});
    }
    // 参数插入
    $(".push").click(function(){
    	var names = $(".return");
    	code(names);	
    });
    // json插入
    $(".push2").click(function(){
    	var names = $(".jsonEg");
    	code(names);	
    });
	// 提交
	$(".commit").click(function(){
    	if($(".return").is(":visible")){
    		var textV = $(".returnParameter").html();
    		var textPretty = html_beautify(textV);
		    $(".wrap_right textarea").text(textPretty);
    	}
        if($(".jsonEg").is(":visible")){
    		var textV = $(".jsonEg_table").html();
    		var textPretty = html_beautify(textV);
		    $(".wrap_right textarea").text(textPretty);
    	}
	})
})

