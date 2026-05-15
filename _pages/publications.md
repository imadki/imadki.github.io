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

## Peer-Reviewed Journals

{% assign journals = site.publications | where: "pubtype", "journal" | sort: "date" | reverse %}
{% for post in journals %}
  {% include archive-single.html %}
{% endfor %}

---

## Conference Proceedings

{% assign conferences = site.publications | where: "pubtype", "conference" | sort: "date" | reverse %}
{% for post in conferences %}
  {% include archive-single.html %}
{% endfor %}
