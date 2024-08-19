import classnames from 'classnames'
import { twMerge } from 'tailwind-merge'

export function cn(...args: classnames.ArgumentArray) {
    return twMerge(classnames(...args))
}


export function stringToSlug(str: string) {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }
  