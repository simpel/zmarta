# Lånekalkylator

## Beskrivning

Uppgiften består av två moment. Det första momentet, front-end-delen, är att göra en fungerande lånekalkylator likt den som finns på zmarta.se.

Back-end-delen består av att innan ansökan kan skickas vidare till bankerna, behöver den köras genom en regelmotor som filtrerar ut vilka banker som ansökan ska skickas till.\
Din uppgift är att bygga en enklare variant av denna regelmotor.

Testet innefattar HTML, CSS och Javascript för att du ska kunna visa dina kunskaper inom området.\
Huruvida du vill ta in ytterliggare bibliotek eller strukturera om koden, är helt upp till dig.

## Instruktioner
### Front-end
Med hjälp av ett skal av HTML så ber vi dig att göra en kalkylator så likt bilden nedan som möjligt.
Vi ser gärna att du använder Vue.js eller liknande för att lösa uppgiften.
Du får använda de hjälpmedel du känner att du vill och behöver, du behöver inte uppfinna hjulet på nytt.

![result.png](result.png)

Det finns vissa punkter som vi vill att du följer.
* Standardvärde för lånebeloppet och återbetalningstid är 250 000 kr respektive 14 år.
* Lånebeloppet ska vara mellan 5 000 och 600 000 kr.
* Återbetalningstiden ska vara mellan 1 och 15 år.
* Plus- och minussymbolerna ska öka respektive minska värdena.
* Lånebeloppet ska minskas/ökas med 5 000 åt gången.
* Återbetalningstiden ska ökas/minskas med 1 år åt gången.
* I `getContent()` i `main.js` finns det fördefinierade värde som bör användas istället för de hårdkodade som finns. Lägg till fält om du känner att du behöver.
* Månadskostnaden ska beräknas med hjälp av medföljande formel i `main.js`.

### Back-end

I `index.js` finns en express-endpoint uppsatt som ska ta emot ansökningsdatan från frontend och skicka vidare den till regelmotorn.

Reglerna för respektive bank finns i `lenders.js`

Punkter att förhålla sig till:
* Funktionen `run` i `rulesEngine.js` ska returnera den filtrerade lenders-arrayn.
* Regelmotorn ska kunna hantera flera olika regler per bank och fält
* Ska åtminstone ha stöd för operatorerna "större än" och "mindre än"
* Endast en av bankens regler behöver få träff för att banken ska bli bortfiltrerad
* För de banker som tar sig igenom filtret ska `sendToBank` anropas som ligger i `index.js` med ett lender-objekt som argument.
* Efter att ansökningarna skickats till alla banker ska status 200 returneras från endpointen `/submit`


Vi vill att du gör ditt bästa men har full förståelse för att du inte hinner med allt under tidsramen.
Prioritera det som ska göras så att du står där med en så fullt fungerande lösning som möjligt när tiden är slut.
Vi vill gärna höra vad du hade gjort annorlunda om du hade fått mer tid på dig.
