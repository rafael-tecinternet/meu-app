import Artigo from "../Artigo";

const Conteudo = () => {
  // Comentário JS ctrl ;
  /* Comentário JS shift alt a */
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

        <Artigo />
        <Artigo />
        <Artigo />
      </section>
    </main>
  );
};

export default Conteudo;