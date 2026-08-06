'use client'

interface ProseContentProps {
  html: string
}

/**
 * Renders server-sanitized HTML with full prose styling.
 * Styles are applied via a scoped `.prose-content` class defined in globals.css.
 */
export function ProseContent({ html }: ProseContentProps) {
  return (
    <div
      className="prose-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
