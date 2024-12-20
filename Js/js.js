var llcv_tcL = 0;
var llcv_tcN = 0;
var llcv_tc = 0;
var llcv_tcA = 0;
var llcv_ta = -1;
var llcv_cs = 0;
var llcv_jf = 0;
var llcv_lf = 0;
var lltanimating = 0;

if(window.location.hostname.indexOf(llcv_dm) == -1){
	llcv_d = 0;
	//console.log("script killed");
	//window.stop();
}

function llshowvideo(videocode) {
	videocode = videocode.replace(/#apos#/g,"'").replace(/#quot#/g,'"');
	if(!videocode) alert("No video found.");
	else{
		$("#popvideo_frame").html(videocode);
		$("#popvideo_base").show();	
	}
	return true;
}

function fnifm() {
    try {
        return window.self !== window.top
    } catch (a) {
        return true
    }
}

function fnhf() {
    if (document.hasFocus()) {
        return true
    } else {
        return false
    }
}

function fnabr() {
    if (adbarcounton) fnctdn(12);
}

function fnctdn(d) {
    var tm = d,
        sc;
    setInterval(function() {
        sc = parseInt(tm % 60, 10);
        sc = sc < 10 ? "0" + sc : sc;

        if (sc <= 11 && sc > 10) {
            $("#timerctr").show();
            $("#time").text("00:10");
       } else if (sc > 0) $("#time").text("00:" + sc);
        else $("#time").text("00:00");

        if (--tm < -1 && !$("#abartxt").is(":hover")) {
            $("#abartop").slideUp("fast");
        }
    }, 1000);
}

function fncdt(d,fb,beacon) {
		if(llcv_d == 0) return false;
		if(!beacon){
			if (d > 300) {
					return false
			}
			$.ajax({
					cache: false,
					url: "//"+llcv_dm+"/ajax.php",
					type: "POST",
					data: "action=credit&pageid=" + llcv_d + "&campaignid=" + llcv_c + "&rotatorid=" + llcv_r + "&time=" + d + "&t=" + statid + "&tt=" + tableid + "&ip=" + thisip,
					error: function(e, f, a) {},
					success: function(a) {
					}
			});			
		}else{
			if(d > 300) d = 300;
			let url = "//"+llcv_dm+"/ajax.php";
			let data = new FormData();
			data.append('action', "credit");
			data.append('pageid', llcv_d);
			data.append('campaignid', llcv_c);
			data.append('rotatorid', llcv_r);
			data.append('time', d);
			data.append('t', statid);
			data.append('tt', tableid);
			data.append('ip', thisip);
			if(d >0 && d != llcv_tcL){
				let result = navigator.sendBeacon(url, data);
				llcv_tcL = d;
			}
		}

}

function fnsc() {
    if (llcv_tc < 20) llcv_cs = 1;
    else if (llcv_tcA % 10 == 0) llcv_cs = 1;
}

function fnitv() {
    var a = false;
    this.start = function() {
        if (!this.isRunning()) {
            a = setInterval(function() {
								if($(window).width() < 100 || $(window).height() < 100){
									return;
								}
                llcv_tc++;
               if (llcv_tc == 1) {
                    $("#llpgisclk").val(1);
                    if (!navigator.sendBeacon) fncdt(1,0,0);
										llcv_tcN = 1;
                }
                llcv_tcA = llcv_tc + 4;
                if (!llcv_jf && llcv_tcA % 5 == 0 && llcv_tc > 0) {
                    fnsc();
                } else if (llcv_tc % 5 == 0 && llcv_tc > 0) {
                    if (!llcv_cs || llcv_jf == 1) {
												$("#llpgisclk").val(llcv_tc);
												if (!navigator.sendBeacon) fncdt(llcv_tc,0,0);
												llcv_tcN = llcv_tc;
                        llcv_jf = 0;
                        if (llcv_tc >= 5 && llcv_tc < 300) $("#ansd").text(llcv_tc + " sec");
                        else if (llcv_tc >= 300) $("#ansd").text("> 300 sec");
                    } else {
                        // if (llcv_tc >= 2) {
                            // llcv_tc = llcv_tc - 1;
                        // }
                        il.stop();
                    }
                }
            }, 1000)
        }
    };
    this.stop = function() {
        fnsc();
        if (this.isRunning()) {
            clearInterval(a);
            a = false;
        }
    };
    this.isRunning = function() {
        return a !== false
    }
}
var il = new fnitv();
tl = setInterval(function() {
    if (llcv_ta == 0 && adbaron) {
      fnabr();
    }
    ++llcv_ta;
    if (llcv_lf == 0 && fnhf() && llcv_cs) {
        llcv_lf = 1;
        il.start();
        llcv_jf = 1;
    }
    if (llcv_lf == 1 && !fnhf() && !fnifm()) {
        llcv_lf = 0;
        il.stop();
        if (llcv_tc >= 2) {
            llcv_tc = llcv_tc - 1;
        }
    }
}, 1000);
(function(b) {
    b.wf || (b.extend({
        wf: function() {
            var a = !0;
            b(document).data("wf") || b(document).data("wf", b.wf.init());
            for (x in arguments) {
                "object" == typeof arguments[x] ? (arguments[x].blur && (b.wf.methods.blur = arguments[x].blur), arguments[x].focus && (b.wf.methods.focus = arguments[x].focus), arguments[x].blurFocus && (b.wf.methods.blurFocus = arguments[x].blurFocus), arguments[x].initRun && (a = arguments[x].initRun)) : "function" == typeof arguments[x] ? void 0 === b.wf.methods.blurFocus ? b.wf.methods.blurFocus = arguments[x] : (b.wf.methods.blur = b.wf.methods.blurFocus, b.wf.methods.blurFocus = void 0, b.wf.methods.focus = arguments[x]) : "boolean" == typeof arguments[x] && (a = arguments[x])
            }
            if (a) {
                b.wf.methods.onChange()
            }
        }
    }), b.wf.init = function() {
        b.wf.props.hidden in document ? document.addEventListener("visibilitychange", b.wf.methods.onChange) : (b.wf.props.hidden = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", b.wf.methods.onChange) : (b.wf.props.hidden = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", b.wf.methods.onChange) : (b.wf.props.hidden = "msHidden") in document ? document.addEventListener("msvisibilitychange", b.wf.methods.onChange) : (b.wf.props.hidden = "onfocusin") in document ? document.onfocusin = document.onfocusout = b.wf.methods.onChange : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = b.wf.methods.onChange;
        return b.wf
    }, b.wf.methods = {
        blurFocus: void 0,
        blur: void 0,
        focus: void 0,
        exeCB: function(a) {
            b.wf.methods.blurFocus ? b.wf.methods.blurFocus(a, !a.hidden) : a.hidden ? b.wf.methods.blur && b.wf.methods.blur(a) : b.wf.methods.focus && b.wf.methods.focus(a)
        },
        onChange: function(c) {
            var f = {
                focus: !1,
                focusin: !1,
                pageshow: !1,
                blur: !0,
                focusout: !0,
                pagehide: !0
            };
            if (c = c || window.event) {
                c.hidden = c.type in f ? f[c.type] : document[b.wf.props.hidden], b(window).data("visible", !c.hidden), b.wf.methods.exeCB(c)
            } else {
                try {
                    b.wf.methods.onChange.call(document, new Event("visibilitychange"))
                } catch (a) {}
            }
        }
    }, b.wf.props = {
        hidden: "hidden"
    })
})(jQuery);
il.start();
$(function() {
    $("body").on("touchstart touchmove touchend click mousedown scroll wheel mousemove", function() {
        il.start();
        llcv_cs = 0;
    });
		// $(document).on("click", "input[type='text']", function(){
			// $("#llpgisclk").val(20);
		// });
    $.wf(function(b, a) {
        if (a) {
            il.start();
            llcv_jf = 1;
        } else {
            il.stop();
						if (llcv_tc >= 2) {
								llcv_tc = llcv_tc - 1;
						}
        }
    });
});

if (navigator.sendBeacon){
	window.addEventListener("pagehide", function() {
		fncdt(llcv_tcN,0,1);
	});
	document.addEventListener("visibilitychange", function() {
		if (document.visibilityState !== 'visible') {
			fncdt(llcv_tcN,0,1);
		}
	});
}

var tcount = 0;

function fnintvl() {
    var timer = false;
    this.start = function() {
        if (!this.isRunning()) {
            timer = setInterval(function() {
                ++tcount;
            }, 1);
        }
    };
    this.stop = function() {
        if (this.isRunning()) {
            clearInterval(timer);
            tcount = 0;
            timer = false;
        }
    };
    this.isRunning = function() {
        return timer !== false;
    };
}
var interval = new fnintvl();

function makeTimer(slt,u) {
	tint = setInterval(function() { 
		var days = Math.floor(slt / 86400); 
		var hours = Math.floor((slt - (days * 86400)) / 3600);
		var minutes = Math.floor((slt - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((slt - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }
		$("#cd_days").html(days + "<span>Days</span>");
		$("#cd_hours").html(hours + "<span>Hours</span>");
		$("#cd_minutes").html(minutes + "<span>Minutes</span>");
		$("#cd_seconds").html(seconds + "<span>Seconds</span>");
		if(slt == 0){
			if(u) window.parent.location.href=u;
			else clearInterval(tint); 
		}
		slt--;
	}, 1000);
}
