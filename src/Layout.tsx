import { Container, Layout as KubitLayout, Link } from '@kubit-ui-web/react-components'
import { Outlet } from 'react-router-dom';
const Layout = () => {
    
    return (
        <KubitLayout
            variant='DEFAULT'
            backgroundColor='#f5f5f5'
            //gridConfig={undefined}
            columnsConfig={{
                aside: {
                    DESKTOP: 3,
                    LARGE_DESKTOP: 3,
                    MOBILE: 4,
                    TABLET: 8
                },
                footer: {
                    DESKTOP: 12,
                    LARGE_DESKTOP: 12,
                    MOBILE: 4,
                    TABLET: 8
                },
                header: {
                    DESKTOP: 12,
                    LARGE_DESKTOP: 12,
                    MOBILE: 4,
                    TABLET: 8
                },
                main: {
                    DESKTOP: 9,
                    DESKTOP_FULL: 12,
                    LARGE_DESKTOP: 9,
                    MOBILE: 4,
                    TABLET: 8
                }
            }}
            headerContent={
                <Container
                    variant="ALTERNATIVE"
                >
                    <Link variant="PRIMARY" url='/'
                
                    >Home</Link>
                   
                    <Link variant="PRIMARY" url="/about"
                    
                    >About</Link>

                </Container>



            }
            mainContent={<div style={{ height: '80vh' }}><Outlet /></div>}
        />

    );
}

export default Layout;