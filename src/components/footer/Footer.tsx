// import './Footer.css'

import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

function Footer() {
    return <footer className="border-t py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-display font-bold text-xl mb-4">Cazando Bugs</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Descubre anecdotas sobre videojuegos.
            </p>
          </div>

          <div>
            {/* <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Button variant='link' className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-features">
                  Features
                </Button>
              </li>
              <li>
                <Button variant='link' className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-pricing">
                  Pricing
                </Button>
              </li>
              <li>
                <Button variant='link' className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-mobile">
                  Mobile App
                </Button>
              </li>
            </ul> */}
          </div>

          <div>
            {/* <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Button variant='link' className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-blog">
                  Blog
                </Button>
              </li>
              <li>
                <Button variant='link' className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-help">
                  Help Center
                </Button>
              </li>
              <li>
                <Button variant='link' className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-api">
                  API
                </Button>
              </li>
            </ul> */}
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quedate Conectado</h4>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="correo_ejemplo@gmail.com"
                className="text-sm"
                data-testid="input-newsletter"
              />
              <Button data-testid="button-subscribe">Suscribete</Button>
            </div>
            <div className="flex gap-2 mt-4">
              <Button variant="ghost" size="icon" data-testid="button-social-github">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="button-social-x">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="button-social-linkedin">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Cazando Bugs. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Button variant='link' className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-privacy">
              Privacidad
            </Button>
            <Button variant='link' className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-terms">
              Términos
            </Button>
          </div>
        </div>
      </div>
    </footer>
}

export default Footer