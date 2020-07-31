let win = require("electron").remote.getCurrentWindow();

window.onload = function(){
    let maximized = false;
    let main = document.querySelector(".main");
    
    main.innerHTML = `
        <webview src="https://music.apple.com/ro" preload="${__dirname + "\\inject.js"}"></webview>
    `;

    document.querySelector(".close").addEventListener("click", () => {win.close()});
    document.querySelector(".min").addEventListener("click", () => {win.minimize()});
    document.querySelector(".max").addEventListener("click", () => {
        if(maximized) win.maximize();
        else win.unmaximize();
        maximized = !maximized;
    });
};
