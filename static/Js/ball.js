var o = new Array();
var img = "";
//////////////////
var S = 200,
    N = 8,
    g = .7,
    v = .02,
    f = .97;
//////////////////
var xm = 0;
var ym = 0;
var p = 0;

function run() {
    for (var i = 0; i < N; i++) {
        var oi = o[i];
        var dx = 0;
        var dy = 0;
        for (var j = 1; j < N; j++) {
            var k = (i + j) % N;
            var ok = o[k];
            var h = g / (Math.pow(oi.y - ok.y, 2) + Math.pow(oi.x - ok.x, 2) + .000001);
            if (k == 0) h *= (1 + (p *= .999));
            dx += (oi.y - ok.y) * h;
            dy += (oi.x - ok.x) * h;
        }
        if (i == 0) {
            oi.y = ym;
            oi.x = xm;
        } else {
            oi.y += v * oi.vx;
            oi.x += v * oi.vy;
            oi.vx = f * oi.vx - v * dx;
            oi.vy = f * oi.vy - v * dy;
            oi.img.style.top = Math.round(oi.x * S - oi.w) + "px";
            oi.img.style.left = Math.round(oi.y * S - oi.h) + "px";
        }
    }
    setTimeout(run, 16);
}

document.onmousemove = function (e) {
    if (window.event) e = window.event;
    ym = (e.x || e.clientX) / S;
    xm = (e.y || e.clientY) / S;
    p = 10;
}

function CObj(i) {
    if (i > 0) {
        obj = document.createElement("img");
        obj.src = img[i % img.length].src;//求余数
        obj.style.position = "absolute";
        obj.style.left = -1000;
        document.body.appendChild(obj);
        this.img = obj;
        this.w = obj.width * .5;
        this.h = obj.height * .5;
    }
    this.y = 3 * Math.random();
    this.x = 3 * Math.random();
    this.vx = 0;
    this.vy = 0;
}

onload = function () {
    ym = (document.body.offsetWidth / 2) / S;
    xm = (document.body.offsetHeight / 2) / S;
    img = document.getElementById("images").getElementsByTagName("img");
    for (var i = 0; i < N; i++) o[i] = new CObj(i);
    run();
}    