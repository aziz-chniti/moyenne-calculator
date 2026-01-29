# 📚 Calculateur de Moyenne - Semestre 1

A sophisticated, responsive web application for calculating weighted semester averages for Computer Science students. This calculator computes individual course grades and overall semester performance based on course coefficients and credits.

## ✨ Features

- **Weighted Grade Calculation**: Automatically calculates weighted averages based on element coefficients
- **Multiple Course Support**: Handles 5 core courses with multiple sub-elements each
- **Real-time Input Validation**: Supports numeric grades between 0-20 with two decimal precision
- **Responsive Design**: Fully responsive interface that works seamlessly on desktop, tablet, and mobile devices
- **Visual Feedback**: Interactive UI with smooth transitions and intuitive visual hierarchy
- **Instant Results**: Displays individual course averages and overall semester GPA with a single click
- **Professional Styling**: Modern gradient-based design with accessibility in mind

## 📖 Courses Included

1. **Logique et multimédia** (Foundational - 6 credit hours)
   - Technologies multimédias
   - Logique formelle

2. **Mathématiques 1** (Foundational - 6 credit hours)
   - Analyse 1
   - Algèbre 1

3. **Unité transversale** (Transversal - 4 credit hours)
   - Techniques de communication 1
   - Anglais 1

4. **Algorithmique et programmation 1** (Foundational - 7 credit hours)
   - Algorithmique et structure de données
   - Atelier programmation 1

5. **Systèmes d'exploitation et architecture** (Foundational - 7 credit hours)
   - Système d'exploitation 1
   - Systèmes logiques et architecture des ordinateurs

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies or installations required

### Installation

1. **Clone or download** this repository to your local machine
2. **Navigate** to the project directory
3. **Open** `moyenne-calculator.html` in your web browser

```bash
# Simple setup - no build tools needed!
open moyenne-calculator.html
```

## 💻 How to Use

1. **Open the Application**: Load `moyenne-calculator.html` in your browser
2. **Enter Grades**: Input your grade (0-20) for each course element in the "Note" column
3. **View Averages**: Grades are automatically displayed in the "Moyenne" column
4. **Calculate Overall**: Click the **"🧮 Calculer la Moyenne"** button to compute all course averages and semester GPA
5. **Review Results**: Your results will display in colorful cards showing:
   - Individual course averages
   - Overall semester average (GPA)

### Calculation Method

- **Element Average**: Calculated as (Grade × Coefficient) / Total Coefficients for each course
- **Course Average**: Weighted sum of element grades based on their coefficients
- **Semester Average**: Weighted average of all courses based on course credits (nat values)

## 📁 Project Structure

```
moyenne-calculator/
├── moyenne-calculator.html    # Main HTML file - application interface
├── main.js                    # JavaScript logic for calculation and DOM manipulation
├── style.css                  # CSS styling and responsive design
└── README.md                  # This file
```

### File Descriptions

- **moyenne-calculator.html**: Contains the HTML structure, course data containers, and result display sections
- **main.js**: Handles course data initialization, grade input, calculation logic, and dynamic result rendering
- **style.css**: Implements responsive grid layouts, gradients, animations, and mobile-friendly styling

## 🎨 Design Features

- **Modern UI**: Gradient backgrounds and smooth transitions
- **Accessibility**: Proper color contrast and keyboard navigation support
- **Responsive Grid**: Adapts from desktop multi-column layout to mobile single-column view
- **Interactive Elements**: Hover effects and focus states for better user experience
- **Disabled Fields**: Course data fields are protected from accidental editing

## 🔧 Technical Stack

| Technology                    | Purpose                                         |
| ----------------------------- | ----------------------------------------------- |
| **HTML5**                     | Semantic markup and structure                   |
| **CSS3**                      | Styling, gradients, grid layouts, media queries |
| **Vanilla JavaScript (ES6+)** | DOM manipulation, calculations, event handling  |

## 📱 Browser Compatibility

- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 💡 Usage Examples

### Scenario: Calculating Semester Average

1. Student enters their 10 grades (one for each course element)
2. Application displays individual element grades
3. Student clicks "Calculer la Moyenne"
4. Results show:
   - Average for each of the 5 courses
   - Overall semester average
   - Color-coded result cards for easy interpretation

## 🛠️ Customization

### Adding or Modifying Courses

Edit the `coursesData` array in [main.js](main.js) to add new courses or modify existing ones:

```javascript
{
  code: 'COURSE_CODE',
  name: 'Course Name',
  nature: 'Fond/Trans',
  nat: 6,           // Credit weight
  cr: 3,            // Credits
  regime: 'MX',     // Assessment regime
  elements: [
    {
      code: 'ELEMENT_CODE',
      name: 'Element Name',
      coef: 1.5,    // Coefficient
      cr: 3,        // Credits
      regime: 'MX'
    }
  ]
}
```

## 📊 Calculation Details

The calculator uses a weighted averaging system:

```
Element Grade = Input Grade
Course Average = Σ(Element Grade × Element Coefficient) / Σ(Element Coefficients)
Semester Average = Σ(Course Average × Course Credits) / Σ(Course Credits)
```

## 🎓 Educational Context

This calculator is designed for Computer Science students in their first semester, helping them:

- Track academic progress across core technical and transversal courses
- Understand the weighting system used in academic assessment
- Monitor overall semester performance in real-time

## 📝 License

This project is open source and available for educational and personal use.

## 👤 Author

Created as an academic tool for semester grade calculation.

## 🤝 Contributing

Suggestions for improvements are welcome! Feel free to:

- Report bugs or issues
- Suggest UI/UX enhancements
- Propose additional features

## 📞 Support

For issues or questions about the calculator:

1. Verify all grades are between 0-20
2. Ensure JavaScript is enabled in your browser
3. Try refreshing the page if calculations seem incorrect
4. Check browser console (F12) for any error messages

---

**Last Updated**: January 2026

Made with ❤️ for Computer Science students
