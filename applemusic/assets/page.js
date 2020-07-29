let win = require("electron").remote.getCurrentWindow();

function parseMsg(e){
    let msgstring = "window-applemusic-",
        message = e.channel;

    if(message === msgstring + "close") win.close();
    else if(message === msgstring + "mini") win.minimize();
    else console.log(message);
}

window.onload = function(){
    let main = document.querySelector(".main");
    
    main.innerHTML = `
        <webview src="https://music.apple.com/ro"}"></webview>
    `;
    //<webview src="https://music.apple.com" preload="${__dirname + "\\inject.js"}"></webview>

    let webview = document.querySelector("webview");
    webview.addEventListener("ipc-message", parseMsg);
};
