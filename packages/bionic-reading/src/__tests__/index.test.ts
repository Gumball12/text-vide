import { bionicReading } from '..';
import { describe, expect, it } from 'vitest';

describe('test bionicReading module', () => {
  it('test paragraph 1', () => {
    const text =
      'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
    const expectedText =
      '<b>ore</b>m <b>ips</b>um <b>dol</b>or <b>si</b>t <b>ame</b>t, <b>consetet</b>ur <b>sadipsci</b>ng <b>eli</b>tr, <b>se</b>d <b>dia</b>m <b>nonu</b>my <b>eirm</b>od <b>temp</b>or <b>invidu</b>nt <b>u</b>t <b>labo</b>re <b>e</b>t <b>dolo</b>re <b>mag</b>na <b>aliquy</b>am <b>era</b>t, <b>se</b>d <b>dia</b>m <b>volupt</b>ua. <b>A</b>t <b>ver</b>o <b>eo</b>s <b>e</b>t <b>accus</b>am <b>e</b>t <b>jus</b>to <b>du</b>o <b>dolor</b>es <b>e</b>t <b>e</b>a <b>reb</b>um. <b>Ste</b>t <b>cli</b>ta <b>kas</b>d <b>gubergr</b>en, <b>n</b>o <b>se</b>a <b>takima</b>ta <b>sanct</b>us <b>es</b>t <b>Lor</b>em <b>ips</b>um <b>dol</b>or <b>si</b>t <b>ame</b>t. <b>Lor</b>em <b>ips</b>um <b>dol</b>or <b>si</b>t <b>ame</b>t, <b>consetet</b>ur <b>sadipsci</b>ng <b>eli</b>tr, <b>se</b>d <b>dia</b>m <b>nonu</b>my <b>eirm</b>od <b>temp</b>or <b>invidu</b>nt <b>u</b>t <b>labo</b>re <b>e</b>t <b>dolo</b>re <b>mag</b>na <b>aliquy</b>am <b>era</b>t, <b>se</b>d <b>dia</b>m <b>volupt</b>ua. <b>A</b>t <b>ver</b>o <b>eo</b>s <b>e</b>t <b>accus</b>am <b>e</b>t <b>jus</b>to <b>du</b>o <b>dolor</b>es <b>e</b>t <b>e</b>a <b>reb</b>um. <b>Ste</b>t <b>cli</b>ta <b>kas</b>d <b>gubergr</b>en, <b>n</b>o <b>se</b>a <b>takima</b>ta <b>sanct</b>us <b>es</b>t <b>Lor</b>em <b>ips</b>um <b>dol</b>or <b>si</b>t <b>ame</b>t.';

    expect(bionicReading(text)).toBe(expectedText);
  });

  it('test paragraph 2', () => {
    const text =
      'Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content.';
    const expectedText =
      '<b>Bion</b>ic <b>Readi</b>ng <b>i</b>s a <b>ne</b>w <b>meth</b>od <b>facilitati</b>ng <b>th</b>e <b>readi</b>ng <b>proce</b>ss <b>b</b>y <b>guidi</b>ng <b>th</b>e <b>eye</b>s <b>throu</b>gh <b>tex</b>t <b>wit</b>h <b>artifici</b>al <b>fixati</b>on <b>poin</b>ts. <b>A</b>s a <b>resu</b>lt, <b>th</b>e <b>read</b>er <b>i</b>s <b>onl</b>y <b>focusi</b>ng <b>o</b>n <b>th</b>e <b>highlight</b>ed <b>initi</b>al <b>lette</b>rs <b>an</b>d <b>let</b>s <b>th</b>e <b>bra</b>in <b>cent</b>er <b>comple</b>te <b>th</b>e <b>wor</b>d. <b>I</b>n a <b>digit</b>al <b>wor</b>ld <b>dominat</b>ed <b>b</b>y <b>shall</b>ow <b>for</b>ms <b>o</b>f <b>readi</b>ng, <b>Bion</b>ic <b>Readi</b>ng <b>aim</b>s <b>t</b>o <b>encoura</b>ge a <b>mor</b>e <b>i</b>n-<b>dep</b>th <b>readi</b>ng <b>an</b>d <b>understand</b>ing <b>o</b>f <b>writt</b>en <b>conte</b>nt.';

    expect(bionicReading(text)).toBe(expectedText);
  });

  it('special char (dash)', () => {
    const text = '-----';
    const expected = '-----';
    expect(bionicReading(text)).toBe(expected);
  });

  it('test Korean', () => {
    const text =
      '바이오닉 리딩은 인위적인 fixation point를 사용하여 문장을 읽기 쉽게 만들어줍니다. 눈은 강조된 단어만 따라가며 뇌를 의존해 문장을 완성합니다. 얕고 넓은 디지털 정보 시대에 바이오닉 리딩은 콘텐츠를 깊게 음미할 수 있도록 도와줍니다.';
    const expectedText =
      '<b>바이오</b>닉 <b>리딩</b>은 <b>인위적</b>인 <b>fixati</b>on <b>poin</b>t를 <b>사용하</b>여 <b>문장</b>을 <b>읽</b>기 <b>쉽</b>게 <b>만들어줍</b>니다. <b>눈</b>은 <b>강조</b>된 <b>단어</b>만 <b>따라가</b>며 <b>뇌</b>를 <b>의존</b>해 <b>문장</b>을 <b>완성합</b>니다. <b>얕</b>고 <b>넓</b>은 <b>디지</b>털 <b>정</b>보 <b>시대</b>에 <b>바이오</b>닉 <b>리딩</b>은 <b>콘텐츠</b>를 <b>깊</b>게 <b>음미</b>할 수 <b>있도</b>록 <b>도와줍</b>니다.';

    expect(bionicReading(text)).toBe(expectedText);
  });

  it('test Russian', () => {
    const text = `Конституция СФРЮ 1974 года - третья и последняя конституция Социалистической Федеративной Республики Югославии. Вступила в силу 21 февраля 1974 года, действие окончательно прекратилось в результате начавшегося распада Югославии в 1992 году.`;
    const expected = `<b>Конституц</b>ия <b>СФР</b>Ю <b>197</b>4 <b>год</b>а - <b>трет</b>ья и <b>последн</b>яя <b>конституц</b>ия <b>Социалистичес</b>кой <b>Федеративн</b>ой <b>Республи</b>ки <b>Югослав</b>ии. <b>Вступи</b>ла в <b>сил</b>у <b>2</b>1 <b>февра</b>ля <b>197</b>4 <b>год</b>а, <b>действ</b>ие <b>окончатель</b>но <b>прекратило</b>сь в <b>результа</b>те <b>начавшего</b>ся <b>распа</b>да <b>Югослав</b>ии в <b>199</b>2 <b>год</b>у.`;
    expect(bionicReading(text)).toBe(expected);
  });

  it('pass empty string', () => {
    const text = '';
    const expected = '';
    expect(bionicReading(text)).toBe(expected);
  });

  it('pass len 1 string', () => {
    const text = 'a';
    const expected = 'a';
    expect(bionicReading(text)).toBe(expected);
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

    expect(bionicReading(text)).toBe(expected);
  });
});

describe('test options', () => {
  it('pass empty options object', () => {
    expect(bionicReading('aaaa', {})).toBe('<b>aaa</b>a');
  });

  it('options.highlightTag :: <b> -> <strong>', () => {
    const text =
      'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
    const expectedText =
      '<strong>ore</strong>m <strong>ips</strong>um <strong>dol</strong>or <strong>si</strong>t <strong>ame</strong>t, <strong>consetet</strong>ur <strong>sadipsci</strong>ng <strong>eli</strong>tr, <strong>se</strong>d <strong>dia</strong>m <strong>nonu</strong>my <strong>eirm</strong>od <strong>temp</strong>or <strong>invidu</strong>nt <strong>u</strong>t <strong>labo</strong>re <strong>e</strong>t <strong>dolo</strong>re <strong>mag</strong>na <strong>aliquy</strong>am <strong>era</strong>t, <strong>se</strong>d <strong>dia</strong>m <strong>volupt</strong>ua. <strong>A</strong>t <strong>ver</strong>o <strong>eo</strong>s <strong>e</strong>t <strong>accus</strong>am <strong>e</strong>t <strong>jus</strong>to <strong>du</strong>o <strong>dolor</strong>es <strong>e</strong>t <strong>e</strong>a <strong>reb</strong>um. <strong>Ste</strong>t <strong>cli</strong>ta <strong>kas</strong>d <strong>gubergr</strong>en, <strong>n</strong>o <strong>se</strong>a <strong>takima</strong>ta <strong>sanct</strong>us <strong>es</strong>t <strong>Lor</strong>em <strong>ips</strong>um <strong>dol</strong>or <strong>si</strong>t <strong>ame</strong>t. <strong>Lor</strong>em <strong>ips</strong>um <strong>dol</strong>or <strong>si</strong>t <strong>ame</strong>t, <strong>consetet</strong>ur <strong>sadipsci</strong>ng <strong>eli</strong>tr, <strong>se</strong>d <strong>dia</strong>m <strong>nonu</strong>my <strong>eirm</strong>od <strong>temp</strong>or <strong>invidu</strong>nt <strong>u</strong>t <strong>labo</strong>re <strong>e</strong>t <strong>dolo</strong>re <strong>mag</strong>na <strong>aliquy</strong>am <strong>era</strong>t, <strong>se</strong>d <strong>dia</strong>m <strong>volupt</strong>ua. <strong>A</strong>t <strong>ver</strong>o <strong>eo</strong>s <strong>e</strong>t <strong>accus</strong>am <strong>e</strong>t <strong>jus</strong>to <strong>du</strong>o <strong>dolor</strong>es <strong>e</strong>t <strong>e</strong>a <strong>reb</strong>um. <strong>Ste</strong>t <strong>cli</strong>ta <strong>kas</strong>d <strong>gubergr</strong>en, <strong>n</strong>o <strong>se</strong>a <strong>takima</strong>ta <strong>sanct</strong>us <strong>es</strong>t <strong>Lor</strong>em <strong>ips</strong>um <strong>dol</strong>or <strong>si</strong>t <strong>ame</strong>t.';

    expect(bionicReading(text, { highlightTag: 'strong' })).toBe(expectedText);
  });

  it('options.markdown', () => {
    const text =
      'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
    const expectedText =
      '**ore**m **ips**um **dol**or **si**t **ame**t, **consetet**ur **sadipsci**ng **eli**tr, **se**d **dia**m **nonu**my **eirm**od **temp**or **invidu**nt **u**t **labo**re **e**t **dolo**re **mag**na **aliquy**am **era**t, **se**d **dia**m **volupt**ua. **A**t **ver**o **eo**s **e**t **accus**am **e**t **jus**to **du**o **dolor**es **e**t **e**a **reb**um. **Ste**t **cli**ta **kas**d **gubergr**en, **n**o **se**a **takima**ta **sanct**us **es**t **Lor**em **ips**um **dol**or **si**t **ame**t. **Lor**em **ips**um **dol**or **si**t **ame**t, **consetet**ur **sadipsci**ng **eli**tr, **se**d **dia**m **nonu**my **eirm**od **temp**or **invidu**nt **u**t **labo**re **e**t **dolo**re **mag**na **aliquy**am **era**t, **se**d **dia**m **volupt**ua. **A**t **ver**o **eo**s **e**t **accus**am **e**t **jus**to **du**o **dolor**es **e**t **e**a **reb**um. **Ste**t **cli**ta **kas**d **gubergr**en, **n**o **se**a **takima**ta **sanct**us **es**t **Lor**em **ips**um **dol**or **si**t **ame**t.';

    expect(bionicReading(text, { markdown: true })).toBe(expectedText);
  });

  it('options.markdown w/ options.markdownStyle :: `**` -> `__`', () => {
    const text =
      'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
    const expectedText =
      '__ore__m __ips__um __dol__or __si__t __ame__t, __consetet__ur __sadipsci__ng __eli__tr, __se__d __dia__m __nonu__my __eirm__od __temp__or __invidu__nt __u__t __labo__re __e__t __dolo__re __mag__na __aliquy__am __era__t, __se__d __dia__m __volupt__ua. __A__t __ver__o __eo__s __e__t __accus__am __e__t __jus__to __du__o __dolor__es __e__t __e__a __reb__um. __Ste__t __cli__ta __kas__d __gubergr__en, __n__o __se__a __takima__ta __sanct__us __es__t __Lor__em __ips__um __dol__or __si__t __ame__t. __Lor__em __ips__um __dol__or __si__t __ame__t, __consetet__ur __sadipsci__ng __eli__tr, __se__d __dia__m __nonu__my __eirm__od __temp__or __invidu__nt __u__t __labo__re __e__t __dolo__re __mag__na __aliquy__am __era__t, __se__d __dia__m __volupt__ua. __A__t __ver__o __eo__s __e__t __accus__am __e__t __jus__to __du__o __dolor__es __e__t __e__a __reb__um. __Ste__t __cli__ta __kas__d __gubergr__en, __n__o __se__a __takima__ta __sanct__us __es__t __Lor__em __ips__um __dol__or __si__t __ame__t.';

    expect(bionicReading(text, { markdown: true, markdownStyle: '__' })).toBe(
      expectedText,
    );
  });

  it('empty options.markdownStyle :: `**` -> ``', () => {
    const text =
      'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
    const expectedText =
      '**ore**m **ips**um **dol**or **si**t **ame**t, **consetet**ur **sadipsci**ng **eli**tr, **se**d **dia**m **nonu**my **eirm**od **temp**or **invidu**nt **u**t **labo**re **e**t **dolo**re **mag**na **aliquy**am **era**t, **se**d **dia**m **volupt**ua. **A**t **ver**o **eo**s **e**t **accus**am **e**t **jus**to **du**o **dolor**es **e**t **e**a **reb**um. **Ste**t **cli**ta **kas**d **gubergr**en, **n**o **se**a **takima**ta **sanct**us **es**t **Lor**em **ips**um **dol**or **si**t **ame**t. **Lor**em **ips**um **dol**or **si**t **ame**t, **consetet**ur **sadipsci**ng **eli**tr, **se**d **dia**m **nonu**my **eirm**od **temp**or **invidu**nt **u**t **labo**re **e**t **dolo**re **mag**na **aliquy**am **era**t, **se**d **dia**m **volupt**ua. **A**t **ver**o **eo**s **e**t **accus**am **e**t **jus**to **du**o **dolor**es **e**t **e**a **reb**um. **Ste**t **cli**ta **kas**d **gubergr**en, **n**o **se**a **takima**ta **sanct**us **es**t **Lor**em **ips**um **dol**or **si**t **ame**t.';

    expect(bionicReading(text, { markdown: true, markdownStyle: '' })).toBe(
      expectedText,
    );
  });

  it('pass strings with line break (markdown)', () => {
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

    expect(bionicReading(text, { markdown: true })).toBe(expected);
  });

  it('pass strings with line break (markdown + style)', () => {
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

    expect(bionicReading(text, { markdown: true, markdownStyle: '__' })).toBe(
      expected,
    );

    const text2 = `
    orem ipsum dolor sit amet, consetetur sadipscing elitr,
    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua.`;

    const expected2 = `
    __ore__m __ips__um __dol__or __si__t __ame__t, __consetet__ur __sadipsci__ng __eli__tr,
    __se__d __dia__m __nonu__my __eirm__od __temp__or __invidu__nt __u__t __labo__re __e__t __dolo__re __mag__na __aliquy__am __era__t,
    __se__d __dia__m __volupt__ua.`;

    expect(bionicReading(text2, { markdown: true, markdownStyle: '__' })).toBe(
      expected2,
    );
  });

  it('pass empty highlightTag', () => {
    expect(bionicReading('a', { highlightTag: '' })).toBe('a');
    expect(bionicReading('apple', { highlightTag: '' })).toBe('<b>app</b>le');
  });
});

describe('fixation point ([2, 5])', () => {
  it('fixation 2 - 1', () => {
    const text =
      'Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content.';
    const expected =
      '<b>Bion</b>ic <b>Readi</b>ng <b>i</b>s <b>a</b> <b>n</b>ew <b>meth</b>od <b>facilita</b>ting <b>t</b>he <b>readi</b>ng <b>proce</b>ss <b>b</b>y <b>guidi</b>ng <b>t</b>he <b>ey</b>es <b>throu</b>gh <b>te</b>xt <b>wi</b>th <b>artific</b>ial <b>fixat</b>ion <b>poin</b>ts. <b>A</b>s <b>a</b> <b>resu</b>lt, <b>t</b>he <b>read</b>er <b>i</b>s <b>on</b>ly <b>focus</b>ing <b>o</b>n <b>t</b>he <b>highlig</b>hted <b>initi</b>al <b>lette</b>rs <b>a</b>nd <b>le</b>ts <b>t</b>he <b>bra</b>in <b>cent</b>er <b>compl</b>ete <b>t</b>he <b>wo</b>rd. <b>I</b>n <b>a</b> <b>digit</b>al <b>wor</b>ld <b>domina</b>ted <b>b</b>y <b>shall</b>ow <b>for</b>ms <b>o</b>f <b>readi</b>ng, <b>Bion</b>ic <b>Readi</b>ng <b>ai</b>ms <b>t</b>o <b>encour</b>age <b>a</b> <b>mo</b>re <b>i</b>n-<b>dep</b>th <b>readi</b>ng <b>a</b>nd <b>understan</b>ding <b>o</b>f <b>writt</b>en <b>conte</b>nt.';
    expect(bionicReading(text, { fixationPoint: 2 })).toBe(expected);
  });
  it('fixation 2 - 2', () => {
    const text =
      '__ore__m __ips__um __dol__or __si__t __ame__t, __consetet__ur __sadipsci__ng __eli__tr, __se__d __dia__m __nonu__my __eirm__od __temp__or __invidu__nt __u__t __labo__re __e__t __dolo__re __mag__na __aliquy__am __era__t, __se__d __dia__m __volupt__ua. __A__t __ver__o __eo__s __e__t __accus__am __e__t __jus__to __du__o __dolor__es __e__t __e__a __reb__um. __Ste__t __cli__ta __kas__d __gubergr__en, __n__o __se__a __takima__ta __sanct__us __es__t __Lor__em __ips__um __dol__or __si__t __ame__t. __Lor__em __ips__um __dol__or __si__t __ame__t, __consetet__ur __sadipsci__ng __eli__tr, __se__d __dia__m __nonu__my __eirm__od __temp__or __invidu__nt __u__t __labo__re __e__t __dolo__re __mag__na __aliquy__am __era__t, __se__d __dia__m __volupt__ua. __A__t __ver__o __eo__s __e__t __accus__am __e__t __jus__to __du__o __dolor__es __e__t __e__a __reb__um. __Ste__t __cli__ta __kas__d __gubergr__en, __n__o __se__a __takima__ta __sanct__us __es__t __Lor__em __ips__um __dol__or __si__t __ame__t.';
    const expected =
      '__<b>ore_</b>_m __<b>ips__</b>um __<b>dol__</b>or __<b>si_</b>_t __<b>ame_</b>_t, __<b>consetet</b>__ur __<b>sadipsci</b>__ng __<b>eli__</b>tr, __<b>se_</b>_d __<b>dia_</b>_m __<b>nonu_</b>_my __<b>eirm_</b>_od __<b>temp_</b>_or __<b>invidu_</b>_nt __<b>u_</b>_t __<b>labo_</b>_re __<b>e_</b>_t __<b>dolo_</b>_re __<b>mag__</b>na __<b>aliquy_</b>_am __<b>era_</b>_t, __<b>se_</b>_d __<b>dia_</b>_m __<b>volupt_</b>_ua. __<b>A_</b>_t __<b>ver_</b>_o __<b>eo_</b>_s __<b>e_</b>_t __<b>accus_</b>_am __<b>e_</b>_t __<b>jus__</b>to __<b>du_</b>_o __<b>dolor_</b>_es __<b>e_</b>_t __<b>e_</b>_a __<b>reb__</b>um. __<b>Ste_</b>_t __<b>cli__</b>ta __<b>kas_</b>_d __<b>gubergr</b>__en, __<b>n_</b>_o __<b>se_</b>_a __<b>takima_</b>_ta __<b>sanct_</b>_us __<b>es_</b>_t __<b>Lor__</b>em __<b>ips__</b>um __<b>dol__</b>or __<b>si_</b>_t __<b>ame_</b>_t. __<b>Lor__</b>em __<b>ips__</b>um __<b>dol__</b>or __<b>si_</b>_t __<b>ame_</b>_t, __<b>consetet</b>__ur __<b>sadipsci</b>__ng __<b>eli__</b>tr, __<b>se_</b>_d __<b>dia_</b>_m __<b>nonu_</b>_my __<b>eirm_</b>_od __<b>temp_</b>_or __<b>invidu_</b>_nt __<b>u_</b>_t __<b>labo_</b>_re __<b>e_</b>_t __<b>dolo_</b>_re __<b>mag__</b>na __<b>aliquy_</b>_am __<b>era_</b>_t, __<b>se_</b>_d __<b>dia_</b>_m __<b>volupt_</b>_ua. __<b>A_</b>_t __<b>ver_</b>_o __<b>eo_</b>_s __<b>e_</b>_t __<b>accus_</b>_am __<b>e_</b>_t __<b>jus__</b>to __<b>du_</b>_o __<b>dolor_</b>_es __<b>e_</b>_t __<b>e_</b>_a __<b>reb__</b>um. __<b>Ste_</b>_t __<b>cli__</b>ta __<b>kas_</b>_d __<b>gubergr</b>__en, __<b>n_</b>_o __<b>se_</b>_a __<b>takima_</b>_ta __<b>sanct_</b>_us __<b>es_</b>_t __<b>Lor__</b>em __<b>ips__</b>um __<b>dol__</b>or __<b>si_</b>_t __<b>ame_</b>_t.';
    expect(bionicReading(text, { fixationPoint: 2 })).toBe(expected);
  });

  it('fixation 3 - 1', () => {
    const text =
      'Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content.';
    const expected =
      '<b>Bio</b>nic <b>Read</b>ing <b>i</b>s <b>a</b> <b>n</b>ew <b>met</b>hod <b>facili</b>tating <b>t</b>he <b>read</b>ing <b>proc</b>ess <b>b</b>y <b>guid</b>ing <b>t</b>he <b>ey</b>es <b>thro</b>ugh <b>te</b>xt <b>wi</b>th <b>artif</b>icial <b>fixa</b>tion <b>poi</b>nts. <b>A</b>s <b>a</b> <b>res</b>ult, <b>t</b>he <b>rea</b>der <b>i</b>s <b>on</b>ly <b>focu</b>sing <b>o</b>n <b>t</b>he <b>highli</b>ghted <b>init</b>ial <b>lett</b>ers <b>a</b>nd <b>le</b>ts <b>t</b>he <b>bra</b>in <b>cen</b>ter <b>comp</b>lete <b>t</b>he <b>wo</b>rd. <b>I</b>n <b>a</b> <b>digi</b>tal <b>wor</b>ld <b>domin</b>ated <b>b</b>y <b>shal</b>low <b>for</b>ms <b>o</b>f <b>read</b>ing, <b>Bio</b>nic <b>Read</b>ing <b>ai</b>ms <b>t</b>o <b>encou</b>rage <b>a</b> <b>mo</b>re <b>i</b>n-<b>dep</b>th <b>read</b>ing <b>a</b>nd <b>underst</b>anding <b>o</b>f <b>writ</b>ten <b>cont</b>ent.';
    expect(bionicReading(text, { fixationPoint: 3 })).toBe(expected);
  });
  it('fixation 3 - 2', () => {
    const text =
      '__ore__m __ips__um __dol__or __si__t __ame__t, __consetet__ur __sadipsci__ng __eli__tr, __se__d __dia__m __nonu__my __eirm__od __temp__or __invidu__nt __u__t __labo__re __e__t __dolo__re __mag__na __aliquy__am __era__t, __se__d __dia__m __volupt__ua. __A__t __ver__o __eo__s __e__t __accus__am __e__t __jus__to __du__o __dolor__es __e__t __e__a __reb__um. __Ste__t __cli__ta __kas__d __gubergr__en, __n__o __se__a __takima__ta __sanct__us __es__t __Lor__em __ips__um __dol__or __si__t __ame__t. __Lor__em __ips__um __dol__or __si__t __ame__t, __consetet__ur __sadipsci__ng __eli__tr, __se__d __dia__m __nonu__my __eirm__od __temp__or __invidu__nt __u__t __labo__re __e__t __dolo__re __mag__na __aliquy__am __era__t, __se__d __dia__m __volupt__ua. __A__t __ver__o __eo__s __e__t __accus__am __e__t __jus__to __du__o __dolor__es __e__t __e__a __reb__um. __Ste__t __cli__ta __kas__d __gubergr__en, __n__o __se__a __takima__ta __sanct__us __es__t __Lor__em __ips__um __dol__or __si__t __ame__t.';
    const expected =
      '__<b>ore</b>__m __<b>ips_</b>_um __<b>dol_</b>_or __<b>si_</b>_t __<b>ame</b>__t, __<b>conset</b>et__ur __<b>sadips</b>ci__ng __<b>eli_</b>_tr, __<b>se_</b>_d __<b>dia</b>__m __<b>nonu</b>__my __<b>eirm</b>__od __<b>temp</b>__or __<b>invid</b>u__nt __<b>u_</b>_t __<b>labo</b>__re __<b>e_</b>_t __<b>dolo</b>__re __<b>mag_</b>_na __<b>aliqu</b>y__am __<b>era</b>__t, __<b>se_</b>_d __<b>dia</b>__m __<b>volup</b>t__ua. __<b>A_</b>_t __<b>ver</b>__o __<b>eo_</b>_s __<b>e_</b>_t __<b>accus</b>__am __<b>e_</b>_t __<b>jus_</b>_to __<b>du_</b>_o __<b>dolor</b>__es __<b>e_</b>_t __<b>e_</b>_a __<b>reb_</b>_um. __<b>Ste</b>__t __<b>cli_</b>_ta __<b>kas</b>__d __<b>guberg</b>r__en, __<b>n_</b>_o __<b>se_</b>_a __<b>takim</b>a__ta __<b>sanct</b>__us __<b>es_</b>_t __<b>Lor_</b>_em __<b>ips_</b>_um __<b>dol_</b>_or __<b>si_</b>_t __<b>ame</b>__t. __<b>Lor_</b>_em __<b>ips_</b>_um __<b>dol_</b>_or __<b>si_</b>_t __<b>ame</b>__t, __<b>conset</b>et__ur __<b>sadips</b>ci__ng __<b>eli_</b>_tr, __<b>se_</b>_d __<b>dia</b>__m __<b>nonu</b>__my __<b>eirm</b>__od __<b>temp</b>__or __<b>invid</b>u__nt __<b>u_</b>_t __<b>labo</b>__re __<b>e_</b>_t __<b>dolo</b>__re __<b>mag_</b>_na __<b>aliqu</b>y__am __<b>era</b>__t, __<b>se_</b>_d __<b>dia</b>__m __<b>volup</b>t__ua. __<b>A_</b>_t __<b>ver</b>__o __<b>eo_</b>_s __<b>e_</b>_t __<b>accus</b>__am __<b>e_</b>_t __<b>jus_</b>_to __<b>du_</b>_o __<b>dolor</b>__es __<b>e_</b>_t __<b>e_</b>_a __<b>reb_</b>_um. __<b>Ste</b>__t __<b>cli_</b>_ta __<b>kas</b>__d __<b>guberg</b>r__en, __<b>n_</b>_o __<b>se_</b>_a __<b>takim</b>a__ta __<b>sanct</b>__us __<b>es_</b>_t __<b>Lor_</b>_em __<b>ips_</b>_um __<b>dol_</b>_or __<b>si_</b>_t __<b>ame</b>__t.';
    expect(bionicReading(text, { fixationPoint: 3 })).toBe(expected);
  });

  it('fixation 4 - 1', () => {
    const text =
      'Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content.';
    const expected =
      '<b>Bi</b>onic <b>Re</b>ading <b>i</b>s a <b>n</b>ew <b>me</b>thod <b>faci</b>litating <b>t</b>he <b>re</b>ading <b>pr</b>ocess <b>b</b>y <b>gu</b>iding <b>t</b>he <b>ey</b>es <b>th</b>rough <b>te</b>xt <b>wi</b>th <b>art</b>ificial <b>fix</b>ation <b>po</b>ints. <b>A</b>s a <b>re</b>sult, <b>t</b>he <b>re</b>ader <b>i</b>s <b>on</b>ly <b>foc</b>using <b>o</b>n <b>t</b>he <b>high</b>lighted <b>in</b>itial <b>le</b>tters <b>a</b>nd <b>le</b>ts <b>t</b>he <b>br</b>ain <b>ce</b>nter <b>com</b>plete <b>t</b>he <b>wo</b>rd. <b>I</b>n a <b>di</b>gital <b>wo</b>rld <b>dom</b>inated <b>b</b>y <b>sh</b>allow <b>fo</b>rms <b>o</b>f <b>re</b>ading, <b>Bi</b>onic <b>Re</b>ading <b>ai</b>ms <b>t</b>o <b>enc</b>ourage a <b>mo</b>re <b>i</b>n-<b>de</b>pth <b>re</b>ading <b>a</b>nd <b>under</b>standing <b>o</b>f <b>wr</b>itten <b>co</b>ntent.';
    expect(bionicReading(text, { fixationPoint: 4 })).toBe(expected);
  });
  it('fixation 4 - 2', () => {
    const text =
      '__ore__m __ips__um __dol__or __si__t __ame__t, __consetet__ur __sadipsci__ng __eli__tr, __se__d __dia__m __nonu__my __eirm__od __temp__or __invidu__nt __u__t __labo__re __e__t __dolo__re __mag__na __aliquy__am __era__t, __se__d __dia__m __volupt__ua. __A__t __ver__o __eo__s __e__t __accus__am __e__t __jus__to __du__o __dolor__es __e__t __e__a __reb__um. __Ste__t __cli__ta __kas__d __gubergr__en, __n__o __se__a __takima__ta __sanct__us __es__t __Lor__em __ips__um __dol__or __si__t __ame__t. __Lor__em __ips__um __dol__or __si__t __ame__t, __consetet__ur __sadipsci__ng __eli__tr, __se__d __dia__m __nonu__my __eirm__od __temp__or __invidu__nt __u__t __labo__re __e__t __dolo__re __mag__na __aliquy__am __era__t, __se__d __dia__m __volupt__ua. __A__t __ver__o __eo__s __e__t __accus__am __e__t __jus__to __du__o __dolor__es __e__t __e__a __reb__um. __Ste__t __cli__ta __kas__d __gubergr__en, __n__o __se__a __takima__ta __sanct__us __es__t __Lor__em __ips__um __dol__or __si__t __ame__t.';
    const expected =
      '__<b>or</b>e__m __<b>ip</b>s__um __<b>do</b>l__or __<b>si</b>__t __<b>am</b>e__t, __<b>cons</b>etet__ur __<b>sadi</b>psci__ng __<b>el</b>i__tr, __<b>se</b>__d __<b>di</b>a__m __<b>non</b>u__my __<b>eir</b>m__od __<b>tem</b>p__or __<b>inv</b>idu__nt __<b>u_</b>_t __<b>lab</b>o__re __<b>e_</b>_t __<b>dol</b>o__re __<b>ma</b>g__na __<b>ali</b>quy__am __<b>er</b>a__t, __<b>se</b>__d __<b>di</b>a__m __<b>vol</b>upt__ua. __<b>A_</b>_t __<b>ve</b>r__o __<b>eo</b>__s __<b>e_</b>_t __<b>acc</b>us__am __<b>e_</b>_t __<b>ju</b>s__to __<b>du</b>__o __<b>dol</b>or__es __<b>e_</b>_t __<b>e_</b>_a __<b>re</b>b__um. __<b>St</b>e__t __<b>cl</b>i__ta __<b>ka</b>s__d __<b>gube</b>rgr__en, __<b>n_</b>_o __<b>se</b>__a __<b>tak</b>ima__ta __<b>san</b>ct__us __<b>es</b>__t __<b>Lo</b>r__em __<b>ip</b>s__um __<b>do</b>l__or __<b>si</b>__t __<b>am</b>e__t. __<b>Lo</b>r__em __<b>ip</b>s__um __<b>do</b>l__or __<b>si</b>__t __<b>am</b>e__t, __<b>cons</b>etet__ur __<b>sadi</b>psci__ng __<b>el</b>i__tr, __<b>se</b>__d __<b>di</b>a__m __<b>non</b>u__my __<b>eir</b>m__od __<b>tem</b>p__or __<b>inv</b>idu__nt __<b>u_</b>_t __<b>lab</b>o__re __<b>e_</b>_t __<b>dol</b>o__re __<b>ma</b>g__na __<b>ali</b>quy__am __<b>er</b>a__t, __<b>se</b>__d __<b>di</b>a__m __<b>vol</b>upt__ua. __<b>A_</b>_t __<b>ve</b>r__o __<b>eo</b>__s __<b>e_</b>_t __<b>acc</b>us__am __<b>e_</b>_t __<b>ju</b>s__to __<b>du</b>__o __<b>dol</b>or__es __<b>e_</b>_t __<b>e_</b>_a __<b>re</b>b__um. __<b>St</b>e__t __<b>cl</b>i__ta __<b>ka</b>s__d __<b>gube</b>rgr__en, __<b>n_</b>_o __<b>se</b>__a __<b>tak</b>ima__ta __<b>san</b>ct__us __<b>es</b>__t __<b>Lo</b>r__em __<b>ip</b>s__um __<b>do</b>l__or __<b>si</b>__t __<b>am</b>e__t.';
    expect(bionicReading(text, { fixationPoint: 4 })).toBe(expected);
  });

  it('fixation 5 - 1', () => {
    const text =
      'Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content.';
    const expected =
      '<b>Bi</b>onic <b>Re</b>ading <b>i</b>s a <b>n</b>ew <b>me</b>thod <b>fac</b>ilitating <b>t</b>he <b>re</b>ading <b>pr</b>ocess <b>b</b>y <b>gu</b>iding <b>t</b>he <b>e</b>yes <b>th</b>rough <b>t</b>ext <b>w</b>ith <b>art</b>ificial <b>fi</b>xation <b>po</b>ints. <b>A</b>s a <b>re</b>sult, <b>t</b>he <b>re</b>ader <b>i</b>s <b>o</b>nly <b>fo</b>cusing <b>o</b>n <b>t</b>he <b>hig</b>hlighted <b>in</b>itial <b>le</b>tters <b>a</b>nd <b>l</b>ets <b>t</b>he <b>br</b>ain <b>ce</b>nter <b>co</b>mplete <b>t</b>he <b>w</b>ord. <b>I</b>n a <b>di</b>gital <b>wo</b>rld <b>do</b>minated <b>b</b>y <b>sh</b>allow <b>fo</b>rms <b>o</b>f <b>re</b>ading, <b>Bi</b>onic <b>Re</b>ading <b>a</b>ims <b>t</b>o <b>en</b>courage a <b>m</b>ore <b>i</b>n-<b>de</b>pth <b>re</b>ading <b>a</b>nd <b>und</b>erstanding <b>o</b>f <b>wr</b>itten <b>co</b>ntent.';
    expect(bionicReading(text, { fixationPoint: 5 })).toBe(expected);
  });
  it('fixation 5 - 2', () => {
    const text =
      '__ore__m __ips__um __dol__or __si__t __ame__t, __consetet__ur __sadipsci__ng __eli__tr, __se__d __dia__m __nonu__my __eirm__od __temp__or __invidu__nt __u__t __labo__re __e__t __dolo__re __mag__na __aliquy__am __era__t, __se__d __dia__m __volupt__ua. __A__t __ver__o __eo__s __e__t __accus__am __e__t __jus__to __du__o __dolor__es __e__t __e__a __reb__um. __Ste__t __cli__ta __kas__d __gubergr__en, __n__o __se__a __takima__ta __sanct__us __es__t __Lor__em __ips__um __dol__or __si__t __ame__t. __Lor__em __ips__um __dol__or __si__t __ame__t, __consetet__ur __sadipsci__ng __eli__tr, __se__d __dia__m __nonu__my __eirm__od __temp__or __invidu__nt __u__t __labo__re __e__t __dolo__re __mag__na __aliquy__am __era__t, __se__d __dia__m __volupt__ua. __A__t __ver__o __eo__s __e__t __accus__am __e__t __jus__to __du__o __dolor__es __e__t __e__a __reb__um. __Ste__t __cli__ta __kas__d __gubergr__en, __n__o __se__a __takima__ta __sanct__us __es__t __Lor__em __ips__um __dol__or __si__t __ame__t.';
    const expected =
      '__<b>or</b>e__m __<b>ip</b>s__um __<b>do</b>l__or __<b>si</b>__t __<b>am</b>e__t, __<b>con</b>setet__ur __<b>sad</b>ipsci__ng __<b>el</b>i__tr, __<b>se</b>__d __<b>di</b>a__m __<b>no</b>nu__my __<b>ei</b>rm__od __<b>te</b>mp__or __<b>inv</b>idu__nt __<b>u</b>__t __<b>la</b>bo__re __<b>e</b>__t __<b>do</b>lo__re __<b>ma</b>g__na __<b>ali</b>quy__am __<b>er</b>a__t, __<b>se</b>__d __<b>di</b>a__m __<b>vol</b>upt__ua. __<b>A</b>__t __<b>ve</b>r__o __<b>eo</b>__s __<b>e</b>__t __<b>ac</b>cus__am __<b>e</b>__t __<b>ju</b>s__to __<b>du</b>__o __<b>do</b>lor__es __<b>e</b>__t __<b>e</b>__a __<b>re</b>b__um. __<b>St</b>e__t __<b>cl</b>i__ta __<b>ka</b>s__d __<b>gub</b>ergr__en, __<b>n</b>__o __<b>se</b>__a __<b>tak</b>ima__ta __<b>sa</b>nct__us __<b>es</b>__t __<b>Lo</b>r__em __<b>ip</b>s__um __<b>do</b>l__or __<b>si</b>__t __<b>am</b>e__t. __<b>Lo</b>r__em __<b>ip</b>s__um __<b>do</b>l__or __<b>si</b>__t __<b>am</b>e__t, __<b>con</b>setet__ur __<b>sad</b>ipsci__ng __<b>el</b>i__tr, __<b>se</b>__d __<b>di</b>a__m __<b>no</b>nu__my __<b>ei</b>rm__od __<b>te</b>mp__or __<b>inv</b>idu__nt __<b>u</b>__t __<b>la</b>bo__re __<b>e</b>__t __<b>do</b>lo__re __<b>ma</b>g__na __<b>ali</b>quy__am __<b>er</b>a__t, __<b>se</b>__d __<b>di</b>a__m __<b>vol</b>upt__ua. __<b>A</b>__t __<b>ve</b>r__o __<b>eo</b>__s __<b>e</b>__t __<b>ac</b>cus__am __<b>e</b>__t __<b>ju</b>s__to __<b>du</b>__o __<b>do</b>lor__es __<b>e</b>__t __<b>e</b>__a __<b>re</b>b__um. __<b>St</b>e__t __<b>cl</b>i__ta __<b>ka</b>s__d __<b>gub</b>ergr__en, __<b>n</b>__o __<b>se</b>__a __<b>tak</b>ima__ta __<b>sa</b>nct__us __<b>es</b>__t __<b>Lo</b>r__em __<b>ip</b>s__um __<b>do</b>l__or __<b>si</b>__t __<b>am</b>e__t.';
    expect(bionicReading(text, { fixationPoint: 5 })).toBe(expected);
  });
});
