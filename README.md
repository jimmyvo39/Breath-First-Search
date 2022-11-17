# Breath First Search: a visual demo to guided breathing

## Background
Interested in guided meditations and mental health, I found some guided meditation frustrating, since my breathing always fell out of sync with the narrator. Breath First Search's goal is to make guided meditation more approachable by leading users into catching their first mindful breath.

[Breath First Search](https://jimmyvo39.github.io/Breath-First-Search/) is guided breathing through visual animation. The Animation loops default sequence is 2.8 seconds of inhaling followed by 2.8 seconds of exhaling

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

 ```javascript
export function breathing(time) {
    function draw(){
        clearCanvas();
        drawCircle();

        circle.radius += circle.dr;
        // change size

        if (circle.radius >= 280) {
            //change radius direction and text
            circle.dr *= -1;
            circle.text = "EXHALE"
        }

        if (circle.radius <= 80) {
            //change radius direction and text
            circle.dr *= -1;
            circle.text = "INHALE"
        }
    }
    
    setInterval(draw,time/200)
    // divide time by # of frames in a full cycle
}
```

- **Wednesday:** Spent the morning trying to set up an event listener that recorded the duration the space bar was held down to give users the ability to adjust the animation timing. Set that feature aside and worked on styling my page and animation. I embedded a spotify track, and added links to my Github and LinkedIn. After some sleep i took another try at my event listener but instead used an html button rather than the keyboard.

```javascript
export class Timing {
    constructor(button){
        this.button = button;
        this.inhale = 2800;
        this.start = 0;
        this.end = 0;
        this.duration = 0;
   
        this.button.addEventListener("mousedown", this.onmousedown.bind(this));
        this.button.addEventListener("mouseup", this.onmouseup.bind(this))
    }

    onmousedown() {
    this.start = Date.now();
    };

    onmouseup() {
        this.end = Date.now();
        this.duration = this.end - this.start;        
        this.inhale = this.duration
    };
}
```

- **Thursday Morning:** Deploy to GitHub pages. rewrite proposal as a production README.

## Anticipated updates include:
- Calibrate the animating timing to their lung capacity by holding down a button
- fine-tune the timer through controls 
- choose from a list of animations
- additional controls for color schemes
- additional controls for fine-tuning  breath holding and exhaling timing


### Ackknowledgement
[Meyer Web](https://meyerweb.com/eric/tools/css/reset/) - providing CSS Reset

[Spotify](https://developer.spotify.com/documentation/embeds/guides/using-the-iframe-api/) - ability to embed audio tracks