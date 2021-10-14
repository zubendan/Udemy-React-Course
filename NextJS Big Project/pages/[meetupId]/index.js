import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/St._Michael%27s_Cathedral%2C_Sitka.jpg/1280px-St._Michael%27s_Cathedral%2C_Sitka.jpg"
      title="First Meetup"
      address="Some Street 5, Some Street"
      description="This is a first Meetup"
    />
  );
};

export default MeetupDetails;
