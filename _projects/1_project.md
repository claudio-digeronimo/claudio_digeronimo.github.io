---
layout: page
title: project 1
description: Pietro San
img: assets/img/progetto_1_presentazione.png
importance: 1
category: work
related_publications: false
---

Pietro San is a project that uses consumer-grade drones — legally operable by anyone — to survey urban areas and map the distribution of litter in cities. Its goal is to raise awareness about the growing issue of waste and plastic, which have become part of our daily environment, while also addressing the problem through a quantitative and technologically driven approach. By leveraging automation, the project aims to provide regular, zero-impact data accessible to all citizens, enabling authorities to take targeted action where waste accumulation occurs most rapidly.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/yolo_1.jpg" 
      title="Drone view" 
      class="img-fluid rounded z-depth-1" 
    %}
  </div>

  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/yolo_2.jpg" 
      title="YOLO detection 1" 
      class="img-fluid rounded z-depth-1" 
    %}
  </div>

  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid 
      loading="eager" 
      path="assets/img/yolo_3.jpg" 
      title="YOLO detection 3" 
      class="img-fluid rounded z-depth-1" 
    %}
  </div>
</div>
<div class="caption">
  Examples of drone images analyzed by the AI, with green boxes highlighting the objects identified as litter.
</div>

The detected waste is highlighted in green by the AI once the image has been processed. These sample images already demonstrate the effectiveness of the approach, though the wide variety of shapes and colors of litter means that a long phase of performance refinement still lies ahead.

<style>
/* contenitore full-width dentro il body del tema (rispetta i padding del tema) */
.img-row {
  display: flex;
  gap: 12px;             /* spazio fra le immagini */
  width: 100%;
  margin: 0 auto;
}

/* ogni colonna occupa metà larghezza */
.img-row .col {
  flex: 1 1 0;
}

/* qui imposti L'ALTEZZA fissa: cambia 380px con il valore che preferisci */
.img-row img {
  display: block;
  width: 100%;
  height: 500px;         /* altezza fissa identica per entrambe */
  object-fit: cover;     /* ritaglia senza deformare (mantiene proporzioni) */
  border-radius: 8px;
}

/* mobile: impila le immagini e riduci altezza */
@media (max-width: 768px) {
  .img-row {
    flex-direction: column;
  }
  .img-row img {
    height: 220px;
  }
}
</style>

<div class="img-row">
  <div class="col">
    <img src="/assets/img/drone_alone.jpg" alt="Drone view">
  </div>
  <div class="col">
    <img src="/assets/img/georecognition.png" alt="Georecognition map">
  </div>
</div>


<div class="caption">
    In blue is the path followed by the drone during mapping, in yellow the photos marking the mapped areas, and in red the points where waste was detected.
</div>

The name Pietro San comes first from the Italian saying “Pietro torna indietro” -> “Peter comes back”, a wish we take quite literally, since we definitely want our drone to always return home. It’s also a family name with a story: in Carlo's family, the name, Pietro and Carlo have alternated for generations, so naming the drone Pietro felt almost like welcoming a son. And of course it nods to Saint Peter, once a fisherman, though instead of fish we plan to catch plastic.

In the future, Pietro San will team up with a ground robot that can use its maps to plan routes and clean up harder-to-reach areas, all fully automated.

