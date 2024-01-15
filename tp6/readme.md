<p align="center">
  <a href="https://galilee.univ-paris13.fr/master/master-ingenierie-innovation-images-reseaux-m3ir/">
     <img src="https://github.com/bilelz/tpaw/blob/master/galilee.png?raw=true" alt="Logo Master" width=100/>
  </a>  
  <br/>
 Master² 3IR | <a href="https://master3ir2020.slack.com/messages/aw">master3ir2020.slack.com</a>


<p align="center">
<kbd><img src="img/index.png" width="300"></kbd><br/>
<h3 align="center">TP6 : Application Metéo (bis) ☀️<br/>
</p>

Avec [Angular](https://angular.io) et [OpenWeatherMap](http://openweathermap.org)
</h3>
</p>


⚠ Si votre connection internet est lente, demander au professeur le ZIP du projet initial. Installer [NodeJS](#1-installer-nodejs), [ng-cli](#2-installer-ng-cli) puis passer directement au point [2.3](#23-lancer-lapplication)

<!-- TOC -->

- [0. Prérequis](#0-prérequis)
- [1. Installer NodeJS](#1-installer-nodejs)
- [2. Installer ng-cli](#2-installer-ng-cli)
  - [2.1. Créer un nouveau projet avec ng-cli](#21-créer-un-nouveau-projet-avec-ng-cli)
  - [2.2. Importer Bootstrap et weather-icons avec NPM](#22-importer-bootstrap-et-weather-icons-avec-npm)
  - [2.3. Lancer l'application](#23-lancer-lapplication)
- [3. Edition de votre premier ```component``` Angular](#3-edition-de-votre-premier-component-angular)
  - [3.1 ```app.component.ts```](#31-appcomponentts)
  - [3.2. CSS du ```app.component.css```](#32-css-du-appcomponentcss)
- [4. TP : Formulaire et gestion de la liste des villes](#4-tp--formulaire-et-gestion-de-la-liste-des-villes)
  - [4.1 Créer un component pour le formulaire de recherche](#41-créer-un-component-pour-le-formulaire-de-recherche)
    - [a. Générer un component meteo](#a-générer-un-component-meteo)
    - [b. Ajouter le dans app.component.html](#b-ajouter-le-dans-appcomponenthtml)
  - [4.2. Fomulaire : ajout du module FormModule](#42-fomulaire--ajout-du-module-formmodule)
- [5. Gestion de la liste](#5-gestion-de-la-liste)
- [6. Affichage de la liste](#6-affichage-de-la-liste)
- [7. Ajout d'une page pour afficher la météo](#7-ajout-dune-page-pour-afficher-la-météo)
- [8. Ajout un emplacement  dans la page principale + une navbar](#8-ajout-un-emplacement--dans-la-page-principale--une-navbar)
- [9. Créer le service MeteoService](#9-créer-le-service-meteoservice)
- [10. Créer le component MeteoDetailComponent](#10-créer-le-component-meteodetailcomponent)
  - [11. Mettre en forme les dates](#11-mettre-en-forme-les-dates)
- [12. Build : créer un package de votre application](#12-build--créer-un-package-de-votre-application)
- [13. Meteo sur 5 jours](#13-meteo-sur-5-jours)

<!-- /TOC -->

# 0. Prérequis

* Lire **tout** l'énoncé  avant de commencer le TP.

❓❓Si vous avez des questions ou des erreurs dans votre code : 
* formater (indenter) bien votre code (raccourci Visual Studio Code : Ctrl + K puis Ctrl + F)
* demander à Google 🔍
* demander à vos camarades 👩‍🎓👨‍🎓
* demander au professeur 🙋




# 1. Installer NodeJS

> Node.js nous permet d'utiliser le langage JavaScript sur le serveur... Il nous permet donc de faire du JavaScript en dehors du navigateur !

> Plus de détail : https://openclassrooms.com/courses/des-applications-ultra-rapides-avec-node-js/node-js-mais-a-quoi-ca-sert


Dans notre TP, nous utiliserons seulement le gestionnaire de dépendance [NPM](https://openclassrooms.com/courses/des-applications-ultra-rapides-avec-node-js/les-modules-node-js-et-npm#/id/r-1057300) (Node Package Manager).
Avec NPM nous allons charger toutes les librairies dont nous avons besoin : bootstrap, ...

* Installer Nodejs (version LTS - Long Time Support): https://nodejs.org/en/download/
    * Cliquer sur Windows Installer ou Macintosh Installer

* Vérifier si Nodejs est installé sur votre poste:
    * lancer un terminal (invite de commandes), puis lancer la commande
    ```cmd
    npm -v
    ```
    * Si nodejs est installé, le terminal vous affichera la version de celui-ci
    ```cmd
    npm -v
    3.10.10
    ```



# 2. Installer ng-cli

Pour créer notre projet Angular, nous utiliserons le générateur de projet Angular en ligne de commande ```ng-cli```
    * Suivre ce tutoriel officiel: https://angular.io/guide/quickstart

Executer cette ligne de commande
```cmd
npm install -g @angular/cli
```
```-g``` signifie que la commande ```ng-cli``` sera accessible depuis tous les répertoires de votre ordinateur

Vérification : entrer 
```cmd
ng version
```

La version d'Angular CLI devrait s'afficher: (à ce jour ,le 08 janvier 2024, la version est la **17**)
```cmd
ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/

Angular CLI: 17.0.9
Node: 18.17.1
Package Manager: npm 9.6.7
OS: win32 x64

Angular:
...

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1700.9 (cli-only)
@angular-devkit/core         17.0.9 (cli-only)
@angular-devkit/schematics   17.0.9 (cli-only)
@schematics/angular          17.0.9 (cli-only)
```

## 2.1. Créer un nouveau projet avec ng-cli

En ligne de commande, Positionner vous dans votre répertoire du TP6
```cmd
cd /mon-repertoire/du-tp-6/
```
Création du projet ```meteo-angular```
```cmd
ng new meteo-angular --standalone=false
```

Pour les options d'installation, répondre : 
``` cmd
? Would you like to add Angular routing? 👉 Yes 👈
? Which stylesheet format would you like to use? 👉 CSS 👈
```

Cela va vous créer donc le projet avec cette arborescence :

```
tp6/
├── meteo-angular/
│   ├── .angular.json // configuration d'angular pour le projet
│   ├── .editorconfig
│   ├── .gitignore      // liste des fichiers ignorés par GIT
│   ├── karma.conf.js   // Tests unitaires de l'applcation
│   ├── package.json    // liste les dépendences à charger avec NPM
│   ├── protractor.conf.js
│   ├── README.md       // Documentation du projet (c'est ce format de fichier qui utilisé pour l'intitulé de vos TP AW)
│   ├── tsconfig.json   // configuration du compilateur TypeScript vers Javascript
│   ├── tslint.json     // configuration de l'assistant pour respecter les conventions de codage
│   │
│   └── e2e/
│   └── node_modules/   // répertoire ou toutes les dépendances sous téléchargées (⚠à ne surtout pas pousser sur git⚠)
│   └── src/
│   │    └── app/                   // Le code à modifier pour votre projet
│            ├── app.component.css
│            ├── app.component.html
│            ├── app.component.spec.ts
│            ├── app.component.ts
│            └── app.module.ts
│   └── environments            // configuration du projet pour la génération des packages pour la plateforme de production et de dev 
│            ├── environment.prod.ts
│            └── environment.ts
```
<div align="center">Plus d'explications sur le rôle de chaque fichier: <a href="https://angular.io/guide/quickstart#project-file-review">angular.io/guide/quickstart#project-file-review</a>
</div>
         
Pour mieux comprendre l'architecture : https://angular.io/guide/architecture


## 2.2. Importer Bootstrap et weather-icons avec NPM

```
cd meteo-angular
npm install --save bootstrap
npm install --save git+https://git@github.com/erikflowers/weather-icons.git
```

```--save``` permet de référencer ces packages dans notre fichier de d'installation ```package.json```

Dans le fichier `styles.css` ajouter une référence vers les fichiers CSS de bootstrap et weather-icons

```css
@import "bootstrap/dist/css/bootstrap.min.css";
@import "weather-icons/css/weather-icons.min.css";
```
<div align="center">tp6\meteo-angular\src\styles.css</div>

## 2.3. Lancer l'application

Dans le répertoire ```meteo-angular```, en ligne de commande
```cmd
ng serve --open
```

La commande ```ng serve``` va : 
* démarrer le serveur web
* examiner votre projet
* recharger l'application à chaque fois  que vous ferez des modifications dans vos fichiers

 L'option ```--open``` (ou juste ```--o```) va ouvrir automatiquement l'application dans votre navigateur à l'adresse http://localhost:4200/.

Votre app devrait afficher ce message :



<p align="center">
<kbd><img src="img/serve.png" height="200">
</kbd><br/>
App disponible
</p>

# 3. Edition de votre premier ```component``` Angular

## 3.1 ```app.component.ts``` 

CLI crée un premier ```component``` Angular pour vous. C'est le ```component``` racine(root) et il s'appel ```app-root```. Il se trouve ici : ```./src/app/app.component.ts```

Ouvrez le ```component``` et changer la proprité ```title``` de ```app'``` vers ```'⛅ Weather webapp @Master 3ir²'```

```ts
export class AppComponent {
  title = '⛅ Weather webapp @Master 3ir²';
}
```
<div align="center">/src/app/app.component.ts</div>


Le navigateur rechargera automatiquement la page avec le titre mis à jour.

## 3.2. CSS du ```app.component.css``` 

Ouvrez ```src/app/app.component.css``` et donnez un peu de style au titre.


```css
h1 {
  background: linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-style: italic;
  text-align: center;
  }


```
<div align="center">/src/app/app.component.css</div>


# 4. TP : Formulaire et gestion de la liste des villes

## 4.1 Créer un component pour le formulaire de recherche

### a. Générer un component meteo

Ligne de commande: 
```cmd
ng generate component meteo
```

Cette commande générera un nouveau répertoire ```src/app/meteo/``` avec:
* le code TypeScript
* le code HTML
* le fichier CSS
* le fichier pour décrire les tests unitaires

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

```
<div align="center">meteo.component.ts (version initiale)</div>


Le component pourra etre utilisé dans l'application:
* dans le code TypeScript/Javascript en écrivant: ```MeteoComponent```
* dans le code HTML en écrivant: ```<app-meteo></app-meteo>```, nom défini par l'attribut **selector** du fichier ```meteo.component.ts``` ci-dessous

Pour que ce component soit affiché sur la page web, il faut l'ajouter à l'élément ```root``` de notre projet AppComponent.

### b. Ajouter le dans app.component.html

```html
<!-- app.component.html -->
  <h1>
    Welcome to {{ title }}!
  </h1>
  <app-meteo></app-meteo>
```


## 4.2. Fomulaire : ajout du module FormModule

Pour utiliser des formulaires avec Anguler il fait référencer les module ```BrowserModule, FormModule, ReactiveFormsModule```.

Dans le fichier ```src\app\app.module.ts``` ajouter le ainsi:

```ts
// debut du fichier
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

// <-- dans la suite du TP, Ajouter les références aux autres modules ici aussi

import { AppComponent } from './app.component';
import { MeteoComponent } from './meteo/meteo.component';
// <-- dans la suite du TP, Ajouter les références à MeteoDetailComponent aussi


@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent
    // <-- dans la suite du TP,ajouter MeteoDetailComponent ici  

  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
    // <-- dans la suite du TP, Ajouter les références aux autres modules ici
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
<div align="center">src\app\app.module.ts</div>


Créer un ficher ```meteoItem.ts```  dans le répertoire src/app/

```ts
// src\app\meteoItem.ts
export class MeteoItem {
  id?: number;
  name?: string;
  weather: any;
}
```
<div align="center">src\app\meteoItem.ts</div>

Ajouter ce code HTML pour avoir un formulaire.
La validation de du texte saisie et les messages d'erreur du formulaire sont gérés directement dans le code HTML.
```html
<!--app\meteo\meteo.component.html-->
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">🏠</li>
  </ol>
</nav>

 <form (ngSubmit)="onSubmit()">
  <div class="input-group">
    <input
      type="search"
      placeholder="Ville ..."
      id="name"
      name="name"
      class="form-control"
      required
      minlength="3"
      [(ngModel)]="city.name"
      #name="ngModel"
    />

    <span class="input-group-btn">
      <button class="btn btn-primary" type="submit" [disabled]="!name.valid">Go!</button>
    </span>
  </div>
  <small *ngIf="city.name" class="text-muted">
    {{city.name.length}} caractères
  </small>

  <div
    *ngIf="name.invalid && (name.dirty || name.touched)"
    class="alert alert-danger"
  >
    <div *ngIf="name.errors && name.errors['required']">
      La saisie de la ville est obligatoire
    </div>
    <div *ngIf="name.errors && name.errors['minlength']">
      Doit contenit au moins 3 caratères.
    </div>
  </div>
</form>
```
<div align="center">app\meteo\meteo.component.html</div>

Saisissez différentes villes pour voir les messages d'erreur s'afficher.

# 5. Gestion de la liste

Dans le fichier ```meteo.component.ts```, mettre à jour le code TypeScript :

```ts
import { Component, OnInit } from '@angular/core';
import { MeteoItem } from '../meteoItem';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {

  city: MeteoItem = {
    name: '',
    id: 0,
    weather: null,
  };

  cityList: MeteoItem[] = [];

  constructor() { }

  ngOnInit() {
    const storedList = localStorage.getItem('cityList');

    if (storedList !== undefined && storedList !== null) {
      this.cityList = JSON.parse(storedList);
    } else {
      this.cityList = [];
    }
  }

  onSubmit() {
    if (
      this.city.name !== undefined &&
      this.isCityExist(this.city.name) === false
    ) {
      let currentCity = new MeteoItem();
      currentCity.name = this.city.name;
      this.cityList.push(currentCity);

      this.saveCityList();

      console.log(this.city.name, 'ajouté à la dans la liste');
    } else {
      console.log(this.city.name, 'existe déjà dans la liste');
    }
  }

  remove(_city: MeteoItem) {
    // on utilise 'filter' pour retourne une liste avec tous les items ayant un nom différent de _city.name
    this.cityList = this.cityList.filter(
      (item: MeteoItem) => item.name != _city.name
    );
    this.saveCityList();
  }

  isCityExist(_cityName: string) {
    // la méthode 'filter' retourne une liste contenant tous les items ayant un nom égale à _cityName
    // doc. sur filter : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter
    if (
      this.cityList.filter(
        (item: MeteoItem) => item.name?.toUpperCase() == _cityName.toUpperCase()
      ).length > 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  saveCityList() {
    localStorage.setItem('cityList', JSON.stringify(this.cityList));
  }

}
``` 
<div align="center">app\meteo\meteo.component.ts</div>


# 6. Affichage de la liste

Faire une boucle sur la variable ````cityList```

```html
<hr/>

<!-- Listing des villes, boucle sur l'array : cityList -->
<h4>Liste des villes ({{cityList.length}})</h4>
<ul class="list-group">
  <li *ngFor="let city of cityList"  class="list-group-item d-flex justify-content-between align-items-center">
    <a  routerLink="/meteo/{{city.name}}" class="d-block w-100">
      {{city.name}}    
    </a>
    <button (click)="remove(city)" class="btn btn-secondary btn-sm pull-right" title="Supprimer de la liste">&times;</button>
  </li>
</ul>

<div class="alert alert-primary" role="alert" *ngIf="cityList.length==0">
  Aucune ville de saisie!
</div>


<hr/>
<p>
  Utilisation du filtrer
  <strong>json</strong> pour afficher le contenu de la variable
  <strong>cityList</strong>
</p>
<pre>
{{cityList | json}}
</pre>

<!-- fin : Listing des villes -->

<hr>
```
<div align="center">app\meteo\meteo.component.html</div>


# 7. Ajout d'une page pour afficher la météo

<p align="center">
<kbd><img src="img/meteo.png" width="300"></kbd><br/>
<h3 align="center">Page détail affichant la météo️</h3><br/>
</p>

Documentation originale : https://angular.io/guide/router

Le module Angular qui gère la navigation entre les pages est ```@angular/router```

Ajouter le au fichier ```src/app/app.module.ts```
```ts
import { RouterModule, Routes } from '@angular/router';
```

La stratégie de navigation se décrit dans la variable ```appRoutes```. Cette variable devra être référencé dans les imports de @NgModule

```ts
const appRoutes: Routes = [
  {
    path: '', // la page principale utilisera le component suivant
    component: MeteoComponent,
  },
  {
    path: 'meteo/:name', // la page affichant la météo prendra comme paramètre 'name'
    component: MeteoDetailComponent, // Ce component fera l'appel AJAX et afficher les données reçues par openWeatherMap
  },
  {
    path: '**', // un chemin vers une page inexistante redirigera vers '/'
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  // ....=
  imports: [
    // ... 
    // ajouter ces modules : 
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  // ...
})
export class AppModule { }
```
<div align="center">src/app/app.module.ts</div>


# 8. Ajout un emplacement <router-outlet> dans la page principale + une navbar

Dans la page ```app.component.html```, ajouter l'élément ```<router-outlet></router-outlet>``` pour que le module ```router``` change dynamiquement le contenu de la page suivant l'URL(chemin dans la barre d'adresse du navigateur).

```html
<div class="container">

  <!-- menu du haut de page -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" routerLink="/">Météo avec Angular</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" routerLink="/">Accueil</a>
        </li>
      </ul>
    </div>
  </nav>
  <!-- fin : menu du haut de page -->

  <!--The content below is only a placeholder and can be replaced.-->
  <div>
    <h1>
      Welcome to {{ title }}!
    </h1>
    <router-outlet></router-outlet>
  </div>

</div>
```
<div align="center">src/app/app.component.html</div>


# 9. Créer le service MeteoService

MeteoService fera les appels AJAX vers openWeatherMap et permettra d'avoir un code plus modulaires.

Ligne de commande:
```cmd
ng g service services/meteo
```

Cette commande va créer dans le répertoire ```services``` le fichier ```meteo.service.ts```

Copier ce code et penser à mettre ```VOTRE_CLE_OPENWEATHERMAP``` à jour.

```ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MeteoService {

  constructor() { }


  getMeteo(name: string): Promise<any> {
    console.log('from service', name);

    return fetch('https://api.openweathermap.org/data/2.5/weather/?q=' + name + '&units=metric&lang=fr&appid=VOTRE_CLE_OPENWEATHERMAP')
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {

        // test du code retour
        // 200 = OK
        // 404 = city not found 
        if (json.cod == 200) {
          return Promise.resolve(json);
        } else {
          console.error('Météo introuvable pour ' + name + ' (' + json.message + ')');

          return Promise.reject('Météo introuvable pour ' + name + ' (' + json.message + ')');
        }

      });

  }
}
```
<div align="center">meteo-angular\src\app\services\meteo.service.ts</div>



# 10. Créer le component MeteoDetailComponent

Commande : 

```cmd
ng generate component meteoDetail
```

Ce méthode affichera les données reçues via ```MeteoService```:

Copier ce code qui utilise la méthode meteoService.getMeteo pour valoriser la variable ```meteo```
```ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeteoService } from '../services/meteo.service';

@Component({
  selector: 'app-meteo-detail',
  templateUrl: './meteo-detail.component.html',
  styleUrls: ['./meteo-detail.component.css'],
})
export class MeteoDetailComponent implements OnInit {
  meteo: any;
  latlon: string = '';

  constructor(
    private route: ActivatedRoute,
    private meteoService: MeteoService
  ) {}

  ngOnInit() {
    this.getMeteo();
  }

  getMeteo(): void {
    // pour lire la paramètre 'name' dans l'URL de la page  comme définit dans le router avec
    // path: 'meteo/:name'
    const name = this.route.snapshot.paramMap.get('name');

    console.log('getmeteo pour', name);
    if (name) {
      this.meteoService
        .getMeteo(name)
        .then((response) => {
          this.meteo = response;
          this.latlon = `${this.meteo.coord.lat},${this.meteo.coord.lon}`;
        })
        .catch((fail) => (this.meteo = fail));
    }
  }
}

```
<div align="center">app\meteo-detail\meteo-detail.component.ts</div>


Code HTML pour mettre en forme les données reçues :
```html
<!-- meteo de la ville selectionnée -->
<!-- meteo de la ville selectionnée -->
<div *ngIf="meteo && meteo.cod == 200">

  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a routerLink="/">🏠</a>
      </li>
      <li class="breadcrumb-item active" aria-current="page">Météo pour {{meteo.name}}</li>
    </ol>
  </nav>

  <div class="card" style="width:300px; margin: 0 auto" v-if="meteo">
    <div class="card-header">
      {{ meteo.name }} / {{ meteo.dt * 1000 | date : "EEEE d LLLL HH:mm" }}
    </div>
    <a
      href="http://maps.google.com/maps?q={{ latlon }}&ll={{ latlon }}&z=5"
      target="_blank"
    >
      <img
        class="card-img-top"
        src="https://maps.googleapis.com/maps/api/staticmap?markers={{
          latlon
        }}&zoom=5&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"
        alt="Card image cap"
      />
    </a>
    <div class="card-body">
      <h5 class="card-title">
        <i v-bind:class="'wi wi-owm-day-'+meteo.weather[0].id"></i>
        {{meteo.main.temp}}
        <i class="wi wi-celsius"></i>
      </h5>
      <p class="card-text">{{meteo.weather[0].description}}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <i class="wi wi-cloud"></i> Nuage: {{meteo.clouds.all}}%
      </li>
      <li class="list-group-item">
        <i class="wi wi-humidity"></i> Humidité: {{meteo.main.humidity}}%
      </li>
      <li class="list-group-item">
        <i class="wi wi-windy"></i> Vent: {{meteo.wind.speed}} km/h
      </li>
      <li class="list-group-item">
        <i class="wi wi-sunrise"></i> Levé du soleil: {{meteo.sys.sunrise}} // Date au format Timestamp à transformer au format 'H:mm'
      </li>
      <li class="list-group-item">
        <i class="wi wi-sunset"></i>Couché du soleil: {{meteo.sys.sunset}} // Date au format Timestamp à transformer au format 'H:mm'
      </li>
    </ul>
  </div>
</div>

<div class="alert alert-danger" *ngIf="meteo && meteo.cod != 200">

  {{meteo.message}} (erreur {{meteo.cod}})
</div>


<hr> {{meteo | json}}
```
<div align="center">app\meteo-detail\meteo-detail.component.html</div>

## 11. Mettre en forme les dates

Pour changer le format d'affichage des dates, utiliser les filtres angular : https://angular.io/api/common/DatePipe#examples

Prendre exemple sur la première date afficher dans ```meteo-detail.component.html```

# 12. Build : créer un package de votre application

A ce stade, l'application est en état d'être utilisée.

Pour compiler et packager votre application pour ensuite le déployer sur votre page github, il suffit d'executer la commande : 

```cmd
ng build --base-href /aw3ir/tp6/meteo-angular/build/ --output-path build
```

** /!\ Mettre le bon chemin de dossier du TP6 (ici "/aw3ir/tp6/meteo-angular/build/"), après le paramètre --basehref **

Cela va créer votre projet compilé dans le répertoire ```tp6/meteo-angular/build/```. 
Ce répertoire est prêt à étre mis sur un serveur web (github pages par exemple).

💡 **C'est donc le contenu de ce dossier "build" qu'il faudra aussi pousser mettre sur votre dépôt Github**

L'URL à partager avec le professeur sera : 
```
https://[votre_pseudo_github]].github.io/aw3ir/tp6/meteo-angular/build/index.html
```

```ng build``` va optimiser le code et :
* compiler le code TypeScript en Javascript
* importer que les modules NPM utilisés
* minifier le code (suppression des sauts de ligne et caractère 'espace' superflux)
* concatener tous les fichiers (component, autres TypeScript/JavaScript et CSS) dans un seul fichier


# 13. Meteo sur 5 jours

* Ajout une méthode à ```MeteoService``` qui appellera ce web service : 
https://api.openweathermap.org/data/2.5/forecast/?q=popo&lang=fr&appid=0ada432b59deb9716c357092c5f79be6

* Appeler cette méthode dans le code de ```meteo-detail.component.ts```

* Etudier la structure de la réponse https://openweathermap.org/forecast5

* Modifier le code HTML pour afficher (en plus de la méteo du jour), la météo sur les 5 prochains jours

Une fois terminé, packager à nouveau votre application et envoyer la sur votre page github.




<div align="center">
 --- FIN ---
 </div>
