// ★重要：IDを「p1, p2...」に合わせました
        const DB = {
            "p1": {
                title: "石川県立音楽堂",
                img: "image/石川県立音楽堂.jpg", 
                audio: "audio/石川県立音楽堂.mp3"
            },
            "p2": {
                title: "おてんとうさま４",
                img: "image/おてんとうさま４.jpg",
                audio: "audio/おてんとうさま４.mp3"
            },
            "p3": {
                title: "Lifegame Music",
                img: "image/lifegame.png",
                audio: "audio/Lifegame Music.mp3"
            },
            "p4": {
                title: "ガードレールミュージック",
                img: "image/ガードレールミュージック.jpg",
                audio: "audio/ガードレールミュージック.mp3"
            }
        };

        const id = (window.AppCommon?.getQueryParam("id", "p1")) || "p1";
        const item = DB[id];

        if (item) {
            (window.AppCommon?.setTextById || ((id,v)=>{ const el=document.getElementById(id); if(el) el.textContent=v; }))("workTitle", item.title);
            (window.AppCommon?.setAttrById || ((id,a,v)=>{ const el=document.getElementById(id); if(el) el.setAttribute(a,v); }))("workImage", "src", item.img);
            (window.AppCommon?.setAttrById || ((id,a,v)=>{ const el=document.getElementById(id); if(el) el.setAttribute(a,v); }))("player", "src", item.audio);
            // 詳細ページ（work.html）へのリンクにIDを引き継ぐ
            (window.AppCommon?.setAttrById || ((id,a,v)=>{ const el=document.getElementById(id); if(el) el.setAttribute(a,v); }))("detailsLink", "href", `work.html?id=${id}`);
        } else {
            // IDが見つからない場合のフォールバック
            (window.AppCommon?.setTextById || ((id,v)=>{ const el=document.getElementById(id); if(el) el.textContent=v; }))("workTitle", "Work Not Found");
        }


