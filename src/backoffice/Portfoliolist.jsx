import React, { useState } from 'react'
import '../backassets/css/sb-admin-2.css'
import $ from 'jquery';
const Portfoliolist = (props) => {

    $(document).ready(function () {

        (function ($) {
            $.fn.shorten = function (settings) {

                var config = {
                    showChars: 3,
                    ellipsesText: "...",
                    moreText: "more",
                    lessText: "less"
                };

                if (settings) {
                    $.extend(config, settings);
                }

                $(document).off("click", '.morelink');

                $(document).on({
                    click: function () {

                        var $this = $(this);
                        if ($this.hasClass('less')) {
                            $this.removeClass('less');
                            $this.html(config.moreText);
                        } else {
                            $this.addClass('less');
                            $this.html(config.lessText);
                        }
                        $this.parent().prev().toggle();
                        $this.prev().toggle();
                        return false;
                    }
                }, '.morelink');

                return this.each(function () {
                    var $this = $(this);
                    if ($this.hasClass("shortened")) return;

                    $this.addClass("shortened");
                    var content = $this.html();
                    if (content.length > config.showChars) {
                        var c = content.substr(0, config.showChars);
                        var h = content.substr(config.showChars, content.length - config.showChars);
                        var html = c + '<span class="moreellipses">' + config.ellipsesText + ' </span><span class="morecontent"><span>' + h + '</span> <a href="#" class="morelink">' + config.moreText + '</a></span>';
                        $this.html(html);
                        $(".morecontent span").hide();
                    }
                });

            };

        })($);

        $(".linkurl").shorten();

    });


    return (
        <>
            <tr>
                <td scope="row" className="linkurl">{props.portlistid}</td>
                <td>{props.portcat}</td>
                <td>{props.portprojectname}</td>
                <td>{props.portlistclient}</td>
                <td><img src={`http://localhost:9700/uploads/${props.portlistimg}`} width="32" height="32" /></td>
                <td>{props.portlistlang}</td>
                <td ><a className="linkurl" href={props.portlistpreview}>{props.portlistpreview}</a></td>
                <td><button className="btn btn-primary" onClick={() => props.portlistdelete(props.portlistid, props.portlistclient, props.portlistimg, props.portlistlang, props.portlistpreview)}><i class="fa fa-trash"></i></button></td>

            </tr>
        </>
    )
}
export default Portfoliolist;