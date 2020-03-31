# PFF-Java-Medical-brainstormers
une application web de gestion des consultations pour les professionnels de santé et un service de prise de rendez-vous en ligne pour les patients
done

## telecharger AirDoc [Release](https://github.com/pr-elhajji/PFF-Java-Medical-brainstormers/releases)

## Demarer par 

``` 
java -jar airdoc-0.0.1-SNAPSHOT.jar
```
## ou a partir de source code par

```bash
mvn spring-boot:run
```
## Tester par
```bash
mvn clean test
```
## Voir [Rest Documentation ](http://localhost:8080/swagger-ui.html)

## Démarer AirDocClient (Angular Web App) par:
```bash
cd airdoc-client
npm install
ng serve --open
```

#Contribution au code:
1. creé un branch basé sur la branch de Develop
```bash
git checkout develop
git checkout -b [nom de branch]
git push --set-upstream origin [nom de branch]
```
2. fait votre tache
3. commit et push
```bash
git add --all
git commit -m [message]
git push
```
4. faire une Pull Request dans Github de votre branch vers la branch develop.
