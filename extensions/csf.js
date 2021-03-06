/*!
 * Authentic Theme 18.10 (https://github.com/qooob/authentic-theme)
 * Copyright 2014-2016 Ilia Rostovtsev <programming@rostovtsev.ru>
 * Licensed under MIT (https://github.com/qooob/authentic-theme/blob/master/LICENSE)
 */
;

function ___csf() {
    var x = window,
        u = x.parent,
        y = u.document.getElementById("iframe"),
        p = y.contentDocument.getElementsByTagName("head")[0],
        w = y.contentDocument.createElement("script"),
        m = u.$load____ext;
    w.type = "text/javascript";
    w.src = t__wi_p.$_____link_full + "/unauthenticated/js/jquery." + m + ".js?1810";
    p.appendChild(w);
    var p = y.contentDocument.getElementsByTagName("head")[0],
        w = y.contentDocument.createElement("script");
    w.type = "text/javascript";
    w.src = t__wi_p.$_____link_full + "/unauthenticated/js/codemirror." + m + ".js?1810";
    p.appendChild(w);
    if (!t__wi_p.$('script[src*="datatables"]').length) {
        s(t__wi_p.$_____link_full + "/unauthenticated/js/jquery.datatables." + m + ".js?1810")
    }
    if (u.$('iframe[name="page"]').contents().find("body.csf").length === 0) {
        y.contentWindow.onbeforeunload = function(a) {
            u.__lrs()
        };
        u.$('a[href="csf/"]').parent("li").addClass("sub_active").append('<span class="current"></span>').parent("ul.sub").show().prev("li").addClass("active");
        $csf = u.$('iframe[name="page"]').contents();
        $csf.find("html").attr("data-background-style", t__wi_p.$("html").attr("data-background-style"));
        $csf.find("head").append('			<link rel="shortcut icon" href="' + t__wi_p.$_____link_full + '/images/favicon-webmin.ico">			<meta name="viewport" content="width=device-width, initial-scale=1.0">			<link href="' + t__wi_p.$_____link_full + "/unauthenticated/css/bootstrap." + m + '.css?1810" rel="stylesheet" type="text/css">			<link href="' + t__wi_p.$_____link_full + "/unauthenticated/css/jquery.datatables." + m + '.css?1810" rel="stylesheet" type="text/css">			<link href="' + t__wi_p.$_____link_full + "/unauthenticated/css/codemirror." + m + '.css?1810" rel="stylesheet" type="text/css">			<link href="' + t__wi_p.$_____link_full + "/unauthenticated/css/authentic." + m + '.css?1810" rel="stylesheet" type="text/css">		');
        $.ajax({
            url: t__wi_p.$_____link_full + "/unauthenticated/css/styles.css",
            type: "HEAD",
            success: function() {
                $csf.find("head").append('		    	   	<link href="' + t__wi_p.$_____link_full + "/unauthenticated/css/styles.css?" + (Math.floor(Date.now() / 1000)) + '" rel="stylesheet" type="text/css">			')
            }
        });
        $.each(u.$('link[href*="/styles.css"]'), function() {
            if ($(this)) {
                $csf.find("head").append('<link href="' + t__wi_p.$_____link_full + '/unauthenticated/css/styles.css" rel="stylesheet" type="text/css">')
            }
        });
        $csf.find('body:not(".mobile-menu-toggler")').on("click", function() {
            u.hide_mobile_menu()
        });
        if (!$csf.find("body").attr("style")) {
            t__wi_p.location.reload();
            return
        }
        typeof t__wi_p.$____csf == "undefined" ? t__wi_p.$____csf = 1100 : t__wi_p.$____csf = 300;
        setTimeout(function() {
            $csf.find("body").animate({
                opacity: 1
            }, u.$settings_animation_left_slide_time, function() {
                $csf.find("body").css("pointer-events", "auto")
            })
        }, t__wi_p.$____csf);
        $csf.find('fieldset.csf-box + div.csf-box[align="center"]').css("margin-top", "3px");
        $csf.find("style").remove();
        $csf.find("body").addClass("csf");
        $csf.find("body").wrapInner('<div class="container-fluid col-lg-10 col-lg-offset-1">');
        $csf.find(".container-fluid").wrapInner('<div class="panel panel-default">');
        $csf.find(".panel-default").wrapInner('<div class="panel-body">');
        $csf.find(".panel-default").css("border-color", "#e9e9e9").css("border-top-width", "4px").prepend('<div class="panel-heading" style="text-align:center"><font size="+2">ConfigServer Security & Firewall</font></div>');
        $csf.find(".panel-body > img:first-child, .panel-body > b").remove();
        $csf.find("#CSFajax").css("border", "1px solid #f0f0f0");
        $csf.find("body table").each(function() {
            $(this).addClass("table table-striped table-condensed").removeAttr("style")
        });
        $csf.find("body table tr td, body table tr th").each(function() {
            $(this).removeAttr("style")
        });
        $csf.find("body table tr").each(function() {
            $(this).removeAttr("bgcolor")
        });
        $csf.find(".panel-body > h2:first-child").each(function() {
            $(this).text($(this).text().replace(":", ""))
        });
        $csf.find(".csf table.table-striped.table-condensed th").each(function() {
            if ($(this).html() == "Time To Live") {
                $(this).css("min-width", "100px")
            }
            if ($(this).html() == "&nbsp;") {
                $(this).css("min-width", "70px")
            }
        });

        function r() {
            $csf.find("#CSFajax").css("max-height", $(window).outerHeight() - $(window).outerHeight() / 2.4 + "px");
            container_fluid_size()
        }
        var q;
        $(window).resize(function() {
            clearTimeout(q);
            q = setTimeout(function() {
                r()
            }, 1000)
        });
        r();
        $csf.find(".csf table.table-striped.table-condensed tbody > tr > td > p").each(function() {
            if ($(this).text().indexOf("Your Score") >= 0) {
                $(this).next("p").remove();
                $(this).next("table").remove();
                $(this).next("table").remove();
                $(this).next("p").css("text-align", "center")
            }
        });
        var o = {
            order: [],
            aaSorting: [],
            bDestroy: true,
            bPaginate: false,
            bInfo: false,
            destroy: true,
            oLanguage: {
                sEmptyTable: lang("theme_xhred_datatable_semptytable"),
                sInfo: lang("theme_xhred_datatable_sinfo"),
                sInfoEmpty: lang("theme_xhred_datatable_sinfoempty"),
                sLengthMenu: lang("theme_xhred_datatable_slengthmenu"),
                sLoadingRecords: lang("theme_xhred_datatable_sloadingrecords"),
                sProcessing: lang("theme_xhred_datatable_sprocessing"),
                sSearch: " ",
                sZeroRecords: lang("theme_xhred_datatable_szerorecords")
            }
        };

        function k(a, c) {
            if ($csf.find('textarea[name="formdata"]').length) {
                return
            }
            if ($csf.find('pre:not(:contains("<---"))').length) {
                var b = "log";
                setTimeout(function() {
                    a && $csf.find("pre").css({
                        position: "initial",
                        left: "initial",
                        opacity: "0"
                    });
                    $csf.find("pre").each(function(g, f) {
                        var h = $(this),
                            d = HTMLDecode(h.html());
                        h.empty();
                        window[b + "_" + g] = u.$('iframe[name="page"]').get(0).contentWindow.CodeMirror(this, {
                            value: d,
                            lineNumbers: c,
                            mode: null,
                            theme: settings_cm_view_palette,
                            readOnly: true,
                            viewportMargin: Infinity
                        });
                        a && window[b + "_" + g].setSize(null, ($(window).outerHeight() / 1.7))
                    }).promise().done(function() {
                        if (a) {
                            $csf.find("pre").css({
                                position: "initial",
                                left: "initial"
                            });
                            setTimeout(function() {
                                $csf.find("pre").animate({
                                    opacity: 1
                                }, u.$settings_animation_left_slide_time)
                            }, 10)
                        }
                        if (!a) {
                            var d = $.merge($csf.find(".panel-body .csf-table tbody > tr > td > pre"), $csf.find(".panel-body .csf-box > pre")).length;
                            $.each($.merge($csf.find(".panel-body .csf-table tbody > tr > td > pre"), $csf.find(".panel-body .csf-box > pre")), function(g, f) {
                                var h = ($(window).outerHeight() / (1.7 * d)),
                                    j = ($(this).find(".CodeMirror-code").find("pre").length * 17);
                                if (j > h) {
                                    window[b + "_" + g].setSize(null, h)
                                } else {
                                    window[b + "_" + g].setSize(null, j - 10)
                                }
                            })
                        }
                    })
                }, 10)
            } else {
                $csf.find("pre").css({
                    position: "initial",
                    left: "initial"
                });
                $csf.find("pre").replaceText(/<---- /gi, "");
                $csf.find("pre").replaceText(/ ---->/gi, "")
            }
        }

        function l() {
            setTimeout(function() {
                $csf.find(".panel-heading").prepend('				<div class="btn-group pull-right" style="position: absolute; right: 15px; top: 17px;">				<a class="btn btn-link text-lighter btn-filter-top-right text-decoration-none pull-left" data-toggle="tooltip" data-title="' + u.lang("theme_xhred_datatable_filter_visible_tables") + '" data-container="body">					<label style="font-weight: 400">						<input type="text" class="dataTable-mirror" placeholder="' + u.lang("theme_xhred_datatable_filter") + '">					</label>					<i class="fa fa-filter"></i>				</a>				</div>			');
                var a = $csf.find(".dataTables_filter");
                a.hide();
                $csf.find(".btn-filter-top-right").click(function(b) {
                    !$(b.target).is("input") && $(this).find("label").slideToggle(300, function() {
                        $(this).find("input").focus()
                    })
                });
                $csf.find(".dataTable-mirror").keyup(function(b) {
                    $csf.find(".dataTables_filter input").val($(this).val()).trigger("keyup");
                    if ($.trim($(this).val()).length > 0) {
                        $csf.find(".btn-filter-top-right i").addClass("text-danger")
                    } else {
                        $csf.find(".btn-filter-top-right i").removeClass("text-danger")
                    }
                });
                $csf.find(".btn-filter-top-right input").blur(function(b) {
                    $(this).parent("label").slideToggle(0)
                });
                $csf.on("keydown", function(g) {
                    if (u.$('aside input[name="search"]').is(":focus")) {
                        return
                    }
                    var f = g.keyCode ? g.keyCode : g.which;
                    if (!$csf.find("input").is(":focus") && !$csf.find("select").is(":focus") && !$csf.find("textarea").is(":focus") && !$csf.find(".modal.in").length) {
                        var d = String.fromCharCode(f).toLowerCase();
                        if (d && /[a-zA-Z0-9]/.test(d) && !g.ctrlKey && !g.altKey && !g.metaKey && f !== 106 && f !== 107 && f !== 109 && f !== 112 && f !== 113 && f !== 114 && f !== 115 && f !== 116 && f !== 117 && f !== 118 && f !== 119 && f !== 120 && f !== 121 && f !== 122 && f !== 123) {
                            if ($csf.find(".dataTables_filter label input").length) {
                                $csf.find(".btn-filter-top-right").trigger("click");
                                $csf.find(".btn-filter-top-right .dataTable-mirror").focus().trigger("keyup")
                            }
                        }
                    }
                })
            }, 0)
        }
        setTimeout(function() {
            if ($csf.find(".csf h2").text().indexOf("Ports listening for external connections and the executables running behind them") !== -1) {
                $csf.find('table:not(:contains("©2006-"))').each(function() {
                    if (!$(this).find("thead").length) {
                        var b = $(this),
                            a = $(this).find("tbody tr:first-child");
                        b.attr("style", "width: 100% !important");
                        b.attr("style", "min-width: 100% !important");
                        b.prepend("<thead>" + a.html() + "</thead>");
                        $(this).find("thead td").replaceTagName("th");
                        a.remove();
                        $csf.find(".csf h2").addClass("col_header_custom").attr("style", "margin-bottom: -5px !important; margin-top: 2px !important");
                        $csf.find(".csf h2").replaceText(/:/gi, "");
                        $(this).dataTable(o)
                    }
                });
                l()
            }
            if ($csf.find(".csf .table.table-striped.table-condensed tbody th:eq(1)").text().indexOf("A/D") !== -1 && $csf.find(".csf .table.table-striped.table-condensed tbody th:eq(2)").text().indexOf("IP address") !== -1) {
                $csf.find('table:not(:contains("©2006-"))').each(function() {
                    if (!$(this).find("thead").length) {
                        var b = $(this),
                            a = $(this).find("tbody tr:first-child");
                        b.prepend("<thead>" + a.html() + "</thead>");
                        a.remove();
                        $(this).dataTable(o);
                        b.find('img[src^="csfimages/"]').each(function() {
                            $(this).attr("src", $(this).attr("src").replace("/csfimages/", "csfimages/"))
                        });
                        setTimeout(function() {
                            $csf.find(".csf .dataTable thead tr th:eq(0)").css("opacity", "0").css("pointer-events", "none")
                        }, 10)
                    }
                });
                l()
            }
        }, 10);
        $csf.find(".csf td.section-gap:first-child").each(function() {
            $(this).parent("tr:first-child").remove();
            $(this).parent("tr:last-child").remove()
        });
        $csf.find(".csf td.section-title").each(function() {
            $(this).parent("tr").prev("tr").find("td.section-gap").parent("tr").remove();
            $(this).parent("tr").prev("tr").find("td.section-gap").parent("tr").remove()
        });
        $csf.find('.csf input[type="text"]').each(function() {
            if ($(this).attr("id") == "allowip") {
                $(this).removeAttr("style").attr("style", "border-color: #8cac8c; background-color: #93b893;")
            }
            if ($(this).attr("style") == "background-color: pink") {
                $(this).removeAttr("style").attr("style", "color: #fff; border-color: #d4a09f; background-color: #e0a9a8;")
            }
            if ($(this).attr("id") == "ignoreip") {
                $(this).removeAttr("style").attr("style", "border-color: #b3dae5; background-color: #bfd9e1;")
            }
        });
        $csf.find("body table tr th").each(function() {
            if (!$(this).parents("tbody").find("form").length && $(this).text().indexOf("Upgrade") >= 0) {
                $(this).parents("table").prev("br").remove();
                $(this).parents("table").remove()
            }
        });
        $csf.find('a[href$="/csf/changelog.txt"]').addClass("btn btn-xxs btn-default").text("View changelog");
        var n = $csf.find('table:contains("©2006-")').find("tr").find('*:contains("csf:")').text().match(/((?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+))$/)[0];
        $csf.find(".csf .panel-heading font").each(function() {
            if ($(this).text().indexOf("ConfigServer Security & Firewall") >= 0) {
                $(this).html('<font size="+2">Firewall</font><span style="font-size:14px;display:block">ConfigServer Security & Firewall version ' + n + "</span>")
            }
        });
        $csf.find('table > tbody > tr:first-child > th:first-child, table[align="center"] > tbody > tr:first-child').each(function() {
            $(this).css("border-top", "3px solid #f0f0f0")
        });
        $csf.find('table[align="center"] > tbody > tr > td.section-title').each(function() {
            $(this).parent("tr").css("border-top", "3px solid #f0f0f0")
        });
        typeof settings_allowed_hostname == "undefined" ? settings_allowed_hostname = true : false;
        if ($hostname == settings_allowed_hostname) {
            $csf.find('table:contains("Development Contribution")').prev("br").remove();
            $csf.find('table:contains("Development Contribution")').parents(".dataTables_wrapper").remove();
            $csf.find('table:contains("Development Contribution")').remove();
            $csf.find('table:contains("©2006-")').prev("br").remove();
            $csf.find('table:contains("©2006-")').parents(".dataTables_wrapper").remove();
            $csf.find('table:contains("©2006-")').remove()
        } else {
            $csf.find('table:contains("©2006-")').removeClass("table-striped csf-table").css("border-color", "transparent").find("tr td").addClass("text-right").css("border-color", "#eaeaea").css("font-size", "11px").parent().parent("tbody").find("tr:first-child").remove()
        }
        var z = $csf.find('big:contains("iptables logs")');
        if (z.length) {
            var e = z.parent(".csf-box").next().next().next(".table.table-striped.table-condensed");
            z.addClass("col_header_custom big_big").attr("style", "border-bottom-color: transparent !important; background-color: #fff !important");
            z.find("b").css("margin-left", "4px");
            e.attr("style", "margin-top: -25px !important");
            e.find("tbody tr:nth-child(2) td:first-child").css("min-width", "200px");
            $csf.find('a[href*="expandO(\\"expand\\""]').parents(".csf-tr").addClass("hidden").next("tr").addClass("custom_table_head").css({
                "background-color": "#fff"
            });
            setTimeout(function() {
                $csf.find(".panel-heading").prepend('				<div class="btn-group pull-right" style="position: absolute; right: 15px; top: 17px;">				<a class="btn btn-link text-lighter btn-toggle-top-right text-decoration-none pull-left" data-toggle="tooltip" data-container="body">					<i class="fa fa-toggle-switch-off fa-1_25x"></i>				</a>				</div>			');
                $csf.find("body").on("click", ".btn-toggle-top-right", function(a) {
                    a.preventDefault();
                    if ($(this).find(".fa-toggle-switch-off").length) {
                        $csf.find('a[href*="expandO(\\"expand\\""]')[0].click();
                        $(this).find(".fa-toggle-switch-off").removeClass("fa-toggle-switch-off").addClass("fa-toggle-switch")
                    } else {
                        $csf.find('a[href*="expandO(\\"collapse\\""]')[0].click();
                        $(this).find(".fa-toggle-switch").addClass("fa-toggle-switch-off").removeClass("fa-toggle-switch")
                    }
                })
            }, 0)
        }
        if ($csf.find('.csf select[name="dur"]')[0]) {
            var t = $csf.find('.csf select[name="dur"]')[0].nextSibling;
            if (t.nodeValue == ".") {
                $(t).remove()
            }
        }
        $csf.find('.csf select:not([name="backup"], [name="profile1"], [name="profile2"], [name="do"], [name="dur"]), .csf input:not([name="comment"], [name="ip"], [name="ports"], [name="timeout"], [aria-controls*="DataTables_Table_"])').each(function() {
            $(this).addClass("heighter-34")
        });
        if ($csf.find(".csf #paginatediv2.paginationstyle > select").length) {
            $csf.find(".panel-body > script + fieldset.csf-box > legend").first().hide()
        }
        $csf.find(".csf #paginatediv2.paginationstyle > select").each(function() {
            $(this).attr("style", "vertical-align: top !important")
        });
        $csf.find(".csf #paginatediv2 > a").each(function() {
            $(this).attr("style", "vertical-align: baseline !important")
        });
        $csf.find(".csf p > select").each(function() {
            $(this).attr("style", "vertical-align: baseline !important")
        });
        $csf.find('img[src="csfimages/loader.gif"]').each(function() {
            $(this).attr("src", "" + t__wi_p.$_____link_full + "/images/loader-horizontal.gif").css("margin-left", "10px")
        });
        $csf.find(".paginationstyle a").each(function() {
            $(this).addClass("btn btn-default")
        });
        $csf.find('img[src^="lfd_"], img[src^="/csf/lfd_"]').each(function() {
            $(this).parents("table").removeClass("table-striped")
        });
        $csf.find('img[src^="csfimages/delete.png"]').each(function() {
            $(this).replaceWith('<i class="fa fa-unlock text-success" style="font-size: 1.1em; vertical-align: middle;"></i>')
        });
        $csf.find('img[src^="csfimages/perm.png"]').each(function() {
            $(this).replaceWith('<i class="fa fa-lock text-danger" style="font-size: 1.1em; vertical-align: middle;"></i>')
        });
        $csf.find('img[src^="csfimages/plus.png"]').each(function() {
            $(this).addClass("hidden");
            x;
            $(this).after('<i class="fa fa-plus-circle text-success margined-right-2" style="font-size: 1.1em;"></i>')
        });
        $csf.find('img[src^="csfimages/minus.png"]').each(function() {
            $(this).addClass("hidden");
            $(this).after('<i class="fa fa-minus-circle text-danger margined-right-2" style="font-size: 1.1em;"></i>')
        });
        $csf.find(".csf fieldset legend b").each(function() {
            if ($(this).text().indexOf("Edit ConfigServer Firewall") >= 0) {
                $submit_changes = $csf.find('input[value="Change"]');
                $submit_changes.addClass("csf-submit_changes");
                $submit_changes.on("click", function() {
                    $csf.find('input[value="saveconf"]').parent("form").submit()
                })
            }
        });
        typeof __csf__listen_log_grep != "undefined" && clearInterval(__csf__listen_log_grep);
        if ($csf.find("#CSFgrep_D").length && $csf.find("#CSFgrep_E").length && $csf.find("#CSFgrep_i").length) {
            $csf.find('select, input[type="text"], button[onclick="CSFgrep()"]').removeClass("heighter-34").addClass("heighter-28");
            $csf.find("#CSFgrep_i, #CSFgrep_E, #CSFgrep_D").attr("style", "vertical-align: middle; margin-right: 4px;");
            $csf.find("#CSFajax").css("margin-bottom", "4px");
            $csf.find("#CSFlognum").attr("onchange", "javascript: document.getElementsByTagName('button')[0].click()");
            $csf.find("#CSFgrep_D").addClass("hidden");
            $csf.find(".csf-box").replaceText(/Detach/gi, "");
            $csf.find("li:contains('Use the \"Detach\" option to display the search results in a separate window')").remove()
        }
        $csf.find("#CSFajax.csf-box").addClass("csf_force_log_size");
        $.each($csf.find('input[type="radio"]:not(.iawobject), input[type="checkbox"]:not(.iawobject):not(#CSFgrep_D)'), function() {
            if ($(this)[0]) {
                $___text = $(this)[0].nextSibling
            }
            var h = $(this).next('input:not([type="radio"], [type="checkbox"], [type="hidden"]), select, textarea'),
                f = ($___text && $___text.nodeValue && $.trim($___text.nodeValue).length > 1),
                g = (f ? $___text.nodeValue : "&nbsp;");
            $(this).addClass("iawobject");
            var c = $(this).attr("id") ? 'for="' + $(this).attr("id") + '"' : false;
            if (c === false && $(this).attr("name") && $(this).val()) {
                var d = "__replaced_" + $(this).attr("name") + "_" + $(this).val() + "";
                var c = 'for="' + d + '"';
                $(this).attr("id", d)
            }
            if ($(this).is(":checkbox")) {
                if ($($___text).length) {
                    $($___text).wrap('<label style="font-weight: 400" class="lawobject" ' + c + ">" + $.trim(g) + " </label>");
                    $($___text).remove()
                } else {
                    $(this).after('<label class="lawobject" for="' + ($(this).attr("id") ? $(this).attr("id") : $(this).attr("name")) + '">&nbsp;</label>')
                }
            }
            $(this).next("label").andSelf().wrapAll('<span class="aw' + $(this).attr("type") + ' awobject awobjectm"></span>')
        });
        setTimeout(function() {
            if (typeof u.$('iframe[name="page"]').get(0).contentWindow.CodeMirror == "function") {
                k(false, false)
            } else {
                setTimeout(function() {
                    if (typeof u.$('iframe[name="page"]').get(0).contentWindow.CodeMirror == "function") {
                        k(false, false)
                    } else {
                        setTimeout(function() {
                            k(false, false)
                        }, 100)
                    }
                }, 100)
            }
        }, 100);

        function v() {
            $csf.find('textarea[name="formdata"]').each(function(c, d) {
                var a = $(this);
                $parent_width = a.parent("td").width();
                var b = u.$('iframe[name="page"]').get(0).contentWindow.CodeMirror.fromTextArea(d, {
                    mode: {
                        name: "rpm-spec"
                    },
                    matchBrackets: true,
                    lineNumbers: true,
                    keyMap: "sublime",
                    highlightSelectionMatches: {
                        showToken: /\w/,
                        annotateScrollbar: true
                    },
                    indentUnit: 0,
                    autofocus: true,
                    foldGutter: true,
                    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                    extraKeys: {
                        "Ctrl-Space": "autocomplete"
                    },
                    styleActiveLine: true,
                    lineWrapping: true,
                    theme: t__wi_p.settings_cm_editor_palette
                });
                $window_height = ($(window).outerHeight() - ($(window).outerHeight() / 2));
                b.setSize($parent_width, $window_height);
                $(window).resize(function() {
                    $parent_width = a.parent("td").width();
                    $window_height = ($(window).outerHeight() - ($(window).outerHeight() / 2));
                    b.setSize($parent_width, $window_height)
                })
            })
        }
        setTimeout(function() {
            if (typeof u.$('iframe[name="page"]').get(0).contentWindow.CodeMirror == "function") {
                v()
            } else {
                setTimeout(function() {
                    if (typeof u.$('iframe[name="page"]').get(0).contentWindow.CodeMirror == "function") {
                        v()
                    } else {
                        setTimeout(function() {
                            v()
                        }, 60)
                    }
                }, 150)
            }
        }, 60);
        $("#iframe").contents().find("body").on("keydown", function(a) {
            u.search_control(a);
            u.shortcut_control(a)
        });
        if (u.$("#open_webmin").length > 0 && u.$(".switch-toggle input:checked").attr("id") != "open_webmin" && t__wi_p.$("body").data("dashboard") == "1") {
            u.t__s("open_webmin")
        }
        if (u.$___________initial === 1) {
            setTimeout(function() {
                u.__lre()
            }, t__wi_p.$____csf)
        } else {
            setTimeout(function() {
                u.__lre()
            }, t__wi_p.$____csf)
        }
        setTimeout(function() {
            $csf.find("body").css("overflow", "auto")
        }, t__wi_p.$____csf);
        if (u.$('ul.sub li.sub_active a[target="page"]').length === 2) {
            u.__cms();
            u.__dlm("csf/")
        }
    }
};