function pos(){
    document.querySelector(".web-navigation__logo-container>a[href]").style.marginLeft = "50px";
    document.querySelector(".web-navigation__header").style.marginTop = "2px";
}

window.onload = function(){

    document.body.innerHTML += `<style>

        :root{
            --injection-hover: #555;
            --injection-color: #888;
            --injection-backg: #f1f1f1;
        }

        @media (prefers-color-scheme: dark) {
            :root{
                --injection-hover: #555;
                --injection-color: #888;
                --injection-backg: #333;
            }
        }

        ::-webkit-scrollbar {
            height: 17px;
            background-color: var(--injection-backg);
        }

        ::-webkit-scrollbar-track,
        ::-webkit-scrollbar-thumb {
            border: 5px solid var(--injection-backg);
            background-clip: padding-box;
        }

        ::-webkit-scrollbar-track {
            background-color: var(--injection-backg);
        }

        ::-webkit-scrollbar-thumb {
            background-color: var(--injection-color);
        }

        ::-webkit-scrollbar-thumb:hover {
            background-color: var(--injection-hover);
        }

        ::-webkit-scrollbar-thumb:hover{
            border: 5px solid var(--injection-backg);
        }
      </style>`;

    pos();

    let targetNode = document.querySelector("body"),
        config = { childList: true };

    function func(){
        pos();
    }
        
    new MutationObserver(func).observe(targetNode, config);

}