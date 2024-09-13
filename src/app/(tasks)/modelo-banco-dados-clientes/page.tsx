import Image from 'next/image'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function Page() {

  const sqlSchema = `
CREATE TABLE "Telefone" (
  "id_telefone" INT PRIMARY KEY,
  "numero_telefone" VARCHAR(15) NOT NULL,
  "id_cliente" INT,
  "id_tipo_telefone" INT,
  FOREIGN KEY ("id_cliente") REFERENCES "Cliente"("id_cliente"),
  FOREIGN KEY ("id_tipo_telefone") REFERENCES "TipoTelefone"("id_tipo_telefone")
);

CREATE TABLE "Cliente" (
  "id_cliente" INT PRIMARY KEY,
  "razao_social" VARCHAR(255) NOT NULL,
  "id_estado" INT,
  FOREIGN KEY ("id_estado") REFERENCES "Estado"("id_estado")
);

CREATE TABLE "Estado" (
  "id_estado" INT PRIMARY KEY,
  "nome_estado" VARCHAR(50) NOT NULL,
  "sigla_estado" CHAR(2) NOT NULL
);

CREATE TABLE "TipoTelefone" (
  "id_tipo_telefone" INT PRIMARY KEY,
  "descricao_tipo" VARCHAR(50) NOT NULL
);

`
  const sqlQuery = `
SELECT 
    c.id_cliente, 
    c.razao_social, 
    t.numero_telefone
FROM 
    Cliente c
JOIN 
    Telefone t ON c.id_cliente = t.id_cliente
JOIN 
    Estado e ON c.id_estado = e.id_estado
WHERE 
    e.sigla_estado = 'SP';
`

  return (

    <div className='space-y-4'>

      <h2 className='font-bold text-xl py-2'>Modelo de Banco de Dados para Cadastro de Clientes</h2>

      <div className='[&_p]:font-semibold space-y-2'>
        <p>
          Uma empresa solicitou a você um aplicativo para manutenção de um cadastro de clientes. Após a reunião de definição dos requisitos, as conclusões foram as seguintes:
          <br />
          <br />
          - Um cliente pode ter um número ilimitado de telefones;
          <br />
          - Cada telefone de cliente tem um tipo, por exemplo: comercial, residencial, celular, etc. O sistema deve permitir cadastrar novos tipos de telefone;
          <br />
          - A princípio, é necessário saber apenas em qual estado brasileiro cada cliente se encontra. O sistema deve permitir cadastrar novos estados;
          <br />
          <br />
          Você ficou responsável pela parte da estrutura de banco de dados que será usada pelo aplicativo. Assim sendo:
          <br />
          - Proponha um modelo lógico para o banco de dados que vai atender a aplicação. Desenhe as tabelas necessárias, os campos de cada uma e marque com setas os relacionamentos existentes entre as tabelas;
          <br />
          - Aponte os campos que são chave primária (PK) e chave estrangeira (FK);
          <br />
          - Faça uma busca utilizando comando SQL que traga o código, a razão social e o(s) telefone(s) de todos os clientes do estado de São Paulo (código “SP”);
        </p>
      </div>

      <div className='space-y-2'>

        <h3 className='text-lg font-medium py-2'>Modelo lógico</h3>

        <span className='grid justify-center'>
          <Image className='' src='modelo-banco-dados-clientes.svg' alt='modelo-banco-dados-clientes' width={800} height={800}></Image>
        </span>

        <SyntaxHighlighter language="sql" wrapLongLines style={dracula}>
          {sqlSchema}
        </SyntaxHighlighter>


        <h3 className='text-lg font-medium py-2'>Consulta SQL</h3>
        <SyntaxHighlighter language="sql" wrapLongLines style={dracula}>
          {sqlQuery}
        </SyntaxHighlighter>
      </div>

    </div>
  )
}

