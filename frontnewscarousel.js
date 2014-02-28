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
                            "text": "Opskrifter til og gennemgang af 5:2-kurens principper",
                            "image": "http://77.66.32.238/php/intern/arkiv/primo/images/spot/1402/spot_femto-kuren.png",
                            "url": "http://primo-17.kb.dk/primo_library/libweb/action/search.do?dscnt=0&scp.scps=scope%3A%28DRR01%29&frbg=&tab=default_tab&dstmp=1392715396426&srt=rank&ct=search&mode=Basic&dum=true&indx=1&vl(628594933UI1)=all_items&vl(freeText0)=5%3A2%20kuren&fn=search&vid=DRR",
                            "freq": [0, 1]
                        },
					{
                            "text": "Kvindelig lærer ser tilbage på sit forhold til en 16-årig elev",
                            "image": "http://77.66.32.238/php/intern/arkiv/primo/images/spot/1402/spot_ord.png",
                            "url": "http://primo-17.kb.dk/primo_library/libweb/action/search.do?dscnt=0&scp.scps=scope%3A%28DRR01%29&frbg=&tab=default_tab&dstmp=1392714605686&srt=rank&ct=search&mode=Basic&dum=true&indx=1&vl(628594933UI1)=all_items&vl(freeText0)=ord%20OG%20%C3%B8stergaard%20OG%20louise&fn=search&vid=DRR",
                            "freq": [2, 3]
                        },
					{
                            "text": "Om Bellevue Teatrets historie fra opførelsen i 1936 til 2012",
                            "image": "http://77.66.32.238/php/intern/arkiv/primo/images/spot/1402/spot_bellevue.png",
                            "url": "http://primo-17.kb.dk/primo_library/libweb/action/search.do?dscnt=0&scp.scps=scope%3A%28DRR01%29&frbg=&tab=default_tab&dstmp=1392714047678&srt=rank&ct=search&mode=Basic&dum=true&indx=1&vl(628594933UI1)=all_items&vl(freeText0)=bellevue%20teatret&fn=search&vid=DRR",
                            "freq": [4, 5]
                        },
					{
                            "text": "Om kreativitetens betydning for Vestens civilisationshistorie",
                            "image": "http://77.66.32.238/php/intern/arkiv/primo/images/spot/1402/spot_det-kreative-samfund.png",
                            "url": "http://primo-17.kb.dk/primo_library/libweb/action/search.do?dscnt=0&scp.scps=scope%3A%28DRR01%29&frbg=&tab=default_tab&dstmp=1392713614832&srt=rank&ct=search&mode=Basic&dum=true&indx=1&vl(628594933UI1)=all_items&vl(freeText0)=kreative%20samfund%20og%20vesten&fn=search&vid=DRR",
                            "freq": [6, 6]
                        },
					{
                            "text": "Hvad er god debat – ud over at den skal være fri?",
                            "image": "http://77.66.32.238/php/intern/arkiv/primo/images/spot/1402/spot_debatkultur.png",
                            "url": "http://primo-17.kb.dk/primo_library/libweb/action/search.do?dscnt=0&scp.scps=scope%3A%28DRR01%29&frbg=&tab=default_tab&dstmp=1392713448834&srt=rank&ct=search&mode=Basic&dum=true&indx=1&vl(628594933UI1)=all_items&vl(freeText0)=debatkultur%20p%C3%A5%20nedtur&fn=search&vid=DRR",
                            "freq": [7, 7]
                        },
					{
                            "text": "Insiderberetning om kammerat-skab i Socialdemokratiet",
                            "image": "http://77.66.32.238/php/intern/arkiv/primo/images/spot/1402/spot_den-hemmelige-socialdemokrat.png",
                            "url": "http://primo-17.kb.dk/primo_library/libweb/action/search.do?dscnt=0&scp.scps=scope%3A%28DRR01%29&frbg=&tab=default_tab&dstmp=1392712845297&srt=rank&ct=search&mode=Basic&dum=true&indx=1&vl(628594933UI1)=all_items&vl(freeText0)=hemmelige%20socialdemokrat&fn=search&vid=DRR",
                            "freq": [8, 8]
                        },
					{
                            "text": "Et pars kamp om forældre-myndighederne efter skilsmisse",
                            "image": "http://77.66.32.238/php/intern/arkiv/primo/images/spot/1402/spot_anden-person-ental.png",
                            "url": "http://primo-17.kb.dk/primo_library/libweb/action/search.do?dscnt=0&scp.scps=scope%3A%28DRR01%29&frbg=&tab=default_tab&dstmp=1392712623872&srt=rank&ct=search&mode=Basic&dum=true&indx=1&vl(628594933UI1)=all_items&vl(freeText0)=dencik%20og%20ental&fn=search&vid=DRR",
                            "freq": [9, 10]
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
