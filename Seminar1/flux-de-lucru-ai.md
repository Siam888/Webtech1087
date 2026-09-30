# Fluxul de lucru asistat de AI pentru studenți

Cursul folosește Codex ca agent AI implicit pentru cod. Obiectivul de învățare
este dezvoltarea web disciplinată, cu ajutor din partea AI-ului, nu
expertiza într-o anumită interfață de produs.

## Fluxul implicit: Codex în VS Code

Dacă mediul vostru permite, folosiți extensia Codex pentru VS Code și
autentificați-vă cu contul ales pentru curs. Lucrați din folderul proiectului,
ca Codex să poată folosi fișierele și folderele pe care le adăugați explicit în
conversație.

Pentru fiecare sarcină delimitată:

1. Citiți obiectivul exercițiului, constrângerile, fișierele permise și
   verificările existente.
2. Reproduceți comportamentul de pornire înainte să cereți o schimbare.
3. Dați-i lui Codex un prompt cu patru părți: **Goal**, **Context**,
   **Constraints** și **Done when**.
4. Adăugați în conversație doar fișierele sau folderul relevant. Includeți
   ieșirea focalizată din terminal când diagnosticați o eroare.
5. Cereți o explicație sau un plan înainte de modificări când limita sau eroarea
   nu sunt clare.
6. Examinați diff-ul propus înainte să-l acceptați. Respingeți fișierele fără
   legătură, rescrierile ample, dependențele noi, presupunerile ascunse de
   securitate și verificările slăbite.
7. Rulați voi înșivă verificările documentate: de bază, de regresie, ale
   obiectivului, de browser, de build sau de infrastructură.
8. Dați-i lui Codex dovezile focalizate ale eșecului și cereți o corecție
   țintită, nu o rescriere de la zero.
9. Inspectați diff-ul final și explicați traseul important al codului fără să vă
   bazați pe explicația lui Codex.

Fluxul, pe scurt:

```text
înțelegeți → reproduceți → delimitați → cereți-i lui Codex → inspectați diff-ul
→ rulați verificările → diagnosticați → reparație țintită → verificați → explicați
```

Rezultatul lui Codex este o propunere, niciodată o dovadă că sarcina e terminată.

## Structura promptului

Folosiți această structură:

```text
Goal
Descrieți un singur comportament observabil de adăugat, reparat, explicat sau testat.

Context
Numiți fișierele relevante, comportamentul curent și dovezile reproduse.

Constraints
Numiți fișierele permise, API-urile cerute, contractele de păstrat, scurtăturile
interzise, limitele de dependențe și limitele de securitate sau de ciclu de viață.

Done when
Numiți comportamentul observabil și verificările exacte care trebuie să treacă.
```

Nu îi cereți lui Codex să „construiască întreaga aplicație”. Preferați un singur
comportament, defect, limită sau revizuire pe rând.

## Alternativă: Codex CLI cu autentificare ChatGPT

Dacă extensia pentru IDE nu este disponibilă sau nu funcționează pe calculatorul
vostru, folosiți Codex CLI, autentificat cu ChatGPT.

1. Deschideți proiectul local, într-un terminal, în folderul relevant.
2. Folosiți aceeași structură de prompt: Goal / Context / Constraints / Done when.
3. Păstrați cererea în limitele fișierelor și verificărilor documentate.
4. Examinați local diff-ul rezultat înainte să acceptați orice schimbare.
5. Rulați local toate verificările documentate.
6. Dați în promptul următor doar ieșirea focalizată a eșecului sau fișierele
   modificate.

Alternativa CLI nu elimină nevoia de a examina diff-ul local, de a rula
comenzile local și de a explica independent codul. Nu lipiți în prompturi
secrete, credențiale, date private ale studenților, fișiere `.env`, baze de
date, loguri de producție sau conținut fără legătură din repository.

## Alte suprafețe

Alte aplicații sau interfețe web Codex pot fi folosite dacă sunt disponibile în
contul vostru, dar sunt opționale. Orice suprafață opțională respectă aceleași
cerințe de delimitare a fișierelor, examinare a diff-ului, validare,
confidențialitate și explicație ca fluxurile din VS Code și CLI. Niciun
exercițiu nu cere o anumită suprafață Codex pentru un obiectiv fundamental.

## Antigravity

Antigravity este opțional. Poate fi folosit pentru lucru avansat, autonom sau cu
mai mulți agenți, dar nimic din curs nu îl cere. Respectați aceleași cerințe de
delimitare a fișierelor, examinare a diff-ului, validare, confidențialitate și
explicație.

## Referințe oficiale de configurare

- [Folosirea Codex cu planul ChatGPT](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan)
- [Codex CLI și autentificarea cu ChatGPT](https://help.openai.com/en/articles/11381614-api-codex-cli-and-sign-in-with-chatgpt)
