"use client"

import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"
import { useServerInsertedHTML } from "next/navigation"
import { useState } from "react"
import type { ReactNode } from "react"

// Without this, Emotion emits each rule as a <style> element inside the React
// tree, which breaks hydration once any content streams through <Suspense>.
// Routing the rules through Next's inserted-HTML channel keeps them out of the
// reconciled tree. See https://github.com/chakra-ui/chakra-ui/issues/10942
export function EmotionRegistry({ children }: { children: ReactNode }) {
  const [{ cache, flush }] = useState(() => {
    const cache = createCache({ key: "css" })
    cache.compat = true

    const previousInsert = cache.insert
    let inserted: string[] = []

    cache.insert = (...args) => {
      const serialized = args[1]
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name)
      }
      return previousInsert(...args)
    }

    const flush = () => {
      const previouslyInserted = inserted
      inserted = []
      return previouslyInserted
    }

    return { cache, flush }
  })

  useServerInsertedHTML(() => {
    const names = flush()
    if (names.length === 0) return null

    const styles = names.map((name) => cache.inserted[name]).join("")

    return (
      <style
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    )
  })

  return <CacheProvider value={cache}>{children}</CacheProvider>
}
