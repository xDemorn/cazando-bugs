import './Content.css'
import { useState } from 'react';
import type { Podcast } from '../podcast/Podcast';
import PodcastComponent from '../podcast/Podcast';

function Content() {
  const [podcasts] = useState<Array<Podcast>>([{
    id: 0,
    title: 'Dragones volando al revés',
    upcoming: true,
    hosts: ['Alberto', 'Diego', 'Mikolaj']
  },
  {
    id: 1,
    title: 'Código espagueti',
    upcoming: false,
    thumbnail: 'assets/spaghetti-code-podcast-thumbnail.jpg',
    audio: 'assets/podcast_codigo_espagueti.mp3',
    hosts: ['Alberto', 'Diego', 'Mikolaj']
  }]);

  return <main className="pt-16">
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20"
        style={{
          backgroundImage: 'url(assets/background-main.png)',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display font-bold text-5xl md:text-6xl tracking-tight mb-6 leading-tight">
              <span>Tu próximo <span className="text-primary">Podcast</span> favorito</span>
              <br />
              <span>Te encuentra a ti!</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Hablamos sobretodo de videojuegos pero, en ocasiones hablamos de temas más populares!
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="browse-section" className="py-20 bg-card/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {podcasts.map((podcast) => (
            <PodcastComponent
              key={podcast.id}
              podcast={podcast}
            />
          ))}
        </div>
      </div>
    </section>
  </main>
}

export default Content