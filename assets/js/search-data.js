// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/too_tired_to_clean/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "collection of our projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/too_tired_to_clean/projects/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/too_tired_to_clean/people/";
          },
        },{id: "news-claudio-begin-to-work-on-pietro-san",
          title: 'Claudio begin to work on Pietro San',
          description: "",
          section: "News",},{id: "news-carlo-and-alex-join-the-group",
          title: 'Carlo and Alex join the group',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "Pietro San",
          section: "Projects",handler: () => {
              window.location.href = "/too_tired_to_clean/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "Giovanni kun",
          section: "Projects",handler: () => {
              window.location.href = "/too_tired_to_clean/projects/2_project/";
            },},];
