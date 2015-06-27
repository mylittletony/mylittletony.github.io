---
layout: default
title: Learn about Cloud managed guest wifi
permalink: /knowledge/
---
<div class="row">
  <div class="container">
    <h1>The Knowledge</h1>
    <p>We can put stuff in here. Create a post in the _posts folder with the same format at the ones there aleady. Give it a cateogory knowledge and it'll appear here.</p>
    <ul>
      {% for post in site.categories.knowledge %}
        <li>
          <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
      {% endfor %}
    </ul>

    {% highlight ruby %}
    def show
    @widget = Widget(params[:id])
      respond_to do |format|
        format.html # show.html.erb
        format.json { render json: @widget }
      end
    end
    {% endhighlight %}
  </div>
</div>
