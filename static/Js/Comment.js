/// <reference path="JQuery.js" />
/// <reference path="jquery-1.6.min.js" />
/*
Project:       MyLove
File:          Comment.js
Description:   
Author:        Lanny(damon_lan@163.com)
Date:          Sept,2014
version:       2.0
Modify:
  
  

References:

 
                 
Comments:
* 2014.12.17  在IE中，解决了发评论乱码问题。增加encodeURI 方法！

Notes:


*/
var urlBase = "../BusinessLayer/";
var urlDataManagerFileName = "DataRepository.ashx";
var url = "";
var count = 0;

var flagSuccess = "Success";
var flagError = "Error";
var flagRepeat = "Repeat";



$(function () {
    window.onload = function () {
        loadData();
    }
    //-----------LoadData  begin-----------------
    function loadData() {
        var urlParams = "?action=all";
        url = urlBase + urlDataManagerFileName + urlParams;
        //clear the table datas
        $("#divComent").empty();
        count = 0;
        $.post(url, function (data) {
            if (data != "Error") {
                var allComments = eval(data);
                for (var i = 0; i < allComments.length; i++) {
                    count++;
                    var html = "  <div id='divComment' style='float: left; width:100%;background:url(images/commentHeart.png) no-repeat left'><div style='width:50px;height:50px;padding-top:20px;display:block;text-align: center; float: left'><span id='sCount' style='color:yellow'>" + count + "楼</span></div><div id='divDateName' style=''><span id='sDate'>" + allComments[i].date + "</span>&nbsp;&nbsp;&nbsp;&nbsp;幸福点评嘉宾：<span id='sName'>" + allComments[i].commentName + "</span></div><div id='divContent'><span id='sContent'>" + allComments[i].commentContent + "</span></div></div><hr style='border: 1px dotted #036; clear: both;' />";
                    //                    $("#tbComments").prepend(tr + "<hr />");
                    $("#divComent").prepend(html);
                }
            }
        });
    }
    //---------LoadData  End----------------------

    //This is important!!
    //loadData() always execute load all date from db every submit the data. So I need change the way when next time. I can definite a method:LoadCurrentData();
    //

    //-------------Submit the data start------------------
    $("#btnSubmit").click(function () {
        var isFlagOK = true;
        var comment = $("#txtComment").val();
        var name = $("#txtName").val();
        var urlParams = "?action=add&comment=" + encodeURI(comment) + "&name=" + encodeURI(name);
        url = urlBase + urlDataManagerFileName + urlParams;
        if (comment.length == 0) {
            isFlagOK = false;
            alert("亲，你没有填写祝福哦！~");
            return false;
        }

        if (name.length == 0) {
            isFlagOK = false;
            alert("亲，你忘记填写你的大名啦，不然小东不知道你是谁哦！~~");
            return false;
        }
        if (isFlagOK) {
            $.post(url, function (data) {
                if (data == flagRepeat) {
                    alert("亲，你重复输入祝福啦！~~");
                }
                else if (data == flagSuccess) {
                    var urlParams = "?action=all";
                    url = urlBase + urlDataManagerFileName + urlParams;
                    //alert("url: " + url);
                    loadData();
                }
                $("#txtComment").val("");
                $("#txtName").val("");
            });
        }
    });
    //-----------Submit the data end------------------


})