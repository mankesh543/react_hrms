import Theme from '@/components/template/Theme'
import Layout from '@/components/layouts'
import { AuthProvider } from '@/auth'
import Views from '@/views'
import appConfig from './configs/app.config'
import './locales'

if (appConfig.enableMock) {
    import('./mock')
}

function App() {
    return (
        <Theme>
            <AuthProvider>
                <Layout>
                    <Views />
                </Layout>
            </AuthProvider>
        </Theme>
    )
}

export default App
