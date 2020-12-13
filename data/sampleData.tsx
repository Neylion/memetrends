import { IMeme } from "../interfaces/meme";

export default {
  addMeme,
  getMemes,
};

export function addMeme(meme: IMeme) {
  memeStore.push(meme);
}

export function getMemes() {
  return memeStore;
}

const memeStore: IMeme[] = [
  {
    id: 1,
    year: 2020,
    title: "My Plans/2020",
    slug: "my-plans-2020",
    description: "Description",
    readMoreLink: "link",
    media: {
      images: [
        {
          id: getId(),
          alt: "TEMPALT",
          link: "http://temp.se/test.jpg",
        },
        {
          id: getId(),
          alt: "TEMPALT",
          link: "http://temp.se/test.jpg",
        },
      ],
    },
  },
  {
    id: 2,
    year: 2020,
    title: "Mi pan",
    slug: "mi-pan",
    description: "Description",
    readMoreLink: "link",
    media: {
      images: [
        {
          id: getId(),
          alt: "TEMPALT",
          link: "http://temp.se/test.jpg",
        },
        {
          id: getId(),
          alt: "TEMPALT",
          link: "http://temp.se/test.jpg",
        },
      ],
    },
  },
  {
    id: 3,
    year: 2020,
    title: "Doomer Girl",
    slug: "doomer-girl",
    description:
      "Doomer Girl or Doomerette is a female Wojak character with black hair and dark eyes wearing a black sweatshirt and a choker. A female version of Doomer, the character was created in early January 2020 and gained popularity online, particularly on Facebook and Twitter. In memes, the character usually interacts with Doomer, Trad Girl and other characters, and has appeared in multiple Wojak Comics formats.",
    readMoreLink: "https://knowyourmeme.com/memes/doomer-girl",
    media: {
      images: [
        {
          id: getId(),
          alt: "Meme example",
          link: "https://i.kym-cdn.com/entries/icons/original/000/032/340/cover1.jpg",
        },
        {
          id: getId(),
          alt: "Meme example",
          link: "https://i.pinimg.com/originals/94/f3/0c/94f30cc043454270e4d65dc0a608e6fd.png",
        },
      ],
    },
  },
  {
    id: 4,
    year: 2019,
    title: "Momo",
    slug: "momo",
    description: "Description",
    readMoreLink: "link",
    media: {
      images: [
        {
          id: getId(),
          alt: "TEMPALT",
          link: "http://temp.se/test.jpg",
        },
        {
          id: getId(),
          alt: "TEMPALT",
          link: "http://temp.se/test.jpg",
        },
      ],
    },
  },
  {
    id: 5,
    year: 2019,
    title: "World Record Egg",
    slug: "world-record-egg",
    description: "Description",
    readMoreLink: "link",
    media: {
      images: [
        {
          id: getId(),
          alt: "TEMPALT",
          link: "http://temp.se/test.jpg",
        },
        {
          id: getId(),
          alt: "TEMPALT",
          link: "http://temp.se/test.jpg",
        },
      ],
    },
  },
  {
    id: 6,
    year: 2019,
    title: "Woman Yelling At a Cat",
    slug: "woman-yelling-at-a-cat",
    description:
      "Woman Yelling at a Cat refers to a meme format featuring a screen cap of The Real Housewives of Beverly Hills cast members Taylor Armstrong and Kyle Richards followed by a picture of a confused-looking cat sitting behind a dinner plate. The format gained significant popularity across the web in mid-June 2019 and the cat was later identified as Smudge the Cat.",
    readMoreLink: "https://knowyourmeme.com/memes/woman-yelling-at-a-cat",
    media: {
      images: [
        {
          id: getId(),
          alt: "Meme example",
          link: "https://i.kym-cdn.com/entries/icons/original/000/030/157/womanyellingcat.jpg",
        },
        {
          id: getId(),
          alt: "Meme example",
          link:
            "https://media.thetab.com/blogs.dir/90/files/2019/11/dish-drink-beverage-animal-pet-cat-mammal-face-food-meal-person-human.jpeg",
        },
      ],
    },
  },
  {
    id: 7,
    year: 2018,
    title: "Tide pods",
    slug: "tide-pods",
    description: "Description",
    readMoreLink: "link",
    media: {
      images: [
        {
          id: getId(),
          alt: "TEMPALT",
          link: "http://temp.se/test.jpg",
        },
        {
          id: getId(),
          alt: "TEMPALT",
          link: "http://temp.se/test.jpg",
        },
      ],
    },
  },
  {
    id: 8,
    year: 2018,
    title: "They did surgery on a grape",
    slug: "they-did-surgery-on-a-grape",
    description: "Description",
    readMoreLink: "link",
    media: {
      images: [
        {
          id: getId(),
          alt: "TEMPALT",
          link: "http://temp.se/test.jpg",
        },
        {
          id: getId(),
          alt: "TEMPALT",
          link: "http://temp.se/test.jpg",
        },
      ],
    },
  },
  {
    id: 9,
    year: 2018,
    title: "Gru's Plan",
    slug: "grus-plan",
    description:
      "Gru's Plan is an exploitable four-panel comic series featuring the Despicable Me protagonist Gru using a presentation board. Edits of the comic typically feature an unexpected third presentation page, followed by a panel of Gru looking back at the board in confusion.",
    readMoreLink: "https://knowyourmeme.com/memes/grus-plan",
    media: {
      images: [
        {
          id: getId(),
          alt: "Meme template",
          link: "https://i.kym-cdn.com/entries/icons/original/000/025/648/template.jpg",
        },
        {
          id: getId(),
          alt: "Meme example",
          link:
            "https://img.wattpad.com/abbe11014441ad514f580ac31c72a539b560e294/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f55554c5463625567556c6b734c773d3d2d3538373933323137392e313533373365633233623936623139343831333933363439353135332e6a7067?s=fit&w=720&h=720",
        },
      ],
    },
  },
];

function getId() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return Math.random().toString(36).substr(2, 9);
}
