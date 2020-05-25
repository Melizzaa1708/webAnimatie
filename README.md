# Webanimatie 2020
https://melizzaa1708.github.io/webanimatie/

### Olivetti Lettera 22
Olivetti Lettera 22 is een pamflet dat bestaat uit vier pagina's. Welke gaat over een typemachine.
http://oa.letterformarchive.org/item?workID=lfa_pintori_0026

![Olivetti Lettera 22](https://ia903100.us.archive.org/30/items/lfapintori0026/LFA_Pintori_0026_001.jpg)

## Het concept
Ik heb deze gekozen, omdat ik de uitgebalanceerde vormen erg interessant vond en er ook veel in het pamflet gebeurd. Ik verwachtte hiermee veel te kunnen doen. Ik vind deze stijlsoort altijd erg interessant. 

## Responsive
De pamflet is verticaal en kan het best op kleine schermen en iPad's bekeken worden. Om het op telefoon niet te klein te laten zijn heb ik er 1 kolom van gemaakt, op iPad 2 kolommen en op grote en normale schermen 4 kolommen volledig naast elkaar.

## Herkenbaarheid
De pamflet is goed te herkennen aan de scherpe randen, onrechte vormen en het flatdesign met 1 of 2 kleuren en geen tot nauwelijks schaduwen. Het pamflet doet denken of dat het uitgeknipt is.

## Waar ben ik het meest trots op?
Ik ben het meest trots op dat ik uiteindelijk na heel lang proberen, hulp vragen en met een omweg de website responsive heb gekregen. Met een volledige SVG lukte dit niet en uiteindelijk heb ik de poster in 4 svg's opgedeeld. Ook vind ik het tof om met key-press dingen te hebben gedaan, iets wat ik nog niet eerder had gedaan.

## Functies
- Click: Auto 1,2 en 3 rijden weg. Het maakt niet uit over je op 1,2 of 3 klikt, ze rijden alle drie weg. Hetzelfde geldt voor 4 en 5. (de auto's zijn de grijze vlakken op het zwarte gedeelte (rijke fantasie))
- Mouseover: Lamp aan, meerdere vissen in de kom, een schrijfmachine veranderen in Gebruik de pijltjes toetsen om...,                      regenboog Olivetti letters
- Mouseout: Lamp uit, 1 vis in de kom, Gebruik de pijltjes toetsen om... veranderen in een schrijfmachine, gewone Olivetti   
            letters.
- Touchstart: Wanneer je met je vinger het scherm aanraakt gaat de lamp aan, gaan de vlakken animeren en de boot varen (wanneer je de tekst van de schrijfmachine aanklikt) Dit heb ik gedaan om de keyboard en :active te vervangen.
- Touchend: Wanneer je met je vinger het scherm loslaat dan gaat de lamp uit en stoppen de vlakken met animeren.
- Keypress: Key-down: Boot gaat op en neer
- Keypress: Key-up: Boot gaat heen en weer
- Keypress: Key-left: Water komt omhoog
- Keypress: Key-right: Water gaat naar beneden
- Pseudo class :active: Wanneer je iets ingedrukt houdt ontstaat er een animatie.
- Pseudo class :hover: Wanneer je hovert verandert de kleur of ontstaat er een animatie.
- @keyframe: rijden: auto's gaan rijden, slide: vis en vissenkom glijden heen en weer, zweef: de typemachine zweeft, circle: 
             het rode en gele vlak worden rond wanneer je met de muis het vierkant ingeklikt houdt, opac: het water wordt 
             doorzichtig, rainbow: de letters verkleuren wanneer je je muis erop houd en blauwe en rode vierkant, rotate: het 
             groene vierkant en het zwarte vlak veranderen in draaiende vierkanten, spiral: het oranje en zwarte vlak worden 
             van buitenaf ingevuld met kleur tot de kern. wobble-hor-bottom: de boot hobbelt heen en weer over het water.


## CSS tricks
Ik heb voornamelijk veel gebruik gemaakt van @keyframes, ook fill, @media only voor de grid, :hover en :active en ook wat Javascript voor de finishing touch.

## Wat ik echt niet voor elkaar krijg
Ik krijg het echt niet voor elkaar om de RUYS OLIVETTI RUYS op de juiste plek te krijgen. Hoe vaak ik ook opnieuw de css code erbij pak of hem aanpas, de juiste letterspacing wordt niet goed overgenomen.

## Studenten informatie
Lizz Moraal - 500758530 - 22 mei 2020 - Danny de Vries - Web Animatie

## Bronnen
Wobble-hor-bottom:
https://animista.net/play/attention/wobble

CSS animations:
https://css-tricks.com/almanac/properties/a/animation/

Keyboard codes:
https://css-tricks.com/snippets/javascript/javascript-keycodes/
+ Hulp van Kim G

De poster:
http://oa.letterformarchive.org/item?workID=lfa_pintori_0026


