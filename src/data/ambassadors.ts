export type Ambassador = {
  name: string;
  /** Path under /public, e.g. "/images/ambassadors/lastname.jpg" */
  photo: string;
  photoAlt: string;
  /** Short bio shown under the name (same slot as the college line on alumni cards). */
  bio: string;
  /** Optional role label shown as a strip across the bottom of the photo. */
  role?: string;
};

export type AmbassadorGroup = {
  id: string;
  heading: string;
  members: Ambassador[];
};

/** Sorts by last name (last word of `name`), then first name — so entry order never matters. */
export function byLastName(a: Ambassador, b: Ambassador): number {
  const last = (n: string) => n.trim().split(/\s+/).slice(-1)[0].toLowerCase();
  return last(a.name).localeCompare(last(b.name)) || a.name.localeCompare(b.name);
}

/**
 * Current ambassadors. Groups render in array order:
 * third-year first, then second-year.
 * Members are auto-sorted A-Z by last name — add entries in any order.
 *
 * To add someone: drop their photo in `public/images/ambassadors/` and add:
 *
 *   {
 *     name: "First Last",
 *     photo: "/images/ambassadors/last.jpg",
 *     photoAlt: "Portrait of First Last",
 *     bio: "Short bio text here.",
 *     role: "Website Admin",   // optional — omit for regular members
 *   },
 */
export const ambassadorGroups: AmbassadorGroup[] = [
  {
    id: "third-year",
    heading: "Third-Year Ambassadors",
    members: [
      {
        name: "Saksham Garg",
        photo: "/images/ambassadors/garg.jpg",
        photoAlt: "Portrait of Saksham Garg",
        bio: "I'm a senior at Denmark and a prospective engineer, currently captaining Denmark's FRC team! I spend my time playing tennis and flying drones.",
      },
      {
        name: "Haasini Jakkaraju",
        photo: "/images/ambassadors/jakkaraju.jpg",
        photoAlt: "Portrait of Haasini Jakkaraju",
        bio: "I'm a current senior. In the future, I want to pursue a career in computer science!",
      },
      {
        name: "Navi Weliwita",
        photo: "/images/ambassadors/weliwita.jpg",
        photoAlt: "Portrait of Navi Weliwita",
        bio: "I'm a junior. I love to play the guitar and drums, watch FC Barcelona, and drive around. In line with my passion for cars, I plan on becoming a mechanical engineer!",
      },
      {
        name: "Srihas Tumu",
        photo: "/images/ambassadors/tumu.jpg",
        photoAlt: "Portrait of Srihas Tumu",
        bio: "In my free time, I enjoy playing tennis and pickleball, hanging out with friends, listening to music, and going on hikes. In the future, I aspire to pursue a career in medicine and become a neurologist.",
      },
      {
        name: "Rohan Puppala",
        photo: "/images/ambassadors/puppala.jpg",
        photoAlt: "Portrait of Rohan Puppala",
        role: "Website Creator",
        bio: "I'm a current senior and the creator of this website. In the future, I want to pursue a career intersecting computer science and aerospace!",
      },
      {
        name: "Ram Singh",
        photo: "/images/ambassadors/singh.jpg",
        photoAlt: "Portrait of Ram Singh",
        role: "Website Admin",
        bio: "I'm a senior at Denmark. I want to pursue a career in law and have an interest in Computer Science and Business. I'm also the admin for the AP Ambassador website.",
      },
      {
        name: "Ethan Wong",
        photo: "/images/ambassadors/wong.jpg",
        photoAlt: "Portrait of Ethan Wong",
        bio: "I plan to pursue a business degree next fall!",
      },
    ],
  },
  {
    id: "second-year",
    heading: "Second-Year Ambassadors",
    members: [
      {
        name: "Arya Sharma",
        photo: "/images/ambassadors/sharma.jpg",
        photoAlt: "Portrait of Arya Sharma",
        bio: "I'm a junior. I aspire to go into the field of economics and finance.",
      },
      {
        name: "Nitya Valiveti",
        photo: "/images/ambassadors/valiveti.jpg",
        photoAlt: "Portrait of Nitya Valiveti",
        bio: "I plan to become a technology consultant after graduating with a Business Analytics bachelor's degree, and I love to dance and paint!",
      },
      {
        name: "Sal Minniti",
        photo: "/images/ambassadors/minniti.jpg",
        photoAlt: "Portrait of Sal Minniti",
        bio: "I'm currently an 11th grader. I run track at Denmark, and I aspire to be a dentist when I grow up.",
      },
      {
        name: "Bao-An Nguyen",
        photo: "/images/ambassadors/nguyen.jpg",
        photoAlt: "Portrait of Bao-An Nguyen",
        bio: "I love meeting new people, and I want to go into politics or international diplomacy. I'm in 12th grade.",
      },
      {
        name: "Abyudhay Prabhu",
        photo: "/images/ambassadors/prabhu.jpg",
        photoAlt: "Portrait of Abyudhay Prabhu",
        bio: "I'm currently a junior. I plan on going into the business and finance fields.",
      },
      {
        name: "Emily Reeves",
        photo: "/images/ambassadors/reeves.jpg",
        photoAlt: "Portrait of Emily Reeves",
        bio: "I'm currently a senior. After college, I plan to be a high school math teacher!",
      },
      {
        name: "Catherin Antony",
        photo: "/images/ambassadors/antony.jpg",
        photoAlt: "Portrait of Catherin Antony",
        bio: "I'm so excited to work with Denmark's AP Program this school year! I'm currently a junior (Class of 2028). In the future, I aspire to have a career in marketing and advertising, one day working to further companies' social and environmental responsibilities. I also have a lot of experience in hairstyling and makeup/special effects work as a trade career option. What I take away from AP is being able to prepare for my future and explore my interests in what I want to do and how I want to be. Go Danes!",
      },
      {
        name: "Varshi Katasani",
        photo: "/images/ambassadors/katasani.jpg",
        photoAlt: "Portrait of Varshi Katasani",
        bio: "I'm a senior. I love history and traveling, and in the future, I hope to become an international lawyer!",
      },
      {
        // NOTE: cropped from a 768x1024 street shot (~197x158 usable) — a bit soft.
        // A closer photo would render sharper.
        name: "Lydia Wells",
        photo: "/images/ambassadors/wells.jpg",
        photoAlt: "Portrait of Lydia Wells",
        bio: "I'm a senior. I hope to pursue a career as a physician assistant in the future.",
      },
    ],
  },
];
