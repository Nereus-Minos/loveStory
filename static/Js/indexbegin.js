/// <reference path="jquery-1.4.1.min.js" />

var myloaddata = {};

$(function () {

    //------------------------------load data from loveDB.xml----------------
    function myloaddatafun() {
        var url = "";
        var urlBase = "../BusinessLayer/";
        var urlDataManagerFileName = "DataRepository.ashx";
        var count = 0;

        this.loadData = function () {
            var urlParams = "?action=top&top=10";
            url = urlBase + urlDataManagerFileName + urlParams;
            //clear the table datas
            $("#tt").empty();
            //alert("url: " + url + ",urlBase=" + urlBase);
            count = 0;
            $.post(url, function (data) {
                if (data != "Error") {
                    var allComments = eval(data);
                    for (var i = 0; i < allComments.length; i++) {
                        count++;
                        var html = "<div id='divComment' style=''><span id='sName'>" + allComments[i].commentName + "</span>&nbsp;&nbsp;&nbsp;&nbsp;说 ：<span id='sContent'>" + allComments[i].commentContent + "</span></div><br />";
                        $("#tt").prepend(html);
                    }
                }
            });
        }
    }
    //------------------------------load data from loveDB.xml----------------

    //call part
    var load = new myloaddatafun();
    load.loadData();
    //call part



})();