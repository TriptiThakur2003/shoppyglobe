import Header from './Header'

function Layout({ children }) {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="page-wrapper mx-auto maxWidthh">
        {children}
      </div>
    </div>
  )
}

export default Layout
