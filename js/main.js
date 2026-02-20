// ============================================
// AI Prompt Lab - Main Logic
// B站风格 Video Card Grid
// ============================================

document.addEventListener('DOMContentLoaded', function () {
  console.log('[AI Prompt Lab] DOMContentLoaded fired');

  var page = document.body.dataset.page;
  console.log('[AI Prompt Lab] Page type:', page);

  try {
    if (page === 'home') {
      initHomePage();
    } else if (page === 'detail') {
      initDetailPage();
    } else if (page === 'list') {
      initListPage();
    }
  } catch (e) {
    console.error('[AI Prompt Lab] Page init error:', e);
  }

  initNavbar();
  initBackToTop();
  initBackButton();
  initHeroCarousel();
});

// ---------- Back Button (Animation) ----------

function initBackButton() {
  var page = document.body.dataset.page;
  // Exclude Home page
  if (page === 'home' || !page) return;

  var btn = document.createElement('img');
  btn.src = 'img/back_animation.webp';
  btn.className = 'back-video-btn'; // Keeping class name for simplicity, though content is img
  btn.alt = '返回上一页';

  // Click to go back
  btn.addEventListener('click', function () {
    window.history.back();
  });

  document.body.appendChild(btn);
}

// ---------- Navbar ----------

function initNavbar() {
  var toggle = document.getElementById('navbar-toggle');
  var tabs = document.getElementById('navbar-tabs');

  if (toggle && tabs) {
    toggle.addEventListener('click', function () {
      tabs.classList.toggle('open');
      toggle.textContent = tabs.classList.contains('open') ? '✕' : '☰';
    });

    var links = tabs.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function () {
        tabs.classList.remove('open');
        toggle.textContent = '☰';
      });
    }
  }
}

// ---------- Back to Top ----------

function initBackToTop() {
  var btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ---------- Video Card Component ----------

function createVideoCard(item) {
  var catClass = item.category === 'vlog' ? 'cat-vlog'
    : item.category === 'viral-prompts' ? 'cat-viral' : 'cat-class';
  var catLabel = item.category === 'vlog' ? 'VLOG'
    : item.category === 'viral-prompts' ? '爆火' : '学习班';

  var viewsStr = formatNumber(item.views);
  var copiesStr = formatNumber(item.copies);

  var html = '<a href="detail.html?id=' + item.id + '" class="video-card" id="card-' + item.id + '">';
  html += '<div class="thumb">';
  html += '<img src="' + item.cover + '" alt="' + item.title + '" loading="lazy" onerror="this.style.background=\'#e3e5e7\'" />';
  html += '<span class="thumb-category ' + catClass + '">' + catLabel + '</span>';
  html += '<span class="thumb-copy-badge">\uD83D\uDCCB ' + copiesStr + ' 次复制</span>';
  html += '<div class="thumb-stats">';
  html += '<span class="thumb-stat">\u25B6 ' + viewsStr + '</span>';
  html += '<span class="thumb-stat">\uD83D\uDCCB ' + copiesStr + '</span>';
  html += '</div>';
  html += '<span class="thumb-duration">' + item.duration + '</span>';
  html += '</div>';
  html += '<div class="card-info">';
  html += '<div class="info-title">' + item.title + '</div>';
  html += '<div class="info-meta">';
  html += '<span class="info-author">';
  html += '<span class="avatar">\uD83D\uDC64</span>';
  html += item.author;
  html += '</span>';
  html += '<span class="info-stats">';
  html += '<span class="info-stat">\u25B6 ' + viewsStr + '</span>';
  html += '<span class="info-stat">\uD83D\uDCC5 ' + item.date + '</span>';
  html += '</span>';
  html += '</div>';
  html += '</div>';
  html += '</a>';

  return html;
}

// ---------- Home Page ----------

function initHomePage() {
  console.log('[AI Prompt Lab] initHomePage');
  renderHomeSection('vlog-grid', 'vlog');
  renderHomeSection('prompt-grid', 'viral-prompts');
  renderHomeSection('class-grid', 'ai-class');
  renderRelatedSection();
}

function renderRelatedSection() {
  var container = document.getElementById('related-grid');
  if (!container) return;

  var all = getAllContent().slice();
  all.sort(function (a, b) { return b.copies - a.copies; });
  var top = all.slice(0, 5);

  console.log('[AI Prompt Lab] Rendering related:', top.length, 'items');
  var html = '';
  for (var i = 0; i < top.length; i++) {
    html += createVideoCard(top[i]);
  }
  container.innerHTML = html;
}

function renderHomeSection(containerId, category) {
  var container = document.getElementById(containerId);
  if (!container) {
    console.warn('[AI Prompt Lab] Container not found:', containerId);
    return;
  }
  var items = getContentByCategory(category);
  console.log('[AI Prompt Lab] Rendering', category, ':', items.length, 'items');
  var html = '';
  for (var i = 0; i < items.length; i++) {
    html += createVideoCard(items[i]);
  }
  container.innerHTML = html;
}

// ---------- List Page ----------

function initListPage() {
  console.log('[AI Prompt Lab] initListPage');
  var category = document.body.dataset.category;
  console.log('[AI Prompt Lab] Category:', category);

  if (!category) {
    console.error('[AI Prompt Lab] No category found on body');
    return;
  }

  var container = document.getElementById('list-grid');
  if (!container) {
    console.error('[AI Prompt Lab] list-grid container not found');
    return;
  }

  var items = getContentByCategory(category);
  console.log('[AI Prompt Lab] Found', items.length, 'items for', category);

  var countEl = document.getElementById('item-count');
  if (countEl) countEl.textContent = items.length;

  var viewsEl = document.getElementById('total-views');
  if (viewsEl) {
    var totalViews = 0;
    for (var i = 0; i < items.length; i++) totalViews += items[i].views;
    viewsEl.textContent = formatNumber(totalViews);
  }

  var copiesEl = document.getElementById('total-copies');
  if (copiesEl) {
    var totalCopies = 0;
    for (var j = 0; j < items.length; j++) totalCopies += items[j].copies;
    copiesEl.textContent = formatNumber(totalCopies);
  }

  if (items.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-icon">\uD83D\uDCED</div><p>暂无内容，敬请期待！</p></div>';
    return;
  }

  var html = '';
  for (var k = 0; k < items.length; k++) {
    html += createVideoCard(items[k]);
  }
  container.innerHTML = html;
  console.log('[AI Prompt Lab] Rendered', items.length, 'cards');
}

// ---------- Detail Page ----------

function initDetailPage() {
  console.log('[AI Prompt Lab] initDetailPage');
  var params = new URLSearchParams(window.location.search);
  var id = params.get('id');

  if (!id) { showNotFound(); return; }
  var item = getContentById(id);
  if (!item) { showNotFound(); return; }

  renderDetailPage(item);
}

function renderDetailPage(item) {
  document.title = item.title + ' - 梧桐树 ai';

  // Title
  var titleEl = document.getElementById('detail-title');
  if (titleEl) titleEl.textContent = item.title;

  // Meta
  var metaEl = document.getElementById('detail-meta');
  if (metaEl) {
    metaEl.innerHTML = '<span>' + item.author + '</span>'
      + '<span>' + item.date + '</span>'
      + '<span>\u25B6 ' + formatNumber(item.views) + ' 观看</span>'
      + '<span>\uD83D\uDCCB ' + formatNumber(item.copies) + ' 次复制</span>'
      + (item.duration ? '<span>⏱ ' + item.duration + '</span>' : '');
  }

  // Tags
  var tagsEl = document.getElementById('detail-tags');
  if (tagsEl && item.tags && item.tags.length > 0) {
    tagsEl.style.display = '';
    tagsEl.innerHTML = item.tags.map(function (tag) {
      return '<span class="detail-tag">' + escapeHtml(tag) + '</span>';
    }).join('');
  }

  // Video: use videoUrl if available, otherwise show cover as poster
  var videoContainer = document.getElementById('detail-video');
  if (videoContainer) {
    if (item.videoUrl) {
      videoContainer.innerHTML = '<video controls poster="' + item.cover + '"><source src="' + item.videoUrl + '" type="video/mp4"></video>';
    } else if (item.cover) {
      videoContainer.innerHTML = '<div class="video-placeholder" style="background:url(' + item.cover + ') center/cover no-repeat;"><div class="video-placeholder-icon">\u25B6</div></div>';
    }
  }

  // Opening summary
  var openingEl = document.getElementById('detail-opening');
  if (openingEl && item.opening && item.opening.summary) {
    openingEl.style.display = '';
    openingEl.innerHTML = '<div class="opening-icon">💡</div>'
      + '<p>' + escapeHtml(item.opening.summary) + '</p>';
  }

  // Prompt cards
  var promptSection = document.getElementById('prompt-section');
  if (promptSection && item.main && item.main.steps) {
    window._stepPrompts = [];
    var html = '';
    var steps = item.main.steps;
    var multi = steps.length > 1;

    for (var i = 0; i < steps.length; i++) {
      var step = steps[i];
      window._stepPrompts.push(step.prompt);

      var label = multi
        ? '<span class="prompt-step-num">0' + (i + 1) + '</span>' + escapeHtml(step.title)
        : '\uD83D\uDCCB 提示词 Prompt';

      // Step description
      var descHtml = step.description
        ? '<div class="prompt-card-desc">' + escapeHtml(step.description) + '</div>'
        : '';

      var paramsHtml = '';
      if (step.params) {
        var keys = Object.keys(step.params);
        paramsHtml = '<div class="prompt-card-params">';
        for (var p = 0; p < keys.length; p++) {
          paramsHtml += '<span class="prompt-param"><strong>' + keys[p] + ':</strong> ' + step.params[keys[p]] + '</span>';
        }
        paramsHtml += '</div>';
      }

      html += '<div class="prompt-card">'
        + '<div class="prompt-card-header">'
        + '<span class="prompt-card-label">' + label + '</span>'
        + '<button class="prompt-copy-btn" data-step-index="' + i + '">\u4E00\u952E\u590D\u5236</button>'
        + '</div>'
        + descHtml
        + '<pre class="prompt-card-code">' + escapeHtml(step.prompt) + '</pre>'
        + paramsHtml
        + '</div>';
    }
    promptSection.innerHTML = html;

    // Copy event delegation
    promptSection.addEventListener('click', function (e) {
      var btn = e.target.closest('.prompt-copy-btn');
      if (btn) {
        e.preventDefault();
        var idx = parseInt(btn.dataset.stepIndex, 10);
        if (window._stepPrompts && window._stepPrompts[idx]) {
          copyPrompt(window._stepPrompts[idx], btn);
          btn.textContent = '\u5DF2\u590D\u5236 \u2713';
          btn.classList.add('copied');
          setTimeout(function () {
            btn.textContent = '\u4E00\u952E\u590D\u5236';
            btn.classList.remove('copied');
          }, 2000);
        }
      }
    });

    // Copy all toolbar
    if (steps.length > 1) {
      var toolbarEl = document.getElementById('detail-toolbar');
      if (toolbarEl) toolbarEl.style.display = '';
      var copyAllBtn = document.getElementById('copy-all-btn');
      if (copyAllBtn) {
        copyAllBtn.addEventListener('click', function () {
          var allPrompts = window._stepPrompts.join('\n\n---\n\n');
          copyPrompt(allPrompts, copyAllBtn);
          copyAllBtn.textContent = '✅ 全部已复制';
          setTimeout(function () {
            copyAllBtn.textContent = '📋 一键复制全部提示词';
          }, 2000);
        });
      }
    }
  }

  // Closing remarks
  var closingEl = document.getElementById('detail-closing');
  if (closingEl && item.closing && item.closing.summary) {
    closingEl.style.display = '';
    closingEl.innerHTML = '<div class="closing-label">✍️ 创作后记</div>'
      + '<p>' + escapeHtml(item.closing.summary) + '</p>';
  }

  // Reference materials (if item.references exists)
  var refsSection = document.getElementById('detail-refs');
  var refsGrid = document.getElementById('refs-grid');
  if (refsSection && refsGrid && item.references && item.references.length > 0) {
    refsSection.style.display = '';
    var refsHtml = '';
    for (var r = 0; r < item.references.length; r++) {
      var ref = item.references[r];
      var isVid = ref.type === 'video';
      var media = isVid
        ? '<video src="' + ref.url + '" muted playsinline></video>'
        : '<img src="' + ref.url + '" alt="' + (ref.label || '') + '" loading="lazy" />';
      refsHtml += '<div class="ref-item">'
        + '<span class="ref-type-badge">' + (isVid ? '\u89C6\u9891' : '\u56FE\u7247') + '</span>'
        + media
        + '<div class="ref-item-label">' + (ref.label || (isVid ? '\u53C2\u8003\u89C6\u9891' : '\u53C2\u8003\u56FE\u7247')) + '</div>'
        + '</div>';
    }
    refsGrid.innerHTML = refsHtml;
  }

  // Related
  var relatedSection = document.getElementById('detail-related');
  var relatedContainer = document.getElementById('related-grid');
  if (relatedContainer && item.closing && item.closing.relatedIds && item.closing.relatedIds.length > 0) {
    if (relatedSection) relatedSection.style.display = '';
    var related = getRelatedContent(item.closing.relatedIds);
    var relatedHtml = '';
    for (var j = 0; j < related.length; j++) {
      relatedHtml += createVideoCard(related[j]);
    }
    relatedContainer.innerHTML = relatedHtml;
  }
}

// ---------- Utilities ----------

function escapeHtml(text) {
  var div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function showNotFound() {
  var content = document.getElementById('detail-content');
  if (content) {
    content.innerHTML = '<div style="text-align:center; padding:96px 24px;">'
      + '<div style="font-size:64px; margin-bottom:16px;">\uD83D\uDD0D</div>'
      + '<h1 style="font-size:24px; margin-bottom:8px;">内容不存在</h1>'
      + '<p style="color:#9499a0; margin-bottom:24px;">该内容可能已被删除或链接错误</p>'
      + '<a href="index.html" style="color:#00aeec;">\u2190 返回首页</a>'
      + '</div>';
  }
}

// ---------- Hero Carousel Logic ----------

function initHeroCarousel() {
  var navContainer = document.getElementById('carousel-nav');
  if (!navContainer) return;

  // Setup deck wrapper (create if not in DOM)
  var deckWrapper = navContainer.querySelector('.nav-deck');
  if (!deckWrapper) {
    var cards = Array.from(navContainer.querySelectorAll('.nav-card'));
    deckWrapper = document.createElement('div');
    deckWrapper.className = 'nav-deck';
    navContainer.innerHTML = '';
    cards.forEach(card => deckWrapper.appendChild(card));
    navContainer.appendChild(deckWrapper);
  }

  // Dual background layers for crossfade
  var bgFront = document.getElementById('carousel-bg-front');
  var bgBack = document.getElementById('carousel-bg-back');
  var prevBtn = document.getElementById('prev-slide');
  var nextBtn = document.getElementById('next-slide');
  var indicatorsContainer = document.getElementById('carousel-indicators');
  var titleEl = document.getElementById('hero-title');
  var descEl = document.getElementById('hero-desc');
  var actionsEl = document.querySelector('.hero-actions');
  var controlsEl = document.querySelector('.carousel-controls');

  // Content data sourced from CONTENT_DATA (syncs carousel with Viral Prompts)
  var targetIds = ["prompt-001", "prompt-002", "prompt-003", "prompt-004", "prompt-005"];

  var contentData = targetIds.map(function (id) {
    var item = getContentById(id);
    if (!item) return null;

    // Generate high-res version of cover for fullscreen background
    var hiresCover = item.cover.replace(/\/\d+\/\d+$/, '/1920/1080');

    return {
      title: item.title,
      desc: item.opening.summary,
      cover: item.cover,
      bgCover: hiresCover
    };
  }).filter(Boolean);

  // Set initial background on both layers
  if (bgFront && contentData.length > 0) {
    bgFront.style.backgroundImage = "url('" + contentData[0].bgCover + "')";
    bgBack.style.backgroundImage = "url('" + contentData[0].bgCover + "')";
  }

  if (indicatorsContainer) {
    indicatorsContainer.innerHTML = '';
    contentData.forEach((_, i) => {
      var dot = document.createElement('div');
      dot.className = 'indicator-dot' + (i === 0 ? ' active' : '');
      indicatorsContainer.appendChild(dot);
    });
  }

  var currentIndex = 0;
  var isAnimating = false;

  // Initialize Text State
  setTimeout(() => {
    titleEl.classList.add('show');
    descEl.classList.add('show');
    actionsEl.classList.add('show');
    controlsEl.classList.add('show');
  }, 100);

  function updateVisuals(newIndex) {
    // Update Text ONLY. Keep Controls/Actions static.
    titleEl.classList.remove('show');
    descEl.classList.remove('show');

    setTimeout(() => {
      titleEl.innerHTML = contentData[newIndex].title;
      descEl.innerText = contentData[newIndex].desc;

      titleEl.classList.add('show');
      descEl.classList.add('show');
    }, 600);

    // Update Indicators
    var dots = indicatorsContainer.querySelectorAll('.indicator-dot');
    dots.forEach((d, i) => {
      if (i === newIndex) d.classList.add('active');
      else d.classList.remove('active');
    });
  }

  // Crossfade background: put new image on back layer, fade out front, then swap
  function setBackground(imgSrc) {
    if (!bgFront || !bgBack) return;
    // 1. Set new image on back layer (hidden behind front)
    bgBack.style.backgroundImage = 'url("' + imgSrc + '")';
    // 2. Fade out front to reveal back
    bgFront.classList.add('fading');
    // 3. After fade completes, update front with new image and reset instantly
    setTimeout(function () {
      // Temporarily disable transition so the swap is invisible
      bgFront.style.transition = 'none';
      bgFront.style.backgroundImage = 'url("' + imgSrc + '")';
      bgFront.classList.remove('fading');
      // Force reflow then re-enable transition
      void bgFront.offsetWidth;
      bgFront.style.transition = '';
    }, 850);
  }

  // --- The Cinematic Switch ---
  function nextSlide() {
    if (isAnimating) return;
    isAnimating = true;

    var oldIndex = currentIndex;
    var nextIndex = (currentIndex + 1) % contentData.length;
    var heroSection = document.getElementById('hero-carousel');

    // The first card in the deck is the one we'll expand into the background
    var nextCard = deckWrapper.children[0];
    if (!nextCard) {
      console.warn('Deck empty or sync error');
      currentIndex = nextIndex;
      updateVisuals(currentIndex);
      setBackground(contentData[currentIndex].bgCover);
      isAnimating = false;
      return;
    }

    currentIndex = nextIndex;

    // Get the ACTUAL image from the card
    var cardImg = nextCard.querySelector('img');
    var imgSrc = cardImg ? cardImg.src : contentData[currentIndex].bgCover;

    var cardRect = nextCard.getBoundingClientRect();
    var containerRect = heroSection.getBoundingClientRect();

    // PRE-APPEND recycled card BEFORE animation starts
    var recycledCard = document.createElement('div');
    recycledCard.className = 'nav-card';
    recycledCard.dataset.index = oldIndex;
    recycledCard.innerHTML = '<img src="' + contentData[oldIndex].cover + '" alt="Card">';
    deckWrapper.appendChild(recycledCard);

    // Hide the flying card in the deck
    nextCard.style.opacity = '0';
    nextCard.style.pointerEvents = 'none';

    // Use high-res image for the fly-in
    var bgSrc = contentData[currentIndex].bgCover;

    // Create fly-in overlay
    var flyIn = document.createElement('div');
    flyIn.classList.add('card-fly-in');
    flyIn.style.left = (cardRect.left - containerRect.left) + 'px';
    flyIn.style.top = (cardRect.top - containerRect.top) + 'px';
    flyIn.style.width = cardRect.width + 'px';
    flyIn.style.height = cardRect.height + 'px';
    flyIn.style.backgroundImage = 'url("' + bgSrc + '")';
    flyIn.style.backgroundSize = 'cover';
    flyIn.style.backgroundPosition = 'center';
    flyIn.style.borderRadius = '16px';

    heroSection.appendChild(flyIn);

    // Trigger expansion
    void flyIn.offsetWidth;
    flyIn.classList.add('expanding');

    // Slide deck left
    var slideDistance = cardRect.width + 24;
    deckWrapper.style.transform = 'translateX(-' + slideDistance + 'px)';

    // Update text/indicators
    updateVisuals(currentIndex);

    // At 900ms: swap background behind fly-in, clean up deck, UNLOCK for next click
    setTimeout(function () {
      if (bgFront && bgBack) {
        bgFront.style.transition = 'none';
        bgFront.style.backgroundImage = 'url("' + bgSrc + '")';
        bgBack.style.backgroundImage = 'url("' + bgSrc + '")';
        void bgFront.offsetWidth;
        bgFront.style.transition = '';
      }

      deckWrapper.style.transition = 'none';
      deckWrapper.style.transform = 'translateX(0)';
      if (nextCard.parentNode) nextCard.parentNode.removeChild(nextCard);
      void deckWrapper.offsetWidth;
      deckWrapper.style.transition = '';

      // Unlock immediately — user can click again
      isAnimating = false;
    }, 900);

    // Fly-in fades out independently (doesn't block next click)
    setTimeout(function () {
      flyIn.classList.add('fade-out');
      setTimeout(function () {
        if (flyIn.parentNode) flyIn.parentNode.removeChild(flyIn);
      }, 650);
    }, 1000);
  }

  // --- Previous Slide ---
  function prevSlide() {
    if (isAnimating) return;
    isAnimating = true;

    var oldIndex = currentIndex;
    currentIndex = (currentIndex - 1 + contentData.length) % contentData.length;

    updateVisuals(currentIndex);
    setBackground(contentData[currentIndex].bgCover);

    var lastCard = deckWrapper.lastElementChild;
    if (lastCard) deckWrapper.removeChild(lastCard);

    var oldCardDiv = document.createElement('div');
    oldCardDiv.className = 'nav-card';
    oldCardDiv.dataset.index = oldIndex;
    oldCardDiv.innerHTML = '<img src="' + contentData[oldIndex].cover + '" alt="Card">';

    var cardWidth = 260;
    if (deckWrapper.children.length > 0) cardWidth = deckWrapper.children[0].getBoundingClientRect().width;
    var slideDist = cardWidth + 24;

    deckWrapper.style.transition = 'none';
    deckWrapper.style.transform = 'translateX(-' + slideDist + 'px)';
    deckWrapper.insertBefore(oldCardDiv, deckWrapper.firstElementChild);
    void deckWrapper.offsetWidth;

    deckWrapper.style.transition = '';
    deckWrapper.style.transform = 'translateX(0)';

    setTimeout(function () { isAnimating = false; }, 500);
  }

  // Bind Events
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);

  // Click on first deck card = Next
  deckWrapper.addEventListener('click', function (e) {
    if (e.target.closest('.nav-card')) {
      var card = e.target.closest('.nav-card');
      if (card === deckWrapper.firstElementChild) {
        nextSlide();
      }
    }
  });

  // Initial Deck Cleanup (Remove Card-0 since it's the active background)
  var initialTarget = Array.from(deckWrapper.children).find(c => parseInt(c.dataset.index) === 0);
  if (initialTarget) deckWrapper.removeChild(initialTarget);
}

// ============================================
// Badge & Mascot Logic (Moved from index.html)
// ============================================

var mascotImages = [
  'img/jxw1.png', 'img/jxw2.png', 'img/jxw3.png', 'img/jxw4.png',
  'img/jxw5.png', 'img/jxw6.png', 'img/jxw7.png', 'img/jxw8.png', 'img/jxw9.png'
];

function scatterMascots() {
  var container = document.getElementById('mascot-container');
  if (!container) return;
  container.innerHTML = ''; // Clear previous

  // Configuration
  var count = 35; // Total mascots
  var zones = ['left', 'right', 'top', 'bottom', 'left', 'right']; // Bias towards sides
  var placedMascots = []; // {left, top}

  for (var i = 0; i < count; i++) {
    var img = document.createElement('img');
    var src = mascotImages[Math.floor(Math.random() * mascotImages.length)];
    img.src = src;
    img.className = 'scattered-mascot';

    // Try to find a non-overlapping position
    var bestTop, bestLeft;
    var maxAttempts = 50;
    var found = false;

    for (var attempt = 0; attempt < maxAttempts; attempt++) {
      // Pick a zone
      var zone = zones[i % zones.length];
      var top, left;

      // Define safe areas (approximate percentages to avoid center ~30-70% w, ~20-80% h)
      if (zone === 'left') {
        left = Math.random() * 25 + 2; // 2-27%
        top = Math.random() * 90 + 5;  // 5-95%
      } else if (zone === 'right') {
        left = Math.random() * 25 + 73; // 73-98%
        top = Math.random() * 90 + 5;   // 5-95%
      } else if (zone === 'top') {
        left = Math.random() * 90 + 5; // 5-95%
        top = Math.random() * 15 + 2;  // 2-17%
      } else if (zone === 'bottom') {
        left = Math.random() * 90 + 5; // 5-95%
        top = Math.random() * 15 + 83; // 83-98%
      }

      // Collision Check
      var overlap = false;
      for (var j = 0; j < placedMascots.length; j++) {
        var p = placedMascots[j];
        var dx = left - p.left;
        var dy = (top - p.top) * 0.56; // Approx aspect ratio correction (16:9)
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 5) { // Min distance ~5% width
          overlap = true;
          break;
        }
      }

      if (!overlap) {
        bestTop = top;
        bestLeft = left;
        found = true;
        break;
      }
    }

    // If couldn't find a spot after retries, use the last generated one (allows some overlap)
    if (!found) {
      // Re-generate one just in case 'top'/'left' aren't set from the loop break
      // Actually they are set in the loop, just rejected. We can use the last attempt.
      // Or pick a random zone without collision check to ensure it's at least in a valid zone
      var zone = zones[Math.floor(Math.random() * zones.length)];
      if (zone === 'left') { bestLeft = Math.random() * 25 + 2; bestTop = Math.random() * 90 + 5; }
      else if (zone === 'right') { bestLeft = Math.random() * 25 + 73; bestTop = Math.random() * 90 + 5; }
      else if (zone === 'top') { bestLeft = Math.random() * 90 + 5; bestTop = Math.random() * 15 + 2; }
      else { bestLeft = Math.random() * 90 + 5; bestTop = Math.random() * 15 + 83; }
    }

    // Store position
    placedMascots.push({ top: bestTop, left: bestLeft });

    img.style.top = bestTop + '%';
    img.style.left = bestLeft + '%';

    // Random scale (0.7 to 1.1)
    var scale = 0.7 + Math.random() * 0.4;

    // Random animation delay
    img.style.animationDelay = (Math.random() * 0.5) + 's';

    // Random rotation start
    var rotate = Math.random() * 30 - 15;

    img.style.transform = 'rotate(' + rotate + 'deg) scale(' + scale + ')';

    container.appendChild(img);

    // Animate entrance
    (function (el) {
      setTimeout(function () {
        el.classList.add('show');
      }, 50 + Math.random() * 250);
    })(img);
  }
}

function clearMascots() {
  var container = document.getElementById('mascot-container');
  if (container) container.innerHTML = '';
}

function openBadgeModal() {
  var o = document.getElementById('badge-overlay');
  if (!o) return;
  o.classList.remove('closing');
  o.classList.add('active');
  // Compensate for scrollbar width to prevent layout shift
  var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.paddingRight = scrollbarWidth + 'px';
  document.documentElement.classList.add('modal-open');
  scatterMascots();
}

function closeBadgeModal(e) {
  var o = document.getElementById('badge-overlay');
  if (!o) return;
  o.classList.add('closing');
  setTimeout(function () {
    o.classList.remove('active', 'closing');
    document.documentElement.classList.remove('modal-open');
    document.body.style.paddingRight = '';
    clearMascots();
  }, 450);
}

function submitBadgeEmail() {
  var input = document.getElementById('badge-email');
  var btn = document.getElementById('badge-submit');
  var v = input.value.trim();
  if (!v) { input.focus(); input.style.borderColor = '#e74c3c'; setTimeout(function () { input.style.borderColor = '#e8e8e8'; }, 1500); return; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) { showToast('请输入正确的邮箱格式'); input.style.borderColor = '#e74c3c'; setTimeout(function () { input.style.borderColor = '#e8e8e8'; }, 1500); return; }
  btn.textContent = '已提交';
  btn.classList.add('success');
  btn.disabled = true;
  // TODO: Send to backend
  setTimeout(function () {
    closeBadgeModal();
    showToast('申请已提交，请留意邮件！');
    setTimeout(function () {
      btn.textContent = '立即申请加入';
      btn.classList.remove('success');
      btn.disabled = false;
      input.value = '';
    }, 500);
  }, 800);
}
