import { useState, useEffect } from 'react'

// Good example API to practice with:
// https://api.github.com/users/username/repos

// Good non-API example hook:
function useMedia(query) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => {
      setMatches(media.matches)
    }
    media.addListener(listener)
    return () => media.removeListener(listener)
  }, [matches, query])

  return matches
}

export default function EffectExample() {
  return (
    <>
      <div>Look at the code to look at the examples! EffectExample.js :)</div>
    </>
  )
}
