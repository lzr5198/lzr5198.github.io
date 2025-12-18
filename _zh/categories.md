---
layout: archive
permalink: /zh/categories/
author_profile: true
title: " "
---

{% include base_path %}

<h1 id="category-title" class="page__title"></h1>

{% for cat in site.blog_categories %}
  {% assign category_posts = site.blog_zh | where: "category", cat.name %}
  {% if category_posts.size > 0 %}
<div class="category-section" data-category="{{ cat.name | slugify }}" data-title="{{ cat.name_zh }}">
<h2 id="{{ cat.name | slugify }}" class="archive__subtitle">{{ cat.name_zh }}</h2>

{% for post in category_posts reversed %}
  {% include archive-single.html %}
{% endfor %}
</div>
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
<div class="category-section" data-category="other" data-title="其他">
<h2 id="other" class="archive__subtitle">其他</h2>

{% for post in site.blog_zh reversed %}
  {% unless post.category %}
  {% include archive-single.html %}
  {% endunless %}
{% endfor %}
</div>
{% endif %}

<script>
function filterCategories() {
  var hash = window.location.hash.substring(1);
  var sections = document.querySelectorAll('.category-section');
  var titleEl = document.getElementById('category-title');
  
  if (!hash) {
    window.location.href = '/zh/blog/';
    return;
  }
  
  var activeSection = document.querySelector('.category-section[data-category="' + hash + '"]');
  if (activeSection) {
    titleEl.textContent = activeSection.dataset.title;
  }
  sections.forEach(function(section) {
    if (section.dataset.category === hash) {
      section.style.display = 'block';
      section.querySelector('h2').style.display = 'none';
    } else {
      section.style.display = 'none';
    }
  });
}

window.addEventListener('hashchange', filterCategories);
window.addEventListener('load', filterCategories);
</script>
