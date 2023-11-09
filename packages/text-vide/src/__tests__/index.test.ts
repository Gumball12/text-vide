import { textVide } from '..';
import { describe, expect, it } from 'vitest';

describe('test textVide module', () => {
  it('test paragraph 1', () => {
    const text =
      'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
    const expectedText =
      '<b>ore</b>m <b>ips</b>um <b>dol</b>or <b>si</b>t <b>ame</b>t, <b>consetet</b>ur <b>sadipsci</b>ng <b>eli</b>tr, <b>se</b>d <b>dia</b>m <b>nonu</b>my <b>eirm</b>od <b>temp</b>or <b>invidu</b>nt <b>u</b>t <b>labo</b>re <b>e</b>t <b>dolo</b>re <b>mag</b>na <b>aliquy</b>am <b>era</b>t, <b>se</b>d <b>dia</b>m <b>volupt</b>ua. <b>A</b>t <b>ver</b>o <b>eo</b>s <b>e</b>t <b>accus</b>am <b>e</b>t <b>jus</b>to <b>du</b>o <b>dolor</b>es <b>e</b>t <b>e</b>a <b>reb</b>um. <b>Ste</b>t <b>cli</b>ta <b>kas</b>d <b>gubergr</b>en, <b>n</b>o <b>se</b>a <b>takima</b>ta <b>sanct</b>us <b>es</b>t <b>Lor</b>em <b>ips</b>um <b>dol</b>or <b>si</b>t <b>ame</b>t. <b>Lor</b>em <b>ips</b>um <b>dol</b>or <b>si</b>t <b>ame</b>t, <b>consetet</b>ur <b>sadipsci</b>ng <b>eli</b>tr, <b>se</b>d <b>dia</b>m <b>nonu</b>my <b>eirm</b>od <b>temp</b>or <b>invidu</b>nt <b>u</b>t <b>labo</b>re <b>e</b>t <b>dolo</b>re <b>mag</b>na <b>aliquy</b>am <b>era</b>t, <b>se</b>d <b>dia</b>m <b>volupt</b>ua. <b>A</b>t <b>ver</b>o <b>eo</b>s <b>e</b>t <b>accus</b>am <b>e</b>t <b>jus</b>to <b>du</b>o <b>dolor</b>es <b>e</b>t <b>e</b>a <b>reb</b>um. <b>Ste</b>t <b>cli</b>ta <b>kas</b>d <b>gubergr</b>en, <b>n</b>o <b>se</b>a <b>takima</b>ta <b>sanct</b>us <b>es</b>t <b>Lor</b>em <b>ips</b>um <b>dol</b>or <b>si</b>t <b>ame</b>t.';

    expect(textVide(text)).toBe(expectedText);
  });

  it('test paragraph 2', () => {
    const text =
      'Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content.';
    const expectedText =
      '<b>Bion</b>ic <b>Readi</b>ng <b>i</b>s a <b>ne</b>w <b>meth</b>od <b>facilitati</b>ng <b>th</b>e <b>readi</b>ng <b>proce</b>ss <b>b</b>y <b>guidi</b>ng <b>th</b>e <b>eye</b>s <b>throu</b>gh <b>tex</b>t <b>wit</b>h <b>artifici</b>al <b>fixati</b>on <b>poin</b>ts. <b>A</b>s a <b>resu</b>lt, <b>th</b>e <b>read</b>er <b>i</b>s <b>onl</b>y <b>focusi</b>ng <b>o</b>n <b>th</b>e <b>highlight</b>ed <b>initi</b>al <b>lette</b>rs <b>an</b>d <b>let</b>s <b>th</b>e <b>bra</b>in <b>cent</b>er <b>comple</b>te <b>th</b>e <b>wor</b>d. <b>I</b>n a <b>digit</b>al <b>wor</b>ld <b>dominat</b>ed <b>b</b>y <b>shall</b>ow <b>for</b>ms <b>o</b>f <b>readi</b>ng, <b>Bion</b>ic <b>Readi</b>ng <b>aim</b>s <b>t</b>o <b>encoura</b>ge a <b>mor</b>e <b>i</b>n-<b>dep</b>th <b>readi</b>ng <b>an</b>d <b>understand</b>ing <b>o</b>f <b>writt</b>en <b>conte</b>nt.';

    expect(textVide(text)).toBe(expectedText);
  });

  it('test paragraph 3 (with number)', () => {
    const text = `Pan Am Flight 7 was a westbound round-the-world flight operated by Pan American World Airways that crashed in the Pacific Ocean on November 8, 1957, while flying from San Francisco International Airport to Honolulu International Airport. The crash of the Boeing 377 Stratocruiser 10-29 (example pictured) killed all thirty-six passengers and eight crew members. The flight's fate was not known until about nine hours after its last radio transmission. No emergency radio reports were received.`;
    const expectedText = `<b>Pa</b>n <b>A</b>m <b>Flig</b>ht 7 <b>wa</b>s a <b>westbou</b>nd <b>rou</b>nd-<b>th</b>e-<b>wor</b>ld <b>flig</b>ht <b>operat</b>ed <b>b</b>y <b>Pa</b>n <b>Americ</b>an <b>Wor</b>ld <b>Airwa</b>ys <b>tha</b>t <b>crash</b>ed <b>i</b>n <b>th</b>e <b>Pacif</b>ic <b>Oce</b>an <b>o</b>n <b>Novemb</b>er 8, 1957, <b>whi</b>le <b>flyi</b>ng <b>fro</b>m <b>Sa</b>n <b>Francis</b>co <b>Internatio</b>nal <b>Airpo</b>rt <b>t</b>o <b>Honolu</b>lu <b>Internatio</b>nal <b>Airpo</b>rt. <b>Th</b>e <b>cra</b>sh <b>o</b>f <b>th</b>e <b>Boei</b>ng 377 <b>Stratocrui</b>ser 10-29 (<b>examp</b>le <b>pictur</b>ed) <b>kill</b>ed <b>al</b>l <b>thir</b>ty-<b>si</b>x <b>passenge</b>rs <b>an</b>d <b>eig</b>ht <b>cre</b>w <b>membe</b>rs. <b>Th</b>e <b>flig</b>ht's <b>fat</b>e <b>wa</b>s <b>no</b>t <b>kno</b>wn <b>unt</b>il <b>abo</b>ut <b>nin</b>e <b>hou</b>rs <b>aft</b>er <b>it</b>s <b>las</b>t <b>rad</b>io <b>transmissi</b>on. <b>N</b>o <b>emergen</b>cy <b>rad</b>io <b>repor</b>ts <b>wer</b>e <b>receiv</b>ed.`;

    expect(textVide(text)).toBe(expectedText);
  });

  it('special char (dash)', () => {
    const text = '-----';
    const expected = '-----';
    expect(textVide(text)).toBe(expected);
  });

  it('test Korean', () => {
    const text =
      '바이오닉 리딩은 인위적인 fixation point를 사용하여 문장을 읽기 쉽게 만들어줍니다. 눈은 강조된 단어만 따라가며 뇌를 의존해 문장을 완성합니다. 얕고 넓은 디지털 정보 시대에 바이오닉 리딩은 콘텐츠를 깊게 음미할 수 있도록 도와줍니다.';
    const expectedText =
      '<b>바이오</b>닉 <b>리딩</b>은 <b>인위적</b>인 <b>fixati</b>on <b>poin</b>t를 <b>사용하</b>여 <b>문장</b>을 <b>읽</b>기 <b>쉽</b>게 <b>만들어줍</b>니다. <b>눈</b>은 <b>강조</b>된 <b>단어</b>만 <b>따라가</b>며 <b>뇌</b>를 <b>의존</b>해 <b>문장</b>을 <b>완성합</b>니다. <b>얕</b>고 <b>넓</b>은 <b>디지</b>털 <b>정</b>보 <b>시대</b>에 <b>바이오</b>닉 <b>리딩</b>은 <b>콘텐츠</b>를 <b>깊</b>게 <b>음미</b>할 수 <b>있도</b>록 <b>도와줍</b>니다.';

    expect(textVide(text)).toBe(expectedText);
  });

  it('test Russian', () => {
    const text = `Конституция СФРЮ 1974 года - третья и последняя конституция Социалистической Федеративной Республики Югославии. Вступила в силу 21 февраля 1974 года, действие окончательно прекратилось в результате начавшегося распада Югославии в 1992 году.`;
    const expected = `<b>Конституц</b>ия <b>СФР</b>Ю 1974 <b>год</b>а - <b>трет</b>ья и <b>последн</b>яя <b>конституц</b>ия <b>Социалистичес</b>кой <b>Федеративн</b>ой <b>Республи</b>ки <b>Югослав</b>ии. <b>Вступи</b>ла в <b>сил</b>у 21 <b>февра</b>ля 1974 <b>год</b>а, <b>действ</b>ие <b>окончатель</b>но <b>прекратило</b>сь в <b>результа</b>те <b>начавшего</b>ся <b>распа</b>да <b>Югослав</b>ии в 1992 <b>год</b>у.`;
    expect(textVide(text)).toBe(expected);
  });

  it('pass empty string', () => {
    const text = '';
    const expected = '';
    expect(textVide(text)).toBe(expected);
  });

  it('pass len 1 string', () => {
    const text = 'a';
    const expected = 'a';
    expect(textVide(text)).toBe(expected);
  });

  it('pass strings with line break', () => {
    const text = `
    a
    b
    c
    `;

    const expected = `
    a
    b
    c
    `;

    expect(textVide(text)).toBe(expected);
  });

  it('very long word', () => {
    const text =
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
    const expected =
      '<b>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</b>aaaaaaaaa';
    expect(textVide(text)).toBe(expected);
  });
});

describe('test options', () => {
  it('pass empty options object', () => {
    expect(textVide('aaaa', {})).toBe('<b>aaa</b>a');
  });

  it('options.sep :: [<strong>, </strong>]', () => {
    const text =
      'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
    const expectedText =
      '<strong>ore</strong>m <strong>ips</strong>um <strong>dol</strong>or <strong>si</strong>t <strong>ame</strong>t, <strong>consetet</strong>ur <strong>sadipsci</strong>ng <strong>eli</strong>tr, <strong>se</strong>d <strong>dia</strong>m <strong>nonu</strong>my <strong>eirm</strong>od <strong>temp</strong>or <strong>invidu</strong>nt <strong>u</strong>t <strong>labo</strong>re <strong>e</strong>t <strong>dolo</strong>re <strong>mag</strong>na <strong>aliquy</strong>am <strong>era</strong>t, <strong>se</strong>d <strong>dia</strong>m <strong>volupt</strong>ua. <strong>A</strong>t <strong>ver</strong>o <strong>eo</strong>s <strong>e</strong>t <strong>accus</strong>am <strong>e</strong>t <strong>jus</strong>to <strong>du</strong>o <strong>dolor</strong>es <strong>e</strong>t <strong>e</strong>a <strong>reb</strong>um. <strong>Ste</strong>t <strong>cli</strong>ta <strong>kas</strong>d <strong>gubergr</strong>en, <strong>n</strong>o <strong>se</strong>a <strong>takima</strong>ta <strong>sanct</strong>us <strong>es</strong>t <strong>Lor</strong>em <strong>ips</strong>um <strong>dol</strong>or <strong>si</strong>t <strong>ame</strong>t. <strong>Lor</strong>em <strong>ips</strong>um <strong>dol</strong>or <strong>si</strong>t <strong>ame</strong>t, <strong>consetet</strong>ur <strong>sadipsci</strong>ng <strong>eli</strong>tr, <strong>se</strong>d <strong>dia</strong>m <strong>nonu</strong>my <strong>eirm</strong>od <strong>temp</strong>or <strong>invidu</strong>nt <strong>u</strong>t <strong>labo</strong>re <strong>e</strong>t <strong>dolo</strong>re <strong>mag</strong>na <strong>aliquy</strong>am <strong>era</strong>t, <strong>se</strong>d <strong>dia</strong>m <strong>volupt</strong>ua. <strong>A</strong>t <strong>ver</strong>o <strong>eo</strong>s <strong>e</strong>t <strong>accus</strong>am <strong>e</strong>t <strong>jus</strong>to <strong>du</strong>o <strong>dolor</strong>es <strong>e</strong>t <strong>e</strong>a <strong>reb</strong>um. <strong>Ste</strong>t <strong>cli</strong>ta <strong>kas</strong>d <strong>gubergr</strong>en, <strong>n</strong>o <strong>se</strong>a <strong>takima</strong>ta <strong>sanct</strong>us <strong>es</strong>t <strong>Lor</strong>em <strong>ips</strong>um <strong>dol</strong>or <strong>si</strong>t <strong>ame</strong>t.';

    expect(textVide(text, { sep: ['<strong>', '</strong>'] })).toBe(
      expectedText,
    );
  });

  it('options.sep :: `**`', () => {
    const text =
      'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
    const expectedText =
      '**ore**m **ips**um **dol**or **si**t **ame**t, **consetet**ur **sadipsci**ng **eli**tr, **se**d **dia**m **nonu**my **eirm**od **temp**or **invidu**nt **u**t **labo**re **e**t **dolo**re **mag**na **aliquy**am **era**t, **se**d **dia**m **volupt**ua. **A**t **ver**o **eo**s **e**t **accus**am **e**t **jus**to **du**o **dolor**es **e**t **e**a **reb**um. **Ste**t **cli**ta **kas**d **gubergr**en, **n**o **se**a **takima**ta **sanct**us **es**t **Lor**em **ips**um **dol**or **si**t **ame**t. **Lor**em **ips**um **dol**or **si**t **ame**t, **consetet**ur **sadipsci**ng **eli**tr, **se**d **dia**m **nonu**my **eirm**od **temp**or **invidu**nt **u**t **labo**re **e**t **dolo**re **mag**na **aliquy**am **era**t, **se**d **dia**m **volupt**ua. **A**t **ver**o **eo**s **e**t **accus**am **e**t **jus**to **du**o **dolor**es **e**t **e**a **reb**um. **Ste**t **cli**ta **kas**d **gubergr**en, **n**o **se**a **takima**ta **sanct**us **es**t **Lor**em **ips**um **dol**or **si**t **ame**t.';

    expect(textVide(text, { sep: '**' })).toBe(expectedText);
  });

  it('options.sep :: `__`', () => {
    const text =
      'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
    const expectedText =
      '__ore__m __ips__um __dol__or __si__t __ame__t, __consetet__ur __sadipsci__ng __eli__tr, __se__d __dia__m __nonu__my __eirm__od __temp__or __invidu__nt __u__t __labo__re __e__t __dolo__re __mag__na __aliquy__am __era__t, __se__d __dia__m __volupt__ua. __A__t __ver__o __eo__s __e__t __accus__am __e__t __jus__to __du__o __dolor__es __e__t __e__a __reb__um. __Ste__t __cli__ta __kas__d __gubergr__en, __n__o __se__a __takima__ta __sanct__us __es__t __Lor__em __ips__um __dol__or __si__t __ame__t. __Lor__em __ips__um __dol__or __si__t __ame__t, __consetet__ur __sadipsci__ng __eli__tr, __se__d __dia__m __nonu__my __eirm__od __temp__or __invidu__nt __u__t __labo__re __e__t __dolo__re __mag__na __aliquy__am __era__t, __se__d __dia__m __volupt__ua. __A__t __ver__o __eo__s __e__t __accus__am __e__t __jus__to __du__o __dolor__es __e__t __e__a __reb__um. __Ste__t __cli__ta __kas__d __gubergr__en, __n__o __se__a __takima__ta __sanct__us __es__t __Lor__em __ips__um __dol__or __si__t __ame__t.';

    expect(textVide(text, { sep: '__' })).toBe(expectedText);
  });

  it('undefeined options.sep', () => {
    const text =
      'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
    const expectedText =
      '<b>ore</b>m <b>ips</b>um <b>dol</b>or <b>si</b>t <b>ame</b>t, <b>consetet</b>ur <b>sadipsci</b>ng <b>eli</b>tr, <b>se</b>d <b>dia</b>m <b>nonu</b>my <b>eirm</b>od <b>temp</b>or <b>invidu</b>nt <b>u</b>t <b>labo</b>re <b>e</b>t <b>dolo</b>re <b>mag</b>na <b>aliquy</b>am <b>era</b>t, <b>se</b>d <b>dia</b>m <b>volupt</b>ua. <b>A</b>t <b>ver</b>o <b>eo</b>s <b>e</b>t <b>accus</b>am <b>e</b>t <b>jus</b>to <b>du</b>o <b>dolor</b>es <b>e</b>t <b>e</b>a <b>reb</b>um. <b>Ste</b>t <b>cli</b>ta <b>kas</b>d <b>gubergr</b>en, <b>n</b>o <b>se</b>a <b>takima</b>ta <b>sanct</b>us <b>es</b>t <b>Lor</b>em <b>ips</b>um <b>dol</b>or <b>si</b>t <b>ame</b>t. <b>Lor</b>em <b>ips</b>um <b>dol</b>or <b>si</b>t <b>ame</b>t, <b>consetet</b>ur <b>sadipsci</b>ng <b>eli</b>tr, <b>se</b>d <b>dia</b>m <b>nonu</b>my <b>eirm</b>od <b>temp</b>or <b>invidu</b>nt <b>u</b>t <b>labo</b>re <b>e</b>t <b>dolo</b>re <b>mag</b>na <b>aliquy</b>am <b>era</b>t, <b>se</b>d <b>dia</b>m <b>volupt</b>ua. <b>A</b>t <b>ver</b>o <b>eo</b>s <b>e</b>t <b>accus</b>am <b>e</b>t <b>jus</b>to <b>du</b>o <b>dolor</b>es <b>e</b>t <b>e</b>a <b>reb</b>um. <b>Ste</b>t <b>cli</b>ta <b>kas</b>d <b>gubergr</b>en, <b>n</b>o <b>se</b>a <b>takima</b>ta <b>sanct</b>us <b>es</b>t <b>Lor</b>em <b>ips</b>um <b>dol</b>or <b>si</b>t <b>ame</b>t.';

    expect(textVide(text, { sep: undefined })).toBe(expectedText);
  });

  it('pass strings with line break (w/ set options.sep to `__`)', () => {
    const text = `
    orem ipsum dolor sit amet, consetetur sadipscing elitr,
    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua.`;

    const expected = `
    __ore__m __ips__um __dol__or __si__t __ame__t, __consetet__ur __sadipsci__ng __eli__tr,
    __se__d __dia__m __nonu__my __eirm__od __temp__or __invidu__nt __u__t __labo__re __e__t __dolo__re __mag__na __aliquy__am __era__t,
    __se__d __dia__m __volupt__ua.`;

    expect(textVide(text, { sep: '__' })).toBe(expected);
  });

  it('invalid fixation point', () => {
    const text =
      'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
    const expectedText =
      '<b>ore</b>m <b>ips</b>um <b>dol</b>or <b>si</b>t <b>ame</b>t, <b>consetet</b>ur <b>sadipsci</b>ng <b>eli</b>tr, <b>se</b>d <b>dia</b>m <b>nonu</b>my <b>eirm</b>od <b>temp</b>or <b>invidu</b>nt <b>u</b>t <b>labo</b>re <b>e</b>t <b>dolo</b>re <b>mag</b>na <b>aliquy</b>am <b>era</b>t, <b>se</b>d <b>dia</b>m <b>volupt</b>ua. <b>A</b>t <b>ver</b>o <b>eo</b>s <b>e</b>t <b>accus</b>am <b>e</b>t <b>jus</b>to <b>du</b>o <b>dolor</b>es <b>e</b>t <b>e</b>a <b>reb</b>um. <b>Ste</b>t <b>cli</b>ta <b>kas</b>d <b>gubergr</b>en, <b>n</b>o <b>se</b>a <b>takima</b>ta <b>sanct</b>us <b>es</b>t <b>Lor</b>em <b>ips</b>um <b>dol</b>or <b>si</b>t <b>ame</b>t. <b>Lor</b>em <b>ips</b>um <b>dol</b>or <b>si</b>t <b>ame</b>t, <b>consetet</b>ur <b>sadipsci</b>ng <b>eli</b>tr, <b>se</b>d <b>dia</b>m <b>nonu</b>my <b>eirm</b>od <b>temp</b>or <b>invidu</b>nt <b>u</b>t <b>labo</b>re <b>e</b>t <b>dolo</b>re <b>mag</b>na <b>aliquy</b>am <b>era</b>t, <b>se</b>d <b>dia</b>m <b>volupt</b>ua. <b>A</b>t <b>ver</b>o <b>eo</b>s <b>e</b>t <b>accus</b>am <b>e</b>t <b>jus</b>to <b>du</b>o <b>dolor</b>es <b>e</b>t <b>e</b>a <b>reb</b>um. <b>Ste</b>t <b>cli</b>ta <b>kas</b>d <b>gubergr</b>en, <b>n</b>o <b>se</b>a <b>takima</b>ta <b>sanct</b>us <b>es</b>t <b>Lor</b>em <b>ips</b>um <b>dol</b>or <b>si</b>t <b>ame</b>t.';

    expect(textVide(text, { fixationPoint: -1 })).toBe(expectedText);
  });

  it('emojis', () => {
    const text = '👆 h👆el👆lo there, this is s👆ome dummy text';
    const expected =
      '👆 h👆<b>e</b>l👆<b>l</b>o <b>the</b>re, <b>thi</b>s <b>i</b>s s👆<b>om</b>e <b>dum</b>my <b>tex</b>t';

    expect(textVide(text)).toBe(expected);
  });

  it('ignoreHtmlTag: true', () => {
    const text = '<div>abcd</div>efg';
    const expectedText = '<div><b>abc</b>d</div><b>ef</b>g';
    expect(textVide(text, { ignoreHtmlTag: true })).toBe(expectedText);
  });

  it('ignoreHtmlTag: false', () => {
    const text = '<div>abcd</div>efg';
    const expected = '<<b>di</b>v><b>abc</b>d</<b>di</b>v><b>ef</b>g';
    expect(textVide(text, { ignoreHtmlTag: false })).toBe(expected);
  });

  it('ignoreHtmlEntity: true', () => {
    const text = '&nbsp;abcd&gt;';
    const expectedText = '&nbsp;<b>abc</b>d&gt;';
    expect(textVide(text, { ignoreHtmlEntity: true })).toBe(expectedText);
  });

  it('ignoreHtmlEntity: false', () => {
    const text = '&nbsp;abcd&gt;';
    const expected = '&<b>nbs</b>p;<b>abc</b>d&<b>g</b>t;';
    expect(textVide(text, { ignoreHtmlEntity: false })).toBe(expected);
  });
});

describe('fixation point ([2, 5])', () => {
  it('fixation 2 - 1', () => {
    const text =
      'Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content.';
    const expected =
      '<b>Bion</b>ic <b>Readi</b>ng <b>i</b>s <b>a</b> <b>n</b>ew <b>meth</b>od <b>facilita</b>ting <b>t</b>he <b>readi</b>ng <b>proce</b>ss <b>b</b>y <b>guidi</b>ng <b>t</b>he <b>ey</b>es <b>throu</b>gh <b>te</b>xt <b>wi</b>th <b>artific</b>ial <b>fixat</b>ion <b>poin</b>ts. <b>A</b>s <b>a</b> <b>resu</b>lt, <b>t</b>he <b>read</b>er <b>i</b>s <b>on</b>ly <b>focus</b>ing <b>o</b>n <b>t</b>he <b>highlig</b>hted <b>initi</b>al <b>lette</b>rs <b>a</b>nd <b>le</b>ts <b>t</b>he <b>bra</b>in <b>cent</b>er <b>compl</b>ete <b>t</b>he <b>wo</b>rd. <b>I</b>n <b>a</b> <b>digit</b>al <b>wor</b>ld <b>domina</b>ted <b>b</b>y <b>shall</b>ow <b>for</b>ms <b>o</b>f <b>readi</b>ng, <b>Bion</b>ic <b>Readi</b>ng <b>ai</b>ms <b>t</b>o <b>encour</b>age <b>a</b> <b>mo</b>re <b>i</b>n-<b>dep</b>th <b>readi</b>ng <b>a</b>nd <b>understan</b>ding <b>o</b>f <b>writt</b>en <b>conte</b>nt.';
    expect(textVide(text, { fixationPoint: 2 })).toBe(expected);
  });
  it('fixation 2 - 2', () => {
    const text =
      '__ore__m __ips__um __dol__or __si__t __ame__t, __consetet__ur __sadipsci__ng __eli__tr, __se__d __dia__m __nonu__my __eirm__od __temp__or __invidu__nt __u__t __labo__re __e__t __dolo__re __mag__na __aliquy__am __era__t, __se__d __dia__m __volupt__ua. __A__t __ver__o __eo__s __e__t __accus__am __e__t __jus__to __du__o __dolor__es __e__t __e__a __reb__um. __Ste__t __cli__ta __kas__d __gubergr__en, __n__o __se__a __takima__ta __sanct__us __es__t __Lor__em __ips__um __dol__or __si__t __ame__t. __Lor__em __ips__um __dol__or __si__t __ame__t, __consetet__ur __sadipsci__ng __eli__tr, __se__d __dia__m __nonu__my __eirm__od __temp__or __invidu__nt __u__t __labo__re __e__t __dolo__re __mag__na __aliquy__am __era__t, __se__d __dia__m __volupt__ua. __A__t __ver__o __eo__s __e__t __accus__am __e__t __jus__to __du__o __dolor__es __e__t __e__a __reb__um. __Ste__t __cli__ta __kas__d __gubergr__en, __n__o __se__a __takima__ta __sanct__us __es__t __Lor__em __ips__um __dol__or __si__t __ame__t.';
    const expected =
      '__<b>o</b>re__<b>m</b> __<b>i</b>ps__<b>u</b>m __<b>d</b>ol__<b>o</b>r __<b>s</b>i__<b>t</b> __<b>a</b>me__<b>t</b>, __<b>conse</b>tet__<b>u</b>r __<b>sadip</b>sci__<b>n</b>g __<b>e</b>li__<b>t</b>r, __<b>s</b>e__<b>d</b> __<b>d</b>ia__<b>m</b> __<b>no</b>nu__<b>m</b>y __<b>ei</b>rm__<b>o</b>d __<b>te</b>mp__<b>o</b>r __<b>invi</b>du__<b>n</b>t __<b>u</b>__<b>t</b> __<b>la</b>bo__<b>r</b>e __<b>e</b>__<b>t</b> __<b>do</b>lo__<b>r</b>e __<b>m</b>ag__<b>n</b>a __<b>aliq</b>uy__<b>a</b>m __<b>e</b>ra__<b>t</b>, __<b>s</b>e__<b>d</b> __<b>d</b>ia__<b>m</b> __<b>volu</b>pt__<b>u</b>a. __<b>A</b>__<b>t</b> __<b>v</b>er__<b>o</b> __<b>e</b>o__<b>s</b> __<b>e</b>__<b>t</b> __<b>acc</b>us__<b>a</b>m __<b>e</b>__<b>t</b> __<b>j</b>us__<b>t</b>o __<b>d</b>u__<b>o</b> __<b>dol</b>or__<b>e</b>s __<b>e</b>__<b>t</b> __<b>e</b>__<b>a</b> __<b>r</b>eb__<b>u</b>m. __<b>S</b>te__<b>t</b> __<b>c</b>li__<b>t</b>a __<b>k</b>as__<b>d</b> __<b>guber</b>gr__<b>e</b>n, __<b>n</b>__<b>o</b> __<b>s</b>e__<b>a</b> __<b>taki</b>ma__<b>t</b>a __<b>san</b>ct__<b>u</b>s __<b>e</b>s__<b>t</b> __<b>L</b>or__<b>e</b>m __<b>i</b>ps__<b>u</b>m __<b>d</b>ol__<b>o</b>r __<b>s</b>i__<b>t</b> __<b>a</b>me__<b>t</b>. __<b>L</b>or__<b>e</b>m __<b>i</b>ps__<b>u</b>m __<b>d</b>ol__<b>o</b>r __<b>s</b>i__<b>t</b> __<b>a</b>me__<b>t</b>, __<b>conse</b>tet__<b>u</b>r __<b>sadip</b>sci__<b>n</b>g __<b>e</b>li__<b>t</b>r, __<b>s</b>e__<b>d</b> __<b>d</b>ia__<b>m</b> __<b>no</b>nu__<b>m</b>y __<b>ei</b>rm__<b>o</b>d __<b>te</b>mp__<b>o</b>r __<b>invi</b>du__<b>n</b>t __<b>u</b>__<b>t</b> __<b>la</b>bo__<b>r</b>e __<b>e</b>__<b>t</b> __<b>do</b>lo__<b>r</b>e __<b>m</b>ag__<b>n</b>a __<b>aliq</b>uy__<b>a</b>m __<b>e</b>ra__<b>t</b>, __<b>s</b>e__<b>d</b> __<b>d</b>ia__<b>m</b> __<b>volu</b>pt__<b>u</b>a. __<b>A</b>__<b>t</b> __<b>v</b>er__<b>o</b> __<b>e</b>o__<b>s</b> __<b>e</b>__<b>t</b> __<b>acc</b>us__<b>a</b>m __<b>e</b>__<b>t</b> __<b>j</b>us__<b>t</b>o __<b>d</b>u__<b>o</b> __<b>dol</b>or__<b>e</b>s __<b>e</b>__<b>t</b> __<b>e</b>__<b>a</b> __<b>r</b>eb__<b>u</b>m. __<b>S</b>te__<b>t</b> __<b>c</b>li__<b>t</b>a __<b>k</b>as__<b>d</b> __<b>guber</b>gr__<b>e</b>n, __<b>n</b>__<b>o</b> __<b>s</b>e__<b>a</b> __<b>taki</b>ma__<b>t</b>a __<b>san</b>ct__<b>u</b>s __<b>e</b>s__<b>t</b> __<b>L</b>or__<b>e</b>m __<b>i</b>ps__<b>u</b>m __<b>d</b>ol__<b>o</b>r __<b>s</b>i__<b>t</b> __<b>a</b>me__<b>t</b>.';
    expect(textVide(text, { fixationPoint: 2 })).toBe(expected);
  });

  it('fixation 3 - 1', () => {
    const text =
      'Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content.';
    const expected =
      '<b>Bio</b>nic <b>Read</b>ing <b>i</b>s <b>a</b> <b>n</b>ew <b>met</b>hod <b>facili</b>tating <b>t</b>he <b>read</b>ing <b>proc</b>ess <b>b</b>y <b>guid</b>ing <b>t</b>he <b>ey</b>es <b>thro</b>ugh <b>te</b>xt <b>wi</b>th <b>artif</b>icial <b>fixa</b>tion <b>poi</b>nts. <b>A</b>s <b>a</b> <b>res</b>ult, <b>t</b>he <b>rea</b>der <b>i</b>s <b>on</b>ly <b>focu</b>sing <b>o</b>n <b>t</b>he <b>highli</b>ghted <b>init</b>ial <b>lett</b>ers <b>a</b>nd <b>le</b>ts <b>t</b>he <b>bra</b>in <b>cen</b>ter <b>comp</b>lete <b>t</b>he <b>wo</b>rd. <b>I</b>n <b>a</b> <b>digi</b>tal <b>wor</b>ld <b>domin</b>ated <b>b</b>y <b>shal</b>low <b>for</b>ms <b>o</b>f <b>read</b>ing, <b>Bio</b>nic <b>Read</b>ing <b>ai</b>ms <b>t</b>o <b>encou</b>rage <b>a</b> <b>mo</b>re <b>i</b>n-<b>dep</b>th <b>read</b>ing <b>a</b>nd <b>underst</b>anding <b>o</b>f <b>writ</b>ten <b>cont</b>ent.';
    expect(textVide(text, { fixationPoint: 3 })).toBe(expected);
  });
  it('fixation 3 - 2', () => {
    const text =
      '__ore__m __ips__um __dol__or __si__t __ame__t, __consetet__ur __sadipsci__ng __eli__tr, __se__d __dia__m __nonu__my __eirm__od __temp__or __invidu__nt __u__t __labo__re __e__t __dolo__re __mag__na __aliquy__am __era__t, __se__d __dia__m __volupt__ua. __A__t __ver__o __eo__s __e__t __accus__am __e__t __jus__to __du__o __dolor__es __e__t __e__a __reb__um. __Ste__t __cli__ta __kas__d __gubergr__en, __n__o __se__a __takima__ta __sanct__us __es__t __Lor__em __ips__um __dol__or __si__t __ame__t. __Lor__em __ips__um __dol__or __si__t __ame__t, __consetet__ur __sadipsci__ng __eli__tr, __se__d __dia__m __nonu__my __eirm__od __temp__or __invidu__nt __u__t __labo__re __e__t __dolo__re __mag__na __aliquy__am __era__t, __se__d __dia__m __volupt__ua. __A__t __ver__o __eo__s __e__t __accus__am __e__t __jus__to __du__o __dolor__es __e__t __e__a __reb__um. __Ste__t __cli__ta __kas__d __gubergr__en, __n__o __se__a __takima__ta __sanct__us __es__t __Lor__em __ips__um __dol__or __si__t __ame__t.';
    const expected =
      '__<b>o</b>re__<b>m</b> __<b>i</b>ps__<b>u</b>m __<b>d</b>ol__<b>o</b>r __<b>s</b>i__<b>t</b> __<b>a</b>me__<b>t</b>, __<b>cons</b>etet__<b>u</b>r __<b>sadi</b>psci__<b>n</b>g __<b>e</b>li__<b>t</b>r, __<b>s</b>e__<b>d</b> __<b>d</b>ia__<b>m</b> __<b>no</b>nu__<b>m</b>y __<b>ei</b>rm__<b>o</b>d __<b>te</b>mp__<b>o</b>r __<b>inv</b>idu__<b>n</b>t __<b>u</b>__<b>t</b> __<b>la</b>bo__<b>r</b>e __<b>e</b>__<b>t</b> __<b>do</b>lo__<b>r</b>e __<b>m</b>ag__<b>n</b>a __<b>ali</b>quy__<b>a</b>m __<b>e</b>ra__<b>t</b>, __<b>s</b>e__<b>d</b> __<b>d</b>ia__<b>m</b> __<b>vol</b>upt__<b>u</b>a. __<b>A</b>__<b>t</b> __<b>v</b>er__<b>o</b> __<b>e</b>o__<b>s</b> __<b>e</b>__<b>t</b> __<b>acc</b>us__<b>a</b>m __<b>e</b>__<b>t</b> __<b>j</b>us__<b>t</b>o __<b>d</b>u__<b>o</b> __<b>dol</b>or__<b>e</b>s __<b>e</b>__<b>t</b> __<b>e</b>__<b>a</b> __<b>r</b>eb__<b>u</b>m. __<b>S</b>te__<b>t</b> __<b>c</b>li__<b>t</b>a __<b>k</b>as__<b>d</b> __<b>gube</b>rgr__<b>e</b>n, __<b>n</b>__<b>o</b> __<b>s</b>e__<b>a</b> __<b>tak</b>ima__<b>t</b>a __<b>san</b>ct__<b>u</b>s __<b>e</b>s__<b>t</b> __<b>L</b>or__<b>e</b>m __<b>i</b>ps__<b>u</b>m __<b>d</b>ol__<b>o</b>r __<b>s</b>i__<b>t</b> __<b>a</b>me__<b>t</b>. __<b>L</b>or__<b>e</b>m __<b>i</b>ps__<b>u</b>m __<b>d</b>ol__<b>o</b>r __<b>s</b>i__<b>t</b> __<b>a</b>me__<b>t</b>, __<b>cons</b>etet__<b>u</b>r __<b>sadi</b>psci__<b>n</b>g __<b>e</b>li__<b>t</b>r, __<b>s</b>e__<b>d</b> __<b>d</b>ia__<b>m</b> __<b>no</b>nu__<b>m</b>y __<b>ei</b>rm__<b>o</b>d __<b>te</b>mp__<b>o</b>r __<b>inv</b>idu__<b>n</b>t __<b>u</b>__<b>t</b> __<b>la</b>bo__<b>r</b>e __<b>e</b>__<b>t</b> __<b>do</b>lo__<b>r</b>e __<b>m</b>ag__<b>n</b>a __<b>ali</b>quy__<b>a</b>m __<b>e</b>ra__<b>t</b>, __<b>s</b>e__<b>d</b> __<b>d</b>ia__<b>m</b> __<b>vol</b>upt__<b>u</b>a. __<b>A</b>__<b>t</b> __<b>v</b>er__<b>o</b> __<b>e</b>o__<b>s</b> __<b>e</b>__<b>t</b> __<b>acc</b>us__<b>a</b>m __<b>e</b>__<b>t</b> __<b>j</b>us__<b>t</b>o __<b>d</b>u__<b>o</b> __<b>dol</b>or__<b>e</b>s __<b>e</b>__<b>t</b> __<b>e</b>__<b>a</b> __<b>r</b>eb__<b>u</b>m. __<b>S</b>te__<b>t</b> __<b>c</b>li__<b>t</b>a __<b>k</b>as__<b>d</b> __<b>gube</b>rgr__<b>e</b>n, __<b>n</b>__<b>o</b> __<b>s</b>e__<b>a</b> __<b>tak</b>ima__<b>t</b>a __<b>san</b>ct__<b>u</b>s __<b>e</b>s__<b>t</b> __<b>L</b>or__<b>e</b>m __<b>i</b>ps__<b>u</b>m __<b>d</b>ol__<b>o</b>r __<b>s</b>i__<b>t</b> __<b>a</b>me__<b>t</b>.';
    expect(textVide(text, { fixationPoint: 3 })).toBe(expected);
  });

  it('fixation 4 - 1', () => {
    const text =
      'Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content.';
    const expected =
      '<b>Bi</b>onic <b>Re</b>ading <b>i</b>s a <b>n</b>ew <b>me</b>thod <b>faci</b>litating <b>t</b>he <b>re</b>ading <b>pr</b>ocess <b>b</b>y <b>gu</b>iding <b>t</b>he <b>ey</b>es <b>th</b>rough <b>te</b>xt <b>wi</b>th <b>art</b>ificial <b>fix</b>ation <b>po</b>ints. <b>A</b>s a <b>re</b>sult, <b>t</b>he <b>re</b>ader <b>i</b>s <b>on</b>ly <b>foc</b>using <b>o</b>n <b>t</b>he <b>high</b>lighted <b>in</b>itial <b>le</b>tters <b>a</b>nd <b>le</b>ts <b>t</b>he <b>br</b>ain <b>ce</b>nter <b>com</b>plete <b>t</b>he <b>wo</b>rd. <b>I</b>n a <b>di</b>gital <b>wo</b>rld <b>dom</b>inated <b>b</b>y <b>sh</b>allow <b>fo</b>rms <b>o</b>f <b>re</b>ading, <b>Bi</b>onic <b>Re</b>ading <b>ai</b>ms <b>t</b>o <b>enc</b>ourage a <b>mo</b>re <b>i</b>n-<b>de</b>pth <b>re</b>ading <b>a</b>nd <b>under</b>standing <b>o</b>f <b>wr</b>itten <b>co</b>ntent.';
    expect(textVide(text, { fixationPoint: 4 })).toBe(expected);
  });
  it('fixation 4 - 2', () => {
    const text =
      '__ore__m __ips__um __dol__or __si__t __ame__t, __consetet__ur __sadipsci__ng __eli__tr, __se__d __dia__m __nonu__my __eirm__od __temp__or __invidu__nt __u__t __labo__re __e__t __dolo__re __mag__na __aliquy__am __era__t, __se__d __dia__m __volupt__ua. __A__t __ver__o __eo__s __e__t __accus__am __e__t __jus__to __du__o __dolor__es __e__t __e__a __reb__um. __Ste__t __cli__ta __kas__d __gubergr__en, __n__o __se__a __takima__ta __sanct__us __es__t __Lor__em __ips__um __dol__or __si__t __ame__t. __Lor__em __ips__um __dol__or __si__t __ame__t, __consetet__ur __sadipsci__ng __eli__tr, __se__d __dia__m __nonu__my __eirm__od __temp__or __invidu__nt __u__t __labo__re __e__t __dolo__re __mag__na __aliquy__am __era__t, __se__d __dia__m __volupt__ua. __A__t __ver__o __eo__s __e__t __accus__am __e__t __jus__to __du__o __dolor__es __e__t __e__a __reb__um. __Ste__t __cli__ta __kas__d __gubergr__en, __n__o __se__a __takima__ta __sanct__us __es__t __Lor__em __ips__um __dol__or __si__t __ame__t.';
    const expected =
      '__<b>o</b>re__m __<b>i</b>ps__<b>u</b>m __<b>d</b>ol__<b>o</b>r __<b>s</b>i__t __<b>a</b>me__t, __<b>con</b>setet__<b>u</b>r __<b>sad</b>ipsci__<b>n</b>g __<b>e</b>li__<b>t</b>r, __<b>s</b>e__d __<b>d</b>ia__m __<b>no</b>nu__<b>m</b>y __<b>ei</b>rm__<b>o</b>d __<b>te</b>mp__<b>o</b>r __<b>in</b>vidu__<b>n</b>t __u__t __<b>la</b>bo__<b>r</b>e __e__t __<b>do</b>lo__<b>r</b>e __<b>m</b>ag__<b>n</b>a __<b>al</b>iquy__<b>a</b>m __<b>e</b>ra__t, __<b>s</b>e__d __<b>d</b>ia__m __<b>vo</b>lupt__<b>u</b>a. __A__t __<b>v</b>er__o __<b>e</b>o__s __e__t __<b>ac</b>cus__<b>a</b>m __e__t __<b>j</b>us__<b>t</b>o __<b>d</b>u__o __<b>do</b>lor__<b>e</b>s __e__t __e__a __<b>r</b>eb__<b>u</b>m. __<b>S</b>te__t __<b>c</b>li__<b>t</b>a __<b>k</b>as__d __<b>gu</b>bergr__<b>e</b>n, __n__o __<b>s</b>e__a __<b>ta</b>kima__<b>t</b>a __<b>sa</b>nct__<b>u</b>s __<b>e</b>s__t __<b>L</b>or__<b>e</b>m __<b>i</b>ps__<b>u</b>m __<b>d</b>ol__<b>o</b>r __<b>s</b>i__t __<b>a</b>me__t. __<b>L</b>or__<b>e</b>m __<b>i</b>ps__<b>u</b>m __<b>d</b>ol__<b>o</b>r __<b>s</b>i__t __<b>a</b>me__t, __<b>con</b>setet__<b>u</b>r __<b>sad</b>ipsci__<b>n</b>g __<b>e</b>li__<b>t</b>r, __<b>s</b>e__d __<b>d</b>ia__m __<b>no</b>nu__<b>m</b>y __<b>ei</b>rm__<b>o</b>d __<b>te</b>mp__<b>o</b>r __<b>in</b>vidu__<b>n</b>t __u__t __<b>la</b>bo__<b>r</b>e __e__t __<b>do</b>lo__<b>r</b>e __<b>m</b>ag__<b>n</b>a __<b>al</b>iquy__<b>a</b>m __<b>e</b>ra__t, __<b>s</b>e__d __<b>d</b>ia__m __<b>vo</b>lupt__<b>u</b>a. __A__t __<b>v</b>er__o __<b>e</b>o__s __e__t __<b>ac</b>cus__<b>a</b>m __e__t __<b>j</b>us__<b>t</b>o __<b>d</b>u__o __<b>do</b>lor__<b>e</b>s __e__t __e__a __<b>r</b>eb__<b>u</b>m. __<b>S</b>te__t __<b>c</b>li__<b>t</b>a __<b>k</b>as__d __<b>gu</b>bergr__<b>e</b>n, __n__o __<b>s</b>e__a __<b>ta</b>kima__<b>t</b>a __<b>sa</b>nct__<b>u</b>s __<b>e</b>s__t __<b>L</b>or__<b>e</b>m __<b>i</b>ps__<b>u</b>m __<b>d</b>ol__<b>o</b>r __<b>s</b>i__t __<b>a</b>me__t.';
    expect(textVide(text, { fixationPoint: 4 })).toBe(expected);
  });

  it('fixation 5 - 1', () => {
    const text =
      'Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content.';
    const expected =
      '<b>Bi</b>onic <b>Re</b>ading <b>i</b>s a <b>n</b>ew <b>me</b>thod <b>fac</b>ilitating <b>t</b>he <b>re</b>ading <b>pr</b>ocess <b>b</b>y <b>gu</b>iding <b>t</b>he <b>e</b>yes <b>th</b>rough <b>t</b>ext <b>w</b>ith <b>art</b>ificial <b>fi</b>xation <b>po</b>ints. <b>A</b>s a <b>re</b>sult, <b>t</b>he <b>re</b>ader <b>i</b>s <b>o</b>nly <b>fo</b>cusing <b>o</b>n <b>t</b>he <b>hig</b>hlighted <b>in</b>itial <b>le</b>tters <b>a</b>nd <b>l</b>ets <b>t</b>he <b>br</b>ain <b>ce</b>nter <b>co</b>mplete <b>t</b>he <b>w</b>ord. <b>I</b>n a <b>di</b>gital <b>wo</b>rld <b>do</b>minated <b>b</b>y <b>sh</b>allow <b>fo</b>rms <b>o</b>f <b>re</b>ading, <b>Bi</b>onic <b>Re</b>ading <b>a</b>ims <b>t</b>o <b>en</b>courage a <b>m</b>ore <b>i</b>n-<b>de</b>pth <b>re</b>ading <b>a</b>nd <b>und</b>erstanding <b>o</b>f <b>wr</b>itten <b>co</b>ntent.';
    expect(textVide(text, { fixationPoint: 5 })).toBe(expected);
  });
  it('fixation 5 - 2', () => {
    const text =
      '__ore__m __ips__um __dol__or __si__t __ame__t, __consetet__ur __sadipsci__ng __eli__tr, __se__d __dia__m __nonu__my __eirm__od __temp__or __invidu__nt __u__t __labo__re __e__t __dolo__re __mag__na __aliquy__am __era__t, __se__d __dia__m __volupt__ua. __A__t __ver__o __eo__s __e__t __accus__am __e__t __jus__to __du__o __dolor__es __e__t __e__a __reb__um. __Ste__t __cli__ta __kas__d __gubergr__en, __n__o __se__a __takima__ta __sanct__us __es__t __Lor__em __ips__um __dol__or __si__t __ame__t. __Lor__em __ips__um __dol__or __si__t __ame__t, __consetet__ur __sadipsci__ng __eli__tr, __se__d __dia__m __nonu__my __eirm__od __temp__or __invidu__nt __u__t __labo__re __e__t __dolo__re __mag__na __aliquy__am __era__t, __se__d __dia__m __volupt__ua. __A__t __ver__o __eo__s __e__t __accus__am __e__t __jus__to __du__o __dolor__es __e__t __e__a __reb__um. __Ste__t __cli__ta __kas__d __gubergr__en, __n__o __se__a __takima__ta __sanct__us __es__t __Lor__em __ips__um __dol__or __si__t __ame__t.';
    const expected =
      '__<b>o</b>re__m __<b>i</b>ps__<b>u</b>m __<b>d</b>ol__<b>o</b>r __<b>s</b>i__t __<b>a</b>me__t, __<b>co</b>nsetet__<b>u</b>r __<b>sa</b>dipsci__<b>n</b>g __<b>e</b>li__<b>t</b>r, __<b>s</b>e__d __<b>d</b>ia__m __<b>n</b>onu__<b>m</b>y __<b>e</b>irm__<b>o</b>d __<b>t</b>emp__<b>o</b>r __<b>in</b>vidu__<b>n</b>t __u__t __<b>l</b>abo__<b>r</b>e __e__t __<b>d</b>olo__<b>r</b>e __<b>m</b>ag__<b>n</b>a __<b>al</b>iquy__<b>a</b>m __<b>e</b>ra__t, __<b>s</b>e__d __<b>d</b>ia__m __<b>vo</b>lupt__<b>u</b>a. __A__t __<b>v</b>er__o __<b>e</b>o__s __e__t __<b>ac</b>cus__<b>a</b>m __e__t __<b>j</b>us__<b>t</b>o __<b>d</b>u__o __<b>do</b>lor__<b>e</b>s __e__t __e__a __<b>r</b>eb__<b>u</b>m. __<b>S</b>te__t __<b>c</b>li__<b>t</b>a __<b>k</b>as__d __<b>gu</b>bergr__<b>e</b>n, __n__o __<b>s</b>e__a __<b>ta</b>kima__<b>t</b>a __<b>sa</b>nct__<b>u</b>s __<b>e</b>s__t __<b>L</b>or__<b>e</b>m __<b>i</b>ps__<b>u</b>m __<b>d</b>ol__<b>o</b>r __<b>s</b>i__t __<b>a</b>me__t. __<b>L</b>or__<b>e</b>m __<b>i</b>ps__<b>u</b>m __<b>d</b>ol__<b>o</b>r __<b>s</b>i__t __<b>a</b>me__t, __<b>co</b>nsetet__<b>u</b>r __<b>sa</b>dipsci__<b>n</b>g __<b>e</b>li__<b>t</b>r, __<b>s</b>e__d __<b>d</b>ia__m __<b>n</b>onu__<b>m</b>y __<b>e</b>irm__<b>o</b>d __<b>t</b>emp__<b>o</b>r __<b>in</b>vidu__<b>n</b>t __u__t __<b>l</b>abo__<b>r</b>e __e__t __<b>d</b>olo__<b>r</b>e __<b>m</b>ag__<b>n</b>a __<b>al</b>iquy__<b>a</b>m __<b>e</b>ra__t, __<b>s</b>e__d __<b>d</b>ia__m __<b>vo</b>lupt__<b>u</b>a. __A__t __<b>v</b>er__o __<b>e</b>o__s __e__t __<b>ac</b>cus__<b>a</b>m __e__t __<b>j</b>us__<b>t</b>o __<b>d</b>u__o __<b>do</b>lor__<b>e</b>s __e__t __e__a __<b>r</b>eb__<b>u</b>m. __<b>S</b>te__t __<b>c</b>li__<b>t</b>a __<b>k</b>as__d __<b>gu</b>bergr__<b>e</b>n, __n__o __<b>s</b>e__a __<b>ta</b>kima__<b>t</b>a __<b>sa</b>nct__<b>u</b>s __<b>e</b>s__t __<b>L</b>or__<b>e</b>m __<b>i</b>ps__<b>u</b>m __<b>d</b>ol__<b>o</b>r __<b>s</b>i__t __<b>a</b>me__t.';
    expect(textVide(text, { fixationPoint: 5 })).toBe(expected);
  });
});

describe('numbers', () => {
  it('1234567890', () => {
    const text = '1234567890';
    const expected = '1234567890';
    expect(textVide(text)).toBe(expected);
  });

  it('1234-567890', () => {
    const text = '1234-567890';
    const expected = '1234-567890';
    expect(textVide(text)).toBe(expected);
  });

  it('a1234567890', () => {
    const text = 'a1234567890';
    const expected = '<b>a12345678</b>90';
    expect(textVide(text)).toBe(expected);
  });

  it('1234567890a', () => {
    const text = '1234567890a';
    const expected = '<b>123456789</b>0a';
    expect(textVide(text)).toBe(expected);
  });

  it('1234a567890', () => {
    const text = '1234a567890';
    const expected = '<b>1234a5678</b>90';
    expect(textVide(text)).toBe(expected);
  });

  it('@1234567890', () => {
    const text = '@1234567890';
    const expected = '@1234567890';
    expect(textVide(text)).toBe(expected);
  });

  it('1234567890@', () => {
    const text = '1234567890@';
    const expected = '1234567890@';
    expect(textVide(text)).toBe(expected);
  });

  it('1234@567890', () => {
    const text = '1234@567890';
    const expected = '1234@567890';
    expect(textVide(text)).toBe(expected);
  });
});

describe('with html tags', () => {
  it('normal text', () => {
    const text = 'abcdefg';
    const expected = '<b>abcde</b>fg';
    expect(textVide(text)).toBe(expected);
  });

  it('with a tag', () => {
    const text = '<a>abcd</a>efg';
    const expected = '<a><b>abc</b>d</a><b>ef</b>g';
    expect(textVide(text)).toBe(expected);
  });

  it('with b tag', () => {
    const text = '<b>abcd</b>efg';
    const expected = '<b><b>abc</b>d</b><b>ef</b>g';
    expect(textVide(text)).toBe(expected);
  });

  it('with div tag', () => {
    const text = '<div>abcd</div>efg';
    const expected = '<div><b>abc</b>d</div><b>ef</b>g';
    expect(textVide(text)).toBe(expected);
  });

  it('complex html tags', () => {
    const text = `<div class="bionic-reader-container">
            
            
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

    const expected = `<div class="bionic-reader-container">
            
            
    <span class="w bionic"><b class="b bionic"><b>no</b>r</b><b>ma</b>l </span><span class="w bionic"><b class="b bionic"><b>t</b>e</b><b>x</b>t</span>: <span class="w bionic"><b class="b bionic"><b>abc</b>d</b><b>ef</b>g</span><br><span class="w bionic"><b class="b bionic"><b>w</b>i</b><b>t</b>h </span><span class="w bionic"><b class="b bionic">a</b> </span><span class="w bionic"><b class="b bionic">t</b><b>a</b>g</span>: <a target="_blank"><span class="w bionic"><b class="b bionic"><b>a</b>b</b><b>c</b>d</span></a><span class="w bionic"><b class="b bionic">e</b><b>f</b>g</span><br><span class="w bionic"><b class="b bionic"><b>w</b>i</b><b>t</b>h </span><span class="w bionic"><b class="b bionic">b</b> </span><span class="w bionic"><b class="b bionic">t</b><b>a</b>g</span>: <b><span class="w bionic"><b class="b bionic"><b>a</b>b</b><b>c</b>d</span></b><span class="w bionic"><b class="b bionic">e</b><b>f</b>g</span><br><span class="w bionic"><b class="b bionic"><b>w</b>i</b><b>t</b>h </span><span class="w bionic"><b class="b bionic">d</b><b>i</b>v </span><span class="w bionic"><b class="b bionic">t</b><b>a</b>g</span>: <div><span class="w bionic"><b class="b bionic"><b>a</b>b</b><b>c</b>d</span></div><span class="w bionic"><b class="b bionic">e</b><b>f</b>g</span><br>
    
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

    expect(textVide(text)).toBe(expected);
  });
});
