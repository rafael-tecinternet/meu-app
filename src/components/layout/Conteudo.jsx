import Artigo from "../Artigo";

const Conteudo = () => {
  const cursos = ["Desing", "PHP", "React"];
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

        <Artigo
          titulo="Artigo 1"
          subtitulo="Subtitilo do Artigo 1"
          curso={cursos[0]}
        >
          Este é o texto do primeiro artigo...
        </Artigo>
        <Artigo
          titulo="Artigo 2"
          subtitulo="Subtitilo do Artigo 2"
          curso={cursos[1]}
        >
          Este é o texto do segundo artigo...
        </Artigo>
        <Artigo
          titulo="Artigo 3"
          subtitulo="Subtitilo do Artigo 3"
          curso={cursos[2]}
        >
          Este é o texto do terceiro artigo...
        </Artigo>
      </section>
    </main>
  );
};

export default Conteudo;
