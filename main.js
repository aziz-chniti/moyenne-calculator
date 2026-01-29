const coursesData = [
  {
    code: '57319140',
    name: 'Logique et multimédia',
    nature: 'Fond',
    nat: 6,
    cr: 3,
    regime: 'MX',
    elements: [
      {
        code: '57319142',
        name: 'technologies multimédias',
        coef: 1.5,
        cr: 3,
        tp: 21,
        td: 0,
        cours: 21,
        regime: 'MX',
      },
      {
        code: '57319141',
        name: 'logique formelle',
        coef: 1.5,
        cr: 3,
        tp: 0,
        td: 10.5,
        cours: 21,
        regime: 'MX',
      },
    ],
  },
  {
    code: '57319110',
    name: 'Mathématiques 1',
    nature: 'Fond',
    nat: 6,
    cr: 3,
    regime: 'MX',
    elements: [
      {
        code: '57319112',
        name: 'analyse 1',
        coef: 1.5,
        cr: 3,
        tp: 0,
        td: 21,
        cours: 21,
        regime: 'MX',
      },
      {
        code: '57319111',
        name: 'algèbre1',
        coef: 1.5,
        cr: 3,
        tp: 0,
        td: 21,
        cours: 21,
        regime: 'MX',
      },
    ],
  },
  {
    code: '57319150',
    name: 'Unité transversale',
    nature: 'Trans',
    nat: 4,
    cr: 2,
    regime: 'CC',
    elements: [
      {
        code: '57319152',
        name: 'techniques de communication 1',
        coef: 1,
        cr: 2,
        tp: 0,
        td: 21,
        cours: 0,
        regime: 'CC',
      },
      {
        code: '57319151',
        name: 'anglais 1',
        coef: 1,
        cr: 2,
        tp: 0,
        td: 21,
        cours: 0,
        regime: 'CC',
      },
    ],
  },
  {
    code: '57319120',
    name: 'Algorithmique et programmation 1',
    nature: 'Fond',
    nat: 7,
    cr: 3.5,
    regime: 'MX',
    elements: [
      {
        code: '57319121',
        name: 'algorithmique et structure de données',
        coef: 2,
        cr: 4,
        tp: 0,
        td: 21,
        cours: 21,
        regime: 'MX',
      },
      {
        code: '57319122',
        name: 'atelier programmation 1',
        coef: 1.5,
        cr: 3,
        tp: 31.5,
        td: 0,
        cours: 10.5,
        regime: 'MX',
      },
    ],
  },
  {
    code: '57319130',
    name: "Systèmes d'exploitation et architecture",
    nature: 'Fond',
    nat: 7,
    cr: 3.5,
    regime: 'MX',
    elements: [
      {
        code: '57319131',
        name: "système d'exploitation 1",
        coef: 1.5,
        cr: 3,
        tp: 21,
        td: 0,
        cours: 21,
        regime: 'MX',
      },
      {
        code: '57319132',
        name: 'systèmes logiques et architecture des ordinateurs',
        coef: 2,
        cr: 4,
        tp: 10.5,
        td: 10.5,
        cours: 31.5,
        regime: 'MX',
      },
    ],
  },
];

function initializeCourses() {
  const container = document.getElementById('courses-container');

  coursesData.forEach((course, courseIndex) => {
    const courseSection = document.createElement('div');
    courseSection.className = 'course-section';

    let elementsHTML = '';
    course.elements.forEach((element, elementIndex) => {
      elementsHTML += `
                        <div class="element-row">
                            <div class="element-name">${element.name}</div>
                            <div class="input-group">
                                <div class="label">Coef</div>
                                <input type="number" value="${element.coef}" disabled>
                            </div>
                            <div class="input-group">
                                <div class="label">Crédit</div>
                                <input type="number" value="${element.cr}" disabled>
                            </div>
                            <div class="input-group">
                                <div class="label">Régime</div>
                                <input type="text" value="${element.regime}" disabled>
                            </div>
                            <div class="input-group">
                                <div class="label">Note</div>
                                <input type="number" 
                                       id="note-${courseIndex}-${elementIndex}" 
                                       min="0" 
                                       max="20" 
                                       step="0.01" 
                                       placeholder="0-20">
                            </div>
                            <div class="input-group">
                                <div class="label">Moyenne</div>
                                <div class="result-display" id="result-${courseIndex}-${elementIndex}">-</div>
                            </div>
                        </div>
                    `;
    });

    courseSection.innerHTML = `
                    <div class="course-header">
                        <div class="course-title">${course.name}</div>
                        <div class="course-info">
                            <span>Nature</span>
                            ${course.nature}
                        </div>
                        <div class="course-info">
                            <span>Nat</span>
                            ${course.nat}
                        </div>
                        <div class="course-info">
                            <span>Crédit</span>
                            ${course.cr}
                        </div>
                        <div class="course-info">
                            <span>Régime</span>
                            ${course.regime}
                        </div>
                    </div>
                    <div class="elements-container">
                        ${elementsHTML}
                    </div>
                `;

    container.appendChild(courseSection);
  });
}

function calculateMoyenne() {
  let totalWeightedSum = 0;
  let totalCoefficients = 0;
  let courseResults = [];

  coursesData.forEach((course, courseIndex) => {
    let courseWeightedSum = 0;
    let courseCoefficients = 0;

    course.elements.forEach((element, elementIndex) => {
      const noteInput = document.getElementById(
        `note-${courseIndex}-${elementIndex}`,
      );
      const note = parseFloat(noteInput.value) || 0;

      const weightedNote = note * element.coef;
      courseWeightedSum += weightedNote;
      courseCoefficients += element.coef;

      // Display element average
      const resultDiv = document.getElementById(
        `result-${courseIndex}-${elementIndex}`,
      );
      resultDiv.textContent = note.toFixed(2);
    });

    const courseAverage =
      courseCoefficients > 0 ? courseWeightedSum / courseCoefficients : 0;
    courseResults.push({
      name: course.name,
      average: courseAverage,
      credit: course.cr,
    });

    totalWeightedSum += courseAverage * course.nat;
    totalCoefficients += course.nat;
  });

  const finalAverage =
    totalCoefficients > 0 ? totalWeightedSum / totalCoefficients : 0;

  displayResults(courseResults, finalAverage);
}

function displayResults(courseResults, finalAverage) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.style.display = 'grid';

  let resultsHTML = '';

  courseResults.forEach((course) => {
    resultsHTML += `
                    <div class="result-card">
                        <h3>${course.name}</h3>
                        <div class="value">${course.average.toFixed(2)}</div>
                    </div>
                `;
  });

  resultsHTML += `
                <div class="result-card final-result">
                    <h3>🎯 Moyenne Générale du Semestre</h3>
                    <div class="value">${finalAverage.toFixed(2)}/20</div>
                </div>
            `;

  resultsDiv.innerHTML = resultsHTML;

  // Smooth scroll to results
  resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Initialize on page load
window.onload = initializeCourses;
