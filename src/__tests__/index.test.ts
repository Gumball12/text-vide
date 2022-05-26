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

  /*
  it('test korean', () => {
    const text =
      '바이오닉 리딩은 인위적인 fixation point를 사용하여 문장을 읽기 쉽게 만들어줍니다. 눈은 강조된 단어만 따라가며 뇌를 의존해 문장을 완성합니다. 얕고 넓은 디지털 정보 시대에 바이오닉 리딩은 콘텐츠를 깊게 음미할 수 있도록 도와줍니다.';
    const expectedText =
      '<b>바이</b>오닉 <b>리딩</b>은 <b>인위</b>적인 <b>fixa</b>tion <b>poi</b>nt를 <b>사용</b>하여 <b>문장</b>을 <b>읽</b>기 <b>쉽</b>게 <b>만들어줍</b>니다. <b>눈</b>은 <b>강조</b>된 <b>단어</b>만 <b>따라</b>가며 <b>뇌</b>를 <b>의존</b>해 <b>문장</b>을 <b>완성합</b>니다. <b>얕</b>고 <b>넓</b>은 <b>디지</b>털 <b>정</b>보 <b>시대</b>에 <b>바이</b>오닉 <b>리딩</b>은 <b>콘텐</b>츠를 <b>깊</b>게 <b>음미</b>할 <b>수</b> <b>있도</b>록 <b>도와줍</b>니다.';
    const bionicText = bionicReading(text);
    console.log(bionicText);

    expect(bionicText).toBe(expectedText);
  });
  */

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
