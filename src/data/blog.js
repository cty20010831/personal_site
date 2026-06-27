// Blog posts data
// Add local photos to each post folder; scripts/generate-blog-photos.js creates the manifest.
import blogPhotos from './blogPhotos.generated';

const data = [
  {
    title: 'Texas Roadtrip',
    slug: 'texas_roadtrip',
    image: '/images/blog/Texas_June_2026/cover.JPG',
    date: 'June 2026',
    tags: ['Vacation'],
    excerpt: 'Enjoying the "BBQ roadtrip" between Houston and San Antonio.',
    content: `In June, I finally had the chance to taste the reknowned Texas BBQ (no kidding, it was so good!). 
              While food was definitely a highlight, I also had the chance to experience a mix of culture and history, visiting places like the NASA Space Center in Houston, the San Antonio River Walk, and Mission Concepción.”`,
    photos: blogPhotos.Texas_June_2026,
  },
  {
    title: 'ASCP 2026 @ Miami',
    slug: 'ascp_2026',
    image: '/images/blog/ASCP_May_2026/cover.JPG',
    date: 'May 2026',
    tags: ['Conference'],
    excerpt: 'Presenting my work on dynamic network analysis of depression treatment at 2026 ASCP meeting.',
    content: `This was my first time attending the American Society of Clinical Psychopharmacology (ASCP) meeting!
              I had the opportunity to present my work that applied network analysis to study the dynamic interactions of symptom states (from active and passive digital phenotyping features) during patients' hybrid-care depression treatment 👥💬. 
              It was great to engage with researchers from diverse backgrounds and discuss innovative approaches to understanding psychiatric symptoms through computational methods.`,
    photos: blogPhotos.ASCP_May_2026,
  },
  {
    title: 'APA 2026 @ San Francisco',
    slug: 'apa_2026',
    image: '/images/blog/APA_May_2026/cover.JPG',
    date: 'May 2026',
    tags: ['Conference'],
    excerpt: 'Presenting my greenspace project at 2026 APA meeting.',
    content: `This was my first time attending the American Psychiatric Association (APA) meeting!
              I presented my work on digital phenotyping of greenspace exposure and its impact on stress dynamics 👥💬. 
              APA is also a great platform to connect with researchers, clinicians, and startup people, who are doing great work in better understanding and treating psychiatric disorders.`,
    photos: blogPhotos.APA_May_2026,
  },
  {
    title: 'Tampa Getaway',
    slug: 'tampa_getaway',
    image: '/images/blog/Tampa_December_2025/cover.JPG',
    date: 'December 2025',
    tags: ['Vacation'],
    excerpt: 'Soaking the warm sunshine in Tampa.',
    content: `I can't say enough how good it was to escape the freezing East Coast winter and enjoy the warm sunshine in Tampa 🔆.
              My friend and I spent our days by the beach, indulged in delicious seafood, and I tried kayaking 🚣 for the first time!`,
    photos: blogPhotos.Tampa_December_2025,
  },
  {
    title: 'Spain and Nice Thanksgiving Vacation',
    slug: 'spain_and_nice',
    image: '/images/blog/Spain_Nice_November_2025/cover.JPG',
    date: 'November 2025',
    tags: ['Vacation'],
    excerpt: 'Away from work to enjoy the beautiful Mediterranean coast.',
    content: `Since I had already been to Spain (e.g., Madrid, Seville, València, and Barcelona) last year, Nice was the protagonist for me this time.  
              I was amazed by the beautiful Mediterranean coast 🌊, the charming old town ⛲, and the delicious French cuisine 🍽️.
              Hope to have the chance to re-visit it in the future!`,
    photos: blogPhotos.Spain_Nice_November_2025,
  },
  {
    title: 'Dubai Layover',
    slug: 'dubai_layover',
    image: '/images/blog/Dubai_Layover_June_2025/cover.JPG',
    date: 'June 2025',
    tags: ['Vacation'],
    excerpt: 'An incredible journey during a layover in Dubai, exploring the city\'s stunning architecture and culture.',
    content: `Although this is only two one-day visit for connecting flights, I experienced the huge difference in commodity price between the US and UAE.
              Here at UAE, you can enjoy probably better car rental and hotel services at only half the price in America. 
              A reasonable next step is probably finding a connecting flight in Doha when I travel between the east coast and China🤭.`,
    photos: blogPhotos.Dubai_Layover_June_2025,
  },
  {
    title: 'UChicago Convocation',
    slug: 'uchicago_convocation',
    image: '/images/blog/UChicago_Convocation_June_2025/cover.JPG',
    date: 'June 2025',
    tags: ['Misc'],
    excerpt: 'The moment of pride and gratitude.',
    content: `Two years at the University of Chicago passed by so fast.
              I am grateful to make friends with so many open-minded people.
              I am also blessed to join Dr. Akram Bakkour's lab to become a better researcher. 
              Although the grad school application did not come out as expected, my time at UChicago will always be a piece of precious memory.`,
    photos: blogPhotos.UChicago_Convocation_June_2025,
  },
  {
    title: 'Yellowstone National Park',
    slug: 'yellowstone-national-park',
    image: '/images/blog/Yellowstone_National_Park_May_2025/cover.JPG',
    date: 'May 2025',
    tags: ['Vacation'],
    excerpt: 'An incredible journey through America\'s first national park, capturing stunning landscapes and wildlife moments.',
    content: `A wonderful trip to probably the most renowned national park in the US.
              I have to say that this is the BEST national park I have ever been to.
              The scenery is breathtaking, the wildlife is abundant, and the people there are friendly.
              We were quite fortunate that there weren't many tourists in late May, which makes the overall experience so much better.
              I also get a chance to rent a pick-up truck (a RAM 1500)!!! Oh boy, I have to say it is such a comfortable vehicle to try in places other than populated cities.
              I would highly recommend this trip to anyone who is looking for a great national park experience👍.`,
    photos: blogPhotos.Yellowstone_National_Park_May_2025,
  },
  {
    title: 'Paris',
    slug: 'paris',
    image: '/images/blog/Paris_May_2025/cover.JPG',
    date: 'May 2025',
    tags: ['Conference', 'Vacation'],
    excerpt: 'A wonderful trip to the most famous city in the world.',
    content: `This trip carries two meanings for me.
              First, this is the first time I make a poster presentation at a conference (in this case, Society of Neuroscience for Creativity). 
              This poster presentation is related to my master thesis at UChicago and I learned a lot by getting a sense of the latest directions in creativity reseach. 
              Second, I spent around two days wandering through the city streets of probably one of the most beautiful city in the world, and enjoying the delicious food.
              On the record, the yummy French cuisine is cheaper than what I had back in China!`,
    photos: blogPhotos.Paris_May_2025,
  },
];

export default data;
