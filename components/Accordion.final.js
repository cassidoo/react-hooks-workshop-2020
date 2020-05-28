import { Fragment, useState, useContext, createContext } from 'react'
import Description from '@components/Description'

function Accordion({ data }) {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div data-accordion>
      {data.map((tab, index) => {
        const isActive = index === activeIndex
        return (
          <div data-section key={index}>
            <div
              data-panel-title
              className={isActive ? 'expanded' : ''}
              onClick={() => setActiveIndex(index)}
            >
              <span>{tab.label}</span>
              <span>{tab.icon}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

let AccordionContext = createContext()

function AccordionCC({ children }) {
  let [activeIndex, setActiveIndex] = useState(0)
  return (
    <div data-accordion>
      {children.map((child, index) => {
        return (
          <AccordionContext.Provider
            key={`section-${index}`}
            value={{ index, activeIndex, setActiveIndex }}
          >
            {child}
          </AccordionContext.Provider>
        )
      })}
    </div>
  )
}

let SectionContext = createContext()

function Section({ children, disabled }) {
  return (
    <SectionContext.Provider value={{ disabled }}>
      <div data-section>{children}</div>
    </SectionContext.Provider>
  )
}

function Title({ children }) {
  let { index, activeIndex, setActiveIndex } = useContext(AccordionContext)
  let isActive = index === activeIndex
  let { disabled } = useContext(SectionContext)
  return (
    <div
      data-panel-title
      onClick={() => {
        if (!disabled) setActiveIndex(index)
      }}
      className={disabled ? 'disabled' : isActive ? 'expanded' : ''}
    >
      {children}
    </div>
  )
}

function Content({ children }) {
  let { index, activeIndex } = useContext(AccordionContext)
  let isActive = index === activeIndex
  return (
    <div data-panel-content className={isActive ? 'expanded' : ''}>
      {children}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <AccordionCC>
        <Section>
          <Title>
            Paris <span>🧀</span>
          </Title>
          <Content>
            <Description city="paris" />
          </Content>
        </Section>
        <Section>
          <Title>
            Lech <span>⛷</span>
          </Title>
          <Content>
            <Description city="lech" />
          </Content>
        </Section>
        <Section>
          <Title>
            Madrid <span>🍷</span>
          </Title>
          <Content>
            <Description city="madrid" />
          </Content>
        </Section>
      </AccordionCC>
      <style jsx global>{`
        .App {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #646f74;
        }

        [data-accordion] {
          margin: 0 auto;
          width: 400px;
          box-shadow: 0 10px 20px -10px #646f74;
        }

        [data-panel-title] {
          display: flex;
          justify-content: space-between;
          padding: 15px 15px 15px 25px;
          background: white;
          border-top: 1px solid #edf2f8;
          border-bottom: 1px solid white;
          cursor: pointer;
          transition: border 0.2s, font-weight 0.2s;
        }
        [data-panel-title]::before {
          display: inline;
          content: '+';
        }
        [data-panel-title]:hover {
          border-bottom: 1px solid #646f74;
          font-weight: bold;
        }
        [data-panel-title].expanded {
          border-bottom: 1px solid #646f74;
        }
        [data-panel-title].expanded::before {
          content: '-';
        }
        [data-panel-title].disabled {
          background: #f3f6fc;
          color: #99c9ff;
          border: 1px solid #cee4fd;
          cursor: not-allowed;
        }
        [data-panel-title].disabled::before {
          content: 'x';
        }
        [data-panel-title].disabled:hover {
          border-bottom: 1px solid #cee4fd;
        }

        [data-panel-content] {
          background: #edf2f8;
          visibility: hidden;
          height: 0;
          padding: 0;
          font-size: 0;
          transition: height 0.2s, visibility 0.2s, padding 0.2s;
        }
        [data-panel-content].expanded {
          visibility: visible;
          height: auto;
          padding: 15px;
          font-size: 1em;
          border-bottom: 1px solid #edf2f8;
        }
      `}</style>
    </div>
  )
}

export default App
