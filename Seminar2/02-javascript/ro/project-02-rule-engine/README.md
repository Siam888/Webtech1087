# Proiectul 02 — Rule Engine

## Scop

Accentul cade pe funcții și închideri. O descriere a regulii este compilată într-un predicat reutilizabil, iar shell-ul furnizat citește un fișier-scenariu și scrie fișierul-rezultat, astfel încât studenții să se poată concentra pe valorile capturate și compunere.

## Obiectiv

Compilează defensiv obiecte-regulă declarative cu proprietăți proprii în închideri-predicat reutilizabile, apoi partiționează înregistrările fără să accepți câmpuri moștenite sau să modifici intrările.

## Model mental

O regulă-frunză capturează un câmp, un operator și o valoare de comparație. O regulă compusă capturează predicate-fiu deja compilate:

```text
arbore de definiții → compilare o dată → arbore de predicate → evaluarea mai multor înregistrări
```

Lucrează în `student/`. Desenează arborele scenariului furnizat înainte să scrii cod. Marchează ce chei trebuie să fie date proprii ale regulii și ce câmpuri ale înregistrării poate consuma o frunză. Identifică unde `every`, `some` și negația logică oferă agregare și scurtcircuitare.

Urmează cele două TODO-uri etapizate. Cere-i lui Codex mai întâi o analiză fără editare asupra arborelui, proprietăților proprii, valorilor capturate și scurtcircuitării. După ce o verifici, permite schimbări doar în `src/rule-engine.js`. Respinge acceptarea câmpurilor moștenite, formele ambigue, recompilarea repetată a copiilor, conversia, mutația sau editarea testelor.

Shell-ul furnizat citește un scenariu dintr-un fișier și scrie rezultatul într-un fișier, pentru ca exercițiul să rămână centrat pe închideri, nu pe designul CLI-ului.

## Criterii de succes

- Toate verificările țintite și agregate trec.
- Rezultatul scris pentru scenariu selectează doar `T-1`.
- Definițiile invalide eșuează în timpul compilării.
- Diferența finală este limitată la modulul motorului.
- Poți explica ce capturează fiecare închidere întoarsă.

## Sarcină de depanare

Înlocuiește temporar `every` cu `forEach`. Diagnostichează de ce simpla iterare nu produce booleanul compus și de ce nu poate scurtcircuita în modul cerut. Cere-i lui Codex o remediere țintită și inspectează schimbarea semantică de o linie.

## Ce ar trebui să poți explica

- Funcțiile ca valori întoarse.
- Proprietăți proprii ale regulilor/înregistrărilor versus căutarea prin prototip.
- Captura închiderilor și reutilizarea după compilare.
- Compunerea recursivă.
- Evaluarea cu scurtcircuitare.
- Comparația strictă versus conversia.
