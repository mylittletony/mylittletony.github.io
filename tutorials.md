---
layout: default
title: Learn about Cloud managed guest wifi
permalink: /community/tutorials/index.html
redirect_from: "/documentation/"
---

<div class="row">

<h1>WiFi Community Tutorials</h1>
<h3>Explore the tutorials and find all the resources you need to set up an amazing WiFi network.</h3>
<hr/>

  {% for post in site.tags.tutorials limit:3 %}
  <div class="small-12 medium-4 columns">
    {% if post.thumbnail %}
    <img src="{{ post.thumbnail }}" style= align="center" />
    {% else %}
    <img src="/images/community/thumbnails/rf-power.png" style="height: 200px" align="center" />
    {% endif %}
    <a href="{{ BASE_PATH }}{{ post.url }}"><h3 style=color:#868686;>{{ post.title }}</h3></a>
  </div>
  {% endfor %}
<hr/>
</div>

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
