# Tutorialul 01 — Web-ul ca sistem și dezvoltarea asistată de AI

**Durată estimată:** 95 de minute

## Flux de lucru AI

Folosiți Codex cu un cont gratuit în VS Code sau în browser. Deschideți sau
încărcați doar cel mai restrâns director relevant al proiectului, cereți un
patch focalizat, aplicați-l local, examinați diff-ul și rulați local
verificările documentate. Urmați [fluxul de lucru comun](flux-de-lucru-ai.md).

## Obiective

- Inspectarea cererilor și răspunsurilor HTTP ca schimburi observabile.
- Construirea și înțelegerea unui server HTTP Node minimal.
- Folosirea Codex pentru o schimbare delimitată, urmată de verificare independentă.

## Cerințe preliminare

- O versiune Node.js LTS actuală, npm, `curl` și un browser cu instrumente pentru dezvoltatori.
- Cunoștințe de bază despre linia de comandă și JSON.
- Dependențele proiectelor 1 și 2 instalate înainte de sesiunea cronometrată.

## Concepte

Limitele client/server, URL-urile resurselor, metode, headere, coduri de stare, tipuri de conținut, JSON și fluxul asistat de AI inspectare–schimbare–verificare.

Sesiunea urmărește un schimb HTTP de la dovezi până la implementare. Mai întâi observați ce informații aparțin cererii și ce informații aparțin răspunsului. Apoi implementați un singur handler delimitat și demonstrați că ia deliberat deciziile de protocol.

## Starea inițială pregătită

Înainte de curs, rulați `npm install` în directoarele `student` ale proiectelor 1 și 2. Nu sunt necesare servicii externe sau acces la internet.

La începutul sesiunii, folosiți aceste verificări preliminare:

```bash
cd project-01-http-detective/student
npm run test:baseline
npm run test:regression

cd ../../project-02-tiny-http-server/student
npm run test:baseline
npm run test:regression
```

Ambele proiecte trebuie să aibă verificări de bază și regresie verzi. Verificările obiectivului trebuie să eșueze înainte ca studentul să își termine munca. Dacă o verificare de bază sau regresie eșuează, reparați mediul pregătit înainte de a începe obiectivul.

## Desfășurarea sesiunii

| Timp | Activitate |
| --- | --- |
| 0–8 min | Rulați verificările preliminare și separați infrastructura furnizată de fișierele deținute de student. |
| 8–23 min | Porniți HTTP Detective, deschideți panoul Network, rulați investigația și colectați dovezi despre cerere/răspuns. |
| 23–35 min | Completați `case-report.json`, revizuiți numai diff-ul său și rulați verificarea focalizată a obiectivului. |
| 35–39 min | **Verificare 1:** întrebări orale despre diferența dintre cerere și răspuns și despre dovezile din Network. |
| 39–47 min | Deschideți Tiny HTTP Server, reproduceți eșecurile obiectivului și urmăriți limita booleană a handlerului. |
| 47–76 min | Implementați și revizuiți numai `handleApplicationRequest`; testați o cale de succes și una de eroare a clientului. |
| 76–80 min | **Verificare 2:** întrebări orale despre categoriile de teste, finalizarea răspunsului și respingerea unui diff din afara domeniului. |
| 80–92 min | Rulați verificările obiectivului și toate verificările, inspectați diff-ul final și explicați o cerere de la parsare la finalizarea răspunsului. |
| 92–95 min | Consemnați dovezile nerezolvate și identificați Proiectul 3 drept practică ulterioară de reparare. |

Punctul sigur de oprire este finalizarea HTTP Detective: raportul este complet, întreaga suită trece și niciun cod furnizat pentru server sau browser nu s-a schimbat. Dacă grupa ajunge târziu aici, lăsați Tiny HTTP Server pentru activitatea ulterioară supravegheată în loc să grăbiți un handler generat și nerevizuit.

## Proiecte

### Proiectul 1 — HTTP Detective (principal, 25–30 de minute)

- **Obiectiv:** Descrierea schimburilor HTTP reale pe baza dovezilor din execuție.
- **Responsabilitatea studentului:** Modificați numai `student/case-report.json`; obțineți fiecare valoare din DevTools sau traficul din linia de comandă.
- **Rezultat așteptat:** Un raport complet ale cărui afirmații corespund cererilor locale reale.
- **Rolul Codex:** Să producă o listă de inspectare și să revizuiască diff-ul raportului, nu să deducă sau să furnizeze observațiile.
- **Finalizat când:** `npm test` trece, iar studentul poate indica dovada pentru fiecare câmp al cererii și răspunsului.

Nu începeți prin citirea constantelor serverului ca răspunsuri. Porniți aplicația, observați toate cele trei schimburi și separați metoda, URL-ul, query-ul și metadatele corpului cererii de starea, headerele, tipul media și reprezentarea răspunsului.

### Proiectul 2 — Tiny HTTP Server (principal, 35–40 de minute)

- **Obiectiv:** Studiați un server mic care servește fișiere și endpointuri bazate pe query/corp, apoi adăugați ruta lipsă bazată pe cale.
- **Responsabilitatea studentului:** Implementați numai ramura lipsă `GET /api/greetings/<name>` din `student/src/application-handler.js`.
- **Rezultat așteptat:** Shell-ul furnizat păstrează comportamentul sănătos pentru fișiere, query, corp și fallback, iar noua rută bazată pe cale respectă contractul observabil.
- **Rolul Codex:** Să propună o implementare delimitată din specificație și teste; nu poate modifica shell-ul, fișierele statice, testele sau dependențele.
- **Finalizat când:** Toate verificările trec, cererile pentru fișier/query/cale/corp au fost inspectate cu `curl` sau Thunder Client, iar diff-ul final rămâne în fișierul permis.

Înainte de acceptare, urmăriți ce cereri citesc fișiere, unde sunt extrase datele din query/cale/corp și ce ramură finalizează răspunsul. Suita obiectivului este necesară, dar verificările de bază, regresie, răspunsul real și diff-ul demonstrează că a supraviețuit comportamentul independent.

### Proiectul 3 — Sarcină de remediere cu Codex (extensie, 30–40 de minute)

- **Obiectiv:** Diagnosticarea a trei defecte HTTP delimitate și repararea contractului public la limitele corecte.
- **Responsabilitatea studentului:** Modificați numai `student/src/server.js` și `student/src/normalize-contract.js` după consemnarea dovezilor inițiale pentru listare, creare invalidă și resursa lipsă.
- **Rezultat așteptat:** Serviciul continuă să gestioneze crearea reușită, JSON-ul invalid și rutele necunoscute, în timp ce sunt reparate tipul de conținut al listării, controlul fluxului pentru creare invalidă și contractul resursei lipsă.
- **Rolul Codex:** Să compare diagnosticul cu dovezile și să propună o remediere delimitată la două fișiere; nu poate rescrie producătorul legacy, testele sau setul de rute.
- **Finalizat când:** Întreaga suită trece, răspunsurile reale pentru listare/creare invalidă/resursă lipsă respectă contractul public, iar studentul poate justifica fiecare corecție de headere, control al fluxului și formă a corpului.

Acest proiect este activitate ulterioară deliberată, nu parte obligatorie a celor 95 de minute. Finalizați-l după proiectele 1 și 2, astfel încât reparația să refolosească modelele mentale despre cerere/răspuns și handler, nu să devină ghicire condusă de teste.

## Disciplina verificării

Pentru fiecare proiect obligatoriu:

1. reproduceți starea inițială înainte de editare;
2. precizați fișierul permis și contractul observabil;
3. inspectați diff-ul propus în loc să acceptați o rescriere generată;
4. rulați verificările de bază, obiectiv și regresie pentru dovezile lor distincte;
5. inspectați cel puțin un schimb real;
6. explicați traseul important al codului sau dovezilor fără a cere Codex să îl recite în locul vostru.

## Ce ar trebui să înțelegeți

După parcursul obligatoriu, ar trebui să puteți:

- urmări o acțiune din browser prin cererea și răspunsul HTTP;
- deosebi proprietățile cererii de cele ale răspunsului;
- explica de ce starea, headerele, tipul media și reprezentarea corpului sunt decizii separate;
- localiza limita restrânsă deținută de student într-un repository nefamiliar;
- folosi categoriile de teste și traficul real drept dovezi complementare;
- respinge o schimbare generată neverificată sau în afara domeniului, chiar dacă pare plauzibilă.

## Experimente suplimentare

- Finalizați Proiectul 3 și comparați limita de normalizare cu handlerul din Proiectul 2.
- În HTTP Detective, rulați experimentul documentat pentru depanarea tipului de conținut, apoi restaurați comportamentul canonic.
- În Tiny HTTP Server, reproduceți eșecul documentat cu răspuns dublu, reparați cauza minimă și rerulați o cerere ulterioară de sănătate.
- Comparați răspunsurile de succes, creare, eroare a clientului și not found fără a presupune că un corp asemănător JSON determină tipul media declarat.
