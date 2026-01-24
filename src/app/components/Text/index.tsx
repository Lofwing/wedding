'use client';
import classNames from 'classnames';
import {JSX} from 'react';

type TextProps = React.PropsWithChildren<{
  className?: string;
  elementType?: ElementType;
  weight?: Weight;
  size?: Size;
  align?: Align;
  highlight?: boolean;
}>;

type ElementType =
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'span'
  | 'div'
  | 'blockquote'
  | 'li'
  | 'label'
  | 'dt'
  | 'dd';
type Weight = 'normal' | 'bold';
type Size =
  | 'label'
  | 'base'
  | 'sm'
  | 'headline-3'
  | 'headline-2'
  | 'headline-1';
type Align = 'inherit' | 'left' | 'center' | 'right' | 'justify';
// label / base / headline-1 / headline-2 / headline-1
// Combined size and weight defaults
const sizeClasses: Record<Size, string[]> = {
  label: ['text-base', 'leading-normal', 'font-normal'],
  base: ['text-lg', 'leading-normal', 'font-normal'],
  sm: ['text-2xl', 'leading-normal', 'font-bold'],
  'headline-3': ['text-3xl', 'leading-tight', 'font-bold'],
  'headline-2': ['text-4xl', 'leading-tight', 'font-bold'],
  'headline-1': ['text-6xl', 'leading-tight', 'font-bold'],
};
// Weight classes for explicit overrides
const weightClasses: Record<Weight, string[]> = {
  bold: ['!font-bold'],
  normal: ['!font-normal'],
};

const alignClasses: Record<Align, string[]> = {
  inherit: [''],
  left: ['text-left'],
  center: ['text-center'],
  right: ['text-right'],
  justify: ['text-justify'],
};

const commonClasses = 'max-w-full break-words';

export const Text: React.FC<TextProps> = ({
  children,
  className,
  elementType = 'span',
  size = 'base',
  align = 'inherit',
  weight,
}) => {
  const Elem = elementType as keyof JSX.IntrinsicElements;

  const classes = classNames(
    commonClasses,
    sizeClasses[size],
    weight ? weightClasses[weight] : null,
    alignClasses[align],
    className,
  );
  return <Elem className={classes}>{children}</Elem>;
};

export default Text;
