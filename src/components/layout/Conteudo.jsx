import Artigo from "../Artigo";

const Conteudo = () => {
  const artigos = [
    {
      titulo: "Artigo 1",
      subtitulo: "Este é o subtitulo do artigo 1 ...",
      texto: "Este é o conteúdo do artigo 1 ...",
      curso: "JS Avançado",
    },
    {
      titulo: "Artigo 2",
      subtitulo: "Este é o subtitulo do artigo 2 ...",
      texto: "Este é o conteúdo do artigo 2 ...",
      curso: "Node.js Avançado",
    },
    {
      titulo: "Artigo 3",
      subtitulo: "Este é o subtitulo do artigo 3 ...",
      texto: "Este é o conteúdo do artigo 3 ...",
      curso: "React Avançado",
    },
  ];

  return (
    <main>
      <section>
        {/* AQUI É COMENTÁRIO DENTRO DO JSX  */}
        <h2>Conteúdo do site....</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ab
          inventore, sapiente impedit numquam maxime quia voluptates, et at modi
          harum recusandae? Inventore illo consectetur, quisquam distinctio
          commodi voluptate fugit.
        </p>
        {artigos.map((artigo) => {
          return (
            <Artigo
              titulo={artigo.titulo}
              subtitulo={artigo.subtitulo}
              curso={artigo.curso}
            >
              {artigo.texto}
            </Artigo>
          );
        })}
      </section>
    </main>
  );
};

export default Conteudo;
