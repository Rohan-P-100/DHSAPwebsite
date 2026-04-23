export type EventItem = {
  id: string;
  title: string;
  description: string;
  goal: string;
  image: string;
  imageAlt: string;
  gallery?: Array<{
    src: string;
    alt: string;
  }>;
};

export const events: EventItem[] = [
  {
    id: "ap-night",
    title: "AP Night",
    description:
      "Ambassadors plan, organize, and run an evening dedicated to Advanced Placement—acting as specialists in courses they have taken and speaking with families about pathways at Denmark.",
    goal: "Increase informed AP enrollment and help families match courses to student goals.",
    image: "/images/all_event_pictures/eventpics_apnight/pic1_apnight.png",
    imageAlt: "AP Ambassador speaking with a parent at AP Night",
    gallery: [
      {
        src: "/images/all_event_pictures/eventpics_apnight/pic1_apnight.png",
        alt: "AP Ambassador speaking with a parent at AP Night",
      },
      {
        src: "/images/all_event_pictures/eventpics_apnight/pic2_apnight.png",
        alt: "AP Ambassadors with a teacher during AP Night",
      },
      {
        src: "/images/all_event_pictures/eventpics_apnight/pic3_apnight.png",
        alt: "Three AP Ambassadors welcoming families at AP Night",
      },
    ],
  },
  {
    id: "spring-fling",
    title: "Spring Fling",
    description:
      "Ambassadors run games, support booths, and represent Denmark beyond the classroom—connecting with families and neighbors at a community fair.",
    goal: "Give back locally and expand the program’s reach outside school walls.",
    image: "/images/all_event_pictures/eventpics_springfling/pic1_springfling.png",
    imageAlt: "AP Ambassadors at Spring Fling",
    gallery: [
      {
        src: "/images/all_event_pictures/eventpics_springfling/pic1_springfling.png",
        alt: "AP Ambassadors at Spring Fling",
      },
      {
        src: "/images/all_event_pictures/eventpics_springfling/pic2_springfling.png",
        alt: "Students participating in Spring Fling activities",
      },
      {
        src: "/images/all_event_pictures/eventpics_springfling/pic3_springfling.png",
        alt: "AP Ambassadors hosting Spring Fling booths",
      },
      {
        src: "/images/all_event_pictures/eventpics_springfling/pic4_springfling.png",
        alt: "Spring Fling community event moment",
      },
      {
        src: "/images/all_event_pictures/eventpics_springfling/pic5_springfling.png",
        alt: "Spring Fling outreach by AP Ambassadors",
      },
      {
        src: "/images/all_event_pictures/eventpics_springfling/pic6_springfling.png",
        alt: "Families engaging with AP Ambassadors at Spring Fling",
      },
      {
        src: "/images/all_event_pictures/eventpics_springfling/pic7_springfling.png",
        alt: "AP Ambassadors representing the program at Spring Fling",
      },
    ],
  },
  {
    id: "new-teacher-orientation",
    title: "New Teacher Orientation",
    description:
      "Student leaders welcome new educators, facilitate activities, and help teachers feel at home as they set up classrooms and routines.",
    goal: "Strengthen school culture and model student leadership for incoming staff.",
    image: "/images/all_event_pictures/eventpics_newteacherorientation/pic1_newteacherorientation.png",
    imageAlt: "AP Ambassadors welcoming new teachers",
    gallery: [
      {
        src: "/images/all_event_pictures/eventpics_newteacherorientation/pic1_newteacherorientation.png",
        alt: "AP Ambassadors welcoming new teachers",
      },
    ],
  },
  {
    id: "freshmen-orientation",
    title: "Freshmen Orientation",
    description:
      "Ambassadors cheer on new Danes, answer scheduling questions, and help freshmen navigate their first days with confidence.",
    goal: "Ease the transition to high school and spotlight academic pathways early.",
    image: "/images/all_event_pictures/eventpics_freshmenorientation/pic1_freshmanorientation.png",
    imageAlt: "Freshmen Orientation event with AP Ambassadors",
    gallery: [
      {
        src: "/images/all_event_pictures/eventpics_freshmenorientation/pic1_freshmanorientation.png",
        alt: "Freshmen Orientation event with AP Ambassadors",
      },
      {
        src: "/images/all_event_pictures/eventpics_freshmenorientation/pic2_freshmanorientation.png",
        alt: "AP Ambassadors guiding incoming freshmen",
      },
      {
        src: "/images/all_event_pictures/eventpics_freshmenorientation/pic3_freshmanorientation.png",
        alt: "Freshmen receiving orientation support from AP Ambassadors",
      },
    ],
  },
  {
    id: "pathway-night",
    title: "Pathway & CTAE Night",
    description:
      "One-on-one conversations with students and parents about course selection, career pathways, and future planning.",
    goal: "Support thoughtful course decisions across grade levels.",
    image: "/images/all_event_pictures/eventpics_pathwaynight/pic1_pathwaynight.png",
    imageAlt: "Families discussing course options at Pathway Night",
    gallery: [
      {
        src: "/images/all_event_pictures/eventpics_pathwaynight/pic1_pathwaynight.png",
        alt: "Families discussing course options at Pathway Night",
      },
      {
        src: "/images/all_event_pictures/eventpics_pathwaynight/pic2_pathwaynight.png",
        alt: "AP Ambassadors presenting pathway information",
      },
      {
        src: "/images/all_event_pictures/eventpics_pathwaynight/pic3_pathwaynight.png",
        alt: "Pathway Night student and parent engagement",
      },
    ],
  },
  {
    id: "freshmen-presentation",
    title: "Freshmen Presentation",
    description:
      "Sophomore ambassadors host a Q&A for freshmen in AP Human Geography—sharing experiences and encouraging students to continue the AP pathway.",
    goal: "Build early momentum for AP participation and demystify advanced coursework.",
    image: "/images/all_event_pictures/eventpics_freshmenpresentation/pic1_freshmenpresentation.png",
    imageAlt: "AP Ambassadors leading freshmen presentation",
    gallery: [
      {
        src: "/images/all_event_pictures/eventpics_freshmenpresentation/pic1_freshmenpresentation.png",
        alt: "AP Ambassadors leading freshmen presentation",
      },
    ],
  },
  {
    id: "ap-day-at-the-capitol",
    title: "AP Day at the Capitol",
    description:
      "Ambassadors represent Denmark at AP advocacy events, connecting with peers and educators while highlighting how AP opportunities shape student success.",
    goal: "Celebrate AP achievement and amplify student voice in broader academic conversations.",
    image: "/images/all_event_pictures/eventpics_capitol/pic1_capitol.png",
    imageAlt: "AP Ambassadors at AP Day at the Capitol",
    gallery: [
      {
        src: "/images/all_event_pictures/eventpics_capitol/pic1_capitol.png",
        alt: "AP Ambassadors at AP Day at the Capitol",
      },
      {
        src: "/images/all_event_pictures/eventpics_capitol/pic2_capitol.png",
        alt: "Student advocacy at the Capitol",
      },
      {
        src: "/images/all_event_pictures/eventpics_capitol/pic3_capitol.png",
        alt: "AP representatives at the Capitol event",
      },
      {
        src: "/images/all_event_pictures/eventpics_capitol/pic4_capitol.png",
        alt: "AP Day at the Capitol group moment",
      },
    ],
  },
  {
    id: "trunk-or-treat",
    title: "Trunk or Treat",
    description:
      "Ambassadors participate in a festive community night by hosting themed stations, engaging younger students, and creating a welcoming school atmosphere.",
    goal: "Build positive school-community relationships through service and family engagement.",
    image: "/images/all_event_pictures/eventpics_trunkortreat/pic1_trunkortreat.png",
    imageAlt: "AP Ambassadors at Trunk or Treat",
    gallery: [
      {
        src: "/images/all_event_pictures/eventpics_trunkortreat/pic1_trunkortreat.png",
        alt: "AP Ambassadors at Trunk or Treat",
      },
      {
        src: "/images/all_event_pictures/eventpics_trunkortreat/pic2_trunkortreat.png",
        alt: "Students hosting Trunk or Treat activities",
      },
      {
        src: "/images/all_event_pictures/eventpics_trunkortreat/pic3_trunkortreat.png",
        alt: "Community engagement during Trunk or Treat",
      },
    ],
  },
];
