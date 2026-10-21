(function () {
  'use strict';

  var picker = document.getElementById('cv-picker');
  if (!picker) return;

  var options = Array.from(picker.querySelectorAll('input[name="cv-section"]'));
  var printButton = document.getElementById('cv-print-button');
  var status = document.getElementById('cv-selection-status');
  var originalTitle = null;

  function isFrench() {
    return document.documentElement.classList.contains('lang-is-fr');
  }

  function updateSelection() {
    var count = options.filter(function (input) { return input.checked; }).length;
    printButton.disabled = count === 0;
    status.textContent = isFrench()
      ? (count ? count + ' rubrique(s) sélectionnée(s).' : 'Choisissez au moins une rubrique.')
      : (count ? count + ' section(s) selected.' : 'Choose at least one section.');
  }

  // Keep only the selected language; do not depend on the site's print styles.
  function cleanContent(root, french) {
    var otherLanguage = french ? '.lang-en, .lang-en-block' : '.lang-fr, .lang-fr-block';
    root.querySelectorAll(otherLanguage + ', script, style, button, svg, i.fas, i.fab').forEach(function (node) {
      node.remove();
    });
    root.querySelectorAll('*').forEach(function (node) {
      node.removeAttribute('id');
      node.removeAttribute('style');
      node.removeAttribute('onclick');
      node.classList.remove('lang-en', 'lang-fr', 'lang-en-block', 'lang-fr-block');
    });
    root.querySelectorAll('a').forEach(function (link) {
      if (!link.textContent.trim()) link.remove();
    });
    // Repository names alone are not useful on paper: include their URLs.
    root.querySelectorAll('.code-pill').forEach(function (link) {
      link.appendChild(document.createTextNode(' — ' + link.href));
    });
  }

  function clearPrintView() {
    var previous = document.getElementById('cv-print-document');
    if (previous) previous.remove();
    document.body.classList.remove('printing-cv');
    if (originalTitle !== null) {
      document.title = originalTitle;
      originalTitle = null;
    }
  }

  function preparePrintView() {
    clearPrintView();
    var french = isFrench();
    var home = document.getElementById(french ? 'content-fr' : 'content-en');
    var cv = document.createElement('article');
    cv.id = 'cv-print-document';
    cv.lang = french ? 'fr' : 'en';
    cv.appendChild(document.getElementById('cv-heading').content.cloneNode(true));

    options.filter(function (input) { return input.checked; }).forEach(function (input) {
      var section = document.createElement('section');
      section.dataset.cvSection = input.value;
      var heading = document.createElement('h2');
      heading.textContent = input.parentElement.querySelector(french ? '.lang-fr' : '.lang-en').textContent;
      section.appendChild(heading);
      if (input.dataset.home) {
        home.querySelectorAll(input.dataset.home).forEach(function (node) {
          section.appendChild(node.cloneNode(true));
        });
      } else {
        var source = document.getElementById('cv-source-' + input.value).content;
        if (input.dataset.selector) {
          source.querySelectorAll(input.dataset.selector).forEach(function (node) {
            section.appendChild(node.cloneNode(true));
          });
        } else {
          section.appendChild(source.cloneNode(true));
        }
      }
      cv.appendChild(section);
    });

    cleanContent(cv, french);
    document.body.appendChild(cv);
    document.body.classList.add('printing-cv');
    originalTitle = document.title;
    document.title = 'CV - ' + cv.querySelector('h1').textContent;
  }

  picker.querySelectorAll('[data-cv-select]').forEach(function (button) {
    button.addEventListener('click', function () {
      options.forEach(function (input) { input.checked = button.dataset.cvSelect === 'all'; });
      updateSelection();
    });
  });
  picker.addEventListener('change', updateSelection);
  picker.addEventListener('toggle', updateSelection);
  new MutationObserver(updateSelection).observe(document.documentElement, {
    attributes: true, attributeFilter: ['class']
  });

  printButton.addEventListener('click', function () {
    if (!options.some(function (input) { return input.checked; })) return;
    preparePrintView();
    try {
      window.print();
    } catch (error) {
      clearPrintView();
      status.textContent = isFrench()
        ? 'L’impression n’a pas pu démarrer. Veuillez réessayer.'
        : 'Printing could not start. Please try again.';
    }
  });
  window.addEventListener('afterprint', clearPrintView);
  // Also clean up when returning to a page restored from the back/forward cache.
  window.addEventListener('pageshow', clearPrintView);
  picker.hidden = false;
  updateSelection();
})();
