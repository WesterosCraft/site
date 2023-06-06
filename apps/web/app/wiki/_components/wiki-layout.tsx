'use client'

import { request } from 'graphql-request'
import useSWR from 'swr'
import { useCallback, useEffect, useState, use } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import clsx from 'clsx'
// import { MobileNavigation } from './_components/mobile-navigations'
import { Navigation } from '../_components/navigation'
import { Prose } from '../_components/prose'
import { fetchLocationBySlug } from '@/lib/payload'
import { LocationQuery } from '@/lib/queries'

const title = 'TITLE: TODO'

// const fetcher = (query: string) => request('http://localhost:3000/api/graphql', query)

export default function WikiLayout({ children, tableOfContents }: any) {
  // const { data, error } = useSWR(LocationQuery('winterfell'), fetcher)

  const router = useRouter()
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const allLinks = navigation.flatMap(section => section.links)
  const linkIndex = allLinks.findIndex(link => link.href === pathname)
  const previousPage = allLinks[linkIndex - 1]
  const nextPage = allLinks[linkIndex + 1]
  const section = navigation.find(section => section.links.find(link => link.href === pathname))
  //   let currentSection = useTableOfContents(tableOfContents)

  //   function isActive(section: any) {
  //     if (section.id === currentSection) {
  //       return true
  //     }
  //     if (!section.children) {
  //       return false
  //     }
  //     return section.children.findIndex(isActive) > -1
  //   }
  return (
    <div className="relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12 w-full">
      <div className="hidden lg:relative lg:block lg:flex-none">
        <div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />
        <div className="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-16 pl-0.5">
          <div className="absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" />
          <div className="absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800 dark:block" />
          <Navigation navigation={navigation} className="w-64 pr-8 xl:w-72 xl:pr-16" />
        </div>
      </div>
      <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
        <article>
          <Prose>{children}</Prose>
        </article>
        <dl className="mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800">
          {previousPage && (
            <div>
              <dt className="font-display text-sm font-medium text-slate-900 dark:text-white">
                Previous
              </dt>
              <dd className="mt-1">
                <Link
                  className="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                  href={previousPage.href}
                >
                  &larr; {previousPage.title}
                </Link>
              </dd>
            </div>
          )}
          {nextPage && (
            <div className="ml-auto text-right">
              <dt className="font-display text-sm font-medium text-slate-900 dark:text-white">
                Next
              </dt>
              <dd className="mt-1">
                <Link
                  className="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                  href={nextPage.href}
                >
                  {nextPage.title} &rarr;
                </Link>
              </dd>
            </div>
          )}
        </dl>
      </div>
      <div className="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
        table of contents TODO
        {/* <nav aria-labelledby="on-this-page-title" className="w-56">
          {tableOfContents.length > 0 && (
            <>
              <h2
                id="on-this-page-title"
                className="font-display text-sm font-medium text-slate-900 dark:text-white"
              >
                On this page
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                table of contents
                {tableOfContents.map(section => (
                    <li key={section.id}>
                      <h3>
                        <Link href={`#${section.id}`}>
                          <a
                            className={clsx(
                              isActive(section)
                                ? 'text-sky-500'
                                : 'font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300',
                            )}
                          >
                            {section.title}
                          </a>
                        </Link>
                      </h3>
                      {section.children.length > 0 && (
                        <ul className="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400">
                          {section.children.map(subSection => (
                            <li key={subSection.id}>
                              <Link href={`#${subSection.id}`}>
                                <a
                                  className={
                                    isActive(subSection)
                                      ? 'text-sky-500'
                                      : 'hover:text-slate-600 dark:hover:text-slate-300'
                                  }
                                >
                                  {subSection.title}
                                </a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
              </ul>
            </>
          )}
        </nav> */}
      </div>
    </div>
  )
}

function useTableOfContents(tableOfContents: any) {
  let [currentSection, setCurrentSection] = useState(tableOfContents[0]?.id)

  let getHeadings = useCallback(() => {
    // @ts-ignore
    function* traverse(node: any) {
      if (Array.isArray(node)) {
        for (let child of node) {
          yield* traverse(child)
        }
      } else {
        let el = document.getElementById(node.id)
        if (!el) return

        let style = window.getComputedStyle(el)
        let scrollMt = parseFloat(style.scrollMarginTop)

        let top = window.scrollY + el.getBoundingClientRect().top - scrollMt
        yield { id: node.id, top }

        for (let child of node.children ?? []) {
          yield* traverse(child)
        }
      }
    }

    return Array.from(traverse(tableOfContents))
  }, [tableOfContents])

  useEffect(() => {
    let headings = getHeadings()
    if (tableOfContents.length === 0 || headings.length === 0) return

    function onScroll() {
      let sortedHeadings: any[] = headings.concat([]).sort((a: any, b: any) => a.top - b.top)

      let top = window.pageYOffset
      let current = sortedHeadings[0].id
      for (let i = 0; i < sortedHeadings.length; i++) {
        if (top >= sortedHeadings[i].top) {
          current = sortedHeadings[i].id
        }
      }
      setCurrentSection(current)
    }

    window.addEventListener('scroll', onScroll, {
      capture: true,
      passive: true,
    })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll, {
        capture: true,
        // @ts-ignore
        passive: true,
      })
    }
  }, [getHeadings, tableOfContents])

  return currentSection
}

const navigation = [
  {
    title: 'Introduction',
    links: [
      { title: 'Getting started', href: '/' },
      { title: 'Installation', href: '/docs/installation' },
    ],
  },
  {
    title: 'Core concepts',
    links: [
      { title: 'Understanding caching', href: '/docs/understanding-caching' },
      {
        title: 'Predicting user behavior',
        href: '/docs/predicting-user-behavior',
      },
      { title: 'Basics of time-travel', href: '/docs/basics-of-time-travel' },
      {
        title: 'Introduction to string theory',
        href: '/docs/introduction-to-string-theory',
      },
      { title: 'The buttery effect', href: '/docs/the-butterfly-effect' },
    ],
  },
  {
    title: 'Advanced guides',
    links: [
      { title: 'Writing plugins', href: '/docs/writing-plugins' },
      { title: 'Neuralink integration', href: '/docs/neuralink-integration' },
      { title: 'Temporal paradoxes', href: '/docs/temporal-paradoxes' },
      { title: 'Testing', href: '/docs/testing' },
      { title: 'Compile-time caching', href: '/docs/compile-time-caching' },
      {
        title: 'Predictive data generation',
        href: '/docs/predictive-data-generation',
      },
    ],
  },
  {
    title: 'API reference',
    links: [
      { title: 'CacheAdvance.predict()', href: '/docs/cacheadvance-predict' },
      { title: 'CacheAdvance.flush()', href: '/docs/cacheadvance-flush' },
      { title: 'CacheAdvance.revert()', href: '/docs/cacheadvance-revert' },
      { title: 'CacheAdvance.regret()', href: '/docs/cacheadvance-regret' },
    ],
  },
  {
    title: 'Contributing',
    links: [
      { title: 'How to contribute', href: '/docs/how-to-contribute' },
      { title: 'Architecture guide', href: '/docs/architecture-guide' },
      { title: 'Design principles', href: '/docs/design-principles' },
    ],
  },
]
