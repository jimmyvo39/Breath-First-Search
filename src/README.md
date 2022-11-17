# Breath First Search: a visual demo to guided breathing

## Background
Interested in guided meditations and mental health, I found some guided meditation frustrating, since my breathing always fell out of sync with the narrator. Breath First Search's goal is to make guided meditation more approachable by leading users into catching their first mindful breath.

Breath First Search is guided breathing through visual animation. The Animation loops default sequence is 2.8 seconds of inhaling followed by 2.8 seconds of exhaling

## Functionality & MVPs

In Breath First Search, users will be able to:
 - to view the default animation 

 


In addition, this project will include the following:
- embedded Spotify Player


## Wireframes
![This is an image](/asset/production_wireframe.png)
- instructions will tell users to follow along
- external links open new tabs
- spotify player allowes user to play, pause and scrub through selected track

## Technologies, Libraries, APIs
This project will be implemented with the following technologies:
- Canvas to render animations. 
- Webpack and Babel to bundle and transpile the source JavaScript code
- npm to manage project dependencies
- iFrame to embed spotify player



## Implementation Timeline
NB:

- **Friday:** During the day i setup my project, including getting webpack up and running. I was able to experiment a bit with anime.js but ultimately decided to stick with Canvas. 

- **Friday Afternoon & Weekend:** I had the flu, my fitbit managed to log 18 hours of sleep on Saturday alone. 

- **Monday:** I rendered a growing/shrinking circle animation. The animation looped but the default FPS was too fast.
I broke the animations into parts and was able to change the FPS by calling for each frame using setInterval() instead of requestAnimationFrame(). This allowed me to render each animation in my prefered speed. 

 - **Tuesday:** With my animations in parts i struggled to render them in a sequence. At the end of the day i ultimately refactored my animation to be a single loop where the inhale and exhale time are identical. 

- **Wednesday:** Spent the morning trying to set up an event listener that recorded the duration the space bar was held down to give users the ability to adjust the animation timing. Set that feature aside and worked on styling my page and animation. I embedded a spotify track, and added links to my Github and LinkedIn.

- **Thursday Morning:** Deploy to GitHub pages. rewrite proposal as a production README.

## Bonus feature
Anticipated updates include:
- Calibrate the animating timing to their lung capacity by holding down a button
- fine-tune the timer through controls 
- choose from a list of animations
- additional controls for color schemes
- additional controls for fine-tuning  breath holding and exhaling timing


