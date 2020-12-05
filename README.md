<p align="center">
  <img height="100" src="https://i.imgur.com/vOjrlin.png" alt="BorisBelloc">                                                  
</p>

### Project structure : 

Home component is inside `../views/home` folder

Btn-to-top is inside `../module/navigation/components`

### Technos :
- [Angular 10](https://www.npmjs.com/package/@angular/cli)
    - Packages installed (node_modules) : 
        - [bootstrap](https://www.npmjs.com/package/bootstrap) : `npm i bootstrap`
        - [fontawesome](https://www.npmjs.com/package/@fortawesome/angular-fontawesome) : `npm install --save @fortawesome/fontawesome-free`
        - [@ng-bootstrap/ng-bootstrap](https://www.npmjs.com/package/@ng-bootstrap/ng-bootstrap) (/)

      * Bouton back-to-top (auto scroll) :
        - [ngx-page-scroll-core](https://www.npmjs.com/package/ngx-page-scroll) : `npm install ngx-page-scroll-core --save`
        - [ngx-page-scroll](https://www.npmjs.com/package/ngx-page-scroll) : `npm i ngx-page-scroll` 
        
- Bootstrap 4        

<hr>

### Run the project :
- Instal [NodeJS](https://nodejs.org/en/download/)
- Install [AngularCLI](https://cli.angular.io/) : `npm install -g @angular/cli`
- Install the dependencies : `npm install`

- Launch project (SSR) with `npm run dev:ssr` 
- Open in navigator (Chrome, firefox...) with url `http://localhost:4200/`

### reproduce problem : 

- When you open the website `http://localhost:4200/`, there should be no error message in the console.

- When you refresh the page the error appear : 
> An instance of PageScrollService already exists, usually including one provider should be enough, so double check.



