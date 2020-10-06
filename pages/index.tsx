// @ts-ignore
import css from "../styles/index.styl"

import {AnimatePresence, motion} from "framer-motion"
import React from "react"
import Link from "../components/Link"


const title = {
  start: {
    y: 20,
    opacity: 0,
  }, end: {
    y: 0,
    opacity: 1,
  }, transition: {
    type: "spring",
    mass: 2,
    damping: 15,
  }
}

const subtitle = {
  start: {
    opacity: 0,
  }, end: {
    opacity: 1,
  }, transition: {
    ease: [0.45, 0, 0.55, 1],
    duration: 1
  }
}

export default function Home() {
  return (
    <div className={css.hero}>
      <h1>
        <AnimatePresence>
          <motion.p key={1} initial={title.start} animate={title.end}
                    transition={{...title.transition, delay: 0}}>
            Learn
          </motion.p>
          &nbsp;
          <motion.p key={2} initial={title.start} animate={title.end}
                    transition={{...title.transition, delay: 0.6}}>
            While
          </motion.p>
          &nbsp;
          <motion.p key={3} initial={title.start} animate={title.end}
                    transition={{...title.transition, delay: 1.2}}>
            Doing
          </motion.p>
        </AnimatePresence>
      </h1>
      <motion.p initial={subtitle.start} animate={subtitle.end}
                transition={{...subtitle.transition, delay: 1.5}}
                className={css.subtitle}>
        A hands-on approach to learning new 21st-century skills. Made for all
        ages, all for no cost. <b>Start learning today.</b>
      </motion.p>
      <motion.div initial={subtitle.start} animate={subtitle.end}
                  transition={{...subtitle.transition, delay: 1.8}}>
        <Link
          link={"https://www.notion.so/Learn-While-Doing-c75384cde2be4ba59ba6f84b68414014"}>Learn
          more</Link>
      </motion.div>
    </div>
  )
}

