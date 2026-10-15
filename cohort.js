/* ==========================================================================
   COHORT DATA — this is the ONLY file you need to edit each year.
   Update the text below, save, commit, and push. The page rebuilds itself.
   Tips:
   - Every value is text inside "double quotes". Apostrophes are fine
     (students' work), but a double quote inside text must be written \".
   - Each item in a list ends with a comma, except the last one is optional.
   - For a new paragraph, add a new string to the "paragraphs" list.
   - If the page shows "content failed to load", there's a typo here.
   ========================================================================== */

window.COHORT = {
  // Academic year shown at the top of the page and in the projects heading.
  label: "AY 2026-2027",

  /* ---- Application ---------------------------------------------------- */
  // Direct link to the Google Form. Replace this each year if the form changes.
  applyUrl: "https://docs.google.com/forms/d/e/1FAIpQLScAmIL3RdEM-78meE5AEKCN_yQSRdDlPAtaPHrN7vjFcMG-nA/viewform?usp=publish-editor",

  // Leave deadline empty ("") to hide it. Example: "November 10, 2026"
  applicationDeadline: "November 17, 2026",

  /* ---- Dates and details table ---------------------------------------- */
  keyFacts: [
    { label: "Applications due", value: "November 17, 2026" },
    { label: "Acceptance letters", value: "By December 31, 2026" },
    { label: "Program starts", value: "January 2027" },
    { label: "Length", value: "About 20 weeks, paid" },
    { label: "Time commitment", value: "~10 hours per week" },
    { label: "Conference", value: "AAEA Annual Meeting, July 2027, Philadelphia, PA" }
  ],

  /* ---- Page heading and introduction ----------------------------------- */
  title: "Building Connections",
  subtitle: "An Undergraduate Research and Extension Program",
  tagline: "A research and extension exchange program in ag finance, marketing, and food security",
  intro: "Building Connections is a paid research and extension program for undergraduates, run jointly by faculty at Michigan State University, Auburn University, the University of Georgia, and Oregon State University. Students work in teams of three with a faculty advisor on a research and extension project and prepare a presentation for the AAEA Annual Meeting. Please read everything on this page before you apply.",

  /* ---- Contact (shown under the apply button; leave email "" to hide) -- */
  contact: { name: "", email: "" },

  /* ---- Photo at the top of the page (set src to "" to hide) ------------ */
  heroImage: {
    src: "assets/hero.jpg",
    alt: "A group of students and faculty standing in front of the AAEA and WAEA Joint Annual Meeting sign",
    caption: "At the 2025 AAEA & WAEA Joint Annual Meeting in Denver, CO"
  },

  /* ---- Partner institutions -------------------------------------------
     Logos live in the assets/ folder. Remove "logo" to show the name only. */
  Participating Universities: [
    { name: "Michigan State University", url: "https://www.msu.edu", logo: "assets/logo-msu.png" },
    { name: "Auburn University", url: "https://www.auburn.edu", logo: "assets/logo-auburn.png" },
    { name: "University of Georgia", url: "https://www.uga.edu", logo: "assets/logo-georgia.png" },
    { name: "Oregon State University", url: "https://oregonstate.edu", logo: "assets/logo-osu.png" }
  ],

  funding: "Funded by USDA National Institute of Food and Agriculture (NIFA).",

  /* ---- Program description -------------------------------------------- */
  about: {
    paragraphs: [
      "This is an approximately 20-week, paid, undergraduate research and extension program funded by USDA-National Institute of Food and Agriculture. Selected students will receive an acceptance letter by December 31, 2026, and the program will commence in January 2027.",
      "Each student will be paired with a faculty member/program and will work in groups of three student members. Students are expected to work an average of 10 hours per week.",
      "In the first few weeks, students will get acquainted with each other and with faculty leaders via a series of meetings. During this time, students will also be required to attend three lectures prepared by the faculty and complete activities showing mastery of the materials."
    ]
  },

  lectures: [
    {
      title: "Introduction to Academic Research",
      text: "Academic honesty, the research process, data utilization, safe data storage, data analysis software and related resources, library resources, Google Scholar, academic writing and related resources."
    },
    {
      title: "Introduction to Extension",
      text: "The importance of stakeholder needs assessment, the relationship between academic research and extension and outreach activities, and designing effective extension programming."
    },
    {
      title: "Introduction to the AAEA Annual Meeting & Student Presentations",
      text: "The Agricultural and Applied Economics Association summer conference: the requirement to attend, the student competitions, expectations for participation, related deadlines, travel arrangements, and related topics."
    }
  ],

  work: {
    intro: "Throughout the program, students work with their faculty advisors to carry out the research and extension projects.",
    research: "background literature review, data collection, data analysis using software such as Excel and Stata, hypothesis testing with appropriate econometric techniques, obtaining analytical results, and preparing presentations for the AAEA conference.",
    extension: "all of the research activities above, plus writing stakeholder-centered publications (for example, blogs or fact sheets), developing Excel tools for stakeholder use, and delivering presentations to stakeholders about the project."
  },

  mentorship: "Alongside the research and extension work, the program includes mentorship. Each student is mentored by one of the faculty members and by one external mentor in a group setting. The goal is to give students information, guidance, and feedback on graduate school applications, job applications, and, more generally, career options and choices.",

  conference: "Students are recommended to attend the AAEA meeting in July 2027 in Philadelphia, PA. All expenses for attendance are reimbursed by the project.",

  /* ---- Projects -------------------------------------------------------
     Add, remove or reorder entries freely. Fields:
       title, advisor, institution, email (optional), paragraphs[]
     ---------------------------------------------------------------------- */
  projects: [
    {
      title: "Understanding Market Access in Specialty Crops",
      advisor: "Prof. Jeta Rudi Polloshka",
      institution: "Michigan State University",
      email: "rudipoll@msu.edu",
      paragraphs: [
        "Specialty crop producers play an important role in supplying consumers with nutritious foods, including fruits, vegetables, and nuts, while contributing to local and regional economies. However, identifying and accessing profitable markets remains an ongoing challenge for many producers.",
        "In this project, students will work with specialty crop farmers from Michigan, Georgia, Oregon, and Alabama to learn how they identify new market opportunities, build relationships with buyers, and adapt to changing consumer demand and industry trends. Students will conduct interviews with producers of regionally important specialty crops and analyze common opportunities and challenges related to market access.",
        "Through this experience, students will gain hands-on skills in agricultural research, stakeholder engagement, interviewing, and communication while learning directly from farmers about the business decisions that shape agricultural markets."
      ]
    },

    /* ---- PLACEHOLDERS: replace each block below when you have the details.
       Delete the line  placeholder: true,  once a project is filled in. ---- */
    {
      placeholder: true,
      title: "Project to be announced",
      advisor: "",
      institution: "",
      paragraphs: ["Details coming soon."]
    },
    {
      placeholder: true,
      title: "Project to be announced",
      advisor: "",
      institution: "",
      paragraphs: ["Details coming soon."]
    },
    {
      placeholder: true,
      title: "Project to be announced",
      advisor: "",
      institution: "",
      paragraphs: ["Details coming soon."]
    }
  ]
};
