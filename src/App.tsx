import { useState } from 'react'
import { Header } from './components/Header'
import { EmailBanner } from './components/EmailBanner'
import { FeaturesCards } from './components/FeaturesCards'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import user from './assets/user.jpg'

const mockFooterLinks = [
  {
    title: "Footer Link",
    links: [
      { label: "Footer Link", link: "#" },
      { label: "Footer Link", link: "#" },
      { label: "Footer Link", link: "#" },
      { label: "Footer Link", link: "#" },
      { label: "Footer Link", link: "#" },
      { label: "Footer Link", link: "#" },
    ],
  },
  {
    title: "Footer Link",
    links: [
      { label: "Footer Link", link: "#" },
      { label: "Footer Link", link: "#" },
      { label: "Footer Link", link: "#" },
      { label: "Footer Link", link: "#" },
      { label: "Footer Link", link: "#" },
      { label: "Footer Link", link: "#" },
    ],
  },
  {
    title: "Footer Link",
    links: [
      { label: "Footer Link", link: "#" },
      { label: "Footer Link", link: "#" },
      { label: "Footer Link", link: "#" },
      { label: "Footer Link", link: "#" },
      { label: "Footer Link", link: "#" },
      { label: "Footer Link", link: "#" },
    ],
  }
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header user={{name: 'John Doe', image: user}} />
      <EmailBanner />
      <FeaturesCards />
      <Faq />
      <Footer data={mockFooterLinks} />
    </>
  )
}

export default App
