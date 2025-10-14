import './Header.css'

function Header() {
    return <header className="fixed top-0 left-0 right-0 z-50 border-b bg-secondary/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 h-16">
            <img src="cazando-bugs/assets/cazando-bugs-logo.png" alt="Cazando bugs Logo" />

            <h1 className="font-display font-bold text-2xl" data-testid="text-logo">
              Cazando Bugs
            </h1>
          </div>
        </div>
    </header>
}

export default Header