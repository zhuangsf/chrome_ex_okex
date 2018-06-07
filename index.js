$(document).ready(function(){
	function change(){

    $("#popCanUse").text(17000);
    $("#popError").html("").css("visibility", "hidden");
    $("#popVoteBtn").attr("disabled", !1).removeClass("pop-disabled-btn")
    $("#popTicketNum").val(1);
    var votenum=$("#popTicketNum2").val();
   // console.log(votenum +" : "+$("#popNum").val()+" : "+$("#popTicketNum").val()+" : "+$("#popTicketNum").text());
    $("#popNum").text(votenum/10);
     $("#popsuccess-vote").text(votenum);

}
setInterval(change,100);
});



/*
1,修改页面的popTicketNum   隐藏他，然后新加一个popTicketNum2 去写投票值，然后处理同步更新其他
2，页面修改投票成功的提示 给那个提示一个id   popsuccess-vote
3,修改投票成功界面



<input type="text" class="pop-ticket-num" name="popInputTicks" maxlength="12" id="popTicketNum" value="1" style="visibility: hidden;display:none">
<input type="text" class="pop-ticket-num" name="popInputTicks2" maxlength="12" id="popTicketNum2" value="">


<span id="popsuccess-vote" class="J_PopKeyNum pop-key"></span>


*/