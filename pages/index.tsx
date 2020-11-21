import React from "react"
import HeroIllustration from "../assets/hero-illustration.png"
import Texture from "../assets/texture.svg"
import Button from "../components/Button";
import "../styles/index.scss"

export default function Home() {
  return (
    <div className={"hero"}>
      <div className="heading">
        <p className="back">LWD</p>
        <p className="front">Learn While Doing</p>
      </div>
      <div className={"content"}>
        <div className={"info"}>
          <h1>
            A hands&#x2011;on approach to learning new 21st&#x2011;century
            skills.
          </h1>
          <p>
            Made for all ages, all for no cost. <b>Start learning today.</b>
          </p>
          <div className={"buttons"}>
            <Button
              href={"https://www.notion.so/Learn-While-Doing-c75384cde2be4ba59ba6f84b68414014"}
            >
              VIEW COURSES
            </Button>
            <Button
              muted
              href={"https://www.notion.so/a02b58a311374f8c85df1de4525a8ded?v=7edcd3c1dca6474ab9d68e534221da70"}
            >
              LEARN MORE
            </Button>
          </div>
        </div>
        <div className={"illustration"}>
          <img src={HeroIllustration}/>
        </div>
      </div>
      <div className={"texture"}>
        <Texture/>
      </div>
    </div>
  )
}
