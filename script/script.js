const Config = {
    name: "noah",
    scale: 1,
    Links: [
        [
            "hoopoe",
            [
                ["thehoopoe.org", "https://thehoopoe.org/"],
                ["netlify", "https://app.netlify.com/sites/the-hoopoe/overview"]
                ["github", "https://github.com/drhoopoe/academic-kickstart"]
            ]
        ],
        [
            "research",
            [
                ["ejtaal", "http://ejtaal.net/aa/#hw4=14,ll=38,ls=1,la=1,sg=20,ha=21,br=26,pr=9,aan=24,mgf=33,vi=51,kz=10,mr=25,mn=1,uqw=106,umr=26,ums=14,umj=34,ulq=247,uqa=17,uqq=2,bdw=h19,amr=h7,asb=h17,auh=h37,dhq=h2,mht=h6,msb=h8,tla=h8,amj=h22,ens=h1,mis=h1"],
                ["academia", "https://sc.academia.edu/NoahGardiner/Analytics/activity/overview"]
                ["dbox", "https://www.dropbox.com/home"]
            ]
        ],
        [
            "teaching",
            [
                ["blackboard", "https://blackboard.sc.edu/"],
                ["class files", "https://emailsc-my.sharepoint.com/personal/gardinen_mailbox_sc_edu/_layouts/15/onedrive.aspx"],
                ["my.sc", "https://my.sc.edu/"]
            ]
        ],
        [
            "other",
            [
                ["feeds", "https://www.inoreader.com/all_articles"],
                ["nts", "https://www.nts.live/"],
                ["bandcamp", "https://bandcamp.com/ngard1035"],
                ["netflix", "https://www.example.com"]
            ]
        ]
    ]
}

const Main = (() => {
    const list = document.getElementById("list");
    const names = document.querySelectorAll("[data-Name]");
    const search = document.getElementById("search");
    const form = document.forms[0];

    const init = () => {
        list.innerHTML = Config.Links.map(([gName, Links]) => `
            <li>
                <h1 onclick="this.parentNode.classList.toggle('hideChildren')">${gName}</h1>
                <ul>
                    ${Links.map(([lName, url]) => `
                        <li>
                            <a href="${url}">${lName}</a>
                        </li>`
                    ).join("")}
                </ul>
            </li>` 
        ).join("")
        
        names.forEach(el => {
            el.innerText = Config.name;
        });

        document.addEventListener("keydown", e => e.key.length === 1 && search.focus());
        search.addEventListener("keydown", () => (window.event ? event.keyCode : e.which) == 13 && form.submit());
    };

    return {
        init,
    };
})();

Main.init()
