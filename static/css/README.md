# KVIB
Se https://kartverket.github.io/kvib/ for informasjon angående bruk av KVIB. 

## Installasjon av KVIB-CSS Github Package

### Github
1. Opprett et Personal Access Token (PAT).
   [Se Github dokumentasjon for å opprette PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
2. Autoriser PAT for bruk med organisasjonen. [Se Github dokumentasjon for PAT autentisering](https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)

### npm
1. Opprett et .npmrc fil i prosjekt mappen og legg til følgende:

```
@kartverket:registry=https://npm.pkg.github.com
```

2. I prosjekt mappen som inneholder .npmrc filen, logg på npm med Github brukernavn og PAT ved å bruke følgende kommando:

```
npm login --scope=@kartverket --registry=https://npm.pkg.github.com
```

3. Skriv npm install og da skal biblioteket være klar til bruk.

```
npm install
```