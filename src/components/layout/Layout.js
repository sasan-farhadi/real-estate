import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main style={{ minHeight: "700px" }}>
                {children}
            </main>
            <Footer />
        </>
    )
}
export default Layout
