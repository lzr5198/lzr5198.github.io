---
layout: archive
title: "论文"
permalink: /zh/publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %} 

<span style="color:red"><b>在 ALPACAS 研究小组，作者按姓氏排序。</b></span>

{% for post in site.publications_zh reversed %}
  {% include archive-single-publication-teaching.html %}
{% endfor %}
