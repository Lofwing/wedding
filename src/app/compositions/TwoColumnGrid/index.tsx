import MaxWidth from '@/app/components/MaxWidth';
import React, {createContext, useContext} from 'react';

/** =========================
 * TwoColumnGrid (Compound Component – Simple)
 * ========================= */

type TwoColumnGridContextValue = true;

const TwoColumnGridContext = createContext<TwoColumnGridContextValue | null>(
  null,
);

export type TwoColumnGridProps = {
  children: React.ReactNode;
  className?: string;
  gapClassName?: string;
};

export const TwoColumnGrid = ({
  children,
  className = '',
}: TwoColumnGridProps) => {
  return (
    <TwoColumnGridContext.Provider value={true}>
      <MaxWidth className={`grid grid-cols-2 gap-20 py-20 ${className}`}>
        {children}
      </MaxWidth>
    </TwoColumnGridContext.Provider>
  );
};

/** =========================
 * Subcomponents
 * ========================= */

type ColumnProps = {
  children: React.ReactNode;
  className?: string;
};

const useTwoColumnGrid = () => {
  const context = useContext(TwoColumnGridContext);
  if (!context) {
    throw new Error('TwoColumnGrid.* must be used within <TwoColumnGrid>');
  }
};

const Left = ({children, className = ''}: ColumnProps) => {
  useTwoColumnGrid();
  return <div className={className}>{children}</div>;
};

const Right = ({children, className = ''}: ColumnProps) => {
  useTwoColumnGrid();
  return <div className={className}>{children}</div>;
};

TwoColumnGrid.Left = Left;
TwoColumnGrid.Right = Right;

export default TwoColumnGrid;

/** =========================
 * EXEMPEL
 * =========================
 *
 * <TwoColumnGrid gapClassName="gap-8" className="items-start">
 *   <TwoColumnGrid.Left className="p-4">
 *     Vänster innehåll
 *   </TwoColumnGrid.Left>
 *
 *   <TwoColumnGrid.Right className="p-4">
 *     Höger innehåll
 *   </TwoColumnGrid.Right>
 * </TwoColumnGrid>
 */
