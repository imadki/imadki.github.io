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

{% assign all_pubs = site.publications | where_exp: "item", "item.pubtype != 'preprint'" | sort: "date" | reverse %}
{% assign pubs_by_year = all_pubs | group_by_exp: "item", "item.date | date: '%Y'" %}

{% for year_group in pubs_by_year %}
## {{ year_group.name }}

{% for post in year_group.items %}
  {% include archive-single.html %}
{% endfor %}

{% endfor %}
