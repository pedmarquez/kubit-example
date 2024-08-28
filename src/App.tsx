// import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import NoMatch from './NoMatch'
import { IGenericLink, ThemeProvider, KUBIT_STYLES, UtilsProvider, DateFormatOptions, formatDate, FormatWeekdayOptionType, getAddDays, getAddMonths, getAddYears, getAllMonthNames, getAllWeekdayNames, getSubDays, getSubMonths, getSubYears, isAfter, isBefore, isDatesEqual, transformDate,  } from '@kubit-ui-web/react-components'
import React from 'react'

import { Link as RouterLink } from 'react-router-dom';

const App = () => {
  const Link = React.forwardRef(function Link(props: IGenericLink, ref: unknown) {
    return <RouterLink className={props.className} to={props.url}>{props.children}</RouterLink>;
  });

  //onst defaultGenericComponents = useGenericComponents()

  return (
    <UtilsProvider
        dateHelpers={{
          isAfter: (date1: Date, date2: Date) => {
            return isAfter(date1, date2);
          },
          isBefore: (date1: Date, date2: Date) => {
            return isBefore(date1, date2);
          },
          isDatesEqual: (firsDate: string | number | Date, secondDate: string | number | Date) => {
            return isDatesEqual(firsDate, secondDate);
          },
          getAddDays: (date: Date, days: number) => {
            return getAddDays(date, days);
          },
          getAddMonths: (date: Date, months: number) => {
            return getAddMonths(date, months);
          },
          getAddYears: (date: Date, years: number) => {
            return getAddYears(date, years);
          },
          getSubDays: (date: Date, days: number) => {
            return getSubDays(date, days);
          },
          getSubMonths: (date: Date, months: number) => {
            return getSubMonths(date, months);
          },
          getSubYears: (date: Date, years: number) => {
            return getSubYears(date, years);
          },
          getAllMonthName: () => {
            return getAllMonthNames();
          },
          getAllWeekdayName: (weekdayFormat: FormatWeekdayOptionType, isSundayFirst: boolean) => {
            return getAllWeekdayNames(weekdayFormat, isSundayFirst);
          },
        }}
        formatDate={(date: Date, format: string | DateFormatOptions) => {
          return formatDate(date, format);
        }}
        transformDate={(date: string | number, format: string | undefined) => {
          return transformDate(date, format);
        }}
      >
      <ThemeProvider styles={KUBIT_STYLES} genericComponents={{
       
        LINK: Link,
        // IMAGE: undefined
      }} themeInformation={{
        name: 'Kubit'
      }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />


            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </ThemeProvider>
      </UtilsProvider>
  )
}

export default App
