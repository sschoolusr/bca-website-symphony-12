import { useParams } from 'react-router-dom';
import { Navbar } from "../components/Navbar";

const eventDetails = {
  technova: {
    title: "TechNova",
    date: "October 2024",
    description: "Annual tech fest showcasing innovation, coding challenges, and hackathons",
    fullDescription: `TechNova is our flagship annual technology festival that brings together the brightest minds in technology. 
    This 3-day event features:
    - 24-hour Hackathon
    - Technical Paper Presentations
    - Coding Competitions
    - Project Exhibition
    - Industry Expert Talks
    - Workshop Sessions
    
    Participants get the opportunity to showcase their innovative ideas, compete with peers, and learn from industry experts.
    The event typically hosts over 1000 participants from various institutions.`,
    venue: "BCA Main Campus",
    registration: {
      deadline: "September 15, 2024",
      fee: "₹500 per team",
      teamSize: "2-4 members"
    }
  },
  codesprint: {
    title: "CodeSprint",
    date: "July 2024",
    description: "24-hour coding marathon solving real-world problems",
    fullDescription: `CodeSprint is an intensive 24-hour coding competition where participants tackle real-world problems.
    The event includes:
    - Multiple Problem-Solving Rounds
    - Real-time Leaderboard
    - Industry Problem Statements
    - Mentorship Sessions
    - Prize Pool worth ₹50,000
    
    Participants can compete individually or in teams, solving problems ranging from algorithmic challenges to full-stack development.`,
    venue: "Computer Science Block",
    registration: {
      deadline: "June 30, 2024",
      fee: "₹300 per participant",
      teamSize: "Individual or pairs"
    }
  },
  innovators_summit: {
    title: "Innovators' Summit",
    date: "December 2024",
    description: "Platform for innovative projects and research presentations",
    fullDescription: `The Innovators' Summit is a premier event showcasing groundbreaking student projects and research work.
    Key highlights include:
    - Research Paper Presentations
    - Project Demonstrations
    - Innovation Challenges
    - Networking Sessions
    - Industry Collaboration Opportunities
    
    The summit provides a platform for students to present their innovative ideas and get feedback from industry experts.`,
    venue: "University Convention Center",
    registration: {
      deadline: "November 30, 2024",
      fee: "₹400 per project",
      teamSize: "1-3 members"
    }
  }
};

const EventDetail = () => {
  const { eventId } = useParams();
  const event = eventDetails[eventId as keyof typeof eventDetails];

  if (!event) {
    return (
      <div>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-xl">Event not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-tech-dark mb-4">{event.title}</h1>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-lg text-tech-gray mb-4">Date: {event.date}</p>
            <p className="text-lg text-tech-gray mb-6">Venue: {event.venue}</p>
            <div className="prose max-w-none">
              <p className="whitespace-pre-line">{event.fullDescription}</p>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Registration Details</h2>
            <ul className="space-y-2">
              <li><strong>Deadline:</strong> {event.registration.deadline}</li>
              <li><strong>Fee:</strong> {event.registration.fee}</li>
              <li><strong>Team Size:</strong> {event.registration.teamSize}</li>
            </ul>
            <button className="mt-6 bg-tech-purple text-white px-6 py-2 rounded-lg hover:bg-tech-purple/90 transition-colors">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;