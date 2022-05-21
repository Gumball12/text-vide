import bionicReading from '..';
import { describe, expect, it } from 'vitest';

describe('test bionicReading module', () => {
  it('test paragraph 1', () => {
    const text =
      'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
    const expectedText =
      '<b>or</b>em <b>ips</b>um <b>dol</b>or <b>si</b>t <b>ame</b>t, <b>conse</b>tetur <b>sadip</b>scing <b>eli</b>tr, <b>se</b>d <b>di</b>am <b>non</b>umy <b>eir</b>mod <b>tem</b>por <b>invi</b>dunt <b>u</b>t <b>lab</b>ore <b>e</b>t <b>dol</b>ore <b>mag</b>na <b>aliq</b>uyam <b>era</b>t, <b>se</b>d <b>di</b>am <b>volup</b>tua. <b>A</b>t <b>ve</b>ro <b>eo</b>s <b>e</b>t <b>accu</b>sam <b>e</b>t <b>jus</b>to <b>du</b>o <b>dolo</b>res <b>e</b>t <b>e</b>a <b>reb</b>um. <b>St</b>et <b>cli</b>ta <b>ka</b>sd <b>guber</b>gren, <b>n</b>o <b>se</b>a <b>taki</b>mata <b>sanc</b>tus <b>es</b>t <b>Lor</b>em <b>ips</b>um <b>dol</b>or <b>si</b>t <b>ame</b>t. <b>Lor</b>em <b>ips</b>um <b>dol</b>or <b>si</b>t <b>ame</b>t, <b>conse</b>tetur <b>sadip</b>scing <b>eli</b>tr, <b>se</b>d <b>di</b>am <b>non</b>umy <b>eir</b>mod <b>tem</b>por <b>invi</b>dunt <b>u</b>t <b>lab</b>ore <b>e</b>t <b>dol</b>ore <b>mag</b>na <b>aliq</b>uyam <b>era</b>t, <b>se</b>d <b>di</b>am <b>volup</b>tua. <b>A</b>t <b>ve</b>ro <b>eo</b>s <b>e</b>t <b>accu</b>sam <b>e</b>t <b>jus</b>to <b>du</b>o <b>dolo</b>res <b>e</b>t <b>e</b>a <b>reb</b>um. <b>St</b>et <b>cli</b>ta <b>ka</b>sd <b>guber</b>gren, <b>n</b>o <b>se</b>a <b>taki</b>mata <b>sanc</b>tus <b>es</b>t <b>Lor</b>em <b>ips</b>um <b>dol</b>or <b>si</b>t <b>ame</b>t.';

    expect(bionicReading(text)).toBe(expectedText);
  });

  it('test paragraph 2', () => {
    const text =
      'Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content.';
    const expectedText =
      '<b>Bion</b>ic <b>Readi</b>ng <b>i</b>s a <b>ne</b>w <b>meth</b>od <b>facilitati</b>ng <b>th</b>e <b>readi</b>ng <b>proce</b>ss <b>b</b>y <b>guidi</b>ng <b>th</b>e <b>eye</b>s <b>throu</b>gh <b>tex</b>t <b>wit</b>h <b>artifici</b>al <b>fixati</b>on <b>poin</b>ts. <b>A</b>s a <b>resu</b>lt, <b>th</b>e <b>read</b>er <b>i</b>s <b>onl</b>y <b>focusi</b>ng <b>o</b>n <b>th</b>e <b>highlight</b>ed <b>initi</b>al <b>lette</b>rs <b>an</b>d <b>let</b>s <b>th</b>e <b>bra</b>in <b>cent</b>er <b>comple</b>te <b>th</b>e <b>wor</b>d. <b>I</b>n a <b>digit</b>al <b>wor</b>ld <b>dominat</b>ed <b>b</b>y <b>shall</b>ow <b>for</b>ms <b>o</b>f <b>readi</b>ng, <b>Bion</b>ic <b>Readi</b>ng <b>aim</b>s <b>t</b>o <b>encoura</b>ge a <b>mor</b>e <b>i</b>n-<b>dep</b>th <b>readi</b>ng <b>an</b>d <b>understand</b>ing <b>o</b>f <b>writt</b>en <b>conte</b>nt.';

    expect(bionicReading(text)).toBe(expectedText);
  });

  it('test korean', () => {
    const text =
      '바이오닉 리딩은 인위적인 fixation point를 사용하여 문장을 읽기 쉽게 만들어줍니다. 눈은 강조된 단어만 따라가며 뇌를 의존해 문장을 완성합니다. 얕고 넓은 디지털 정보 시대에 바이오닉 리딩은 콘텐츠를 깊게 음미할 수 있도록 도와줍니다.';
    const expectedText =
      '<b>바이</b>오닉 <b>리딩</b>은 <b>인위</b>적인 <b>fixa</b>tion <b>poi</b>nt를 <b>사용</b>하여 <b>문장</b>을 <b>읽</b>기 <b>쉽</b>게 <b>만들어줍</b>니다. <b>눈</b>은 <b>강조</b>된 <b>단어</b>만 <b>따라</b>가며 <b>뇌</b>를 <b>의존</b>해 <b>문장</b>을 <b>완성합</b>니다. <b>얕</b>고 <b>넓</b>은 <b>디지</b>털 <b>정</b>보 <b>시대</b>에 <b>바이</b>오닉 <b>리딩</b>은 <b>콘텐</b>츠를 <b>깊</b>게 <b>음미</b>할 <b>수</b> <b>있도</b>록 <b>도와줍</b>니다.';

    expect(bionicReading(text)).toBe(expectedText);
  });

  it('test options.highlightTag :: <b> -> <strong>', () => {
    const text =
      'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
    const expectedText =
      '<strong>or</strong>em <strong>ips</strong>um <strong>dol</strong>or <strong>si</strong>t <strong>ame</strong>t, <strong>conse</strong>tetur <strong>sadip</strong>scing <strong>eli</strong>tr, <strong>se</strong>d <strong>di</strong>am <strong>non</strong>umy <strong>eir</strong>mod <strong>tem</strong>por <strong>invi</strong>dunt <strong>u</strong>t <strong>lab</strong>ore <strong>e</strong>t <strong>dol</strong>ore <strong>mag</strong>na <strong>aliq</strong>uyam <strong>era</strong>t, <strong>se</strong>d <strong>di</strong>am <strong>volup</strong>tua. <strong>A</strong>t <strong>ve</strong>ro <strong>eo</strong>s <strong>e</strong>t <strong>accu</strong>sam <strong>e</strong>t <strong>jus</strong>to <strong>du</strong>o <strong>dolo</strong>res <strong>e</strong>t <strong>e</strong>a <strong>reb</strong>um. <strong>St</strong>et <strong>cli</strong>ta <strong>ka</strong>sd <strong>guber</strong>gren, <strong>n</strong>o <strong>se</strong>a <strong>taki</strong>mata <strong>sanc</strong>tus <strong>es</strong>t <strong>Lor</strong>em <strong>ips</strong>um <strong>dol</strong>or <strong>si</strong>t <strong>ame</strong>t. <strong>Lor</strong>em <strong>ips</strong>um <strong>dol</strong>or <strong>si</strong>t <strong>ame</strong>t, <strong>conse</strong>tetur <strong>sadip</strong>scing <strong>eli</strong>tr, <strong>se</strong>d <strong>di</strong>am <strong>non</strong>umy <strong>eir</strong>mod <strong>tem</strong>por <strong>invi</strong>dunt <strong>u</strong>t <strong>lab</strong>ore <strong>e</strong>t <strong>dol</strong>ore <strong>mag</strong>na <strong>aliq</strong>uyam <strong>era</strong>t, <strong>se</strong>d <strong>di</strong>am <strong>volup</strong>tua. <strong>A</strong>t <strong>ve</strong>ro <strong>eo</strong>s <strong>e</strong>t <strong>accu</strong>sam <strong>e</strong>t <strong>jus</strong>to <strong>du</strong>o <strong>dolo</strong>res <strong>e</strong>t <strong>e</strong>a <strong>reb</strong>um. <strong>St</strong>et <strong>cli</strong>ta <strong>ka</strong>sd <strong>guber</strong>gren, <strong>n</strong>o <strong>se</strong>a <strong>taki</strong>mata <strong>sanc</strong>tus <strong>es</strong>t <strong>Lor</strong>em <strong>ips</strong>um <strong>dol</strong>or <strong>si</strong>t <strong>ame</strong>t.';

    expect(bionicReading(text, { highlightTag: 'strong' })).toBe(expectedText);
  });
});
