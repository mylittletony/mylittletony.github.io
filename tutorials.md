---
layout: default
title: Learn about Cloud managed guest wifi
permalink: /community/tutorials/index.html
redirect_from: "/documentation/"
---
<div class="row">
  <div class="container">
    <h1>Tutorials</h1>
    <p>Explore the tutorials, get to really understand Wi-Fi.</p>
    <ul>
      {% for post in site.categories.tutorials %}
        <li>
          <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
      {% endfor %}
    </ul>
  </div>
</div>

<div class="row">
<div class="container">
    <h1>Documentation</h1>
    <p>Explore the documentation, learn how to use Cucumber Tony.</p>
    <ul>
      {% for post in site.categories.documentation %}
        <li>
          <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
      {% endfor %}
    </ul>
  </div>
</div>
