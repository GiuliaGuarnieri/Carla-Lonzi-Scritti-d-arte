document.addEventListener('DOMContentLoaded', function() {
  // SLIDER
  const slider = document.querySelector('.slider');
  const slides = slider ? slider.querySelectorAll('img') : [];
  let currentIndex = 0;
  if (slider && slides.length > 0) {
    setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      slider.scrollTo({
        left: slides[currentIndex].offsetLeft,
        behavior: 'smooth'
      });
    }, 3000);
  }


  const items = document.querySelectorAll('.items-wrapper .items');
 
  function getSelectedValues(selector) {
    return Array.from(document.querySelectorAll(selector))
      .filter(cb => cb.checked)
      .map(cb => cb.value);
  }


  const anniSet = new Set();
  items.forEach(item => {
    if (item.dataset.anno) {
      anniSet.add(item.dataset.anno);
    }
  });
  const anni = Array.from(anniSet).sort();
  const annoList = document.getElementById('anno-checkbox-list');
  if (annoList) {
    anni.forEach(anno => {
      const li = document.createElement('li');
      li.innerHTML = `
        <label class="dropdown-item">
          <input type="checkbox" class="anno-checkbox" value="${anno}"> ${anno}
        </label>
      `;
      annoList.appendChild(li);
    });

   
    annoList.addEventListener('click', function(e) {
      if (
        e.target.classList.contains('anno-checkbox') ||
        e.target.tagName === 'LABEL'
      ) {
        e.stopPropagation();
      }
    });
  }

  function applyFilters() {
    const selectedRiviste = getSelectedValues('.rivista-checkbox');
    const selectedCategorie = getSelectedValues('.categoria-checkbox');
    const selectedAnni = getSelectedValues('.anno-checkbox');

    items.forEach(item => {
      const rivista = (item.dataset.rivista || '').trim();
      const categoria = (item.dataset.categoria || '').trim();
      const anno = (item.dataset.anno || '').trim();

      const matchRivista = selectedRiviste.length === 0 || selectedRiviste.includes(rivista);
      const matchCategoria = selectedCategorie.length === 0 || selectedCategorie.includes(categoria);
      const matchAnno = selectedAnni.length === 0 || selectedAnni.includes(anno);

      if (matchRivista && matchCategoria && matchAnno) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

 
  document.querySelectorAll('.rivista-checkbox, .categoria-checkbox').forEach(cb => {
    cb.addEventListener('change', applyFilters);
  });

  const annoCheckboxes = document.querySelectorAll('.anno-checkbox');
  annoCheckboxes.forEach(cb => cb.addEventListener('change', applyFilters));


  const showAll = document.getElementById('show-all');
  if (showAll) {
    showAll.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelectorAll('.rivista-checkbox, .categoria-checkbox, .anno-checkbox').forEach(cb => cb.checked = false);
      applyFilters();
    });
  }
});


document.addEventListener('DOMContentLoaded', function() {
 

  
  document.querySelectorAll('.item_img img').forEach(img => {
    img.addEventListener('click', function() {
      const modalImg = document.getElementById('modalImg');
      modalImg.src = this.src;
      const imgModal = new bootstrap.Modal(document.getElementById('imgModal'));
      imgModal.show();
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slider2');
  const slides = slider ? slider.querySelectorAll('img') : [];
  let currentIndex = 0;


  document.querySelectorAll('.slider-nav2 a').forEach((dot, idx) => {
    dot.addEventListener('click', function(e) {
      e.preventDefault(); 
      currentIndex = idx;
      slider.scrollTo({
        left: slides[currentIndex].offsetLeft,
        behavior: 'smooth'
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider2');
  const nav = document.querySelector('.slider-nav2');
  if (!slider || !nav) return;
  nav.innerHTML = '';
  slider.querySelectorAll('img[id]').forEach(img => {
    const a = document.createElement('a');
    a.href = `#${img.id}`;
    nav.appendChild(a);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // ...altri codici slider, modali, filtri...

  // SLIDER2: genera i pallini in base alle immagini e aggiungi i listener
  const slider = document.querySelector('.slider2');
  const slides = slider ? slider.querySelectorAll('img') : [];
  const nav = document.querySelector('.slider-nav2');
  let currentIndex = 0;

  if (slider && nav && slides.length > 0) {
    // Genera i pallini
    nav.innerHTML = '';
    slides.forEach((img, idx) => {
      const a = document.createElement('a');
      a.href = "#";
      nav.appendChild(a);
    });

    // Aggiungi i listener ai nuovi pallini
    nav.querySelectorAll('a').forEach((dot, idx) => {
      dot.addEventListener('click', function(e) {
        e.preventDefault();
        currentIndex = idx;
        slider.scrollTo({
          left: slides[currentIndex].offsetLeft,
          behavior: 'smooth'
        });
      });
    });
  }
});