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
1,�޸�ҳ���popTicketNum   ��������Ȼ���¼�һ��popTicketNum2 ȥдͶƱֵ��Ȼ����ͬ����������
2��ҳ���޸�ͶƱ�ɹ�����ʾ ���Ǹ���ʾһ��id   popsuccess-vote
3,�޸�ͶƱ�ɹ�����



<input type="text" class="pop-ticket-num" name="popInputTicks" maxlength="12" id="popTicketNum" value="1" style="visibility: hidden;display:none">
<input type="text" class="pop-ticket-num" name="popInputTicks2" maxlength="12" id="popTicketNum2" value="">


<span id="popsuccess-vote" class="J_PopKeyNum pop-key"></span>


*/