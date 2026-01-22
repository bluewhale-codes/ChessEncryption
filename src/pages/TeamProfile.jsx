"use client"

import { useEffect, useState } from "react"

const teamMembers = [
  {
    id: 1,
    name: "Vishal shakya",
    role: "Full Stack Developer",
    image: "https://avatars.githubusercontent.com/u/114689405?s=400&u=f1eaaaee58dcd5d07c6aa993fb8cda1d1e3d417d&v=4",
    bio: "Creative visionary with 8+ years of experience in product design.",
  },
  {
    id: 2,
    name: "Rishu",
    role: "AI/ML Engineer",
    image: "https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/598803761_2035479967028310_336338257558101916_n.jpg?ccb=11-4&oh=01_Q5Aa3gEZj-vaEHHsuSAZS996Ed-Tie_nTuhuaV2xFRtKq9vIRw&oe=697CE998&_nc_sid=5e03e0&_nc_cat=106",
    bio: "Full-stack engineer passionate about scalable architecture.",
  },
  {
    id: 3,
    name: "Pranya Tiwari",
    role: "UI/UX Developer",
    image: "https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/584761403_2397587887362995_2541309544580023844_n.jpg?ccb=11-4&oh=01_Q5Aa3gHu-dTaNhzkP8G54x3lci91h4D8doreU-YZ5fQxSeDGqw&oe=697CEFD9&_nc_sid=5e03e0&_nc_cat=104",
    bio: "Strategic thinker driving product innovation and growth.",
  },
  {
    id: 4,
    name: "Rishav",
    role: "Backend Developer",
    image: "https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/595397826_1750449185879357_2218176121703144496_n.jpg?ccb=11-4&oh=01_Q5Aa3gF8jxc9JuSyp3oGRjxsM-ic6CJShHTXEKIGOlWQ0TbANg&oe=697D03E6&_nc_sid=5e03e0&_nc_cat=106",
    bio: "Data-driven researcher uncovering user insights.",
  },
  {
    id: 5,
    name: "Ashutosh Thakur",
    role: "AI/ML Engineer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    bio: "Brand storyteller connecting products with people.",
  },
]

function TeamCard({ member, index }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 150)
    return () => clearTimeout(timer)
  }, [index])

  const cardStyle = {
    position: "relative",
    cursor: "pointer",
    transition: "all 0.7s ease-out",
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(32px)",
  }

  const innerCardStyle = {
    position: "relative",
    overflow: "hidden",
    borderRadius: "12px",
    backgroundColor: "#1a1a2e",
    border: "1px solid #2a2a4a",
    transition: "all 0.5s",
    boxShadow: isHovered
      ? "0 20px 40px -12px rgba(99, 102, 241, 0.25)"
      : "0 8px 12px -3px rgba(0, 0, 0, 0.3)",
    transform: isHovered ? "scale(1.02)" : "scale(1)",
  }

  const imageContainerStyle = {
    position: "relative",
    height: "160px",
    overflow: "hidden",
  }

  const imageStyle = {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    transition: "all 0.7s",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
  }

  const overlayStyle = {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.4), transparent)",
    transition: "opacity 0.5s",
    opacity: isHovered ? 1 : 0,
  }

  const bioStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "12px",
    color: "white",
    transition: "all 0.5s",
    opacity: isHovered ? 1 : 0,
    transform: isHovered ? "translateY(0)" : "translateY(12px)",
  }

  const infoStyle = {
    padding: "12px 14px",
  }

  const nameStyle = {
    fontSize: "14px",
    fontWeight: 600,
    color: isHovered ? "#818cf8" : "#f1f1f1",
    transition: "color 0.3s",
    margin: 0,
  }

  const roleStyle = {
    marginTop: "2px",
    fontSize: "12px",
    color: "#9ca3af",
    margin: "2px 0 0 0",
  }

  const arrowContainerStyle = {
    display: "flex",
    height: "28px",
    width: "28px",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    backgroundColor: isHovered ? "#6366f1" : "#2a2a4a",
    transition: "all 0.3s",
  }

  const arrowStyle = {
    height: "14px",
    width: "14px",
    transition: "all 0.3s",
    color: isHovered ? "white" : "#f1f1f1",
    transform: isHovered ? "translateX(2px)" : "translateX(0)",
  }

  const decorativeCircleStyle = {
    position: "absolute",
    bottom: "-6px",
    right: "-6px",
    height: "50px",
    width: "50px",
    borderRadius: "50%",
    backgroundColor: "rgba(99, 102, 241, 0.1)",
    transition: "all 0.5s",
    transform: isHovered ? "scale(1.5)" : "scale(1)",
    opacity: isHovered ? 1 : 0,
  }

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={innerCardStyle}>
        <div style={imageContainerStyle}>
          <img src={member.image || "/placeholder.svg"} alt={member.name} style={imageStyle} />
          <div style={overlayStyle} />
          <div style={bioStyle}>
            <p style={{ fontSize: "11px", lineHeight: 1.5, margin: 0 }}>{member.bio}</p>
          </div>
        </div>

        <div style={infoStyle}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <h3 style={nameStyle}>{member.name}</h3>
              <p style={roleStyle}>{member.role}</p>
            </div>
            <div style={arrowContainerStyle}>
              <svg
                style={arrowStyle}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>

        <div style={decorativeCircleStyle} />
      </div>
    </div>
  )
}

export default function TeamProfile() {
  const [headerVisible, setHeaderVisible] = useState(false)

  useEffect(() => {
    setHeaderVisible(true)
  }, [])

  const sectionStyle = {
    minHeight: "100vh",
    backgroundColor: "#0f0f1a",
    padding: "40px 16px",
    fontFamily: "system-ui, -apple-system, sans-serif",
  }

  const containerStyle = {
    maxWidth: "900px",
    margin: "0 auto",
  }

  const headerStyle = {
    marginBottom: "32px",
    textAlign: "center",
    transition: "all 1s ease-out",
    opacity: headerVisible ? 1 : 0,
    transform: headerVisible ? "translateY(0)" : "translateY(-24px)",
  }

  const badgeStyle = {
    display: "inline-block",
    marginBottom: "10px",
    borderRadius: "9999px",
    backgroundColor: "#2a2a4a",
    padding: "4px 12px",
    fontSize: "11px",
    fontWeight: 500,
    color: "#e0e0e0",
  }

  const titleStyle = {
    marginTop: "10px",
    fontSize: "clamp(22px, 4vw, 36px)",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    color: "#f1f1f1",
    lineHeight: 1.2,
    margin: "10px 0 0 0",
  }

  const subtitleStyle = {
    color: "#6b7280",
  }

  const descriptionStyle = {
    maxWidth: "500px",
    margin: "14px auto 0",
    fontSize: "13px",
    color: "#9ca3af",
    lineHeight: 1.5,
  }

  const flexContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "16px",
  }

  const cardWrapperStyle = {
    flex: "0 1 160px",
    minWidth: "140px",
  }

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <span style={badgeStyle}>Our Team</span>
          <h2 style={titleStyle}>
            Meet the people behind
            <br />
            <span style={subtitleStyle}>the innovation</span>
          </h2>
          <p style={descriptionStyle}>
            A passionate team of creators, builders, and dreamers working together
            to shape the future of digital experiences.
          </p>
        </div>

        <div style={flexContainerStyle}>
          {teamMembers.map((member, index) => (
            <div key={member.id} style={cardWrapperStyle}>
              <TeamCard member={member} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
