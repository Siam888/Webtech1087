# Tutorialul 02 — JavaScript pentru citirea și modificarea programelor

**Durată estimată:** 95 de minute

## Flux de lucru AI

Folosiți Codex în mod implicit. Preferința este extensia Codex din VS Code atunci când este disponibilă. Dacă integrarea IDE lipsește, folosiți Codex CLI autentificat cu ChatGPT ca alternativă gratuită susținută; orice aplicație sau suprafață web Codex rămâne opțională. Deschideți doar cel mai restrâns director relevant, cereți un patch focalizat, examinați diferența și rulați local verificările documentate. Urmați [fluxul de lucru comun](../../flux-de-lucru-ai.md).

## Progresia conceptelor

Cele trei proiecte trec de la stilul obișnuit JavaScript la funcții și închideri, apoi la modelul obiectual. Interfețele cresc odată cu această progresie:

1. **Dataset Transformer:** o aplicație mică, în memorie. Accent pe valori, expresii, callback-uri, metode de tablou și compunerea codului JavaScript.
2. **Rule Engine:** un program cu fișier de intrare și fișier de ieșire. Accent pe compilarea datelor regulilor în funcții reutilizabile și înțelegerea valorilor capturate de închideri.
3. **Generated-Code Audit:** un instrument de comparație în linia de comandă. Accent pe căutarea prin prototip, proprietăți proprii față de moștenite, identitate, mutație și aliasuri.

Doar proiectul final are o opțiune în linia de comandă. Primul nu are interfață de fișier sau argumente; al doilea citește un scenariu și scrie un fișier-rezultat.

## Obiective

- Explicarea modului în care valorile, funcțiile, callback-urile și metodele de tablou JavaScript colaborează într-un program mic.
- Compilarea descrierilor de date în funcții reutilizabile și explicarea capturii din închideri și a scurtcircuitării.
- Explicarea delegării prin prototip, a proprietăților proprii față de cele moștenite, a identității obiectelor, a mutației și a aliasurilor folosind dovezi din execuție.
- Inspectarea și verificarea unei schimbări delimitate, asistate de IA, în locul încrederii în cod plauzibil la prima vedere.

## Cerințe preliminare și stare pregătită

- Unitatea 1, Node.js LTS, npm și noțiuni de bază despre JSON.
- Instalați dependențele în directoarele student ale fiecărui proiect înainte de curs; proiectele nu folosesc servicii externe.

Verificare preliminară:

```bash
cd project-01-dataset-transformer/student
npm run test:baseline
npm start

cd ../../project-02-rule-engine/student
npm run test:baseline
npm run evaluate

cd ../../project-03-generated-code-audit/student
npm run test:baseline
npm run test:regression
npm run compare -- --help
```

Rezolvați problemele de mediu sau eșecurile de bază înainte de a începe obiectivele. Transformarea din Proiectul 1 și normalizatorul sigur din Proiectul 3 sunt intenționat incomplete în variantele student. Motorul din Proiectul 2 este un exercițiu suplimentar; shell-ul și fluxul de fișiere trebuie să funcționeze înainte de implementare.

## Planul sesiunii

| Timp | Activitate |
| --- | --- |
| 0–8 min | Verificări preliminare, pornește aplicația din memorie și prezice ce se va întâmpla cu valorile fiecărei sarcini. |
| 8–31 min | Urmărește și implementează fluxul Dataset Transformer; explică fiecare callback și compară un sumar cu un calcul manual. |
| 35–49 min | Inspectează limita de fișier din Rule Engine, desenează arborele regulilor și urmărește valorile capturate de o închidere-frunză și una compusă. |
| 49–53 min | Discută cum devine fișierul-scenariu un fișier-rezultat, în timp ce motorul rămâne un modul despre funcții. |
| 53–74 min | Rulează Generated-Code Audit cu CLI-ul; adună dovezi despre căutarea prin prototip, câmpuri moștenite, mutație și aliasuri. |
| 78–91 min | Compară ieșirea nesigură cu limita sigură; explică identitatea obiectelor și de ce o proprietate accesibilă nu este neapărat o dată proprie de intrare. |
| 91–95 min | Examinează diferența finală, notează dovezile și alege un obiectiv suplimentar. |

Punctul sigur de oprire este Dataset Transformer finalizat și un tabel de dovezi reproductibile pentru Generated-Code Audit. Finalizarea Rule Engine sau implementarea normalizatorului sigur rămâne lucru ulterior; fiecare necesită propriul ciclu complet de implementare și verificare.

## Proiecte

### Proiectul 1 — Dataset Transformer (principal, 25–35 de minute)

Primul exemplu este o aplicație JavaScript obișnuită, nu un exercițiu despre limita datelor de intrare. Sarcinile sunt păstrate în memorie, iar `filter`, `map`, `sort` și `reduce` produc un sumar util. Lucrează doar în `student/src/transform-tasks.js`.

Rulează `npm start`, inspectează eșantionul și semnătura transformării, apoi urmărește fiecare valoare prin flux. Finalizează când sumarul este determinist, corespunde unui calcul manual și tabloul de intrare rămâne neschimbat.

### Proiectul 2 — Rule Engine (extensie, 45–60 de minute)

Al doilea exemplu pune funcțiile și închiderile în centru. Shell-ul furnizat citește un fișier JSON cu scenariul și scrie un fișier JSON cu rezultatul; implementarea studentului rămâne în `student/src/rule-engine.js`. Compilează o singură dată un arbore imbricat de reguli, explică ce capturează fiecare predicat întors și urmărește cum compun comportamentul `every`, `some` și negația.

Rulează `npm run evaluate`; rezultatul este scris în `data/result.json`. Limita de fișier este furnizată pentru ca exercițiul să se concentreze pe funcții reutilizabile, nu pe designul liniei de comandă.

### Proiectul 3 — Generated-Code Audit (investigație principală, 20–30 de minute)

Ultimul exemplu face vizibil modelul obiectual. Folosește CLI-ul pentru a compara o funcție generată păstrată cu un normalizator defensiv. Reproduce felul în care căutarea prin prototip acceptă un câmp moștenit, sortarea în loc schimbă ordinea deținută de apelant, iar obiectele întoarse pot păstra aliasuri către înregistrările de intrare. Păstrează `unsafe-generated.js` neschimbat; orice implementare se limitează la `student/src/safe-normalizer.js`.

Rulează `npm run compare -- --file data/events.json`. Fiecare constatare cere o intrare concretă, un rezultat observat, regula încălcată și dovezi care ar distinge o remediere.

## Disciplina verificării

- Explică forma valorii înainte să accepți o transformare sau un predicat.
- Distinge intrările unei funcții de valorile capturate în închidere.
- Desenează traseul căutării prin prototip când o proprietate obligatorie poate fi moștenită.
- Verifică mutația și identitatea obiectelor separat de valorile ieșirii.
- Păstrează schimbările IA în limitele fișierelor specificate; examinează diferența și rulează local verificările.

## Experimente suplimentare

- Adaugă o etapă nouă de transformare în Proiectul 1 și prezice mai întâi forma intrării/ieșirii.
- Adaugă un operator-frunză în Proiectul 2 și testează o compunere imbricată.
- Adaugă un contraexemplu bazat pe prototip în Proiectul 3 și explică de ce accesul direct la proprietate nu este suficient ca dovadă.
