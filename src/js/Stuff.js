if (typeof __FontPadding === 'undefined') {
    __FontPadding = {}
}
__FontPadding.Stuff = {
    DRAWER_ID: '__fontPaddingDrawer',
    DRAWER_TOGGLER_ID: '__fontPaddingDrawerToggler',
    DRAWER_TURNNER_ID: '__fontPaddingDrawerTurnner',
    DRAWER_INFORMATION_ID: '__fontPaddingDrawerInformation',
    UP_ID: '__fontPaddingUp',
    DOWN_ID: '__fontPaddingDown',
    TEXT_ID: '__fontPaddingText',
    CANVAS_ID: '__fontPaddingCanvas',
    CSS: [
        '#__fontPaddingDrawer{box-sizing:border-box;border-right:1px solid #eee;position:fixed;top:0;bottom:0;left:-50%;z-index:120000;width:50%;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;background-color:rgba(255,255,255,0.98);}',
        '#__fontPaddingDrawerToggler{border:1px solid #eee;border-left:0;position:absolute;bottom:100px;left:100%;width:40px;height:40px;background-color:#f90;cursor:pointer;background-color:rgba(255,255,255,0.98);box-shadow:1px 1px 1px rgba(0,0,0,0.02);}',
        '#__fontPaddingDrawerToggler:before{-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;content:"";position:absolute;top:50%;left:50%;margin:-10px 0 0 -6px;width:12px;height:20px;background-size:12px 20px;background-repeat:no-repeat;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAoCAYAAADkDTpVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0YzRTRFQzY5NTJBMTFFODkzRUFCNDg3REM2Q0E0N0UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0YzRTRFQzc5NTJBMTFFODkzRUFCNDg3REM2Q0E0N0UiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3RjNFNEVDNDk1MkExMUU4OTNFQUI0ODdEQzZDQTQ3RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3RjNFNEVDNTk1MkExMUU4OTNFQUI0ODdEQzZDQTQ3RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pu2JvRcAAAHpSURBVHjarJdNKERRFMefr5EM0VDY+CgpIgsmC5HYMEVSSllbW85Oo0ihWEmElMhCka29iLLwsZEhi8GGfNQ0xvgfHfUcbybmnn/9aqap87tz77n33WfFYjHLlmpQYWnGJigBu2AfVGoLysAefWUOQZWmoBm82gTEEajREmSAQfAkJMfGErHI/eDRQVKtJaD0gQchOQG1WgJKD7gTknPQoCWg+EBISC6AV0tA6XSQ0D9p1BJQuuJIvFoCSju4EZIr3j8qAkoLCArJNWjTElBaeeR2STCh5J+CeBL6Jx1aAkoTuBSSW0dJkgKLu+hMSELcdSoCi3f2qZDcg14tAaU+jqRbS0CpAwcOkgEtAWVUCIgdDUEKGHE44je/LhCGgnTgB8+i+BYoN12DLC4up2UbFJp2kQtMgjdRfAUUme6DHBAA76L4+q/iSQjSwJhD8Q2QZ3oWZYJZEBHF54HH9DTNB+Ni5PR59ceCJimgS9kc+BAjXwBu0yeahwtFRfFpkGv6TM4GU6IwTcvin4snENAmWnbYRDP8m9G9qBgsiTkPgwlebKObXR7PuX3UUW7PVNO7aQGfgLJbArwHjG7XpWBNFA5z77tNjttvgU+MPMLF1V6h6HQcAi8s8HObqr5lUoa5W1xaz9FPAQYAH3w4J0r9DRQAAAAASUVORK5CYII=);}',
        '#__fontPaddingDrawerTurnner{position:absolute;bottom:60px;left:100%;width:40px;height:40px;border:1px solid #eee;border-left:0;background-color:rgba(255,255,255,0.98);box-shadow:1px 1px 1px rgba(0,0,0,0.02);}',
        '#__fontPaddingDrawerTurnner:before{position:absolute;top:50%;left:50%;width:12px;height:12px;margin:-6px 0 0 -6px;border-radius:6px;background-color:#eee;content:"";}',
        '#__fontPaddingDrawerTurnner.on:before{background-color:#c0f;}',
        '#__fontPaddingDrawer.on{left:0;box-shadow:1px 1px 1px rgba(0,0,0,0.02);}',
        '#__fontPaddingDrawer.on #__fontPaddingDrawerToggler:before{-webkit-transform:rotate(540deg);transform:rotate(540deg);}',
        '#__fontPaddingUp{border-radius:3px;display:none;font-family:helvetica neue,tahoma,sans-serif;margin-top:-5px;margin-left:-20px;position:absolute;z-index:100000;padding:2px 0;width:40px;height:16px;font-size:10px;font-weight:bold;line-height:16px;text-align:center;color:#fff;background-color:#c0f;box-shadow:1px 1px 2px rgba(0,0,0,0.05);}',
        '#__fontPaddingUp:before{position:absolute;top:100%;left:50%;border-style:solid;margin-top:-2px;margin-left:-5px;border-color:#c0f transparent transparent transparent;border-width:5px;content:"";}',
        '#__fontPaddingUp em.__up1{font-style:oblique;font-size:11px;margin-right:1px;}',
        '#__fontPaddingUp em.__up2{font-style:oblique;opacity:.8;font-weight:700;}',
        '#__fontPaddingDown{border-radius:3px;display:none;font-family:helvetica neue,tahoma,sans-serif;margin-top:5px;margin-left:-20px;position:absolute;z-index:100000;padding:2px 0;width:40px;height:16px;font-size:10px;font-weight:bold;line-height:16px;text-align:center;color:#fff;background-color:#c0f;box-shadow:1px 1px 2px rgba(0,0,0,0.05);}',
        '#__fontPaddingDown:before{position:absolute;top:-8px;left:50%;border-style:solid;margin-left:-5px;border-color:transparent transparent #c0f transparent;border-width:5px;content:"";}',
        '#__fontPaddingDown em.__down1{font-style:oblique;font-size:11px;margin-right:1px;}',
        '#__fontPaddingDown em.__down2{font-style:oblique;opacity:.8;font-weight:700;}',
        '#__fontPaddingText{position:fixed;top:0;left:0;z-index:100001;max-width:300px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;border-top:1px solid #f00;border-bottom:1px solid #f00;background-color:#fff;}',
        '#__fontPaddingCanvas{margin:0;padding:0;position:fixed;top:0;left:0;z-index:100002;}',
        '.__fontPadding_modal_title{margin:0;padding:20px 20px 30px;font-size:40px;line-height:50px;font-weight:300;font-family:helvetica neue,sans-serif;}',
        '.__fontPadding_modal_dl{margin:10px 0 0;padding:0 25px;font-family:helvetica neue,sans-serif;}',
        '.__fontPadding_modal_dt{color:#69c;margin:0;padding:0;font-size:12px;font-weight:700;line-height:20px;font-family:helvetica neue,sans-serif;}',
        '.__fontPadding_modal_dd{margin:0;padding:0;font-size:12px;font-weight:400;line-height:20px;font-family:helvetica neue,sans-serif;}'
    ]
};