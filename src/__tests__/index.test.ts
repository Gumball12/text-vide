import { bionicReading } from '..';
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
      '<b>Bio</b>nic <b>Read</b>ing <b>i</b>s <b>a</b> <b>ne</b>w <b>met</b>hod <b>facili</b>tating <b>th</b>e <b>read</b>ing <b>proc</b>ess <b>b</b>y <b>guid</b>ing <b>th</b>e <b>ey</b>es <b>thro</b>ugh <b>te</b>xt <b>wi</b>th <b>artif</b>icial <b>fixa</b>tion <b>poin</b>ts. <b>A</b>s <b>a</b> <b>resu</b>lt, <b>th</b>e <b>rea</b>der <b>i</b>s <b>on</b>ly <b>focu</b>sing <b>o</b>n <b>th</b>e <b>highli</b>ghted <b>init</b>ial <b>lett</b>ers <b>an</b>d <b>le</b>ts <b>th</b>e <b>bra</b>in <b>cen</b>ter <b>comp</b>lete <b>th</b>e <b>wor</b>d. <b>I</b>n <b>a</b> <b>digi</b>tal <b>wor</b>ld <b>domin</b>ated <b>b</b>y <b>shal</b>low <b>for</b>ms <b>o</b>f <b>read</b>ing, <b>Bio</b>nic <b>Read</b>ing <b>ai</b>ms <b>t</b>o <b>encou</b>rage <b>a</b> <b>mo</b>re <b>in-d</b>epth <b>read</b>ing <b>an</b>d <b>underst</b>anding <b>o</b>f <b>writ</b>ten <b>cont</b>ent.';

    expect(bionicReading(text)).toBe(expectedText);
  });

  it('test korean', () => {
    const text =
      '바이오닉 리딩은 인위적인 fixation point를 사용하여 문장을 읽기 쉽게 만들어줍니다. 눈은 강조된 단어만 따라가며 뇌를 의존해 문장을 완성합니다. 얕고 넓은 디지털 정보 시대에 바이오닉 리딩은 콘텐츠를 깊게 음미할 수 있도록 도와줍니다.';
    const expectedText =
      '<b>바이</b>오닉 <b>리딩</b>은 <b>인위</b>적인 <b>fixa</b>tion <b>poi</b>nt를 <b>사용</b>하여 <b>문장</b>을 <b>읽</b>기 <b>쉽</b>게 <b>만들어줍</b>니다. <b>눈</b>은 <b>강조</b>된 <b>단어</b>만 <b>따라</b>가며 <b>뇌</b>를 <b>의존</b>해 <b>문장</b>을 <b>완성합</b>니다. <b>얕</b>고 <b>넓</b>은 <b>디지</b>털 <b>정</b>보 <b>시대</b>에 <b>바이</b>오닉 <b>리딩</b>은 <b>콘텐</b>츠를 <b>깊</b>게 <b>음미</b>할 <b>수</b> <b>있도</b>록 <b>도와줍</b>니다.';

    expect(bionicReading(text)).toBe(expectedText);
  });

  it('pass empty string', () => {
    const text = '';
    const expected = '';
    expect(bionicReading(text)).toBe(expected);
  });

  it('pass len 1 string', () => {
    const text = 'a';
    const expected = '<b>a</b>';
    expect(bionicReading(text)).toBe(expected);
  });
});

describe('test options', () => {
  it('pass empty options object', () => {
    expect(bionicReading('aaaa', {})).toBe('<b>aa</b>aa');
  });

  it('options.highlightTag :: <b> -> <strong>', () => {
    const text =
      'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
    const expectedText =
      '<strong>or</strong>em <strong>ips</strong>um <strong>dol</strong>or <strong>si</strong>t <strong>ame</strong>t, <strong>conse</strong>tetur <strong>sadip</strong>scing <strong>eli</strong>tr, <strong>se</strong>d <strong>di</strong>am <strong>non</strong>umy <strong>eir</strong>mod <strong>tem</strong>por <strong>invi</strong>dunt <strong>u</strong>t <strong>lab</strong>ore <strong>e</strong>t <strong>dol</strong>ore <strong>mag</strong>na <strong>aliq</strong>uyam <strong>era</strong>t, <strong>se</strong>d <strong>di</strong>am <strong>volup</strong>tua. <strong>A</strong>t <strong>ve</strong>ro <strong>eo</strong>s <strong>e</strong>t <strong>accu</strong>sam <strong>e</strong>t <strong>jus</strong>to <strong>du</strong>o <strong>dolo</strong>res <strong>e</strong>t <strong>e</strong>a <strong>reb</strong>um. <strong>St</strong>et <strong>cli</strong>ta <strong>ka</strong>sd <strong>guber</strong>gren, <strong>n</strong>o <strong>se</strong>a <strong>taki</strong>mata <strong>sanc</strong>tus <strong>es</strong>t <strong>Lor</strong>em <strong>ips</strong>um <strong>dol</strong>or <strong>si</strong>t <strong>ame</strong>t. <strong>Lor</strong>em <strong>ips</strong>um <strong>dol</strong>or <strong>si</strong>t <strong>ame</strong>t, <strong>conse</strong>tetur <strong>sadip</strong>scing <strong>eli</strong>tr, <strong>se</strong>d <strong>di</strong>am <strong>non</strong>umy <strong>eir</strong>mod <strong>tem</strong>por <strong>invi</strong>dunt <strong>u</strong>t <strong>lab</strong>ore <strong>e</strong>t <strong>dol</strong>ore <strong>mag</strong>na <strong>aliq</strong>uyam <strong>era</strong>t, <strong>se</strong>d <strong>di</strong>am <strong>volup</strong>tua. <strong>A</strong>t <strong>ve</strong>ro <strong>eo</strong>s <strong>e</strong>t <strong>accu</strong>sam <strong>e</strong>t <strong>jus</strong>to <strong>du</strong>o <strong>dolo</strong>res <strong>e</strong>t <strong>e</strong>a <strong>reb</strong>um. <strong>St</strong>et <strong>cli</strong>ta <strong>ka</strong>sd <strong>guber</strong>gren, <strong>n</strong>o <strong>se</strong>a <strong>taki</strong>mata <strong>sanc</strong>tus <strong>es</strong>t <strong>Lor</strong>em <strong>ips</strong>um <strong>dol</strong>or <strong>si</strong>t <strong>ame</strong>t.';

    expect(bionicReading(text, { highlightTag: 'strong' })).toBe(expectedText);
  });

  it('options.markdown', () => {
    const text =
      'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
    const expectedText =
      '**or**em **ips**um **dol**or **si**t **ame**t, **conse**tetur **sadip**scing **eli**tr, **se**d **di**am **non**umy **eir**mod **tem**por **invi**dunt **u**t **lab**ore **e**t **dol**ore **mag**na **aliq**uyam **era**t, **se**d **di**am **volup**tua. **A**t **ve**ro **eo**s **e**t **accu**sam **e**t **jus**to **du**o **dolo**res **e**t **e**a **reb**um. **St**et **cli**ta **ka**sd **guber**gren, **n**o **se**a **taki**mata **sanc**tus **es**t **Lor**em **ips**um **dol**or **si**t **ame**t. **Lor**em **ips**um **dol**or **si**t **ame**t, **conse**tetur **sadip**scing **eli**tr, **se**d **di**am **non**umy **eir**mod **tem**por **invi**dunt **u**t **lab**ore **e**t **dol**ore **mag**na **aliq**uyam **era**t, **se**d **di**am **volup**tua. **A**t **ve**ro **eo**s **e**t **accu**sam **e**t **jus**to **du**o **dolo**res **e**t **e**a **reb**um. **St**et **cli**ta **ka**sd **guber**gren, **n**o **se**a **taki**mata **sanc**tus **es**t **Lor**em **ips**um **dol**or **si**t **ame**t.';

    expect(bionicReading(text, { markdown: true })).toBe(expectedText);
  });

  it('options.markdown w/ options.markdownStyle :: `**` -> `__`', () => {
    const text =
      'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
    const expectedText =
      '__or__em __ips__um __dol__or __si__t __ame__t, __conse__tetur __sadip__scing __eli__tr, __se__d __di__am __non__umy __eir__mod __tem__por __invi__dunt __u__t __lab__ore __e__t __dol__ore __mag__na __aliq__uyam __era__t, __se__d __di__am __volup__tua. __A__t __ve__ro __eo__s __e__t __accu__sam __e__t __jus__to __du__o __dolo__res __e__t __e__a __reb__um. __St__et __cli__ta __ka__sd __guber__gren, __n__o __se__a __taki__mata __sanc__tus __es__t __Lor__em __ips__um __dol__or __si__t __ame__t. __Lor__em __ips__um __dol__or __si__t __ame__t, __conse__tetur __sadip__scing __eli__tr, __se__d __di__am __non__umy __eir__mod __tem__por __invi__dunt __u__t __lab__ore __e__t __dol__ore __mag__na __aliq__uyam __era__t, __se__d __di__am __volup__tua. __A__t __ve__ro __eo__s __e__t __accu__sam __e__t __jus__to __du__o __dolo__res __e__t __e__a __reb__um. __St__et __cli__ta __ka__sd __guber__gren, __n__o __se__a __taki__mata __sanc__tus __es__t __Lor__em __ips__um __dol__or __si__t __ame__t.';

    expect(bionicReading(text, { markdown: true, markdownStyle: '__' })).toBe(
      expectedText,
    );
  });

  it('empty options.markdownStyle :: `**` -> ``', () => {
    const text =
      'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
    const expectedText = text;

    expect(bionicReading(text, { markdown: true, markdownStyle: '' })).toBe(
      expectedText,
    );
  });
});
