export type Mods = Record<string, boolean | undefined | string>
export type Additional = Array<string | undefined>

export function classNames(cls: string, mods: Mods = {}, additional: Additional = []): string {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([cls, value]) => Boolean(value))
      .map(([cls]) => cls),
    ...additional
  ].join(' ')
}
