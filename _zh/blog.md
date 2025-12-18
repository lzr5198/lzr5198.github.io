---
layout: archive
title: "博客"
permalink: /zh/blog/
author_profile: true
---

{% include base_path %}

{% for cat in site.blog_categories %}
  {% assign category_posts = site.blog_zh | where: "category", cat.name %}
  {% if category_posts.size > 0 %}
<h2 class="archive__subtitle"><a href="/zh/categories/#{{ cat.name | slugify }}" style="color: inherit; text-decoration: none;">{{ cat.name_zh }}</a></h2>

{% for post in category_posts reversed %}
  {% include archive-single.html %}
{% endfor %}
  {% endif %}
{% endfor %}

{% assign has_uncategorized = false %}
{% for post in site.blog_zh %}
  {% unless post.category %}
    {% assign has_uncategorized = true %}
    {% break %}
  {% endunless %}
{% endfor %}

{% if has_uncategorized %}
<h2 class="archive__subtitle">其他</h2>

{% for post in site.blog_zh reversed %}
  {% unless post.category %}
  {% include archive-single.html %}
  {% endunless %}
{% endfor %}
{% endif %}
