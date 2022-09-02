window.onload = function () {
    var v1 = document.getElementById('video1');
    var v2 = document.getElementById('video21');
    var v3 = document.getElementById('video22');
    var v4 = document.getElementById('video23');
    var v5 = document.getElementById('video31');
    var v6 = document.getElementById('video32');
    var v7 = document.getElementById('video33');
    var v8 = document.getElementById('video41');
    var v9 = document.getElementById('video42');
    var v10 = document.getElementById('video43');
    //hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
    const progress1 = document.getElementById("progress1");
    function progressLoop1() {
        setInterval(function () {
            document.getElementById("progress1").value = Math.round(
                (v1.currentTime / v1.duration) * 100
            );
        });
    }
    v1.addEventListener("play", progressLoop1);
    
    const progress21 = document.getElementById("progress21");
    function progressLoop21() {
        setInterval(function () {
            document.getElementById("progress21").value = Math.round(
                (v2.currentTime / v2.duration) * 100
            );
        });
    }
    v2.addEventListener("play", progressLoop21);
    
    const progress22 = document.getElementById("progress22");
    function progressLoop22() {
        setInterval(function () {
            document.getElementById("progress22").value = Math.round(
                (v3.currentTime / v3.duration) * 100
            );
        });
    }
    v3.addEventListener("play", progressLoop22);
    
    const progress23 = document.getElementById("progress23");
    function progressLoop23() {
        setInterval(function () {
            document.getElementById("progress23").value = Math.round(
                (v4.currentTime / v4.duration) * 100
            );
        });
    }
    v4.addEventListener("play", progressLoop23);
    
    const progress31 = document.getElementById("progress31");
    function progressLoop31() {
        setInterval(function () {
            document.getElementById("progress31").value = Math.round(
                (v5.currentTime / v5.duration) * 100
            );
        });
    }
    v5.addEventListener("play", progressLoop31);
    
    const progress32 = document.getElementById("progress32");
    var video32 = document.getElementById("video32");
    function progressLoop32() {
        setInterval(function () {
            document.getElementById("progress32").value = Math.round(
                (v6.currentTime / v6.duration) * 100
            );
        });
    }
    v6.addEventListener("play", progressLoop32);
    
    const progress33 = document.getElementById("progress33");
    function progressLoop33() {
        setInterval(function () {
            document.getElementById("progress33").value = Math.round(
                (v7.currentTime / v7.duration) * 100
            );
        });
    }
    v7.addEventListener("play", progressLoop33);
    
    const progress41 = document.getElementById("progress41");
    function progressLoop41() {
        setInterval(function () {
            document.getElementById("progress41").value = Math.round(
                (v8.currentTime / v8.duration) * 100
            );
        });
    }
    v8.addEventListener("play", progressLoop41);
    
    const progress42 = document.getElementById("progress42");
    function progressLoop42() {
        setInterval(function () {
            document.getElementById("progress42").value = Math.round(
                (v9.currentTime / v9.duration) * 100
            );
        });
    }
    v9.addEventListener("play", progressLoop42);
    
    const progress43 = document.getElementById("progress43");
    function progressLoop43() {
        setInterval(function () {
            document.getElementById("progress43").value = Math.round(
                (v10.currentTime / v10.duration) * 100
            );
        });
    }
    v10.addEventListener("play", progressLoop43);
    
    //hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
    var videoad = document.getElementById("videoad");

    if (v1) {
        document.getElementById("play1").addEventListener("click",
            function () {
                v1.onended = function () {

                    if (sessionStorage.vids1) {
                        sessionStorage.vids1 = parseInt(sessionStorage.vids1) + 1;
                    } else {
                        sessionStorage.setItem("vids1", 1);
                        var c1 = sessionStorage.getItem("vids1");
                    }
                    document.getElementById("play1").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                };
                var c1 = sessionStorage.getItem("vids1");
                var modal = document.getElementById("myModal1");
                if (c1 == 5) {
                    setTimeout(function () {
                        modal.style.display = "block";
                        v1.pause();
                        videoad.play();
                        videoad.onended = function () {
                            modal.style.display = "none";
                            v1.play();
                        }
                        sessionStorage.setItem("vids1", 0);
                    }, 5000);
                };
                if (v1.paused) {
                    v1.play();
                    document.getElementById("play1").innerHTML = "<img src='svg/pause.svg' height='16px'/>";
                    v2.pause();
                    document.getElementById("play21").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v3.pause();
                    document.getElementById("play22").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v4.pause();
                    document.getElementById("play23").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v5.pause();
                    document.getElementById("play31").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v6.pause();
                    document.getElementById("play32").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v7.pause();
                    document.getElementById("play33").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v8.pause();
                    document.getElementById("play41").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v9.pause();
                    document.getElementById("play42").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v10.pause();
                    document.getElementById("play43").innerHTML = "<img src='svg/play.svg' height='16px'/>";

                } else {
                    v1.pause();
                    document.getElementById("play1").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                }
            }, false);
        document.getElementById("restart1").addEventListener("click", function () {
            v1.currentTime = 0;
        }, false);
        document.getElementById("rew1").addEventListener("click", function () {
            v1.currentTime -= 10;
        }, false);
        document.getElementById("fastFwd1").addEventListener("click", function () {
            v1.currentTime += 10;
        }, false);
    };

    if (v2) {
        document.getElementById("play21").addEventListener("click",
            function () {
                v2.onended = function () {

                    if (sessionStorage.vids1) {
                        sessionStorage.vids1 = parseInt(sessionStorage.vids1) + 1;
                    } else {
                        sessionStorage.setItem("vids1", 1);
                        var c1 = sessionStorage.getItem("vids1");
                    }
                    document.getElementById("play21").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                };
                var c1 = sessionStorage.getItem("vids1");
                var modal = document.getElementById("myModal1");
                if (c1 == 5) {
                    setTimeout(function () {
                        modal.style.display = "block";
                        v2.pause();
                        videoad.play();
                        videoad.onended = function () {
                            modal.style.display = "none";
                            v2.play();
                        }
                        sessionStorage.setItem("vids1", 0);
                    }, 5000);
                };
                if (v2.paused) {
                    v2.play();
                    document.getElementById("play21").innerHTML = "<img src='svg/pause.svg' height='16px'/>";
                    v1.pause();
                    document.getElementById("play1").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v3.pause();
                    document.getElementById("play22").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v4.pause();
                    document.getElementById("play23").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v5.pause();
                    document.getElementById("play31").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v6.pause();
                    document.getElementById("play32").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v7.pause();
                    document.getElementById("play33").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v8.pause();
                    document.getElementById("play41").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v9.pause();
                    document.getElementById("play42").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v10.pause();
                    document.getElementById("play43").innerHTML = "<img src='svg/play.svg' height='16px'/>";

                } else {
                    v2.pause();
                    document.getElementById("play21").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                }
            }, false);
        document.getElementById("restart21").addEventListener("click", function () {
            v2.currentTime = 0;
        }, false);
        document.getElementById("rew21").addEventListener("click", function () {
            v2.currentTime -= 10;
        }, false);
        document.getElementById("fastFwd21").addEventListener("click", function () {
            v2.currentTime += 10;
        }, false);
    };

    if (v3) {
        document.getElementById("play22").addEventListener("click",
            function () {
                v3.onended = function () {

                    if (sessionStorage.vids1) {
                        sessionStorage.vids1 = parseInt(sessionStorage.vids1) + 1;
                    } else {
                        sessionStorage.setItem("vids1", 1);
                        var c1 = sessionStorage.getItem("vids1");
                    }
                    document.getElementById("play22").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                };
                var c1 = sessionStorage.getItem("vids1");
                var modal = document.getElementById("myModal1");
                if (c1 == 5) {
                    setTimeout(function () {
                        modal.style.display = "block";
                        v3.pause();
                        videoad.play();
                        videoad.onended = function () {
                            modal.style.display = "none";
                            v3.play();
                        }
                        sessionStorage.setItem("vids1", 0);
                    }, 5000);
                };
                if (v3.paused) {
                    v3.play();
                    document.getElementById("play22").innerHTML = "<img src='svg/pause.svg' height='16px'/>";
                    v2.pause();
                    document.getElementById("play21").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v1.pause();
                    document.getElementById("play1").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v4.pause();
                    document.getElementById("play23").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v5.pause();
                    document.getElementById("play31").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v6.pause();
                    document.getElementById("play32").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v7.pause();
                    document.getElementById("play33").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v8.pause();
                    document.getElementById("play41").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v9.pause();
                    document.getElementById("play42").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v10.pause();
                    document.getElementById("play43").innerHTML = "<img src='svg/play.svg' height='16px'/>";

                } else {
                    v3.pause();
                    document.getElementById("play22").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                }
            }, false);
        document.getElementById("restart22").addEventListener("click", function () {
            v3.currentTime = 0;
        }, false);
        document.getElementById("rew22").addEventListener("click", function () {
            v3.currentTime -= 10;
        }, false);
        document.getElementById("fastFwd22").addEventListener("click", function () {
            v3.currentTime += 10;
        }, false);
    };

    if (v4) {
        document.getElementById("play23").addEventListener("click",
            function () {
                v4.onended = function () {

                    if (sessionStorage.vids1) {
                        sessionStorage.vids1 = parseInt(sessionStorage.vids1) + 1;
                    } else {
                        sessionStorage.setItem("vids1", 1);
                        var c1 = sessionStorage.getItem("vids1");
                    }
                    document.getElementById("play23").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                };
                var c1 = sessionStorage.getItem("vids1");
                var modal = document.getElementById("myModal1");
                if (c1 == 5) {
                    setTimeout(function () {
                        modal.style.display = "block";
                        v4.pause();
                        videoad.play();
                        videoad.onended = function () {
                            modal.style.display = "none";
                            v4.play();
                        }
                        sessionStorage.setItem("vids1", 0);
                    }, 5000);
                };
                if (v4.paused) {
                    v4.play();
                    document.getElementById("play23").innerHTML = "<img src='svg/pause.svg' height='16px'/>";
                    v2.pause();
                    document.getElementById("play21").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v1.pause();
                    document.getElementById("play1").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v3.pause();
                    document.getElementById("play22").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v5.pause();
                    document.getElementById("play31").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v6.pause();
                    document.getElementById("play32").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v7.pause();
                    document.getElementById("play33").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v8.pause();
                    document.getElementById("play41").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v9.pause();
                    document.getElementById("play42").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v10.pause();
                    document.getElementById("play43").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                } else {
                    v4.pause();
                    document.getElementById("play23").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                }
            }, false);
        document.getElementById("restart23").addEventListener("click", function () {
            v4.currentTime = 0;
        }, false);
        document.getElementById("rew23").addEventListener("click", function () {
            v4.currentTime -= 10;
        }, false);
        document.getElementById("fastFwd23").addEventListener("click", function () {
            v4.currentTime += 10;
        }, false);
    }

    if (v5) {

        document.getElementById("play31").addEventListener("click",
            function () {
                v5.onended = function () {

                    if (sessionStorage.vids1) {
                        sessionStorage.vids1 = parseInt(sessionStorage.vids1) + 1;
                    } else {
                        sessionStorage.setItem("vids1", 1);
                        var c1 = sessionStorage.getItem("vids1");
                    }
                    document.getElementById("play31").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                };
                var c1 = sessionStorage.getItem("vids1");
                var modal = document.getElementById("myModal1");
                if (c1 == 5) {
                    setTimeout(function () {
                        modal.style.display = "block";
                        v5.pause();
                        videoad.play();
                        videoad.onended = function () {
                            modal.style.display = "none";
                            v5.play();
                        }
                        sessionStorage.setItem("vids1", 0);
                    }, 5000);
                };
                if (v5.paused) {
                    v5.play();
                    document.getElementById("play31").innerHTML = "<img src='svg/pause.svg' height='16px'/>";
                    v1.pause();
                    document.getElementById("play1").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v2.pause();
                    document.getElementById("play21").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v3.pause();
                    document.getElementById("play22").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v4.pause();
                    document.getElementById("play23").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v6.pause();
                    document.getElementById("play32").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v7.pause();
                    document.getElementById("play33").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v8.pause();
                    document.getElementById("play41").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v9.pause();
                    document.getElementById("play42").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v10.pause();
                    document.getElementById("play43").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                } else {
                    v5.pause();
                    document.getElementById("play31").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                }
            }, false);
        document.getElementById("restart31").addEventListener("click", function () {
            v5.currentTime = 0;
        }, false);
        document.getElementById("rew31").addEventListener("click", function () {
            v5.currentTime -= 10;
        }, false);
        document.getElementById("fastFwd31").addEventListener("click", function () {
            v5.currentTime += 10;
        }, false);
    }

    if (v6) {
        document.getElementById("play32").addEventListener("click",
            function () {
                v6.onended = function () {

                    if (sessionStorage.vids1) {
                        sessionStorage.vids1 = parseInt(sessionStorage.vids1) + 1;
                    } else {
                        sessionStorage.setItem("vids1", 1);
                        var c1 = sessionStorage.getItem("vids1");
                    }
                    document.getElementById("play32").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                };
                var c1 = sessionStorage.getItem("vids1");
                var modal = document.getElementById("myModal1");
                if (c1 == 5) {
                    setTimeout(function () {
                        modal.style.display = "block";
                        v6.pause();
                        videoad.play();
                        videoad.onended = function () {
                            modal.style.display = "none";
                            v6.play();
                        }
                        sessionStorage.setItem("vids1", 0);
                    }, 5000);
                };
                if (v6.paused) {
                    v6.play();
                    document.getElementById("play32").innerHTML = "<img src='svg/pause.svg' height='16px'/>";
                    v1.pause();
                    document.getElementById("play1").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v2.pause();
                    document.getElementById("play21").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v3.pause();
                    document.getElementById("play22").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v4.pause();
                    document.getElementById("play23").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v5.pause();
                    document.getElementById("play31").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v7.pause();
                    document.getElementById("play33").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v8.pause();
                    document.getElementById("play41").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v9.pause();
                    document.getElementById("play42").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v10.pause();
                    document.getElementById("play43").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                } else {
                    v6.pause();
                    document.getElementById("play32").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                }
            }, false);
        document.getElementById("restart32").addEventListener("click", function () {
            v6.currentTime = 0;
        }, false);
        document.getElementById("rew32").addEventListener("click", function () {
            v6.currentTime -= 10;
        }, false);
        document.getElementById("fastFwd32").addEventListener("click", function () {
            v6.currentTime += 10;
        }, false);
    }

    if (v7) {

        document.getElementById("play33").addEventListener("click",
            function () {
                v7.onended = function () {

                    if (sessionStorage.vids1) {
                        sessionStorage.vids1 = parseInt(sessionStorage.vids1) + 1;
                    } else {
                        sessionStorage.setItem("vids1", 1);
                        var c1 = sessionStorage.getItem("vids1");
                    }
                    document.getElementById("play33").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                };
                var c1 = sessionStorage.getItem("vids1");
                var modal = document.getElementById("myModal1");
                if (c1 == 5) {
                    setTimeout(function () {
                        modal.style.display = "block";
                        v7.pause();
                        videoad.play();
                        videoad.onended = function () {
                            modal.style.display = "none";
                            v7.play();
                        }
                        sessionStorage.setItem("vids1", 0);
                    }, 5000);
                };
                if (v7.paused) {
                    v7.play();
                    document.getElementById("play33").innerHTML = "<img src='svg/pause.svg' height='16px'/>";
                    v1.pause();
                    document.getElementById("play1").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v2.pause();
                    document.getElementById("play21").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v3.pause();
                    document.getElementById("play22").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v4.pause();
                    document.getElementById("play23").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v6.pause();
                    document.getElementById("play32").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v5.pause();
                    document.getElementById("play31").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v8.pause();
                    document.getElementById("play41").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v9.pause();
                    document.getElementById("play42").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v10.pause();
                    document.getElementById("play43").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                } else {
                    v7.pause();
                    document.getElementById("play33").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                }
            }, false);
        document.getElementById("restart33").addEventListener("click", function () {
            v7.currentTime = 0;
        }, false);
        document.getElementById("rew33").addEventListener("click", function () {
            v7.currentTime -= 10;
        }, false);
        document.getElementById("fastFwd33").addEventListener("click", function () {
            v7.currentTime += 10;
        }, false);
    }

    if (v8) {
        document.getElementById("play41").addEventListener("click",
            function () {
                v8.onended = function () {

                    if (sessionStorage.vids1) {
                        sessionStorage.vids1 = parseInt(sessionStorage.vids1) + 1;
                    } else {
                        sessionStorage.setItem("vids1", 1);
                        var c1 = sessionStorage.getItem("vids1");
                    }
                    document.getElementById("play41").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                };
                var c1 = sessionStorage.getItem("vids1");
                var modal = document.getElementById("myModal1");
                if (c1 == 5) {
                    setTimeout(function () {
                        modal.style.display = "block";
                        v8.pause();
                        videoad.play();
                        videoad.onended = function () {
                            modal.style.display = "none";
                            v8.play();
                        }
                        sessionStorage.setItem("vids1", 0);
                    }, 5000);
                };
                if (v8.paused) {
                    v8.play();
                    document.getElementById("play41").innerHTML = "<img src='svg/pause.svg' height='16px'/>";
                    v1.pause();
                    document.getElementById("play1").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v2.pause();
                    document.getElementById("play21").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v3.pause();
                    document.getElementById("play22").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v4.pause();
                    document.getElementById("play23").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v6.pause();
                    document.getElementById("play32").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v7.pause();
                    document.getElementById("play33").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v5.pause();
                    document.getElementById("play31").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v9.pause();
                    document.getElementById("play42").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v10.pause();
                    document.getElementById("play43").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                } else {
                    v8.pause();
                    document.getElementById("play41").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                }
            }, false);
        document.getElementById("restart41").addEventListener("click", function () {
            v8.currentTime = 0;
        }, false);
        document.getElementById("rew41").addEventListener("click", function () {
            v8.currentTime -= 10;
        }, false);
        document.getElementById("fastFwd41").addEventListener("click", function () {
            v8.currentTime += 10;
        }, false);
    }

    if (v9) {
        document.getElementById("play42").addEventListener("click",
            function () {
                v9.onended = function () {

                    if (sessionStorage.vids1) {
                        sessionStorage.vids1 = parseInt(sessionStorage.vids1) + 1;
                    } else {
                        sessionStorage.setItem("vids1", 1);
                        var c1 = sessionStorage.getItem("vids1");
                    }
                    document.getElementById("play42").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                };
                var c1 = sessionStorage.getItem("vids1");
                var modal = document.getElementById("myModal1");
                if (c1 == 5) {
                    setTimeout(function () {
                        modal.style.display = "block";
                        v9.pause();
                        videoad.play();
                        videoad.onended = function () {
                            modal.style.display = "none";
                            v9.play();
                        }
                        sessionStorage.setItem("vids1", 0);
                    }, 5000);
                };
                if (v9.paused) {
                    v9.play();
                    document.getElementById("play42").innerHTML = "<img src='svg/pause.svg' height='16px'/>";
                    v1.pause();
                    document.getElementById("play1").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v2.pause();
                    document.getElementById("play21").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v3.pause();
                    document.getElementById("play22").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v4.pause();
                    document.getElementById("play23").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v6.pause();
                    document.getElementById("play32").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v7.pause();
                    document.getElementById("play33").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v8.pause();
                    document.getElementById("play41").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v5.pause();
                    document.getElementById("play31").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v10.pause();
                    document.getElementById("play43").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                } else {
                    v9.pause();
                    document.getElementById("play42").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                }
            }, false);
        document.getElementById("restart42").addEventListener("click", function () {
            v9.currentTime = 0;
        }, false);
        document.getElementById("rew42").addEventListener("click", function () {
            v9.currentTime -= 10;
        }, false);
        document.getElementById("fastFwd42").addEventListener("click", function () {
            v9.currentTime += 10;
        }, false);
    }

    if (v10) {
        document.getElementById("play43").addEventListener("click",
            function () {
                v10.onended = function () {

                    if (sessionStorage.vids1) {
                        sessionStorage.vids1 = parseInt(sessionStorage.vids1) + 1;
                    } else {
                        sessionStorage.setItem("vids1", 1);
                        var c1 = sessionStorage.getItem("vids1");
                    }
                    document.getElementById("play43").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                };
                var c1 = sessionStorage.getItem("vids1");
                var modal = document.getElementById("myModal1");
                if (c1 == 5) {
                    setTimeout(function () {
                        modal.style.display = "block";
                        v10.pause();
                        videoad.play();
                        videoad.onended = function () {
                            modal.style.display = "none";
                            v10.play();
                        }
                        sessionStorage.setItem("vids1", 0);
                    }, 5000);
                };
                if (v10.paused) {
                    v10.play();
                    document.getElementById("play43").innerHTML = "<img src='svg/pause.svg' height='16px'/>";
                    v1.pause();
                    document.getElementById("play1").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v2.pause();
                    document.getElementById("play21").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v3.pause();
                    document.getElementById("play22").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v4.pause();
                    document.getElementById("play23").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v6.pause();
                    document.getElementById("play32").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v7.pause();
                    document.getElementById("play33").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v8.pause();
                    document.getElementById("play41").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v9.pause();
                    document.getElementById("play42").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                    v5.pause();
                    document.getElementById("play31").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                } else {
                    v10.pause();
                    document.getElementById("play43").innerHTML = "<img src='svg/play.svg' height='16px'/>";
                }
            }, false);
        document.getElementById("restart43").addEventListener("click", function () {
            v10.currentTime = 0;
        }, false);
        document.getElementById("rew43").addEventListener("click", function () {
            v10.currentTime -= 10;
        }, false);
        document.getElementById("fastFwd43").addEventListener("click", function () {
            v10.currentTime += 10;
        }, false);
    }
};
