export type AlumniPerson = {
  name: string;
  photo: string;
  photoAlt: string;
  college: string;
  quote?: string;
};

export type AlumniYear = {
  year: string;
  headline: string;
  intro: string;
  members: AlumniPerson[];
};

/** Sample entries for layout iteration — replace with real seniors and photography. */
export const alumniByYear: Record<string, AlumniYear> = {
  "2025": {
    year: "2025",
    headline: "Class of 2025",
    intro:
      "College commitments, awards, and service highlights from this year’s graduating ambassadors. Stories are representative placeholders until official profiles are added.",
    members: [
      {
        name: "Jordan Lee",
        photo:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
        photoAlt: "Portrait placeholder for Jordan Lee",
        college: "Georgia Institute of Technology",
        quote:
          "Ambassadors taught me that leadership is mostly listening—then showing up when it counts.",
      },
      {
        name: "Maya Patel",
        photo:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
        photoAlt: "Portrait placeholder for Maya Patel",
        college: "University of Georgia",
        quote:
          "I joined shy about public speaking; I leave proud of the voice I found in our programs.",
      },
      {
        name: "Chris Alvarez",
        photo:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
        photoAlt: "Portrait placeholder for Chris Alvarez",
        college: "Emory University",
        quote:
          "Serving at AP Night showed me how much our community cares about student success.",
      },
    ],
  },
  "2024": {
    year: "2024",
    headline: "Class of 2024",
    intro:
      "Archive of the previous graduating class. Replace placeholders with finalized ambassador profiles and imagery.",
    members: [
      {
        name: "Taylor Brooks",
        photo:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80",
        photoAlt: "Portrait placeholder for Taylor Brooks",
        college: "Vanderbilt University",
        quote: "The best part was mentoring freshmen the way I was mentored.",
      },
      {
        name: "Sam Okonkwo",
        photo:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
        photoAlt: "Portrait placeholder for Sam Okonkwo",
        college: "Georgia State University",
        quote: "Pathway Night conversations reminded me why representation in AP matters.",
      },
    ],
  },
};

export const alumniYears = Object.keys(alumniByYear).sort((a, b) =>
  Number(b) - Number(a),
);
