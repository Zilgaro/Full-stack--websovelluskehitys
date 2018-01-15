title Siirtyminen '/notes' -sivulle

Kayttaja->Selain: 
note left of Selain 
Kayttaja klikkaa linkkiä sivulla 
fullstack-exampleapp.herokuapp.com
end note
Selain->Palvelin: GET fullstack-exampleapp.herokuapp.com/notes
note left of Palvelin 
Muodostetaan HTML, missä on kaikki
tämänhetkiset notet listattuina
end note
Palvelin->Selain: status 200, sivun HTML-koodi
Selain->Palvelin: GET fullstack-exampleapp.herokuapp.com/main.css
Palvelin->Selain: status 200, sivun CSS-määrittely
Selain->Palvelin: GET fullstack-exampleapp.herokuapp.com/main.js
Palvelin->Selain: status 200, sivun JS-tiedosto
Selain->Palvelin: GET fullstack-exampleapp.herokuapp.com/data.json
Palvelin->Selain: status 200, sivun listaan JS:n avulla tungettava data JSON muodossa
note left of Selain
Selain näyttää palvelimen palauttaman HTML:n,
joka on tyylitelty palvelimen palauttaman CSS:n avulla,
siinä on JS-tiedoston avulla parsettu tähänasti lisätyt notet JSON-
tiedostosta ja siinä on formi, jonka avulla voi lähettää uusia noteja
(tämän forminkin toiminnallisuus saadaan JS-tiedostosta).
end note

Tehty käyttäen: https://www.websequencediagrams.com/
