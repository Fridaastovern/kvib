---
id: collapsibleID
title: (!)Utvidbar panel
description: Utvidbar panel som blir brukt i Kartverket sine løsninger
slug: /designsystem/komponenter/utvidbar-panel
displayed_sidebar: designsystemSidebar
---

***OBS! Venter på godkjenning.***

***

## Utvidbar panel

Utvidbar panel er laget med ``<details>``  og ``<summary>`` elementet.
Størrelsen endres ved å sette panelet i et <code>container</code> med ønsket <code>width</code>.

<h1>Tittel</h1>
<details>
    <summary>Tekst</summary>
    <p>Beskrivelse</p>
</details>

<br/>

```markdown
<h1>Tittel</h1>
<details>
    <summary>Tekst</summary>
    <p>Beskrivelse</p>
</details>
```

## Utvidbar panel set

Vi kan opprette et panel set ved å legge til flere ``<details>`` elementer.

<div></div>
<h1>Tittel</h1>
<details>
    <summary>Tekst</summary>
    <p>Beskrivelse</p>
</details>
<details>
    <summary>Tekst</summary>
    <p>Beskrivelse</p>
</details>
<details>
    <summary>Tekst</summary>
    <p>Beskrivelse</p>
</details>
<details>
    <summary>Tekst</summary>
    <p>Beskrivelse</p>
</details>

<br/>

```markdown
<h1>Tittel</h1>
<details>
    <summary>Tekst</summary>
    <p>Beskrivelse</p>
</details>
<details>
    <summary>Tekst</summary>
    <p>Beskrivelse</p>
</details>
<details>
    <summary>Tekst</summary>
    <p>Beskrivelse</p>
</details>
<details>
    <summary>Tekst</summary>
    <p>Beskrivelse</p>
</details>
```