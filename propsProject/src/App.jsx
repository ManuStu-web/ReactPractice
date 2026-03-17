import React from 'react'
import { Bookmark } from 'lucide-react'
import Card from './card'

const jobs = [
  {
    image: "https://www.google.com/s2/favicons?sz=128&domain=google.com",
    companyName: "Google",
    timePosted: "2 days ago",
    jobPost: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$110/hr",
    location: "Gurugram, India"
  },
  {
    image: "https://www.google.com/s2/favicons?sz=128&domain=amazon.com",
    companyName: "Amazon",
    timePosted: "5 days ago",
    jobPost: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "Bangalore, India"
  },
  {
    image: "https://www.google.com/s2/favicons?sz=128&domain=microsoft.com",
    companyName: "Microsoft",
    timePosted: "1 day ago",
    jobPost: "Full Stack Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$125/hr",
    location: "Hyderabad, India"
  },
  {
    image: "https://www.google.com/s2/favicons?sz=128&domain=netflix.com",
    companyName: "Netflix",
    timePosted: "3 days ago",
    jobPost: "UI/UX Designer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$100/hr",
    location: "Mumbai, India"
  },
  {
    image: "https://www.google.com/s2/favicons?sz=128&domain=tesla.com",
    companyName: "Tesla",
    timePosted: "4 days ago",
    jobPost: "React Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$115/hr",
    location: "Pune, India"
  },
  {
    image: "https://www.google.com/s2/favicons?sz=128&domain=meta.com",
    companyName: "Meta",
    timePosted: "6 days ago",
    jobPost: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$140/hr",
    location: "Noida, India"
  },
  {
    image: "https://www.google.com/s2/favicons?sz=128&domain=apple.com",
    companyName: "Apple",
    timePosted: "7 days ago",
    jobPost: "iOS Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$150/hr",
    location: "Delhi, India"
  },
  {
    image: "https://www.google.com/s2/favicons?sz=128&domain=spotify.com",
    companyName: "Spotify",
    timePosted: "8 days ago",
    jobPost: "Android Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$105/hr",
    location: "Chennai, India"
  },
  {
    image: "https://www.google.com/s2/favicons?sz=128&domain=adobe.com",
    companyName: "Adobe",
    timePosted: "9 days ago",
    jobPost: "Cloud Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$135/hr",
    location: "Ahmedabad, India"
  },
  {
    image: "https://www.google.com/s2/favicons?sz=128&domain=salesforce.com",
    companyName: "Salesforce",
    timePosted: "10 days ago",
    jobPost: "Data Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$120/hr",
    location: "Kolkata, India"
  }
];


const App = () => {
  return (
    <div className="Bbox">
      {
        jobs.map(function (ele, idx) {
          return <div key={idx}>
            <Card image={ele.image} companyName={ele.companyName} timePosted={ele.timePosted} jobPost={ele.jobPost} tag1={ele.tag1} tag2={ele.tag2} pay={ele.pay} location={ele.location} />
          </div>
        })
      }


    </div>
  )
}

export default App
