const { textVide } = require('text-vide');
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

const text =
  'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';

const textWithHtmlTags = `<div class="bionic-reader-container">
          
          
<span class="w bionic"><b class="b bionic">nor</b>mal </span><span class="w bionic"><b class="b bionic">te</b>xt</span>: <span class="w bionic"><b class="b bionic">abcd</b>efg</span><br><span class="w bionic"><b class="b bionic">wi</b>th </span><span class="w bionic"><b class="b bionic">a</b> </span><span class="w bionic"><b class="b bionic">t</b>ag</span>: <a target="_blank"><span class="w bionic"><b class="b bionic">ab</b>cd</span></a><span class="w bionic"><b class="b bionic">e</b>fg</span><br><span class="w bionic"><b class="b bionic">wi</b>th </span><span class="w bionic"><b class="b bionic">b</b> </span><span class="w bionic"><b class="b bionic">t</b>ag</span>: <b><span class="w bionic"><b class="b bionic">ab</b>cd</span></b><span class="w bionic"><b class="b bionic">e</b>fg</span><br><span class="w bionic"><b class="b bionic">wi</b>th </span><span class="w bionic"><b class="b bionic">d</b>iv </span><span class="w bionic"><b class="b bionic">t</b>ag</span>: <div><span class="w bionic"><b class="b bionic">ab</b>cd</span></div><span class="w bionic"><b class="b bionic">e</b>fg</span><br>

  <!-- <div class="br-foot-node">
      <p style="margin: 32px 0 32px 70px; font-weight: 700; font-size: 26px; line-height: 1.6em;">
          —
      </p>
      <p>
          Bionic Reading<sup>®</sup><br>
          A higher dimension of reading.<br>
          <a href="https://bionic-reading.com">bionic-reading.com</a>
      </p>
      <br/>
      <br/>
      <p>
          
      </p>
  </div> -->

</div>`;

suite
  .add('normal#ignoreHtmlTags', () => textVide(text))
  .add('normal#notIgnoreHtmlTags', () =>
    textVide(text, { ignoreHtmlTag: false }),
  )

  .add('withHtmlTags#ignoreHtmlTags', () => textVide(textWithHtmlTags))
  .add('withHtmlTags#notIgnoreHtmlTags', () =>
    textVide(textWithHtmlTags, { ignoreHtmlTag: false }),
  )

  .on('start', () =>
    console.log(
      [
        new Date().toString(),
        `length of normal text: ${text.length}`,
        `length of text with html tags: ${textWithHtmlTags.length}`,
        '',
      ].join('\n'),
    ),
  )
  .on('cycle', evt => {
    console.log(evt.target.toString());
  })
  .run({ async: true });
