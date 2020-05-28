import Link from 'next/link'

export default function Home() {
  return (
    <div className="toc">
      <h1>Welcome to the workshop!</h1>
      <div>
        Lessons: <br />
        <ul>
          <li>
            <Link href="/lessons/1-props-and-state">
              <a>1. Props and State</a>
            </Link>
          </li>
          <li>
            <Link href="/lessons/2-controlled-components">
              <a>2. Controlled Components</a>
            </Link>
          </li>
          <li>
            <Link href="/lessons/3-effects">
              <a>3. Effects</a>
            </Link>
          </li>
          <li>
            <Link href="/lessons/4-compound-components">
              <a>4. Compound Components</a>
            </Link>
          </li>
          <li>
            <Link href="/lessons/5-reducers">
              <a>5. Reducers</a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        Exercises:
        <br />
        <ul>
          <li>
            <Link href="/exercises/1-badges">
              <a>1. Badge</a>
            </Link>
          </li>
          <li>
            <Link href="/exercises/2-character-counter">
              <a>2. Character Counter Input</a>
            </Link>
          </li>
          <li>
            <Link href="/exercises/3-effect-examples">
              <a>3. More Effect Examples (no exercise)</a>
            </Link>
          </li>
          <li>
            <Link href="/exercises/4-date-picker">
              <a>4. Date Picker</a>
            </Link>
          </li>
          <li>
            <Link href="/exercises/5-todo">
              <a>5. To Do</a>
            </Link>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .toc {
          font-family: 'Helvetica', 'Arial', sans-serif;
        }
      `}</style>
    </div>
  )
}
