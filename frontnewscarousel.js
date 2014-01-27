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
                            "text": "Fotografisk billedværk der skildrer verdens kulturelle mangfoldighed",
                            "image": "http://77.66.32.238/php/intern/arkiv/primo/images/spot/0114/spot_100subkulturer.png",
                            "url": "http://primo-17.kb.dk/primo_library/libweb/action/search.do?dscnt=0&scp.scps=scope%3A%28DRR01%29&frbg=&tab=default_tab&dstmp=1389793740888&srt=rank&ct=search&mode=Basic&dum=true&indx=1&vl(628594933UI1)=all_items&vl(freeText0)=100%20subkulturer&fn=search&vid=DRR",
                            "freq": [0, 1]
                        },
                        {
                            "text": "Gennemgang af det kritiske interviews mål og spilleregler",
                            "image": "http://77.66.32.238/php/intern/arkiv/primo/images/spot/0114/spot_detkritiske.png",
                            "url": "http://primo-17.kb.dk/primo_library/libweb/action/search.do?dscnt=0&scp.scps=scope%3A%28DRR01%29&frbg=&tab=default_tab&dstmp=1389793939012&srt=rank&ct=search&mode=Basic&dum=true&indx=1&vl(628594933UI1)=all_items&vl(freeText0)=spilleregler%20og%20kritiske&fn=search&vid=DRR",
                            "freq": [2, 3]
                        },
                        {
                            "text": "Analyse af nogle af de mest skelsættende nyere tv-serier",
                            "image": "http://77.66.32.238/php/intern/arkiv/primo/images/spot/0114/spot_50tvserier.png",
                            "url": "http://primo-17.kb.dk/primo_library/libweb/action/search.do?dscnt=0&scp.scps=scope%3A%28DRR01%29&frbg=&tab=default_tab&dstmp=1389794125191&srt=rank&ct=search&mode=Basic&dum=true&indx=1&vl(628594933UI1)=all_items&vl(freeText0)=50%20tv-serier%20du%20skal%20se&fn=search&vid=DRR",
                            "freq": [4, 5]
                        },
                        {
                            "text": "Bogen fortæller om børns opvækstvilkår gennem de sidste 200 år",
                            "image": "http://77.66.32.238/php/intern/arkiv/primo/images/spot/0114/spot_barndommens.png",
                            "url": "http://primo-17.kb.dk/primo_library/libweb/action/search.do?dscnt=0&scp.scps=scope%3A%28DRR01%29&frbg=&tab=default_tab&dstmp=1389794362571&srt=rank&ct=search&mode=Basic&dum=true&indx=1&vl(628594933UI1)=all_items&vl(freeText0)=barndommens%20land%20OG%20b%C3%B8rneh%C3%B8jde&fn=search&vid=DRR",
                            "freq": [6, 6]
                        },
                        {
                            "text": "Om tilblivelsesprocessen af nyere dansk tv-dramtik. bl.a. Borgen",
                            "image": "http://77.66.32.238/php/intern/arkiv/primo/images/spot/0114/spot_writing.png",
                            "url": "http://primo-17.kb.dk/primo_library/libweb/action/search.do?dscnt=0&scp.scps=scope%3A%28DRR01%29&frbg=&tab=default_tab&dstmp=1389794707751&srt=rank&ct=search&mode=Basic&dum=true&indx=1&vl(628594933UI1)=all_items&vl(freeText0)=writing%20and%20producing%20television&fn=search&vid=DRR",
                            "freq": [7, 7]
                        },
                        {
                            "text": "Kronologisk fortælling om tv for børn og danske børneprogrammer",
                            "image": "http://77.66.32.238/php/intern/arkiv/primo/images/spot/0114/spot_fjernsyn.png",
                            "url": "http://primo-17.kb.dk/primo_library/libweb/action/search.do?dscnt=0&scp.scps=scope%3A%28DRR01%29&frbg=&tab=default_tab&dstmp=1389795082526&srt=rank&ct=search&mode=Basic&dum=true&indx=1&vl(628594933UI1)=all_items&vl(freeText0)=fjernsyn%20for%20b%C3%B8rn%20vores&fn=search&vid=DRR",
                            "freq": [8, 8]
                        },
                        {
                            "text": "En Hvad-nu-hvis-roman med udgangspunkt i mordet på JFK",
                            "image": "http://77.66.32.238/php/intern/arkiv/primo/images/spot/0114/spot_kennedy.png",
                            "url": "http://primo-17.kb.dk/primo_library/libweb/action/search.do?dscnt=0&scp.scps=scope%3A%28DRR01%29&frbg=&tab=default_tab&dstmp=1389795319628&srt=rank&ct=search&mode=Basic&dum=true&indx=1&vl(628594933UI1)=all_items&vl(freeText0)=22.11.63&fn=search&vid=DRR",
                            "freq": [9, 9]
                        },
                        {
                            "text": "Opskrifter på diverse kager af konditor Mette Blomsterberg",
                            "image": "http://77.66.32.238/php/intern/arkiv/primo/images/spot/0114/spot_blomsterbergs.png",
                            "url": "http://primo-17.kb.dk/primo_library/libweb/action/search.do?dscnt=0&scp.scps=scope%3A%28DRR01%29&frbg=&tab=default_tab&dstmp=1389795445011&srt=rank&ct=search&mode=Basic&dum=true&indx=1&vl(628594933UI1)=all_items&vl(freeText0)=blomsterbergs%20sk%C3%B8nne&fn=search&vid=DRR",
                            "freq": [10, 10]
                        },
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
