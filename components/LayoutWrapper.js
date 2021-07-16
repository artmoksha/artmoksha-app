import Footer from './common/footer'
import Header from './common/header'

const LayoutWrapper = ({ children }) => {
  return (
    <section className="flex flex-col justify-between h-screen font-nunito">
      <Header />
      <main className="mb-auto mt-16">{children}</main>
      <Footer />
    </section>
  )
}

export default LayoutWrapper
