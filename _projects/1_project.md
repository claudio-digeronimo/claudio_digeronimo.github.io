---
layout: page
title: project 1
description: Pietro San
img: assets/img/12.jpg
importance: 1
category: work
related_publications: true
---


Pietro san è un progetto che usa droni di fascia consumer, legalmente utilizzabili da tutti, per fare survey delle aree cittadine e mappare così la distribuzione dei rifiuti nelle aree urbane.
Lo scopo è quello in primo luogo di sensibilizzare verso l'argomento rifiuti e plastica, con la quale ormai viviamo in simbiosi, ma anche quello di trattare il problema da un punto di vista quantitativo e più high tech come è adeguato per il passo dei tempi. La sempre maggiore automazione permetterà di avere dati periodici, ad impatto zero e disponibili aq tutti i cittadini, e permetterà invece alle autorità competenti di agire in maniera mirata dove si nota una maggior velocità di riaccumulo dei rifiuti. 

Infine prevediamo di accoppiare Pietro San con un robot terrestre, che possa utilizzare tali informazioni per definire percorsi e andare a raccogliere lo sporco in regioni più difficili da raggiungere, e tutto in maniera automatizzata.

Il nomederiva in primo luogo dal detto italiano: "Pietro torna indietro", che significa Pietro comes back, e noi vogliamo ovviamente che Pietro San torni sempre indietro. è poi però anche un nome importante nella famiglia di alcuni membri del gruppo, dove il nome Pietro e Carlo si tramanda e si alterna di generazione in generazione, facendo di Pietro come un figlio. Infine è ovviamente un richiamo a San Pietro e alla sua storia di pescatore, quando ancora non conosceva Gesù. Lui pescava pesci, mentre noi, in futuro, prevediamo di pescare plastica.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/drone_alone.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>


  <div class="col-sm mt-3 mt-md-0">
    <video 
      class="img-fluid rounded z-depth-1" 
      controls 
      autoplay 
      muted 
      loop 
      playsinline 
      preload="auto"
    >
      <source src="assets/videos/video-drone-per-sito.mp4" type="video/mp4">
      Il tuo browser non supporta i video HTML5.
    </video>
  </div>
</div>

<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
