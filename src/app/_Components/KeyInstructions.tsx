export default function KeyInstructions() {
  return (
    <div className=" p-4 lg:p-10 w-full flex justify-center">
      <div className="bg-background-dark rounded-lg px-20 py-16 w-full max-w-[833px]">
        <h2
          className="text-center text-lg text-gray font-semibold
        mb-10"
        >
          Guia inicial para obter uma chave da OpenAI
        </h2>
        <ol className="text-white list-decimal space-y-4">
          <li>Realize um cadastro: Acesse o site da OpenA;i</li>
          <li>
            Acesse o painel de API: Dentro do painel va até o seu avatar e
            clique em <strong>View API keys;</strong>
          </li>
          <li>
            Crie uma nova chave: Ao clicar no botão{" "}
            <strong>+ Create a new secret key</strong> adicione um apelido para
            a chave e um novo código será gerado;
          </li>
          <li>Copia chave gerada e cole abaixo; 👇</li>
        </ol>
      </div>
    </div>
  );
}
