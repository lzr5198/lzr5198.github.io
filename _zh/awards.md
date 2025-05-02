---
layout: archive
title: "奖项"
permalink: /zh/awards/
author_profile: true
---

{% include base_path %}


<link rel="stylesheet" type="text/css" href="/assets/css/mystyle.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<div class="{{ include.type | default: "list" }}__item">
  <article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">
    <div class="resume-box">
      <ul>
        {% for post in site.awards_zh reversed %}
          {% include archive-single-job-project-award.html %}
        {% endfor %}
      </ul>
    </div>
  </article>
</div>
