---
id: checkboxID
title: Avmerkingsbokser
description: Avmerkingsbokser som blir brukt i Kartverket sine løsninger
slug: /designsystem/komponenter/checkbox
displayed_sidebar: designsystemSidebar
sidebar_position: 2
---

En avmerkingsboks gir brukeren muligheten til flervalg. Avmerkingsbokser skal følges av en primærknapp. Feilmelding avmerkingsboks skal brukes for å visualisere feil i avmerkingen, dersom dette har skjedd (f.eks. ikke krysset av for et alternativ).

For å style <code><label\></code>-elementet, skal egne
[CSS-klasser fra _Typografi_ benyttes.](../designTokens/typography.mdx#label)
## Normal avmerkingsboks

Avmerkingsboksen får fokus når den velges med tastaturet.

<div class="checkbox">
    <input type="checkbox" id="checkbox_1"/>
    <label for="checkbox_1">Input tekst</label>
</div>

<br/>

```markdown 
<div class="checkbox">
    <input type="checkbox" id="checkbox_1"/>
    <label for="checkbox_1">Input tekst</label>
</div>
```

## Feilmelding avmerkingsboks

Følgende avmerkingsboks får feilmeldingsfarge hvis ett av alternativene må være valgt før bruker kan gå videre.

<div class="checkbox">
    <input type="checkbox" id="checkbox_2" required/>
    <label for="checkbox_2">Input tekst</label>
</div>

<br/>

```markdown
<div class="checkbox">
    <input type="checkbox" id="checkbox_2" required/>
    <label for="checkbox_2">Input tekst</label>
</div>
```
