// A subset of element data for demonstration.
const elements = [
    // Period 1
    { z: 1, s: 'H', n: 'Hydrogen', w: '1.008', g: 1, p: 1, c: 'nonmetal' },
    { z: 2, s: 'He', n: 'Helium', w: '4.0026', g: 18, p: 1, c: 'noble' },
    // Period 2
    { z: 3, s: 'Li', n: 'Lithium', w: '6.94', g: 1, p: 2, c: 'alkali' },
    { z: 4, s: 'Be', n: 'Beryllium', w: '9.0122', g: 2, p: 2, c: 'alkaline-earth' },
    { z: 5, s: 'B', n: 'Boron', w: '10.81', g: 13, p: 2, c: 'metalloid' },
    { z: 6, s: 'C', n: 'Carbon', w: '12.011', g: 14, p: 2, c: 'nonmetal' },
    { z: 7, s: 'N', n: 'Nitrogen', w: '14.007', g: 15, p: 2, c: 'nonmetal' },
    { z: 8, s: 'O', n: 'Oxygen', w: '15.999', g: 16, p: 2, c: 'nonmetal' },
    { z: 9, s: 'F', n: 'Fluorine', w: '18.998', g: 17, p: 2, c: 'nonmetal' },
    { z: 10, s: 'Ne', n: 'Neon', w: '20.180', g: 18, p: 2, c: 'noble' },
    // Period 3
    { z: 11, s: 'Na', n: 'Sodium', w: '22.990', g: 1, p: 3, c: 'alkali' },
    { z: 12, s: 'Mg', n: 'Magnesium', w: '24.305', g: 2, p: 3, c: 'alkaline-earth' },
    { z: 13, s: 'Al', n: 'Aluminium', w: '26.982', g: 13, p: 3, c: 'post-transition' },
    { z: 14, s: 'Si', n: 'Silicon', w: '28.085', g: 14, p: 3, c: 'metalloid' },
    { z: 15, s: 'P', n: 'Phosphorus', w: '30.974', g: 15, p: 3, c: 'nonmetal' },
    { z: 16, s: 'S', n: 'Sulfur', w: '32.06', g: 16, p: 3, c: 'nonmetal' },
    { z: 17, s: 'Cl', n: 'Chlorine', w: '35.45', g: 17, p: 3, c: 'nonmetal' },
    { z: 18, s: 'Ar', n: 'Argon', w: '39.95', g: 18, p: 3, c: 'noble' },
    // Period 4
    { z: 19, s: 'K', n: 'Potassium', w: '39.098', g: 1, p: 4, c: 'alkali' },
    { z: 20, s: 'Ca', n: 'Calcium', w: '40.078', g: 2, p: 4, c: 'alkaline-earth' },
    { z: 21, s: 'Sc', n: 'Scandium', w: '44.956', g: 3, p: 4, c: 'transition' },
    { z: 22, s: 'Ti', n: 'Titanium', w: '47.867', g: 4, p: 4, c: 'transition' },
    { z: 23, s: 'V', n: 'Vanadium', w: '50.942', g: 5, p: 4, c: 'transition' },
    { z: 24, s: 'Cr', n: 'Chromium', w: '51.996', g: 6, p: 4, c: 'transition' },
    { z: 25, s: 'Mn', n: 'Manganese', w: '54.938', g: 7, p: 4, c: 'transition' },
    { z: 26, s: 'Fe', n: 'Iron', w: '55.845', g: 8, p: 4, c: 'transition' },
    { z: 27, s: 'Co', n: 'Cobalt', w: '58.933', g: 9, p: 4, c: 'transition' },
    { z: 28, s: 'Ni', n: 'Nickel', w: '58.693', g: 10, p: 4, c: 'transition' },
    { z: 29, s: 'Cu', n: 'Copper', w: '63.546', g: 11, p: 4, c: 'transition' },
    { z: 30, s: 'Zn', n: 'Zinc', w: '65.38', g: 12, p: 4, c: 'post-transition' },
    { z: 31, s: 'Ga', n: 'Gallium', w: '69.723', g: 13, p: 4, c: 'post-transition' },
    { z: 32, s: 'Ge', n: 'Germanium', w: '72.630', g: 14, p: 4, c: 'metalloid' },
    { z: 33, s: 'As', n: 'Arsenic', w: '74.922', g: 15, p: 4, c: 'metalloid' },
    { z: 34, s: 'Se', n: 'Selenium', w: '78.971', g: 16, p: 4, c: 'nonmetal' },
    { z: 35, s: 'Br', n: 'Bromine', w: '79.904', g: 17, p: 4, c: 'nonmetal' },
    { z: 36, s: 'Kr', n: 'Krypton', w: '83.798', g: 18, p: 4, c: 'noble' },
    // Period 5
    { z: 37, s: 'Rb', n: 'Rubidium', w: '85.468', g: 1, p: 5, c: 'alkali' },
    { z: 38, s: 'Sr', n: 'Strontium', w: '87.62', g: 2, p: 5, c: 'alkaline-earth' },
    { z: 39, s: 'Y', n: 'Yttrium', w: '88.906', g: 3, p: 5, c: 'transition' },
    { z: 40, s: 'Zr', n: 'Zirconium', w: '91.224', g: 4, p: 5, c: 'transition' },
    { z: 41, s: 'Nb', n: 'Niobium', w: '92.906', g: 5, p: 5, c: 'transition' },
    { z: 42, s: 'Mo', n: 'Molybdenum', w: '95.95', g: 6, p: 5, c: 'transition' },
    { z: 43, s: 'Tc', n: 'Technetium', w: '[98]', g: 7, p: 5, c: 'transition' },
    { z: 44, s: 'Ru', n: 'Ruthenium', w: '101.07', g: 8, p: 5, c: 'transition' },
    { z: 45, s: 'Rh', n: 'Rhodium', w: '102.91', g: 9, p: 5, c: 'transition' },
    { z: 46, s: 'Pd', n: 'Palladium', w: '106.42', g: 10, p: 5, c: 'transition' },
    { z: 47, s: 'Ag', n: 'Silver', w: '107.87', g: 11, p: 5, c: 'transition' },
    { z: 48, s: 'Cd', n: 'Cadmium', w: '112.41', g: 12, p: 5, c: 'post-transition' },
    { z: 49, s: 'In', n: 'Indium', w: '114.82', g: 13, p: 5, c: 'post-transition' },
    { z: 50, s: 'Sn', n: 'Tin', w: '118.71', g: 14, p: 5, c: 'post-transition' },
    { z: 51, s: 'Sb', n: 'Antimony', w: '121.76', g: 15, p: 5, c: 'metalloid' },
    { z: 52, s: 'Te', n: 'Tellurium', w: '127.60', g: 16, p: 5, c: 'metalloid' },
    { z: 53, s: 'I', n: 'Iodine', w: '126.90', g: 17, p: 5, c: 'nonmetal' },
    { z: 54, s: 'Xe', n: 'Xenon', w: '131.29', g: 18, p: 5, c: 'noble' },
    // Period 6
    { z: 55, s: 'Cs', n: 'Caesium', w: '132.91', g: 1, p: 6, c: 'alkali' },
    { z: 56, s: 'Ba', n: 'Barium', w: '137.33', g: 2, p: 6, c: 'alkaline-earth' },
    // Lanthanides
    { z: 57, s: 'La', n: 'Lanthanum', w: '138.91', g: 3, p: 10, c: 'lanthanide' },
    { z: 58, s: 'Ce', n: 'Cerium', w: '140.12', g: 4, p: 10, c: 'lanthanide' },
    { z: 59, s: 'Pr', n: 'Praseodymium', w: '140.91', g: 5, p: 10, c: 'lanthanide' },
    { z: 60, s: 'Nd', n: 'Neodymium', w: '144.24', g: 6, p: 10, c: 'lanthanide' },
    { z: 61, s: 'Pm', n: 'Promethium', w: '[145]', g: 7, p: 10, c: 'lanthanide' },
    { z: 62, s: 'Sm', n: 'Samarium', w: '150.36', g: 8, p: 10, c: 'lanthanide' },
    { z: 63, s: 'Eu', n: 'Europium', w: '151.96', g: 9, p: 10, c: 'lanthanide' },
    { z: 64, s: 'Gd', n: 'Gadolinium', w: '157.25', g: 10, p: 10, c: 'lanthanide' },
    { z: 65, s: 'Tb', n: 'Terbium', w: '158.93', g: 11, p: 10, c: 'lanthanide' },
    { z: 66, s: 'Dy', n: 'Dysprosium', w: '162.50', g: 12, p: 10, c: 'lanthanide' },
    { z: 67, s: 'Ho', n: 'Holmium', w: '164.93', g: 13, p: 10, c: 'lanthanide' },
    { z: 68, s: 'Er', n: 'Erbium', w: '167.26', g: 14, p: 10, c: 'lanthanide' },
    { z: 69, s: 'Tm', n: 'Thulium', w: '168.93', g: 15, p: 10, c: 'lanthanide' },
    { z: 70, s: 'Yb', n: 'Ytterbium', w: '173.05', g: 16, p: 10, c: 'lanthanide' },
    { z: 71, s: 'Lu', n: 'Lutetium', w: '174.97', g: 17, p: 10, c: 'lanthanide' },
    // Rest of Period 6
    { z: 72, s: 'Hf', n: 'Hafnium', w: '178.49', g: 4, p: 6, c: 'transition' },
    { z: 73, s: 'Ta', n: 'Tantalum', w: '180.95', g: 5, p: 6, c: 'transition' },
    { z: 74, s: 'W', n: 'Tungsten', w: '183.84', g: 6, p: 6, c: 'transition' },
    { z: 75, s: 'Re', n: 'Rhenium', w: '186.21', g: 7, p: 6, c: 'transition' },
    { z: 76, s: 'Os', n: 'Osmium', w: '190.23', g: 8, p: 6, c: 'transition' },
    { z: 77, s: 'Ir', n: 'Iridium', w: '192.22', g: 9, p: 6, c: 'transition' },
    { z: 78, s: 'Pt', n: 'Platinum', w: '195.08', g: 10, p: 6, c: 'transition' },
    { z: 79, s: 'Au', n: 'Gold', w: '196.97', g: 11, p: 6, c: 'transition' },
    { z: 80, s: 'Hg', n: 'Mercury', w: '200.59', g: 12, p: 6, c: 'post-transition' },
    { z: 81, s: 'Tl', n: 'Thallium', w: '204.38', g: 13, p: 6, c: 'post-transition' },
    { z: 82, s: 'Pb', n: 'Lead', w: '207.2', g: 14, p: 6, c: 'post-transition' },
    { z: 83, s: 'Bi', n: 'Bismuth', w: '208.98', g: 15, p: 6, c: 'post-transition' },
    { z: 84, s: 'Po', n: 'Polonium', w: '[209]', g: 16, p: 6, c: 'post-transition' },
    { z: 85, s: 'At', n: 'Astatine', w: '[210]', g: 17, p: 6, c: 'metalloid' },
    { z: 86, s: 'Rn', n: 'Radon', w: '[222]', g: 18, p: 6, c: 'noble' },
    // Period 7
    { z: 87, s: 'Fr', n: 'Francium', w: '[223]', g: 1, p: 7, c: 'alkali' },
    { z: 88, s: 'Ra', n: 'Radium', w: '[226]', g: 2, p: 7, c: 'alkaline-earth' },
    // Actinides
    { z: 89, s: 'Ac', n: 'Actinium', w: '[227]', g: 3, p: 11, c: 'actinide' },
    { z: 90, s: 'Th', n: 'Thorium', w: '232.04', g: 4, p: 11, c: 'actinide' },
    { z: 91, s: 'Pa', n: 'Protactinium', w: '231.04', g: 5, p: 11, c: 'actinide' },
    { z: 92, s: 'U', n: 'Uranium', w: '238.03', g: 6, p: 11, c: 'actinide' },
    { z: 93, s: 'Np', n: 'Neptunium', w: '[237]', g: 7, p: 11, c: 'actinide' },
    { z: 94, s: 'Pu', n: 'Plutonium', w: '[244]', g: 8, p: 11, c: 'actinide' },
    { z: 95, s: 'Am', n: 'Americium', w: '[243]', g: 9, p: 11, c: 'actinide' },
    { z: 96, s: 'Cm', n: 'Curium', w: '[247]', g: 10, p: 11, c: 'actinide' },
    { z: 97, s: 'Bk', n: 'Berkelium', w: '[247]', g: 11, p: 11, c: 'actinide' },
    { z: 98, s: 'Cf', n: 'Californium', w: '[251]', g: 12, p: 11, c: 'actinide' },
    { z: 99, s: 'Es', n: 'Einsteinium', w: '[252]', g: 13, p: 11, c: 'actinide' },
    { z: 100, s: 'Fm', n: 'Fermium', w: '[257]', g: 14, p: 11, c: 'actinide' },
    { z: 101, s: 'Md', n: 'Mendelevium', w: '[258]', g: 15, p: 11, c: 'actinide' },
    { z: 102, s: 'No', n: 'Nobelium', w: '[259]', g: 16, p: 11, c: 'actinide' },
    { z: 103, s: 'Lr', n: 'Lawrencium', w: '[262]', g: 17, p: 11, c: 'actinide' },
    // Rest of Period 7
    { z: 104, s: 'Rf', n: 'Rutherfordium', w: '[267]', g: 4, p: 7, c: 'transition' },
    { z: 105, s: 'Db', n: 'Dubnium', w: '[268]', g: 5, p: 7, c: 'transition' },
    { z: 106, s: 'Sg', n: 'Seaborgium', w: '[271]', g: 6, p: 7, c: 'transition' },
    { z: 107, s: 'Bh', n: 'Bohrium', w: '[272]', g: 7, p: 7, c: 'transition' },
    { z: 108, s: 'Hs', n: 'Hassium', w: '[270]', g: 8, p: 7, c: 'transition' },
    { z: 109, s: 'Mt', n: 'Meitnerium', w: '[276]', g: 9, p: 7, c: 'transition' },
    { z: 110, s: 'Ds', n: 'Darmstadtium', w: '[281]', g: 10, p: 7, c: 'transition' },
    { z: 111, s: 'Rg', n: 'Roentgenium', w: '[280]', g: 11, p: 7, c: 'transition' },
    { z: 112, s: 'Cn', n: 'Copernicium', w: '[285]', g: 12, p: 7, c: 'transition' },
    { z: 113, s: 'Nh', n: 'Nihonium', w: '[284]', g: 13, p: 7, c: 'post-transition' },
    { z: 114, s: 'Fl', n: 'Flerovium', w: '[289]', g: 14, p: 7, c: 'post-transition' },
    { z: 115, s: 'Mc', n: 'Moscovium', w: '[288]', g: 15, p: 7, c: 'post-transition' },
    { z: 116, s: 'Lv', n: 'Livermorium', w: '[293]', g: 16, p: 7, c: 'post-transition' },
    { z: 117, s: 'Ts', n: 'Tennessine', w: '[294]', g: 17, p: 7, c: 'metalloid' },
    { z: 118, s: 'Og', n: 'Oganesson', w: '[294]', g: 18, p: 7, c: 'noble' }
];

// Target new ID: periodic-table-grid
const container = document.getElementById('periodic-table-grid');

// Modal Elements
const modal = new bootstrap.Modal(document.getElementById('elementDetailsModal'));
const modalTitle = document.getElementById('detailsModalLabel');
const modalCardDisplay = document.getElementById('details-modal-visual');
const modalName = document.getElementById('details-name');
const modalNum = document.getElementById('details-number');
const modalWeight = document.getElementById('details-weight');
const modalCat = document.getElementById('details-category');
const wikiLink = document.getElementById('wiki-link');

elements.forEach(el => {
    const div = document.createElement('div');
    // Renamed class: periodic-element
    div.classList.add('periodic-element', el.c);
    
    div.style.gridColumn = el.g;
    div.style.gridRow = el.p;

    // Updated template with new class names
    div.innerHTML = `
        <span class="atomic-number">${el.z}</span>
        <span class="element-symbol">${el.s}</span>
        <span class="element-name">${el.n}</span>
        <span class="atomic-weight">${el.w}</span>
    `;
    
    div.onclick = () => {
        modalTitle.textContent = `${el.n} (${el.s})`;
        modalName.textContent = el.n;
        modalNum.textContent = el.z;
        modalWeight.textContent = el.w;
        modalCat.textContent = el.c.replace('-', ' ');
        wikiLink.href = `https://en.wikipedia.org/wiki/${el.n}`;

        modalCardDisplay.innerHTML = `
            <span class="atomic-number">${el.z}</span>
            <span class="element-symbol">${el.s}</span>
            <span class="element-name">${el.n}</span>
            <span class="atomic-weight">${el.w}</span>
        `;
        
        modalCardDisplay.className = 'periodic-element pt-sample-element mx-auto mb-4';
        modalCardDisplay.classList.add(el.c);

        modal.show();
    };

    container.appendChild(div);
});