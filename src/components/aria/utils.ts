type RenderPropsClassName<T> = string | ((renderProps: T) => string) | undefined

/**
 * Merges a caller-supplied className (which may itself be a render-prop function)
 * with a base Tailwind class string, so every component in this folder stays
 * overridable without losing its own default styling.
 */
export function composeTailwindRenderProps<T>(
  className: RenderPropsClassName<T>,
  tw: string,
): RenderPropsClassName<T> {
  return (renderProps: T) =>
    [tw, typeof className === 'function' ? className(renderProps) : className]
      .filter(Boolean)
      .join(' ')
}
