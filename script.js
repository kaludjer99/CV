document.getElementById('year').textContent = new Date().getFullYear();

// Language Selection

const I18N = {
    sr: {
        header: {
            subtitle: "Student Elektrotehničkog fakulteta",
            location: "Beograd, Srbija"
        },

        about: {
            title: "O meni",
            text: "Ja sam student četvrte godine na Elektrotehničkom fakultetu, sa fokusom na softverski i hardverski razvoj. Tokom svog akademskog puta, aktivno sam učestvovao u brojnim studentskim projektima iz različitih tehnoloških domena. Vremenom, otkrio sam da me najviše zanima web razvoj, gde uživam u kombinovanju kreativnosti i tehničkog rešavanja problema. Pored toga, aktivno sam uključen u studentske organizacije i planiranje događaja, pokazujući snažnu posvećenost liderstvu, saradnji i timskom radu."
        },

        skills: {
            title: "Veštine"
        },

        soft: {
            title: "Meke veštine",
            list: [
                { skill: "Rešavanje problema" },
                { skill: "Timska komunikacija" },
                { skill: "Vođenje tima" },
                { skill: "Fleksibilnost" }
            ]
        },

        langs: {
            title: "Jezici",
            list: [
                { lang: "Srpski — maternji" },
                { lang: "Engleski — napredni" }
            ]
        },

        experience: {
            title: "Iskustvo",
            list: [
                {
                    role: "Frontend praksa — EPAM Systems",
                    duration: "Jun 2025 — Avg 2025",
                    description: "Tokom prakse u EPAM-u, osvežio sam i unapredio svoje znanje HTML-a, CSS-a i JavaScript-a koristeći njihove interne platforme za učenje. Nakon završetka obuke za React, učestvovao sam u timskom projektu gde smo sarađivali sa backend praktikantima na razvoju web aplikacije za knjižaru. Primenili smo Atomic Design metodologiju za strukturiranje ponovo upotrebljivih komponenti i radili u Agile okruženju sa posvećenim mentorima i Scrum Master-om. Tokom prakse, takođe sam stekao praktično iskustvo sa Git-om i upravljanjem zadacima koristeći EPAM Jira."
                }

            ]
        },

        projects: {
            title: "Projekti",
            list: [
                {
                    name: "Kernel - Operativni sistem",
                    description: "OS kernel za RISC-V u QEMU, niti, memorija, semafori, prekidi."
                },
                {
                    name: "Web aplikacija za kliniku",
                    description: "MEAN aplikacija: prijava, registracija, zakazivanje, izveštaji."
                },
                {
                    name: "Igre sa algoritmima",
                    description: "DFS, BFS, A*, Branch & Bound za optimizaciju putanja."
                },
                {
                    name: "Sudoku rešavač",
                    description: "Backtracking, Forward Checking, Arc Consistency sa vizuelizacijom."
                }
            ]
        },

        education: {
            title: "Obrazovanje",
            list: [
                {
                    institution: "Univerzitet u Beogradu, Elektrotehnički fakultet",
                    degree: "Inženjer računarske tehnike i informatike", duration: "2018 – present"
                },
                {
                    institution: "Srednja tehnička škola 'Nikola Tesla'",
                    degree: "Tehničar telekomunikacija", duration: "2014 – 2018"
                }
            ]
        },

        volunteering: {
            title: "Volontiranje",
            list: [
                { role: "Član Fakultetskog veća i Studentskog parlamenta", description: "Studentski predstavnik, organizacija prijemnih ispita i Dana otvorenih vrata (2021 – sada)." },
                { role: "KSER", description: "Glavni organizator, 700+ studenata i 10 kompanija (2023, 2024)." },
                { role: "Elektrijada", description: "Glavni organizator i predstavnik ETF-a (2022 – 2024)." },
                { role: "Studentska organizacija Elektron", description: "Predsednik (2022), član Izvršnog odbora (2020 – 2021)." },
                { role: "Seminar „Budi spreman”", description: "Glavni organizator (2020 – 2022)." }
            ]
        },

        footer: {
            print: '<i class="bi bi-printer"></i> Odštampaj / sačuvaj kao PDF'
        }
    },
    en: {
        header: {
            subtitle: "Student at the School of Electrical Engineering",
            location: "Belgrade, Serbia"
        },

        about: {
            title: "About Me",
            text: "I am a fourth-year student at the School of Electrical Engineering, with a focus on software and hardware development. Throughout my academic journey, I have actively participated in numerous student projects across different technological domains. Over time, I discovered that I am most passionate about web development, where I enjoy combining creativity with technical problem solving. In addition, I am actively involved in student organizations and event planning, demonstrating strong commitment to leadership, collaboration, and teamwork."
        },

        skills: {
            title: "Skills"
        },

        soft: {
            title: "Soft Skills",
            list: [
                { skill: "Problem solving" },
                { skill: "Team communication" },
                { skill: "Team management" },
                { skill: "Flexibility" }
            ]
        },

        langs: {
            title: "Languages",
            list: [
                { lang: "Serbian — native" },
                { lang: "English — advanced" }
            ]
        },

        experience: {
            title: "Experience",
            list: [
                {
                    role: "Frontend Internship — EPAM Systems",
                    duration: "June 2025 — August 2025",
                    description: "During my internship at EPAM, I refreshed and enhanced my knowledge of HTML, CSS, and JavaScript using their internal learning platforms. After completing React training, I participated in a team project where we collaborated with backend interns to develop a bookstore web application. We applied the Atomic Design methodology to structure reusable components and worked in an Agile environment with dedicated mentors and a Scrum Master. Throughout the internship, I also gained hands-on experience with Git and task management using EPAM Jira."
                }
            ]
        },

        projects: {
            title: "Projects",
            list: [
                {
                    name: "Kernel - Operating System",
                    description: "OS kernel for RISC-V in QEMU, threads, memory, semaphores, interrupts."
                },
                {
                    name: "Clinic Web Application",
                    description: "MEAN application: login, registration, scheduling, reporting."
                },
                {
                    name: "Algorithmic Games",
                    description: "DFS, BFS, A*, Branch & Bound for path optimization."
                },
                {
                    name: "Sudoku Solver",
                    description: "Backtracking, Forward Checking, Arc Consistency with visualization."
                }
            ]
        },

        education: {
            title: "Education",
            list: [
                {
                    institution: "University of Belgrade, School of Electrical Engineering",
                    degree: "Computer Engineering and Informatics",
                    duration: "2018 – present"
                },
                {
                    institution: "Nikola Tesla Technical High School",
                    degree: "Telecommunications Technician",
                    duration: "2014 – 2018"
                }
            ]
        },

        volunteering: {
            title: "Volunteering",
            list: [
                { role: "Member of the Faculty Council and Student Parliament", description: "Student representative, organization of entrance exams and Open Day events (2021 – present)." },
                { role: "KSER", description: "Head organizer, 700+ students and 10 companies (2023, 2024)." },
                { role: "Elektrijada", description: "Head organizer and ETF representative (2022 – 2024)." },
                { role: "Student Organization Elektron", description: "President (2022), Executive Board member (2020 – 2021)." },
                { role: "Seminar “Be Prepared”", description: "Head organizer (2020 – 2022)." }
            ]
        },

        footer: {
            print: '<i class="bi bi-printer"></i> Print / Save as PDF'
        }
    }

};

const root = document.documentElement;

function getByPath(obj, path) {
    return path.split('.').reduce((o, k) => (o ? o[k] : undefined), obj);
}

function fillNodeFromObject(node, obj) {
    node.querySelectorAll('[data-i18n-text]').forEach(el => {
        const field = el.getAttribute('data-i18n-text');
        const val = obj?.[field];
        if (val !== undefined && val !== null) {
            el.innerHTML = String(val);
        }
    });
}

function applyI18n(lang) {

    const current = document.documentElement.lang || localStorage.getItem('lang') || 'en';
    if (lang !== current) {
        root.classList.add('lang-fade');
        void root.offsetWidth;
        root.classList.add('lang-hide');
    }

    setTimeout(() => {
        document.documentElement.lang = lang;
        const dict = I18N[lang] || {};

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const val = getByPath(dict, key);
            if (typeof val === 'string') el.innerHTML = val;
        });

        document.querySelectorAll('[data-i18n-repeat]').forEach(container => {
            const path = container.getAttribute('data-i18n-repeat');
            const arr = getByPath(dict, path);
            if (!Array.isArray(arr)) return;

            const tpl = container.firstElementChild;
            if (!tpl) return;

            container.innerHTML = '';
            arr.forEach(item => {
                const clone = tpl.cloneNode(true);
                fillNodeFromObject(clone, item);
                container.appendChild(clone);
            });
        });

        localStorage.setItem('lang', lang);

        root.classList.remove('lang-hide');
        setTimeout(() => { root.classList.remove('lang-fade'); }, 300);
    }, 100);
}

document.querySelectorAll(".lang-option").forEach(option => {
    option.addEventListener("click", e => {
        e.preventDefault();

        const newFlag = option.querySelector("span").className;
        document.getElementById("current-flag").className = newFlag;

        const lang = option.dataset.lang;
        applyI18n(lang);
    });
});

const savedLang = localStorage.getItem("lang");
if (savedLang) {
    document.getElementById("current-flag").className =
        savedLang === "sr" ? "fi fi-rs" : "fi fi-us";
    applyI18n(savedLang);
}

// Theme Toggle

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.setAttribute("data-bs-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

themeToggle.addEventListener("click", () => {
  root.classList.add("theme-fade");

  let current = root.getAttribute("data-bs-theme") || "light";
  let next = current === "light" ? "dark" : "light";
  root.setAttribute("data-bs-theme", next);
  localStorage.setItem("theme", next);
  updateThemeIcon(next);

  setTimeout(() => {
    root.classList.remove("theme-fade");
  }, 300);
});

function updateThemeIcon(theme) {
  const iconClass = theme === "dark" ? "bi bi-sun" : "bi bi-moon";
  const icon = document.createElement("i");
  icon.className = iconClass + " rotate";

  const btn = document.getElementById("theme-toggle");
  btn.innerHTML = "";
  btn.appendChild(icon);

  icon.addEventListener("animationend", () => {
    icon.classList.remove("rotate");
  });
}
