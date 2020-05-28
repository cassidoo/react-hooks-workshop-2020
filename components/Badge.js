import { useState } from 'react'

// Change this file so that:
// 1) The Badge Component takes in the correct props
// 2) If a badge is dismissable, when you click on it, it renders as null

// Hints:
// 1) Use the provided styles to guide you!
// 2) Remember useState() returns [someState, setSomeState]

// Bonus points: Try making it so the look of the badge changes somehow
// when you hover over it, perhaps an x for if you're about to dismiss it?

const Badge = () => {
  return <span>Hello, world!</span>
}

export default function BadgeList() {
  return (
    <section>
      <h1>Oh boy, statuses!</h1>
      <Badge color="green">Success</Badge> This is operational. <br />
      <Badge color="red" dismissable>
        Removed
      </Badge>{' '}
      This is critical. <br />
      <Badge color="yellow" dismissable>
        Warning
      </Badge>{' '}
      This is a warning. <br />
      <Badge color="blue">Beta</Badge> This is in progress. <br />
      <style jsx global>{`
        section {
          font-family: 'Helvetica', 'Arial', sans-serif;
          line-height: 1.3;
        }

        .badge {
          padding: 2px 5px;
          border-radius: 3px;
          color: white;
          font-size: 0.8rem;
          font-weight: bold;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
        }

        .red {
          background: red;
        }

        .yellow {
          background: #fbd070;
          color: #8e6c14;
        }

        .green {
          background: #69c33b;
        }

        .blue {
          background: #41a5e1;
        }
      `}</style>
    </section>
  )
}
