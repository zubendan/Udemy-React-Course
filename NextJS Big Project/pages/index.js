import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/St._Michael%27s_Cathedral%2C_Sitka.jpg/1280px-St._Michael%27s_Cathedral%2C_Sitka.jpg",
    someAddress: "Some Address 1, 123123 City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/St._Michael%27s_Cathedral%2C_Sitka.jpg/1280px-St._Michael%27s_Cathedral%2C_Sitka.jpg",
    someAddress: "Some Address 1, 123123 City",
    description: "This is a second meetup",
  },
  {
    id: "m3",
    title: "Third Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/St._Michael%27s_Cathedral%2C_Sitka.jpg/1280px-St._Michael%27s_Cathedral%2C_Sitka.jpg",
    someAddress: "Some Address 1, 123123 City",
    description: "This is a third meetup",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
