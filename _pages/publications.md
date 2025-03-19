---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %} 

<span style="color:red"><b>Authors are ordered alphabetically in our group.</b></span>

{% for post in site.publications reversed %}
  {% include archive-single-publication-teaching.html %}
{% endfor %}
