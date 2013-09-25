$(function() {
    console.log(spots);
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
                            "freq": [0,10]
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
                            "text": "For research i Altinget.dk<br>skriv til DR Arkiv her",
                            "image": "http://77.66.32.238/php/intern/arkiv/primo/images/spot/spot_altinget.png",
                            "url": "mailto:3900@dr.dk?subject=Jeg%20vil%20vide%20mere%20om%20research%20i%20Altinget.dk&body=Hej%203900!%0D%0A%0D%0AJeg%20vil%20gerne%20vide%20mere%20om%20hvordan%20jeg%20kan%20bruge%20Altinget.dk.%0D%0AJeg%20skriver%20lidt%20om%20hvad%20der%20interesserer%20mig:%0D%0A",
                            "freq": [0,5]
                        },
                        {
                            "text": "Historien om et utroligt år, hvor<br />alt synes at spire og springe ud",
                            "image": "http://77.66.32.238/php/intern/arkiv/primo/images/spot/250x260_1913.png",
                            "url": "http://primo-17.kb.dk/primo_library/libweb/action/search.do?dscnt=0&scp.scps=scope%3A%28DRR01%29&frbg=&tab=default_tab&dstmp=1378452000872&srt=rank&ct=search&mode=Basic&dum=true&indx=1&vl(628594933UI1)=all_items&vl(freeText0)=sommer%20og%201913&fn=search&vid=DRR",
                            "freq": [6,10]
                        }

                    ],
            spot3:
                    [
                        {
                            "text": "Du kan læse de nyeste tidsskrifter i DR’s bibliotek",
                            "image": "http://77.66.32.238/php/intern/arkiv/primo/images/spot/250x260_sofa.png",
                            "url": "http://cmsil/Produktion/Faciliteter+og+ydelser/Arkiv+og+research/Tekst/20090109103005.htm",
                            "freq": [0,10]
                        }
                    ]

        };

function frontnewsselector(spotplace)
{
    if(spots["spot" + spotplace].length === 0)
        return frontnewshtml(spotplace,0);
    
    var r = frontnewsrand();
    for(var i = 0; i < spots["spot" + spotplace].length; i++)
    {
        var spot = spots["spot" + spotplace][i];
        if(r >= spot.freq[0] && r <= spot.freq[1])
            return frontnewshtml(spotplace,i);
    }
    
    return frontnewshtml(spotplace,0);
}

function frontnewshtml(spotplace, spotidx) {
    var spot = spots["spot" + spotplace][spotidx];
    return '<a href="' + spot.url + '" target="_blank">' +
            '<div class="frontnewsbox' + spotplace + '" style=background:url(' + spot.image + ');">' +
            '<div class="text">' + spot.text + '</div>' +
            '</div></a>';

}

function frontnewsrand () {
    return Math.floor(Math.random() * (11));
}
