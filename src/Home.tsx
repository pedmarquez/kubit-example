import { Calendar, Container, Tabs } from "@kubit-ui-web/react-components";

const Home = () => {
  return (

    // <Layout
    //   variant='DEFAULT'
    //   backgroundColor='#f5f5f5'
    //   columnsConfig={{
    //     aside:{
    //       DESKTOP: 3,
    //       LARGE_DESKTOP: 3,
    //       MOBILE: 4,
    //       TABLET: 8
    //     },
    //     header: {
    //       DESKTOP: 12,
    //       LARGE_DESKTOP: 12,
    //       MOBILE: 4,
    //       TABLET: 8
    //   },
    //     main: {
    //       DESKTOP: 9,
    //       DESKTOP_FULL: 12,
    //       LARGE_DESKTOP: 9,
    //       MOBILE: 4,
    //       TABLET: 8
    //   }
    //   }}
    //   mainContent={<div>Hello, Jhon Doe</div>}
    //   asideContent={<Tabs
    //     variant="DEFAULT"
    //     tabs={[{ content: 'Calendar' }, { content: '+' }]}
    //     content={['Content option 1']}
    //   />}
    // />
    <Container
      variant="DEFAULT"
    >
      <div
        style={{ width: '60%' }}
      >
        Hello, Jhon Doe
      </div>
      <div >
        <Tabs
          variant="DEFAULT"
          tabs={[{ content: 'Calendar' }, { content: '+' }]}
          content={[
            <Calendar
              open={true}
              minDate={new Date('2000-01-01')}
              configCalendar={{


                leftArrowIcon: {
                  icon: "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.2929%206.293L7.58594%2012L13.2929%2017.707L14.7069%2016.293L10.4139%2012L14.7069%207.707L13.2929%206.293Z'%20fill='%231A1A1A'/%3e%3c/svg%3e",
                  "aria-label": "Previous month"
                },
                rightArrowIcon: {
                  icon: "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.707%2017.707L16.414%2012L10.707%206.293L9.29297%207.707L13.586%2012L9.29297%2016.293L10.707%2017.707Z'%20fill='%231A1A1A'/%3e%3c/svg%3e",
                  "aria-label": "Next month"
                },
                variantSelectorButton: "PRIMARY",
                sizeSelectorButton: "LARGE"
              }
              }

            />]}
        />
      </div>
    </Container>

  )
}

export default Home;