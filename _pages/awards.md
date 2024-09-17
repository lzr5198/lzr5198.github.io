---
layout: archive
title: "Awards"
permalink: /awards/
author_profile: true
---

{% include base_path %}

{% for post in site.awards reversed %}
  {% include archive-single-job-project-award.html %}
{% endfor %}
