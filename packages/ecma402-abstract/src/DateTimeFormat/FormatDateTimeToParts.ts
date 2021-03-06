import {PartitionDateTimePattern} from './PartitionDateTimePattern';
import {ArrayCreate} from '../../262';

/**
 * https://tc39.es/ecma402/#sec-formatdatetimetoparts
 *
 * @param dtf
 * @param x
 * @param implDetails
 */
export function FormatDateTimeToParts(
  dtf: Intl.DateTimeFormat,
  x: number,
  implDetails: Parameters<typeof PartitionDateTimePattern>[2]
): Intl.DateTimeFormatPart[] {
  const parts = PartitionDateTimePattern(dtf, x, implDetails);
  const result = ArrayCreate(0) as Intl.DateTimeFormatPart[];
  for (const part of parts) {
    result.push({
      type: part.type,
      value: part.value,
    });
  }
  return result;
}
