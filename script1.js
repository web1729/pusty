//alert("eeee");
$(document).ready(function() {
    $("#Button2").parent().hide();
    //$("#button1").parent().hide();//
    mark = 0;
    inc = 0;
    mrk = 0;
    n = 0;
    p = 0;
    q = 0
    function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

    while (ctr > 0) {

        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

 shuffle(qar);
 var opt=['op1','op2','op3','op4']  ;
  shuffle(opt);
    //function(){$("#button2").hide();};
    d = eval("Q" + qar[n].toString());
    s = eval("d." + d.ans);

    opp1=eval("d."+opt[0]);
    opp2=eval("d."+opt[1]);
    opp3=eval("d."+opt[2]);
    opp4=eval("d."+opt[3]);
    //$("RadioButton1-0").click(function(){alert(s);});
    $("#Layer1").text(d.q);
    $("label[for=RadioButton1-0]").text(eval("d."+opt[0]));
    $("label[for=RadioButton1-1]").text(eval("d."+opt[1]));
    $("label[for=RadioButton1-2]").text(eval("d."+opt[2]));
    $("label[for=RadioButton1-3]").text(eval("d."+opt[3]));

    $("#Button1").click(function() {
        //alert(Q1.q);
        v = true
        if ($("#RadioButton1-0").prop('checked') && d.ans == opt[0]) {
            $("#Layer2").html("<span style='color:green'>Ans is correct.</span>");
            v = false;
            mark = mark + 1
        };
        if ($("#RadioButton1-1").prop('checked') && d.ans == opt[1]) {
            $("#Layer2").html("<span style='color:green'>Ans is correct.</span>");
            v = false;
            mark = mark + 1
        };
        if ($("#RadioButton1-2").prop('checked') && d.ans == opt[2]) {
            $("#Layer2").html("<span style='color:green'>Ans is correct.</span>");
            v = false;
            mark = mark + 1
        };
        if ($("#RadioButton1-3").prop('checked') && d.ans == opt[3]) {
            $("#Layer2").html("<span style='color:green'>Ans is correct.</span>");
            v = false;
            mark = mark + 1
        };

        if (v == true) {
            inc = inc + 1;
            $("#Layer2").html("<span style='color:red'><b> not correct.</b></span><br> Correct Ans. is :<br>Q:"+d.q+"<br>Ans: <span style='color:blue'>" + s + "</span>")
        };
        $("#Layer4").html("Correct:<span style='color:green'>" + mark + "</span><br> incorrect: <span style='color:red'>" + inc + "</span>")
            //<br> Correct:<span style='color:green'>"+mark+"</span><br> incorrect: <span style='color:red'>"+inc+"</span>

        if ($("#RadioButton1-0").prop('checked')) {
            $("#RadioButton1-0").prop("checked", false);
        };
        if ($("#RadioButton1-1").prop('checked')) {
            $("#RadioButton1-1").prop("checked", false);
        };
        if ($("#RadioButton1-2").prop('checked')) {
            $("#RadioButton1-2").prop("checked", false);
        };
        if ($("#RadioButton1-3").prop('checked')) {
            $("#RadioButton1-3").prop("checked", false);
        };
        $("input[type=radio]").checkboxradio('refresh');
        n = n + 1;
        if (n == 10) {
            //delay(3000);
             $("#Layer1").hide();
			$("#Button1").parent().hide();
			$("#RadioButton1").hide();
			setTimeout(function(){
				
				$("#Layer2").html("Thank You <br> Exam Ended .<br> You got  <span style='color:red'>" + mark + "</span> marks");

            
            
            $("#Button2").parent().show();
            clearInterval(var1);
				
			},3000);
            
            //alert(tt1);
            //$("#button2").show();
        };
		shuffle(opt);
        d = eval("Q" + qar[n].toString());
        s = eval("d." + d.ans);
  /*      $("#Layer1").text(d.q);
        $("label[for=RadioButton1-0]").text(opp1);
        $("label[for=RadioButton1-1").text(opp2);
        $("label[for=RadioButton1-2]").text(opp3);
        $("label[for=RadioButton1-3").text(opp4);    */
         $("#Layer1").text(d.q);
    $("label[for=RadioButton1-0]").text(eval("d."+opt[0]));
    $("label[for=RadioButton1-1]").text(eval("d."+opt[1]));
    $("label[for=RadioButton1-2]").text(eval("d."+opt[2]));
    $("label[for=RadioButton1-3]").text(eval("d."+opt[3]));
    });

    var1 = setInterval(function() {
        //alert("Hello");
        p = p + 1;
        if (p == 60) {
            q = q + 1;
            p = 0
        };
        $("#Layer3").html("Time: <span style='color:blue'>" + q + "</span> min <span style='color:blue'>" + p + "</span> sec <br>[Total time: 3 min]");
        if (q == 3) {
            clearInterval(var1);
            $("#Layer3").html("Time up <br> Exam Ended ,<br> You got  " + mark + " marks");
            $("#Layer1").hide();
            $("#Layer2").hide();
            $("#RadioButton1").hide();
            $("#Button1").parent().hide();
            $("#Button2").parent().show();
        };
    }, 1000);

    $("#Button2").click(function() {
        //window.reload();
        //refreshPage();
        window.location.href="index.html";
    });
    //	$("#Button2").click(function(){
    //		window.reload();
    //alert("wwwwwwwww");
    //});


   

});