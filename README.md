<h1 align ="center"> 
    TV Show Suggester 
</h1>

<p align="center">
    <img width="200" src="https://em-content.zobj.net/thumbs/160/apple/76/television_1f4fa.png" alt="TV Emoji">
</p>




A fully react web application that allows the user to search for TV shows based on their previous favorites. This application allows the user to search for a specific show and view several components.

### Getting Started
```git clone https://github.com/NSPOLE01/TVShowSuggester``` to get a copy of this repository on your local

```brew install node``` to install NPM

```npm install``` to download all of the required dependencies

```npm start``` to spin up a local host react application

### Features
    
1. Star Rating: Using Bootstrap icons as well as the TV Show Rating API endpoint from TMDB(The movie database), the user is able to see a numerical rating, as well as a star-display rating of the tv show.
2. Description: Using the TV Show Description API endpoint from TMDB, the user is able to see a description of the TV show, allowing them to determine if this TV show is for them or not.
3. Suggestions: Upon searching for a show, the TV Show Suggestions API endpoint from TMDB is used to display a list of similar TV shows based on the show searched for by the user.
4. Background image: Once the specific TV show is selected, the background of the web application becomes the TV show preview image, providing the user with some more insight into the show.

The specific TV show suggestions are displayed via a dynamic carousel at the bottom of the page, allowing the user to scroll horizontally to view different options. Each option is clickable, upon clicking the four components above are displayed.

The working application is currently deployed using vercel.com and can be viewed/used by clicking the hyperlink in the about section of this github repo (to the right).



