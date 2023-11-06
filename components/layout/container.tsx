import { ElementType, ReactNode } from 'react';

type Props = {
       children: ReactNode;
       as?: ElementType;
       className?: string;
};

const Container = ({ children, as, className, ...rest }: Props) => {
       const Component = as ?? 'div';
       return (
              <Component
                     {...rest}
                     className={`container max-w-[1540px] font-montserrat mx-auto font-body ${className}`}
              >
                     {children}
              </Component>
       );
};

export default Container;
