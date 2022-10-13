import Artigo from "../Artigo";

const Conteudo = () => {
  const artigos = [
    {
      id: 1,
      titulo: "Artigo 1",
      subtitulo: "Este é o subtitulo do artigo 1 ...",
      texto: "Este é o conteúdo do artigo 1 ...",
      curso: "JS Avançado",
    },
    {
      id: 2,
      titulo: "Artigo 2",
      subtitulo: "Este é o subtitulo do artigo 2 ...",
      texto: "Este é o conteúdo do artigo 2 ...",
      curso: "Node.js Avançado",
    },
    {
      id: 3,
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
        {artigos.map(({ id, titulo, subtitulo, curso, texto }) => (
          <Artigo key={id} titulo={titulo} subtitulo={subtitulo} curso={curso}>
            {texto}
          </Artigo>
        ))}
      </section>
    </main>
  );
};

export default Conteudo;
