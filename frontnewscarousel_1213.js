$(function () {
    $(".frontnews").html(
            frontnewsselector(1) +
            frontnewsselector(2) +
            frontnewsselector(3)
            );
});

var spots =
        {
            spot1:
                    [
                        {
                            "text": "Savner du en bog, tidsskrift eller andet til dit arbejde i DR?",
                            "image": "http://77.66.32.238/php/intern/arkiv/primo/images/spot/spot_indkoeb_blaa.png",
                            "url": "http://77.66.32.238/php/intern/arkiv/primo/static/foreslaa.php",
                            "freq": [0, 10]
                        }
//                        ,
//                        {
//                            "text": "",
//                            "image": "",
//                            "url": "",
//                            "freq", [0,10]
//                        }

                    ],
            spot2:
                    [
                        {
                            "text": "Debutdigtsamling om opvækst med vold, svigt og kriminalitet",
                            "image": "http://77.66.32.238/php/intern/arkiv/primo/images/spot/1213/spot_yahya.png",
                            "url": "http://primo-17.kb.dk/primo_library/libweb/action/search.do?dscnt=0&scp.scps=scope%3A%28DRR01%29&frbg=&tab=default_tab&dstmp=1385560997837&srt=rank&ct=search&mode=Basic&dum=true&indx=1&vl(628594933UI1)=all_items&vl(freeText0)=yahya%20hassan&fn=search&vid=DRR",
                            "freq": [0, 1]
                        },
                        {
                            "text": "Tilbageblik på danske kvinder og deres særlige bedrifter",
                            "image": "http://77.66.32.238/php/intern/arkiv/primo/images/spot/1213/spot-kvinder.png",
                            "url": "http://primo-17.kb.dk/primo_library/libweb/action/search.do?dscnt=0&scp.scps=scope%3A%28DRR01%29&frbg=&tab=default_tab&dstmp=1385561280694&srt=rank&ct=search&mode=Basic&dum=true&indx=1&vl(628594933UI1)=all_items&vl(freeText0)=kvinder%20der%20forandrede%20danmark&fn=search&vid=DRR",
                            "freq": [2, 2]
                        },
						{
                            "text": "Detektiv på sag om selvmord i Londons bedre kredse",
                            "image": "http://77.66.32.238/php/intern/arkiv/primo/images/spot/1213/spot_goegen.png",
                            "url": "http://primo-17.kb.dk/primo_library/libweb/action/search.do?dscnt=0&scp.scps=scope%3A%28DRR01%29&frbg=&tab=default_tab&dstmp=1385561022696&srt=rank&ct=search&mode=Basic&dum=true&indx=1&vl(628594933UI1)=all_items&vl(freeText0)=g%C3%B8gens&fn=search&vid=DRR",
                            "freq": [3, 3]
                        },
						{
                            "text": "Brügger fortæller om nogle af sine journalistiske rævestreger",
                            "image": "http://77.66.32.238/php/intern/arkiv/primo/images/spot/1213/spot_klovnekrigen.png",
                            "url": "http://primo-17.kb.dk/primo_library/libweb/action/search.do?dscnt=0&scp.scps=scope%3A%28DRR01%29&frbg=&tab=default_tab&dstmp=1385561186036&srt=rank&ct=search&mode=Basic&dum=true&indx=1&vl(628594933UI1)=all_items&vl(freeText0)=klovnekrigen&fn=search&vid=DRR",
                            "freq": [4, 4]
                        },
						{
                            "text": "Skaberen af Dating.dk fortæller om sit eget forhold til kærlighed",
                            "image": "http://77.66.32.238/php/intern/arkiv/primo/images/spot/1213/spot_dating-kongen.png",
                            "url": "http://primo-17.kb.dk/primo_library/libweb/action/search.do?dscnt=0&scp.scps=scope%3A%28DRR01%29&frbg=&tab=default_tab&dstmp=1385561327596&srt=rank&ct=search&mode=Basic&dum=true&indx=1&vl(628594933UI1)=all_items&vl(freeText0)=datingkongen&fn=search&vid=DRR",
                            "freq": [5, 5]
                        },
						{
                            "text": "Breve fra Eik Skaløe til hans familie",
                            "image": "http://77.66.32.238/php/intern/arkiv/primo/images/spot/1213/spot-breve.png",
                            "url": "http://primo-17.kb.dk/primo_library/libweb/action/search.do?dscnt=0&scp.scps=scope%3A%28DRR01%29&frbg=&tab=default_tab&dstmp=1385561435370&srt=rank&ct=search&mode=Basic&dum=true&indx=1&vl(628594933UI1)=all_items&vl(freeText0)=r%C3%A5gummis%C3%A5ler&fn=search&vid=DRR",
                            "freq": [6, 6]
                        },
						{
                            "text": "Om sammenhæng mellem tv og brugen af sociale medier",
                            "image": "http://77.66.32.238/php/intern/arkiv/primo/images/spot/1213/spot_social-tv.png",
                            "url": "http://primo-17.kb.dk/primo_library/libweb/action/search.do?dscnt=0&scp.scps=scope%3A%28DRR01%29&frbg=&tab=default_tab&dstmp=1385561591643&srt=rank&ct=search&mode=Basic&dum=true&indx=1&vl(628594933UI1)=all_items&vl(freeText0)=social%20tv%20engage&fn=search&vid=DRR",
                            "freq": [7, 7]
                        },
						{
                            "text": "Analyse af anvendelsen af locations i krimier",
                            "image": "http://77.66.32.238/php/intern/arkiv/primo/images/spot/1213/spot_wallanderland.png",
                            "url": "http://primo-17.kb.dk/primo_library/libweb/action/search.do?dscnt=0&scp.scps=scope%3A%28DRR01%29&frbg=&tab=default_tab&dstmp=1385561486327&srt=rank&ct=search&mode=Basic&dum=true&indx=1&vl(628594933UI1)=all_items&vl(freeText0)=medieturisme&fn=search&vid=DRR",
                            "freq": [8, 8]
                        },
						{
                            "text": "Fortælling om somaliske piraters gidselstagning af danske søfolk",
                            "image": "http://77.66.32.238/php/intern/arkiv/primo/images/spot/1213/spot_det-beskidte-spil.png",
                            "url": "http://primo-17.kb.dk/primo_library/libweb/action/search.do?dscnt=0&scp.scps=scope%3A%28DRR01%29&frbg=&tab=default_tab&dstmp=1385561746419&srt=rank&ct=search&mode=Basic&dum=true&indx=1&vl(628594933UI1)=all_items&vl(freeText0)=det%20beskidte%20spil&fn=search&vid=DRR",
                            "freq": [9, 9]
                        },
						{
                            "text": "Hvorfor er data så afgørende for virksomheders værdiskabelse?",
                            "image": "http://77.66.32.238/php/intern/arkiv/primo/images/spot/1213/spot_data.png",
                            "url": "http://primo-17.kb.dk/primo_library/libweb/action/search.do?dscnt=0&scp.scps=scope%3A%28DRR01%29&frbg=&tab=default_tab&dstmp=1385561907788&srt=rank&ct=search&mode=Basic&dum=true&indx=1&vl(628594933UI1)=all_items&vl(freeText0)=virksomhedens%20nye%20grundstof&fn=search&vid=DRR",
                            "freq": [10, 10]
                        }
                    ],
            spot3:
                    [
                        {
                            "text": "Du kan læse de nyeste tidsskrifter i DR’s bibliotek",
                            "image": "http://77.66.32.238/php/intern/arkiv/primo/images/spot/250x260_sofa.png",
                            "url": "http://cmsil/Produktion/Faciliteter+og+ydelser/Arkiv+og+research/Tekst/20090109103005.htm",
                            "freq": [0, 10]
                        }
                    ]

        };

function frontnewsselector(spotplace) {
    if (spots["spot" + spotplace].length === 0)
        return frontnewshtml(spotplace, 0);

    var r = frontnewsrand();
    for (var i = 0; i < spots["spot" + spotplace].length; i++) {
        var spot = spots["spot" + spotplace][i];
        if (r >= spot.freq[0] && r <= spot.freq[1])
            return frontnewshtml(spotplace, i);
    }

    return frontnewshtml(spotplace, 0);
}

function frontnewshtml(spotplace, spotidx) {
    var spot = spots["spot" + spotplace][spotidx];
    return '<a href="' + spot.url + '" target="_blank">' +
            '<div class="frontnewsbox' + spotplace + '" style=background:url(' + spot.image + ');">' +
            '<div class="text">' + spot.text + '</div>' +
            '</div></a>';

}

function frontnewsrand() {
    return Math.floor(Math.random() * (11));
}
