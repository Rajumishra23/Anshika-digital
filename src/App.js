import React from 'react'
import Navbar from './components/Navbar'
import HeroWithVideo from './components/heroSection'
import Courses from './components/Courses'
import Demo from './components/Demo'
import StudentFeedback from './components/StudentFeedback'
import Placement from './components/Placement'
import Portfolio from './components/Portfolio'
import PlacedStudents from './components/PlacedStudents'
import UpcomingBatches from './components/UpcomingBatches'
import TeamMember from './components/TeamMember'
import Testimonials from './components/Testimonials'
import Founder from './components/Founder'
import Reasons from './components/Reasons'
import Footer from './components/Footer'
import CourseHighlight from './components/CourseHighlights'
import Review from './components/Review'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroWithVideo />
      <Courses/>
      <Demo/>   
      <StudentFeedback/>
      <CourseHighlight/>
      <Review/>
      <Placement/>
      <Portfolio/>
      <PlacedStudents/>
      <UpcomingBatches/>
      <TeamMember/>
      
      <Testimonials/>
      <Founder/>
      <Reasons/>
      <Footer/>
    </div>
  )
}

export default App
