import { multiplyString } from './multiply-string.helper';

export const printInfo = (text: string = '', value: string = ''): void => {
  const LINE: string = '....................................................................';

  const lineInfo: string = LINE
    .replace(multiplyString('.', text.length), text)
    .substring(0, LINE.length - value.length - 1) + ` ${value}`;

  console.log(lineInfo);
}
