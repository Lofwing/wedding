'use client';
// import Icons from '#components/Icons';
import {ButtonSizeType, ButtonVariantType} from '#types/global';
import classNames from 'classnames';
import {FC} from 'react';

const variantClasses: Record<ButtonVariantType, string[]> = {
  primary: ['bg-primary', 'text-on-primary uppercase'],
  light: ['bg-white', 'text-grey-800'],
  onBackground: ['bg-surface', 'text-on-surface'],
  onSurface: ['bg-background', 'text-on-background'],
  secondary: ['bg-secondary', 'text-on-secondary'],
};

const sizeClasses: Record<ButtonSizeType, string[]> = {
  sm: ['min-h-10', 'text-xs tracking-[0.053rem]', 'px-3'],
  lg: ['min-h-12', 'text-base tracking-[0.06rem]', 'px-4'],
  onlyIcon: ['min-h-10 min-w-10'],
};

type ButtonProps = {
  children: React.ReactNode;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;

  className?: string;
  variant?: ButtonVariantType;
  size?: ButtonSizeType;
  link?: string;
  target?: '_blank' | '_self';
  expanded?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  spinnerSize?: number;
  ariaLabel?: string;
  onlyIcon?: boolean;
};

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    variant = 'primary',
    size = 'sm',
    onClick,
    link,
    expanded,
    disabled,
    isLoading,
    spinnerSize = 24,
    target,
    ariaLabel,
  } = props;

  const commonClasses = [
    'rounded-xl',
    'inline-flex items-center justify-center',
    'transition-all',
    'outline-none focus-active whitespace-nowrap',
    'uppercase font-bold',

    expanded && 'w-full',
  ];

  const classes = classNames(
    ...variantClasses[variant],
    ...commonClasses,
    ...sizeClasses[size],
    {'pointer-events-none opacity-state-disabled': disabled},
    className,
  );

  return (
    <>
      {link ? (
        <AppLink
          href={link}
          onClick={onClick ? (e) => onClick(e) : undefined}
          className={classes}
          target={target}
          aria-label={ariaLabel}
        >
          {isLoading ? (
            <Icons.Spinner width={spinnerSize} height={spinnerSize} />
          ) : (
            children
          )}
        </AppLink>
      ) : (
        onClick && (
          <button
            className={classes}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}
          >
            {isLoading ? (
              <Icons.Spinner width={spinnerSize} height={spinnerSize} />
            ) : (
              children
            )}
          </button>
        )
      )}
    </>
  );
};

export default Button;
