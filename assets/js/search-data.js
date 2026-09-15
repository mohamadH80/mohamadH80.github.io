// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "research",
          description: "Current and past research projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Download the full CV as a PDF using the icon on the right.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Teaching assistant and instructor roles.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-our-paper-on-how-educational-multimedia-design-principles-affect-information-processing-in-functional-brain-networks-was-published-in-scientific-reports",
          title: 'Our paper on how educational multimedia design principles affect information processing in functional...',
          description: "",
          section: "News",},{id: "news-started-a-remote-research-internship-at-the-university-of-british-columbia-on-deep-koopman-vae-models-of-eeg-brain-dynamics",
          title: 'Started a remote research internship at the University of British Columbia on deep...',
          description: "",
          section: "News",},{id: "news-will-attend-the-neurobridges-summer-school-in-computational-neuroscience-in-cluny-france-in-october-2026",
          title: 'Will attend the NeuroBridges Summer School in computational neuroscience in Cluny, France, in...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%68.%6F%73%74%61%64%69.%76%61@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV_Mohammadhossein_Ostadi.pdf", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/mh-ostadi-298778216", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mohamadH80", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
