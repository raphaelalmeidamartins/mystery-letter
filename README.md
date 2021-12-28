<small>(for the English version, <a href="#en">click here</a>)</small>

![Prévia da página - Preview of the page](./preview.gif)

# Mystery Letter
<h2>:brazil: Português</h2>
<p id="pt">Projeto de HTML, CSS e JavaScript desenvolvido por mim (<a href="https://www.linkedin.com/in/raphaelameidamartins/" target="_blank" rel="external">Raphael Martins</a>) ao final do Bloco 5 do Módulo 1 do curso de Desenvolvimento Web da <a href="https://www.betrybe.com" targe="_blank" rel="nofollow">Trybe</a>. Obtive aprovação com 100% dos requisitos obrigatórios e opcionais atingidos, e seguindo as todas as regras de padronização do código e boas práticas do Linter.</p>
<p>O projeto consistiu no desenvolvimento de uma página dinâmica que quando a pessoa usuária inserir um texto, é gerada uma carta em que cada palavra possui uma estilização aleatória.</p>
<p><a href="https://raphaelalmeidamartins.github.io/project-mystery-letter/" target="_blank">Clique aqui</a> para conferir o resultado do projeto no navegador.</p>

![Minha nota no projeto - My grade of the project](./nota.png)

### Requisitos
<ol>
  <li>Deve haver um input com o <code>id="carta-texto"</code> onde a pessoa usuária poderá digitar o conteúdo da carta</li>
  <li>Deve haver um parágrafo com o <code>id="carta-gerada"</code> onde a pessoa usuária verá o resultado de sua carta misteriosa</li>
  <li>Deve haver um botão com <code>id="criar-carta"</code> e ao clicar nesse botão, a carta misteriosa deve ser gerada
    <ul>
      <li>Cada palavra deve aparecer dentro de uma tag <code>span</code>.</li>
      <li>As tags <code>span</code> devem ser adicionadas como filhas do parágrafo <code>carta-gerada</code>.</li>
    </ul>
  </li>
  <li>Ao criar uma carta através do botão com <code>id="criar-carta"</code>, o input com <code>id="carta-texto"</code> deve permanecer com o texto digitado</li>
  <li>Se a pessoa usuária não preencher o campo ou preencher com apenas espaços vazios adicionar a mensagem <em>'Por favor, digite o conteúdo da carta.'</em></li>
  <li>Crie a classe <code>newspaper</code> com as seguintes propriedades:
    <ul>
      <li><code>background-color</code> com o valor <code>antiquewhite</code></li>
      <li><code>font-family</code> com o valor <code>Times New Roman</code></li>
      <li><code>font-weight</code> com o valor <code>bold</code></li>
    </ul>
  </li>
  <li>Crie a classe <code>magazine1</code> com as seguintes propriedades:
    <ul>
      <li><code>background-color</code> com o valor <code>teal</code></li>
      <li><code>color</code> com o valor <code>white</code></li>
      <li><code>font-family</code> com o valor <code>Verdana</code></li>
      <li><code>font-weight</code> com o valor <code>900</code></li>
      <li><code>text-transform</code> com o valor <code>uppercase</code></li>
    </ul>
  </li>
  <li>Crie a classe <code>magazine2</code> com as seguintes propriedades:
    <ul>
      <li><code>background-image</code> com a imagem <code>images/pink-pattern.png</code></li>
      <li><code>color</code> com o valor <code>fuchsia</code></li>
      <li><code>font-family</code> com o valor <code>Verdana</code></li>
      <li><code>font-weight</code> com o valor <code>900</code></li>
    </ul>
  </li>
  <li>Crie a classe <code>medium</code> com as seguintes propriedades:
    <ul>
      <li><code>font-size</code> com o valor <code>20px</code></li>
      <li><code>padding</code> com o valor <code>8px</code></li>
    </ul>
  </li>
  <li>Crie a classe <code>big</code> com as seguintes propriedades:
    <ul>
      <li><code>font-size</code> com o valor <code>30px</code></li>
      <li><code>padding</code> com o valor <code>10px</code></li>
    </ul>
  </li>
  <li>Crie a classe <code>reallybig</code> com as seguintes propriedades:
    <ul>
      <li><code>font-size</code> com o valor <code>40px</code></li>
      <li><code>padding</code> com o valor <code>15px</code></li>
    </ul>
  </li>
  <li>Crie a classe <code>rotateleft</code> com as seguintes propriedades:
    <ul>
      <li><code>transform</code> com o valor <code>rotate(-5deg)</code></li>
    </ul>
  </li>
  <li>Crie a classe <code>rotateright</code> com as seguintes propriedades:
    <ul>
      <li><code>transform</code> com o valor <code>rotate(5deg)</code></li>
    </ul>
  </li>
  <li>Crie a classe <code>skewleft</code> com as seguintes propriedades:
    <ul>
      <li><code>transform</code> com o valor <code>skewX(10deg)</code>;</li>
    </ul>
  </li>
  <li>Crie a classe <code>skewright</code> com as seguintes propriedades:
    <ul>
      <li><code>transform</code> com o valor <code>skewX(-10deg)</code>;</li>
    </ul>
  </li>
  <li>Adicione as classes de forma aleatória a fim de estilizar as palavras.
    <ul>
      <li>As classes devem ser adicionadas às tags <code>span</code> de forma <strong>aleatória</strong>.</li>
      <li>Sempre adicione mais de uma classe em uma palavra. Utilize as classes:
        <ul>
          <li><code>newspaper</code>, <code>magazine1</code>, <code>magazine2</code> (Grupo estilo)</li>
          <li><code>medium</code>, <code>big</code>, <code>reallybig</code> (Grupo tamanho)</li>
          <li><code>rotateleft</code>, <code>rotateright</code> (Grupo rotação)</li>
          <li><code>skewleft</code>, <code>skewright</code> (Grupo inclinação)</li>
        </ul>
      </li>
      <li>Não é necessário utilizar classes de todos os grupos em uma palavra, mas <strong>não</strong> utilize mais de uma classe do mesmo grupo.</li>
    </ul>
  </li>
</ol>

### Bônus
<ol start="17">
  <li>Com uma carta misteriosa gerada, adicione a possibilidade de alterar o estilo de uma palavra específica ao clicar nela
    <ul>
      <li>Ao clicar em uma palavra, um novo estilo <strong>aleatório</strong> deve ser aplicado.</li>
      <li>O número de mudanças deve ser ilimitado;</li>
    </ul>
  </li>
  <li>Deve haver um parágrafo com o <code>id="carta-contador"</code> onde existirá um contador de palavras</li>
</ol>
<br>

<h2 id="en">:us: English</h2>
<p>Project of HTML, CSS and JavaScript develop by me (<a href="https://www.linkedin.com/in/raphaelameidamartins/" target="_blank" rel="external">Raphael Martins</a>) in the end of the Unit 5 Module 1 of the Web Development course at <a href="https://www.betrybe.com" targe="_blank" rel="nofollow">Trybe</a>. I was approved with 100% of the mandatory and optional requirements met, and following all the Linter rules of best practices and code standardization.</p>
<p>We had to develop a dynamic web page that when the user inserts a text, a letter is generated, with each word having a randomly selected style.</p>
<p><a href="https://raphaelalmeidamartins.github.io/project-mystery-letter/" target="_blank">Click here</a> to check out the final version of the project on your browser.</p>

![My grade of the project - Minha nota no projeto](./nota.png)

### Requirements
<ol>
  <li>There should be an input element with <code>id="carta-texto"</code> where the user can type the content of the letter</li>
  <li>There should be a paragraph element with <code>id="carta-gerada"</code> where the content of the letter is going to be displayed</li>
  <li>Your page also needs to have a button element with <code>id="criar-carta"</code>, and when the user clicks in this button, the mystery letter should be generated
    <ul>
      <li>Each word should be displayed inside a <code>span</code> tag.</li>
      <li>The <code>span</code> tags should be added as children of the element paragraph identified with <code>carta-gerada</code> as its <code>id</code>.</li>
    </ul>
  </li>
  <li>When the user clicks in the button with <code>id="criar-carta"</code>, the typed text should still be inside the input element with <code>id="carta-texto"</code></li>
  <li>If the user doesn't type anything in the input element or only types empty spaces, the message <em>'Por favor, digite o conteúdo da carta.'</em> (<code>"Please, type the content of the letter"</code>) should be displayed inside the paragraph element with <code>carta-gerada</code> as its <code>id</code></li>
  <li>Create the class <code>newspaper</code> with the following properties:
    <ul>
      <li><code>background-color</code> with the value <code>antiquewhite</code></li>
      <li><code>font-family</code> with the value <code>Times New Roman</code></li>
      <li><code>font-weight</code> with the value <code>bold</code></li>
    </ul>
  </li>
  <li>Create the class <code>magazine1</code> com as seguintes propriedades:
    <ul>
      <li><code>background-color</code> with the value <code>teal</code></li>
      <li><code>color</code> with the value <code>white</code></li>
      <li><code>font-family</code> with the value <code>Verdana</code></li>
      <li><code>font-weight</code> with the value <code>900</code></li>
      <li><code>text-transform</code> with the value <code>uppercase</code></li>
    </ul>
  </li>
  <li>Create the class <code>magazine2</code> with the following properties:
    <ul>
      <li><code>background-image</code> with the image <code>images/pink-pattern.png</code></li>
      <li><code>color</code> with the value <code>fuchsia</code></li>
      <li><code>font-family</code> with the value <code>Verdana</code></li>
      <li><code>font-weight</code> with the value <code>900</code></li>
    </ul>
  </li>
  <li>Create the class <code>medium</code> with the following properties:
    <ul>
      <li><code>font-size</code> with the value <code>20px</code></li>
      <li><code>padding</code> with the value <code>8px</code></li>
    </ul>
  </li>
  <li>Create the class <code>big</code> with the following properties:
    <ul>
      <li><code>font-size</code> with the value <code>30px</code></li>
      <li><code>padding</code> with the value <code>10px</code></li>
    </ul>
  </li>
  <li>Create the class <code>reallybig</code> with the following properties:
    <ul>
      <li><code>font-size</code> with the value <code>40px</code></li>
      <li><code>padding</code> with the value <code>15px</code></li>
    </ul>
  </li>
  <li>Create the class <code>rotateleft</code> with the following properties:
    <ul>
      <li><code>transform</code> with the value <code>rotate(-5deg)</code></li>
    </ul>
  </li>
  <li>Create the class <code>rotateright</code> with the following properties:
    <ul>
      <li><code>transform</code> with the value <code>rotate(5deg)</code></li>
    </ul>
  </li>
  <li>Create the class <code>skewleft</code> with the following properties:
    <ul>
      <li><code>transform</code> with the value <code>skewX(10deg)</code>;</li>
    </ul>
  </li>
  <li>Create the class <code>skewright</code> with the following properties:
    <ul>
      <li><code>transform</code> with the value <code>skewX(-10deg)</code>;</li>
    </ul>
  </li>
  <li>Style the words adding to them the classes randomly.
  <ul>
    <li>The classes should be added to the <code>span</code> tags <strong>randomly</strong>.</li>
    <li>Always add more than one class to a word. Use the following classes:
      <ul>
        <li><code>newspaper</code>, <code>magazine1</code>, <code>magazine2</code> (Style group)</li>
        <li><code>medium</code>, <code>big</code>, <code>reallybig</code> (Size group)</li>
        <li><code>rotateleft</code>, <code>rotateright</code> (Rotation group)</li>
        <li><code>skewleft</code>, <code>skewright</code> (Inclination group)</li>
      </ul>
    </li>
    <li>It's not necessary to add classes from every group to a word, however <strong>do not</strong> use more than one class from the same group.</li>
  </ul>
</li>
</ol>

### Bonus
<ol start="17">
  <li>With a mystery letter generated, it should be possible to switch (randomly) the style of a word by clicking in it
    <ul>
      <li>When clicking in a word, another <strong>random</strong> style should be applied to it.</li>
      <li>The number of changes should be unlimited;</li>
    </ul>
  </li>
  <li>There must be a paragraph element with <code>id="carta-contador"</code> where there is going to be a word counter</li>
</ol>
